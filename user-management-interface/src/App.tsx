import './App.css'
import HomePage from './Components/Pages/HomePage'
import LoadingPage from './Components/Pages/LoadingPage'
import {useEffect,useState} from 'react'

function App() {
  const [isLoading, setIsloading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsloading(false)
    }, 1000)
  },[])
  if(isLoading) return <LoadingPage/>
  else return <HomePage/>
}

export default App
