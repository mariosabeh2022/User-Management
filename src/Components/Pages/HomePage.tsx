import Navbar from '../Organismes/Navbar'
import Grid from '../Organismes/Grid'
import { useSessionStore } from "../../store/session/sessionStore";
import { useThemeStore } from '../../store/theme/themeStore';
import LoginPage from './LoginPage';
const HomePage=()=>{
    const lightTheme = useThemeStore((state) => state.lightTheme);
    const isLoggedIn = useSessionStore((state) => state.isLoggedIn);
    const hasToken = useSessionStore((state) => state.accessToken);
    const tokenExpiry = useSessionStore((state)=>state.tokenExpiryDate);
    const hasValidToken = tokenExpiry>Math.floor(Date.now()/1000)
    if(isLoggedIn&&hasToken&&hasValidToken)
    return(
        <div className={`${lightTheme?'bg-white':'bg-gray-500'} flex flex-col min-h-screen`}>
            <Navbar/>
            <Grid/>
        </div>
    )
    else return <LoginPage/>
}
export default HomePage