import './App.css'
import HomePage from './Components/Pages/HomePage'
import LoadingPage from './Components/Pages/LoadingPage'
import LoginPage from './Components/Pages/LoginPage'
import NotFoundPage from './Components/Pages/NotFoundPage'
import {useEffect,useState} from 'react'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router'
import { AuthenticationRoute } from './Routes/AuthenticationRoute'
import { ProtectedRoute } from './Routes/ProtectedRoute'

function App() {
  const [isLoading, setIsloading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsloading(false)
    }, 500)
  },[])

  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path='/'
          element={
            <AuthenticationRoute>
              <LoginPage/>
            </AuthenticationRoute>
          }
          errorElement={<NotFoundPage/>}
        />
        <Route
          path='/dashboard'
          element={
            
              <HomePage/>
            
          }
        />
        <Route
          path='/login'
          element={
            <AuthenticationRoute>
              <LoginPage/>
            </AuthenticationRoute>
          }
        />
    </>
  ))
  if(isLoading) return <LoadingPage/>
  else return <RouterProvider router={router}/>
}

export default App
