import Button from '../Atoms/Button';
import UserInitial from '../Atoms/UserInitial'
enum Status{
    Locked = 'locked',
    Active = 'active',
}
interface UserCard{
    FirstName:string,
    LastName?:string,
    email:string,
    dob:Date,
    status:Status
}
const font="font-light text-gray-500";

const UserCard=({FirstName,LastName,email,dob,status}:UserCard)=>{
    const year = dob.getFullYear();
    const month = dob.getMonth()+1;  
    const day = dob.getDate();
    const formattedDob = `${year}-${month}-${day}`;
    return(
        <div className='bg-mint-300 rounded-lg p-3 shadow-lg flex flex-col justify-start'>
            <UserInitial FirstName={FirstName} LastName={LastName}/>
            <h1 className="font-semibold text-2xl text-black-500">{FirstName} {LastName}</h1>
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