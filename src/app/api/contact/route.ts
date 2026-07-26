import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/types/contact-schema';
import { generateReferenceId } from '@/lib/referenceId';
import { sendAdminEmail, sendConfirmationEmail } from '@/lib/email/emailService';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Zod Server-side validation
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed.',
          errors: validation.error.format(),
        },
        { status: 400 }
      );
    }

    const data = validation.data;

    // 2. Honeypot check (Spam prevention)
    if (data.honeypot) {
      return NextResponse.json(
        {
          success: false,
          message: 'Unable to send message.',
        },
        { status: 400 }
      );
    }

    // Check environment configuration
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL;
    if (!apiKey || !toEmail) {
      console.error('[API Route] Server misconfiguration: Missing Resend credentials.');
      return NextResponse.json(
        {
          success: false,
          message: 'Unable to send message.',
        },
        { status: 500 }
      );
    }

    // 3. Generate Reference ID
    const referenceId = generateReferenceId();

    // Format a consistent timestamp in IST timezone
    const timestamp = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata',
    }).format(new Date());

    // Future Database Extension Point:
    // TODO: await saveContactToDatabase(referenceId, data, timestamp);

    // 4. Send Admin Email
    const adminResult = await sendAdminEmail(data, referenceId, timestamp);

    if (!adminResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Unable to send message.',
        },
        { status: 500 }
      );
    }

    // 5. Send Confirmation Auto-Reply Email
    // Only send confirmation email if the admin email succeeds.
    // If confirmation email fails, do NOT fail the API request. Log the error.
    try {
      const confirmationResult = await sendConfirmationEmail(data, referenceId, timestamp);
      if (!confirmationResult.success) {
        console.error('[API Route] Confirmation email failed to deliver:', confirmationResult.error);
      }
    } catch (confError) {
      console.error('[API Route] Unexpected error sending confirmation email:', confError);
    }

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: 'Message sent successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API Route] General exception handling contact post:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to send message.',
      },
      { status: 500 }
    );
  }
}
