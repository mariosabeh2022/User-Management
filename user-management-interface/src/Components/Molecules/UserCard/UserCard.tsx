import Button from '../../Atoms/Button/Button';
import UserInitial from '../../Atoms/UserInitials/UserInitial'
import { UserCardProps } from '../UserCard/UserCard.type';
import { Status } from '../UserCard/UserCard.type';
const UserCard=({firstName,lastName,email,dob,status}:UserCardProps)=>{
    const year=dob.getFullYear();
    const m=dob.getMonth() + 1;
    // Adding 0 if it isn't the last 3 months of the year
    const month=m<10?"0"+m:String(m);
    const d=dob.getDate();
    // Adding 0 if it is the first 9 days of the month
    const day=d<10?"0"+d:String(d)
    const formattedDob=`${year}-${month}-${day}`;
    return(
        <div className='bg-mint-300 rounded-lg p-3 shadow-lg flex flex-col justify-start 
                        hover:shadow-2xl border border-gray-50 hover:border-gray-200'>
            <UserInitial firstName={firstName} lastName={lastName}/>
            <h1 className="font-semibold text-2xl text-black-500">{firstName} {lastName}</h1>
            <span className="info">Email: {email}</span>
            <span className="info">Status: {status}</span>
            <span className="info">Date of Birth: {formattedDob}</span>
            <div className='flex justify-end'>
                <Button className="bg-[var(--color-primary)] text-white border-[var(--color-primary)]
                                   hover:bg-[var(--color-primary-dark)] hover:text-white hover:border-[var(--color-primary-dark)]
                                     border rounded-sm px-4 py-1 mr-4" 
                        label="Edit"/>
                <Button className="bg-red-500 text-white border border-red-500 
                                   hover:bg-red-700 hover:border-red-700 
                                     rounded-sm px-3 py-2 mr-3"
                        label="Delete"/>
            </div>
        </div>
    )
}
export default UserCard;
export {Status}