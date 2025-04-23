import { z } from "zod";
export const schema = z.object({
  firstName: z.string().trim().min(1, "First Name is required"),
  lastName: z.string().trim(),
  email: z.string().email("Email is invalid"),
  status: z.enum(["Active", "Locked"]),
  dob: z.string().refine((date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    return selectedDate < today;
  }, "Date of Birth must be in the past"),
});
