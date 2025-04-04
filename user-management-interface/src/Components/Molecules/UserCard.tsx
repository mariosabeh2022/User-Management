import Button from '../Atoms/Button';
import UserInitial from '../Atoms/UserInitial'
enum Status{
    Locked='locked',
    Active='active',
}
interface UserCard{
    firstName:string,
    lastName?:string,
    email:string,
    dob:Date,
    status:Status
}
const font="font-light text-gray-500";

const UserCard=({firstName,lastName,email,dob,status}:UserCard)=>{
    const year=dob.getFullYear();
    const m=dob.getMonth() + 1;
    // Adding 0 if it isn't the last 3 months of the year
    const month=m<10?"0"+m:String(m);
    const d=dob.getDate();
    // Adding 0 if it is the first 9 days of the month
    const day=d<10?"0"+d:String(d)
    const formattedDob=`${year}-${month}-${day}`;
    return(
        <div className='bg-mint-300 rounded-lg p-3 shadow-lg flex flex-col justify-start'>
            <UserInitial firstName={firstName} lastName={lastName}/>
            <h1 className="font-semibold text-2xl text-black-500">{firstName} {lastName}</h1>
            <span className={font}>Email: {email}</span>
            <span className={font}>Status: {status}</span>
            <span className={font}>Date of Birth: {formattedDob}</span>
            <div className='flex justify-end'>
                <Button className="bg-[#3251D0] text-white border rounded-sm px-4 py-1 mr-4" 
                        label="Edit"/>
                <Button className="bg-red-500 text-white border border-red-500 rounded-sm px-4 py-1 mr-2" 
                        label="Delete"/>
            </div>
        </div>
    )
}
export default UserCard;
export {Status}