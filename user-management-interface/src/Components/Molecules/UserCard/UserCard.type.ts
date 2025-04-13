export enum Status{
    Locked='locked',
    Active='active',
}
export interface UserCardProps{
    firstName:string,
    lastName?:string,
    email:string,
    dob:Date,
    status:Status
}