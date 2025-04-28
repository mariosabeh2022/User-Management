import { z } from "zod";
import { Status } from "../../Molecules/UserCard/UserCard.type";
export const schema = z.object({
  firstName: z.string().trim().min(3, "First Name too short"),
  lastName: z.string().trim(),
  email: z.string().email("Email is invalid"),
  status: z.nativeEnum(Status),
  dateOfBirth: z.string().refine((date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    return selectedDate < today;
  }, "Date of Birth must be in the past"),
});