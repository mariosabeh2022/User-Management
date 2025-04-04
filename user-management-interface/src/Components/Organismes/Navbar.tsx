import { Moon } from "lucide-react";
import Button from '../Atoms/Button'

const Navbar=()=>{
  return (
    <div className='bg-[#3251D0]'>
        <nav className='flex justify-between items-center'>
        <h1 className="px-5 py-5 text-white font-semibold">User Manaement</h1>
          <div className='flex'>
            <Button className="bg-white text-[#3251D0] border rounded-sm px-4 py-2 mr-3" 
                    label="Create user"/>
            <Button className="bg-red-500 text-white border border-red-500 rounded-sm px-3 py-2 mr-3" 
                    label="Logout"/>
            <Moon className="w-6 h-6 text-white mt-2 ml-2 mr-6"/>
          </div>
        </nav>
    </div>
  )
}
export default Navbar
