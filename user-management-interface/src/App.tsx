import './App.css'
import H1 from './Components/Atoms/H1'
import UserCard from './Components/Molecules/UserCard'
import CreateUser from './Components/Atoms/CreateUser'
import Logout from './Components/Atoms/Logout'
import ToggleTheme from './Components/Atoms/ToggleTheme'
import Search from './Components/Atoms/Search'
import Grid from './Components/Organismes/Grid'
import { Status } from './Components/Molecules/UserCard'
import users from './assets/Users.json'
function App() {
  return (
    <>
      <div className='bg-[#3251D0]'>
        <nav className='flex justify-between items-center'>
          <H1 label="User Management"/>
          <div className='flex'>
            <CreateUser/>
            <Logout/>
            <ToggleTheme/>
          </div>
        </nav>
      </div>
      <div>
        <Search/>
      </div>
      <Grid>
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
      </Grid>
    </>
  )
}

export default App
