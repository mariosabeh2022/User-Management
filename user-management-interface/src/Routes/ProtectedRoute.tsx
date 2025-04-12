import { PropsWithChildren } from "react";

import { useSessionStore } from "../store/session/sessionStore";

import { useEffect } from "react";
const ProtectedRoute:React.FC<PropsWithChildren>=({children})=>{

    const isLoggedIn = useSessionStore((s)=>s.isLoggedIn)
    const hasToken = useSessionStore((s)=>s.accessToken)
    useEffect(() => {
        if (!isLoggedIn && !hasToken) {
          // Directly redirect to login page if not logged in
          window.location.href = "/login";  // Or use history.push("/login") if you're using useHistory
        }
      }, [isLoggedIn, hasToken]);
    if(!isLoggedIn && !hasToken){
        return null
    }
    return children;    
}

export { ProtectedRoute }