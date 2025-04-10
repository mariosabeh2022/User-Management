import Input from '../Atoms/Input'
import Button from '../Atoms/Button'
import Navbar from '../Organismes/Navbar'
import { Eye } from 'lucide-react';
const LoginPage=()=>{
    return(
        <>
            <Navbar/>
            <div className="flex flex-col max-w-full items-center justify-center h-screen bg-gray-100">
                <div className='bg-white p-8 rounded-lg shadow-md w-[400px]'>
                    <h1 className='text-2xl font-bold text-gray-700 text-center'>
                        Login
                    </h1>
                    <form action="" className='pt-6'>
                        <div className='mb-2'>
                            <span className='text-gray-600 font-semibold mb-1 block'>Email</span>
                            <Input type="email" 
                                   className="text-xl border border-gray-300 rounded-sm px-3 py-2 w-full 
                                            focus:border-[var(--color-primary)] focus:outline-none" 
                            />
                        </div>
                        <div className='mb-3 pt-2'>
                            <span className='text-gray-600 font-semibold mb-1 block'>Password</span>
                            <div className='relative'>
                                <Input type="password" 
                                       className="text-xl border border-gray-300 rounded-sm px-3 py-2 w-full 
                                                focus:border-[var(--color-primary)] focus:outline-none" 
                                />
                                <span className='absolute right-8 '>
                                    <Eye color="#808080" className='absolute mr-3 mt-2.5 cursor-pointer'/>
                                </span>
                            </div>
                        </div>          
                        <div className='text-center'>                 
                            <Button className="max-w-full border rounded-sm px-5 py-3 mt-2
                                            bg-[var(--color-primary)] text-white border-[var(--color-primary)]
                                            hover:bg-[var(--color-primary-dark)] hover:text-white hover:border-[var(--color-primary-dark)]" 
                                    label='Login'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default LoginPage