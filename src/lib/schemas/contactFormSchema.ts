import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(1, {
    message: "Full name is required."
  }).max(100, {
    message: "Full name cannot exceed 100 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters long."
  }).max(200, {
    message: "Subject cannot exceed 200 characters."
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long."
  }).max(1000, {
    message: "Message cannot exceed 1000 characters."
  }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;