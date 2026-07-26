import { Resend } from 'resend';
import { ContactInput } from '@/types/contact-schema';
import {
  generateAdminEmail,
  generateAdminEmailText,
  generateConfirmationEmail,
  generateConfirmationEmailText,
} from './emailTemplates';

export interface SendResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Sends a premium notification email to the admin.
 */
export async function sendAdminEmail(
  data: ContactInput,
  referenceId: string,
  timestamp: string
): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !toEmail) {
    console.error('[Email Service] Admin send error: Missing environment variables.');
    return { success: false, error: 'Server config error.' };
  }

  try {
    const resend = new Resend(apiKey);
    const html = generateAdminEmail(data, referenceId, timestamp);
    const text = generateAdminEmailText(data, referenceId, timestamp);

    const { data: resData, error: resError } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: toEmail,
      subject: `New Portfolio Inquiry • ${data.subject}`,
      html,
      text,
      replyTo: data.email,
    });

    if (resError) {
      console.error('[Email Service] Resend admin send error details:', resError);
      return { success: false, error: resError.message };
    }

    return { success: true, messageId: resData?.id };
  } catch (error) {
    console.error('[Email Service] Unexpected exception sending admin email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unexpected exception occurred.',
    };
  }
}

/**
 * Sends a confirmation / auto-reply email to the visitor.
 */
export async function sendConfirmationEmail(
  data: ContactInput,
  referenceId: string,
  timestamp: string
): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('[Email Service] Confirmation send error: Missing RESEND_API_KEY environment variable.');
    return { success: false, error: 'Server config error.' };
  }

  try {
    const resend = new Resend(apiKey);

    // Extract first name for personalized greeting
    const firstName = data.name.trim().split(' ')[0] || 'there';

    const html = generateConfirmationEmail(firstName, data, referenceId, timestamp);
    const text = generateConfirmationEmailText(firstName, data, referenceId, timestamp);

    const { data: resData, error: resError } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: data.email,
      subject: `✅ Thanks for contacting Aatish Mehta`,
      html,
      text,
    });

    if (resError) {
      console.error('[Email Service] Resend confirmation send error details:', resError);
      return { success: false, error: resError.message };
    }

    return { success: true, messageId: resData?.id };
  } catch (error) {
    console.error('[Email Service] Unexpected exception sending confirmation email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unexpected exception occurred.',
    };
  }
}
