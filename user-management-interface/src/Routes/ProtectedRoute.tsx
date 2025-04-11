import { PropsWithChildren } from "react";

import LoginPage from "../Components/Pages/LoginPage";

import { useSessionStore } from "../store";

const ProtectedRoute:React.FC<PropsWithChildren>=({children})=>{
    const isLoggedIn = useSessionStore((s)=>s.isLoggedIn)
    if(!isLoggedIn){
        return <LoginPage/>
    }
    return children;    
}

export { ProtectedRoute }