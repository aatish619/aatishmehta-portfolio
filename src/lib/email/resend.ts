import { Resend } from 'resend';
import { ContactInput } from '../../types/contact-schema';

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Sends a stylized HTML email with the contact details using Resend.
 */
export async function sendContactEmail(data: ContactInput): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !toEmail) {
    console.error('[Email Service] Error: Missing RESEND_API_KEY or CONTACT_EMAIL env variables.');
    return {
      success: false,
      error: 'Server configuration error.',
    };
  }

  try {
    const resend = new Resend(apiKey);
    const timestamp = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata',
    }).format(new Date());

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Portfolio Contact</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 20px; background-color: #fafafa; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border: 1px solid #e4e4e7; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
            .header { border-bottom: 2px solid #4f46e5; padding-bottom: 15px; margin-bottom: 25px; }
            .header h1 { font-size: 20px; font-weight: bold; color: #4f46e5; margin: 0; display: flex; align-items: center; gap: 8px; }
            .field-label { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #71717a; margin-bottom: 4px; letter-spacing: 0.05em; }
            .field-value { font-size: 15px; color: #18181b; background: #f4f4f5; padding: 10px 14px; border-radius: 8px; margin-bottom: 20px; word-break: break-word; }
            .message-box { font-size: 15px; color: #18181b; background: #f4f4f5; padding: 14px; border-radius: 8px; margin-bottom: 20px; white-space: pre-wrap; line-height: 1.6; border-left: 3px solid #e4e4e7; }
            .footer { border-top: 1px solid #e4e4e7; padding-top: 15px; font-size: 12px; color: #71717a; margin-top: 30px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📨 New Portfolio Contact</h1>
            </div>
            
            <div class="field-label">👤 Name</div>
            <div class="field-value">${escapeHtml(data.name)}</div>
            
            <div class="field-label">📧 Email</div>
            <div class="field-value">${escapeHtml(data.email)}</div>
            
            <div class="field-label">📝 Subject</div>
            <div class="field-value">${escapeHtml(data.subject)}</div>
            
            <div class="field-label">💬 Message</div>
            <div class="message-box">${escapeHtml(data.message)}</div>
            
            <div class="footer">
              Submitted At: ${timestamp} IST
            </div>
          </div>
        </body>
      </html>
    `;

    const { data: resData, error: resError } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: toEmail,
      subject: `New Portfolio Contact: ${data.subject}`,
      html: htmlContent,
      replyTo: data.email,
    });

    if (resError) {
      console.error('[Email Service] Resend error details:', resError);
      return {
        success: false,
        error: resError.message,
      };
    }

    return {
      success: true,
      messageId: resData?.id,
    };
  } catch (error) {
    console.error('[Email Service] Unexpected exception:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unexpected exception occurred.',
    };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
