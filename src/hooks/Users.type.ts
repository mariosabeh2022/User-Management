import { Status } from "../Components/Molecules/UserCard";
export interface Users {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: Status;
  dateOfBirth: string;
}