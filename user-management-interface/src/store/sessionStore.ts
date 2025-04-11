import { create } from "zustand";
import { persist } from "zustand/middleware";

import { SessionStore } from "./sessionStore.type";

const useSessionStore=create<SessionStore>()(
    persist(
        (set)=>({
            isLoggedIn:false,
            accessToken:null,
            tokenExpiryDate:0,
            setIsLoggedIn:(value)=>set(()=>({isLoggedIn:value})),
            setAccessToken:(value,date)=>set(()=>({
                accessToken:value,
                tokenExpiryDate:date
            })),
            clearToken:()=>set({isLoggedIn:false,accessToken:null,tokenExpiryDate:0})
        }),
        {
            name:"user-session",
        }
    )
)
export { useSessionStore }