import { ContactInput } from '@/types/contact-schema';

const BRAND_COLOR = '#4F46E5';
const BG_COLOR = '#F8FAFC';
const CARD_BG = '#FFFFFF';
const TEXT_COLOR = '#1F2937';
const MUTED_TEXT = '#4B5563';
const BORDER_COLOR = '#E2E8F0';

function getBaseHtmlTemplate(title: string, contentHtml: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: ${BG_COLOR};
            color: ${TEXT_COLOR};
            margin: 0;
            padding: 20px 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
          .wrapper {
            width: 100%;
            table-layout: fixed;
            background-color: ${BG_COLOR};
            padding-bottom: 40px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: ${CARD_BG};
            border-radius: 16px;
            border: 1px solid ${BORDER_COLOR};
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .header {
            background-color: ${CARD_BG};
            border-bottom: 2px solid ${BRAND_COLOR};
            padding: 32px 24px;
            text-align: center;
          }
          .header-emoji {
            font-size: 32px;
            margin-bottom: 8px;
          }
          .header-name {
            font-size: 18px;
            font-weight: 700;
            margin: 0;
            color: ${TEXT_COLOR};
          }
          .header-title {
            font-size: 12px;
            color: ${MUTED_TEXT};
            margin: 2px 0 0 0;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .header-subtitle {
            font-size: 20px;
            font-weight: 700;
            margin: 16px 0 0 0;
            color: ${BRAND_COLOR};
          }
          .content {
            padding: 32px 24px;
          }
          .card {
            background-color: ${BG_COLOR};
            border: 1px solid ${BORDER_COLOR};
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 24px;
          }
          .card-title {
            font-size: 12px;
            font-weight: 700;
            color: ${MUTED_TEXT};
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-top: 0;
            margin-bottom: 12px;
          }
          .grid {
            margin-bottom: 12px;
          }
          .grid-row {
            margin-bottom: 12px;
          }
          .grid-row:last-child {
            margin-bottom: 0;
          }
          .grid-label {
            font-size: 11px;
            font-weight: 700;
            color: ${MUTED_TEXT};
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 2px;
          }
          .grid-value {
            font-size: 14px;
            color: ${TEXT_COLOR};
            word-break: break-all;
          }
          .grid-value a {
            color: ${BRAND_COLOR};
            text-decoration: none;
          }
          .message-text {
            font-size: 15px;
            line-height: 1.6;
            color: ${TEXT_COLOR};
            white-space: pre-wrap;
            margin: 0;
          }
          .btn-group {
            text-align: center;
            margin-top: 32px;
            margin-bottom: 16px;
          }
          .btn {
            display: inline-block;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            margin: 0 8px 8px 8px;
          }
          .btn-primary {
            background-color: ${BRAND_COLOR};
            color: #ffffff !important;
          }
          .btn-secondary {
            background-color: ${BG_COLOR};
            color: ${TEXT_COLOR} !important;
            border: 1px solid ${BORDER_COLOR};
          }
          .footer {
            text-align: center;
            padding: 24px;
            font-size: 12px;
            color: ${MUTED_TEXT};
            border-top: 1px solid ${BORDER_COLOR};
            background-color: ${BG_COLOR};
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            ${contentHtml}
          </div>
        </div>
      </body>
    </html>
  `;
}

export function generateAdminEmail(data: ContactInput, referenceId: string, timestamp: string): string {
  const contentHtml = `
    <div class="header">
      <div class="header-emoji">🚀</div>
      <h2 class="header-name">Aatish Mehta</h2>
      <div class="header-title">Senior Mobile Engineer</div>
      <div class="header-subtitle">New Portfolio Inquiry</div>
    </div>
    
    <div class="content">
      <!-- Reference ID prominently near the top -->
      <div style="text-align: center; margin-bottom: 24px; font-weight: bold; font-size: 14px; color: ${MUTED_TEXT};">
        Reference ID: <span style="color: ${BRAND_COLOR}; font-family: monospace;">${referenceId}</span>
      </div>

      <div class="card">
        <h3 class="card-title">👤 Visitor Information</h3>
        <div class="grid">
          <div class="grid-row">
            <div class="grid-label">Name</div>
            <div class="grid-value">${escapeHtml(data.name)}</div>
          </div>
          <div class="grid-row">
            <div class="grid-label">Email</div>
            <div class="grid-value"><a href="mailto:${data.email}">${escapeHtml(data.email)}</a></div>
          </div>
          <div class="grid-row">
            <div class="grid-label">Subject</div>
            <div class="grid-value">${escapeHtml(data.subject)}</div>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 class="card-title">💬 Message</h3>
        <p class="message-text">${escapeHtml(data.message)}</p>
      </div>

      <div class="card">
        <h3 class="card-title">⚙️ Submission Details</h3>
        <div class="grid" style="font-size: 13px; color: ${MUTED_TEXT};">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 4px 0; font-weight: 600;">Reference ID:</td>
              <td style="padding: 4px 0; text-align: right; font-family: monospace; color: ${TEXT_COLOR};">${referenceId}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-weight: 600;">Submitted At:</td>
              <td style="padding: 4px 0; text-align: right; color: ${TEXT_COLOR};">${timestamp} IST</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-weight: 600;">Source:</td>
              <td style="padding: 4px 0; text-align: right; color: ${TEXT_COLOR};">Portfolio Website</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-weight: 600;">Environment:</td>
              <td style="padding: 4px 0; text-align: right; color: ${TEXT_COLOR};">${process.env.NODE_ENV || 'Production'}</td>
            </tr>
            <!-- Future Ready Database/Extra Placeholders -->
            <!-- 
            <tr><td>Company:</td><td>-</td></tr>
            <tr><td>Phone:</td><td>-</td></tr>
            <tr><td>Budget:</td><td>-</td></tr>
            <tr><td>Project Type:</td><td>-</td></tr>
            <tr><td>Database ID:</td><td>-</td></tr>
            -->
          </table>
        </div>
      </div>

      <div class="btn-group">
        <a href="mailto:${data.email}" class="btn btn-primary">Reply to Sender</a>
        <a href="https://aatishmehta-portfolio.vercel.app" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Open Portfolio</a>
      </div>
    </div>
    
    <div class="footer">
      This inquiry was automatically generated from your portfolio website.<br>
      Reply directly to continue the conversation.
    </div>
  `;

  return getBaseHtmlTemplate(`New Inquiry • ${data.subject}`, contentHtml);
}

export function generateConfirmationEmail(firstName: string, data: ContactInput, referenceId: string, timestamp: string): string {
  const contentHtml = `
    <div class="header">
      <div class="header-emoji">✅</div>
      <h2 class="header-name">Thank You!</h2>
      <div class="header-title">Aatish Mehta — Portfolio</div>
      <div class="header-subtitle">Message Received</div>
    </div>
    
    <div class="content">
      <p style="font-size: 15px; line-height: 1.6; margin-top: 0; margin-bottom: 20px;">
        Hi ${escapeHtml(firstName)},
      </p>
      
      <p style="font-size: 15px; line-height: 1.6; margin-bottom: 20px; color: ${TEXT_COLOR};">
        Thank you for taking the time to contact me through my portfolio. I truly appreciate your interest.
      </p>

      <p style="font-size: 15px; line-height: 1.6; margin-bottom: 24px; color: ${TEXT_COLOR};">
        Your message has been received successfully and I'll review it personally. I usually reply within <strong>24–48 hours</strong>.
      </p>

      <div class="card" style="border-left: 4px solid ${BRAND_COLOR};">
        <h3 class="card-title">📝 Submitted Inquiry Summary</h3>
        <div class="grid">
          <div class="grid-row">
            <div class="grid-label">Reference Number</div>
            <div class="grid-value" style="font-family: monospace; font-weight: bold; color: ${BRAND_COLOR};">${referenceId}</div>
          </div>
          <div class="grid-row">
            <div class="grid-label">Subject</div>
            <div class="grid-value">${escapeHtml(data.subject)}</div>
          </div>
          <div class="grid-row">
            <div class="grid-label">Message</div>
            <p class="message-text" style="font-size: 14px; margin-top: 4px;">${escapeHtml(data.message)}</p>
          </div>
          <div class="grid-row" style="margin-top: 12px; border-top: 1px solid ${BORDER_COLOR}; padding-top: 8px;">
            <div class="grid-label">Submission Time</div>
            <div class="grid-value" style="font-size: 12px; color: ${MUTED_TEXT};">${timestamp} IST</div>
          </div>
        </div>
        <p style="font-size: 12px; color: ${MUTED_TEXT}; margin-top: 12px; margin-bottom: 0; line-height: 1.4;">
          If you ever contact me regarding this inquiry, simply mention this reference number so I can quickly locate your message.
        </p>
      </div>

      <div class="card">
        <h3 class="card-title">👨‍💻 About Aatish Mehta</h3>
        <p style="font-size: 14px; margin-top: 0; margin-bottom: 12px; color: ${TEXT_COLOR};">
          Senior Mobile Engineer specializing in:
        </p>
        <div style="font-size: 13px; color: ${MUTED_TEXT}; line-height: 1.8;">
          • <strong>Mobile development</strong>: Flutter, iOS (Swift), Android (Kotlin)<br>
          • <strong>Backend development</strong>: Python (FastAPI/Django)<br>
          • <strong>AI Integration</strong>: On-device ML models & Cloud LLM workflows
        </div>
      </div>

      <div class="btn-group">
        <a href="https://aatishmehta-portfolio.vercel.app" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View Portfolio</a>
        <!-- Configurable placeholders for socials -->
        <a href="https://www.linkedin.com/in/aatishmehta17/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/aatish619" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>

      <p style="font-size: 15px; line-height: 1.6; margin-top: 24px; margin-bottom: 0; text-align: center; color: ${MUTED_TEXT};">
        Looking forward to connecting with you.<br>
        <strong>Best Regards,</strong><br>
        Aatish Mehta
      </p>
    </div>
    
    <div class="footer">
      This is an automated confirmation email. No action is required.
    </div>
  `;

  return getBaseHtmlTemplate('Confirmation Received', contentHtml);
}

// PLAIN TEXT TEMPLATE FALLBACKS

export function generateAdminEmailText(data: ContactInput, referenceId: string, timestamp: string): string {
  return `
==================================================
📨 NEW PORTFOLIO INQUIRY
==================================================

Reference ID: ${referenceId}

👤 NAME:
${data.name}

📧 EMAIL:
${data.email}

📝 SUBJECT:
${data.subject}

💬 MESSAGE:
${data.message}

==================================================
SUBMISSION DETAILS:
Submitted At: ${timestamp} IST
Source: Portfolio Website
Environment: ${process.env.NODE_ENV || 'Production'}
==================================================

Reply Instructions:
Reply directly to this email to continue the conversation (replyTo: ${data.email}).
  `.trim();
}

export function generateConfirmationEmailText(firstName: string, data: ContactInput, referenceId: string, timestamp: string): string {
  return `
Hi ${firstName},

Thank you for taking the time to contact me through my portfolio. I truly appreciate your interest.

Your message has been received successfully and I'll review it personally. I usually reply within 24–48 hours.

==================================================
📝 SUBMITTED INQUIRY SUMMARY
==================================================
Reference Number: ${referenceId}
Subject: ${data.subject}
Message:
${data.message}

Submission Time: ${timestamp} IST
==================================================

Note: If you ever contact me regarding this inquiry, simply mention this reference number so I can quickly locate your message.

Looking forward to connecting with you.

Best Regards,
Aatish Mehta
Senior Mobile Engineer
  `.trim();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
