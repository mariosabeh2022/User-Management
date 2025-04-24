import { z } from "zod";
import { Status } from "../../Molecules/UserCard";
export const schema = z.object({
  firstName: z.string().trim().min(1, "First Name is required"),
  lastName: z.string().trim(),
  email: z.string().email("Email is invalid"),
  status: z.nativeEnum(Status),
  dateOfBirth: z.string().refine((date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    return selectedDate < today;
  }, "Date of Birth must be in the past"),
});