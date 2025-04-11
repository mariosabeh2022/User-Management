import './App.css'
import HomePage from './Components/Pages/HomePage'
import LoadingPage from './Components/Pages/LoadingPage'
import LoginPage from './Components/Pages/LoginPage'
import NotFoundPage from './Components/Pages/NotFoundPage'
import {useEffect,useState} from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router'

function App() {
  const [isLoading, setIsloading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsloading(false)
    }, 500)
  },[])

  const router=createBrowserRouter([
    {
      path:'/',
      element:<LoginPage/>,
      errorElement:<NotFoundPage/>
    },
    {
      path:'/dashboard',
      element:<HomePage/>
    },
    {
      path:'/login',
      element:<LoginPage/>
    }
  ])
  if(isLoading) return <LoadingPage/>
  else return <RouterProvider router={router}/>
}

export default App
