export enum Status {
  Locked = "locked",
  Active = "active",
}
export interface UserCardProps {
  userId: string;
  firstName: string;
  lastName?: string;
  email: string;
  dob: Date;
  status: Status;
}
