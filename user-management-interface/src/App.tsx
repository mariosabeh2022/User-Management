import './App.css'
import H1 from './Components/Atoms/H1'
import UserCard from './Components/Molecules/UserCard'
import {Status} from './Components/Molecules/UserCard'
import CreateUser from './Components/Atoms/CreateUser'
import Logout from './Components/Atoms/Logout'
import ToggleTheme from './Components/Atoms/ToggleTheme'
import Search from './Components/Atoms/Search'
import Grid from './Components/Organismes/Grid'
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
        <UserCard FirstName='John' LastName='Doe' email='john.doe@example.com' dob={new Date('1995-02-10')} status={Status.Active}/>
        <UserCard FirstName='Alice' LastName='Johnson' email='alice.johnson@example.com' dob={new Date('1995-02-10')} status={Status.Active}/>
        <UserCard FirstName='Alice' LastName='Johnson' email='alice.johnson@example.com' dob={new Date('1995-02-10')} status={Status.Active}/>
        <UserCard FirstName='Alice' LastName='Johnson' email='alice.johnson@example.com' dob={new Date('1995-02-10')} status={Status.Active}/>
        <UserCard FirstName='Alice' LastName='Johnson' email='alice.johnson@example.com' dob={new Date('1995-02-10')} status={Status.Active}/>
        <UserCard FirstName='Alice' LastName='Johnson' email='alice.johnson@example.com' dob={new Date('1995-02-10')} status={Status.Active}/>
        <UserCard FirstName='Alice' LastName='Johnson' email='alice.johnson@example.com' dob={new Date('1995-02-10')} status={Status.Active}/>
        <UserCard FirstName='Alice' LastName='Johnson' email='alice.johnson@example.com' dob={new Date('1995-02-10')} status={Status.Active}/>
        <UserCard FirstName='Alice' LastName='Johnson' email='alice.johnson@example.com' dob={new Date('1995-02-10')} status={Status.Active}/>
        <UserCard FirstName='Alice' LastName='Johnson' email='alice.johnson@example.com' dob={new Date('1995-02-10')} status={Status.Active}/>
      </Grid>
    </>
  )
}

export default App
