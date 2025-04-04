import UserCard from "../Molecules/UserCard";
import { Status } from "../Molecules/UserCard";
import users from '../../assets/Users.json'

const Grid=()=>{
  return(
    <div className="m-8 grid gap-4 max-w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    { /* Looping through the 1st layer of the json file */ }
    {Object.entries(users).map(([, userList]) =>
      // Looping through the 2nd layer of the json file
      Object.entries(userList).map(([key, user]) => (
        // Passing the props to the UserCard component
        <UserCard
          key={key}
          firstName={user.FirstName}
          lastName={user.LastName}
          email={user.Email}
          dob={new Date(user.Dob)}
          status={user.Status as Status}
        />
      ))
    )}
    </div>
  )
}
export default Grid;
