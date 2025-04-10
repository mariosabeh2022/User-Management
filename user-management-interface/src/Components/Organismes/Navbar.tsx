import { Moon } from "lucide-react";
import { NavLink } from "react-router";
import Button from '../Atoms/Button'

const Navbar=()=>{
  return (
    <div className='bg-[var(--color-primary)]'>
        <nav className='flex justify-between items-center'>
          <NavLink to='/'>
            <h1 className="px-5 py-5 text-white font-semibold">
              User Management
            </h1>
          </NavLink>
          <div className='flex'>
            <NavLink to='/login' className='mr-3'>
              <Button className="bg-white text-[var(--color-primary)]
                                hover:bg-gray-500 hover:text-[var(--color-primary-dark)] hover:border-gray-500 
                                  border rounded-sm px-4 py-2" 
                      label="Create user"/>
            </NavLink>
            <NavLink to='/logout' className='mr-3'>
              <Button className="bg-red-500 text-white border border-red-500 
                                hover:bg-red-700 hover:border-red-700 
                                  rounded-sm px-3 py-2" 
                      label="Logout"/>
            </NavLink>
            <Moon className="w-6 h-6 text-white mt-2 ml-2 mr-6 sm:mt-1.6 md:mt-2"/>
          </div>
        </nav>
    </div>
  )
}
export default Navbar
