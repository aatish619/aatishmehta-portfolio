import { describe, it, expect } from 'vitest';
import { contactSchema } from '@/types/contact-schema';

describe('Contact Form Validation Schema', () => {
  it('validates a correct payload successfully', () => {
    const data = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Inquiry about project design',
      message: 'Hello, I would like to discuss building a premium mobile app project with you.',
      honeypot: '',
    };
    const result = contactSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it('rejects short names', () => {
    const data = {
      name: 'A',
      email: 'john@example.com',
      subject: 'Inquiry',
      message: 'Hello, I would like to discuss building a premium mobile app project with you.',
    };
    const result = contactSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it('rejects invalid emails', () => {
    const data = {
      name: 'John Doe',
      email: 'invalid-email',
      subject: 'Inquiry',
      message: 'Hello, I would like to discuss building a premium mobile app project with you.',
    };
    const result = contactSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it('rejects short messages', () => {
    const data = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Inquiry',
      message: 'Short msg',
    };
    const result = contactSchema.safeParse(data);
    expect(result.success).toBe(false);
  });
});
