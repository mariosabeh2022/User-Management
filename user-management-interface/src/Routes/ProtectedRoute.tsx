import { PropsWithChildren } from "react";

import { useSessionStore } from "../store/session/sessionStore";

import { useEffect } from "react";
const ProtectedRoute:React.FC<PropsWithChildren>=({children})=>{

    const isLoggedIn = useSessionStore((s)=>s.isLoggedIn)
    const hasToken = useSessionStore((s)=>s.accessToken)
    useEffect(() => {
        if (!isLoggedIn && !hasToken) {
          window.location.href = "/login";
        }
      }, [isLoggedIn, hasToken]);
    if(!isLoggedIn && !hasToken){
        return null
    }
    return children;    
}

export { ProtectedRoute }