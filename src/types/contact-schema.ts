import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(80, { message: 'Name cannot exceed 80 characters' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  subject: z
    .string()
    .min(1, { message: 'Subject is required' })
    .max(150, { message: 'Subject cannot exceed 150 characters' }),
  message: z
    .string()
    .min(1, { message: 'Message is required' })
    .min(20, { message: 'Message must be at least 20 characters' })
    .max(2000, { message: 'Message cannot exceed 2000 characters' }),
  honeypot: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
