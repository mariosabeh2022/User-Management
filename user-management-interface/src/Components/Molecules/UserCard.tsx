import Edit from '../Atoms/Edit'
import Delete from '../Atoms/Delete'
import UserInitial from '../Atoms/UserInitial'
enum Status{
    Locked = 'locked',
    Active = 'active',
}

type UserCard={
    FirstName:string,
    LastName?:string,
    email:string,
    dob:Date,
    status:Status
}

const font="font-light text-gray-500";

const UserCard:React.FC<UserCard>=({FirstName,LastName,email,dob,status})=>{
    const year = dob.getFullYear();
    const month = dob.getMonth()+1;  
    const day = dob.getDate();
    const formattedDob = `${year}-${month}-${day}`;
    return(
        <div className='bg-mint-300 rounded-lg p-3 shadow-lg flex flex-col justify-start h-[235px] w-[425px]'>
            <UserInitial FirstName={FirstName} LastName={LastName}/>
            <h1 className="font-semibold text-2xl text-black-500">{FirstName} {LastName}</h1>
            <span className={font}>Email: {email}</span>
            <span className={font}>Status: {status}</span>
            <span className={font}>Date of Birth: {formattedDob}</span>
            <div className='flex justify-end'>
                <Edit/>
                <Delete/>
            </div>
        </div>
    )
}
export default UserCard;
export {Status}