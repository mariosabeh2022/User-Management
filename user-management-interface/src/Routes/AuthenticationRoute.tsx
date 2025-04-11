import { PropsWithChildren } from "react";

import { Navigate } from "react-router";

import { useSessionStore } from "../store";

const AuthenticationRoute:React.FC<PropsWithChildren>=({children})=>{
    const isLoggedIn = useSessionStore((s)=>s.isLoggedIn)
    if(isLoggedIn){
        return <Navigate to="/dashboard"/>
    }
    return children;    
}

export { AuthenticationRoute }