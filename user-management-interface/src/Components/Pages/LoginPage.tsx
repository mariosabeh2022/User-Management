import Input from '../Atoms/Input'
import Button from '../Atoms/Button'
import { Eye,EyeOff } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import Span from '../Atoms/Span'
// import LoadingPage from './LoadingPage'
import { useSessionStore } from '../../store'

const LoginPage=()=>{
    const [visiblePassword,setVisiblePassword]=useState(false)
    // const [submitted,setSubmitted]=useState(false)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [showError,setShowError]=useState(false)
    const setIsLoggedIn=useSessionStore((state)=>state.setIsLoggedIn)
    const togglePassType=()=>{
        setVisiblePassword(prev=>!prev)
    }
    const handleEmailChange=(e:ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)
    const handlePassChange=(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)
    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();
        if(!email||!password) setShowError(true)
        else{
            // try {
            //     const response = await fetch('/api/login', {
            //       method: 'POST',
            //       headers: {
            //         'Content-Type': 'application/json',
            //       },
            //       body: JSON.stringify({
            //         body: {
            //           email,
            //           password,
            //         },
            //       }),
            //     });
            
            //     const data = await response.json();
            
            //     if (!response.ok) {
            //       throw new Error(data.message || 'Login failed');
            //     }
            
            //     const { accessToken, expiresIn } = data.result.data;
            //     return { accessToken, expiresIn };
            //   } catch (error) {
            //     console.log(error);
            //   }
            setIsLoggedIn(true);
        }
    }

    // if(submitted) return <LoadingPage/>
    // else 
    return(
        <div className="flex flex-col max-w-full items-center justify-center h-screen bg-gray-100">
            <div className='bg-white p-8 rounded-lg shadow-md w-[400px] hover:shadow-2xl'>
                <h1 className='text-2xl font-bold text-gray-700 text-center'>
                    Login
                </h1>
                <form action="" className='pt-6' onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <Span className='text-gray-600 font-semibold mb-1 block' label='Email'/>
                        <Input type="email" 
                                className="text-xl border border-gray-300 rounded-sm px-3 py-2 w-full 
                                        focus:border-[var(--color-primary)] focus:outline-none"
                                onChange={handleEmailChange} 
                        />
                    </div>
                    <div className='mb-3 pt-2'>
                        <Span className='text-gray-600 font-semibold mb-1 block' label='Password'/>
                        <div className='relative'>
                            <Input type={visiblePassword?"text":"password"} 
                                    className="text-xl border border-gray-300 rounded-sm px-3 py-2 w-full 
                                            focus:border-[var(--color-primary)] focus:outline-none"
                                    onChange={handlePassChange}  
                            />
                            <span className='absolute right-8' onClick={togglePassType}>
                                {visiblePassword? 
                                    <span>
                                        <EyeOff color="#808080" className='absolute mr-3 mt-2.5 cursor-pointer'/>
                                    </span>:           
                                    <span>
                                        <Eye color="#808080" className='absolute mr-3 mt-2.5 cursor-pointer'/>    
                                    </span>
                                }
                            </span>
                        </div>
                    </div>       
                    {showError&&(
                        <Span className='text-red-500 font-semibold text-center block' 
                                label='Fill required fields' 
                        />
                    )}   
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
    )
}
export default LoginPage