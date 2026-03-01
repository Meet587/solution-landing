import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  role: z
    .string()
    .max(100, "Role must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .max(100, "Company must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  useCase: z
    .string()
    .min(10, "Please describe your use case in at least 10 characters")
    .max(2000, "Use case must be less than 2000 characters"),
  deployment: z.enum(["on-premises", "private-cloud"], {
    message: "Please select a deployment preference",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
