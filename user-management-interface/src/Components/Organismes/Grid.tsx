import UserCard from "../Molecules/UserCard";
import { Status } from "../Molecules/UserCard";
import users from '../../assets/Users.json'

const Grid=()=>{
    return(
        <div className="m-8 grid gap-4 max-w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {Object.entries(users).map(([category, userList]) =>
          Object.entries(userList).map(([key, user]) => (
            <span key={key}>
            <UserCard
              FirstName={user.FirstName}
              LastName={user.LastName}
              email={user.Email}
              dob={new Date(user.Dob)}
              status={user.Status as Status}
            />
            </span>
          ))
        )}
        </div>
    )
}
export default Grid;
