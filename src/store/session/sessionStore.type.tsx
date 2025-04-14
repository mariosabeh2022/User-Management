export interface SessionStore{
    isLoggedIn:boolean;
    accessToken:null|string;
    tokenExpiryDate:number;
    setIsLoggedIn:(value:boolean)=>void;
    setAccessToken:(value:string,expiryDate:number)=>void
    clearToken:()=>void;
}