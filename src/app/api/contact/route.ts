import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/types/contact-schema';
import { sendContactEmail } from '@/lib/email/resend';

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
      // Silently discard or return failure to prevent spam bots from knowing they failed
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

    // Future Database Extension Point:
    // TODO: await saveContactToDatabase(data);

    // 3. Send email via Resend Service
    const emailResult = await sendContactEmail(data);

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Unable to send message.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
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
