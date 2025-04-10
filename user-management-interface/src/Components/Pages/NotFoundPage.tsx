import { Link } from "react-router"
const NotFoundPage=()=>{
    return(
        <div>
            404 Not Found
            <br/>
            <Link to='/'>Go Back To Users Page</Link>
        </div>
    )
}
export default NotFoundPage

