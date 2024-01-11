import { Link } from "react-router-dom";
import { INDEX_PATH, LOGIN_IN_PATH, SIGN_UP_PATH } from "../assets/constants/paths";
import "./NavBar.css";

function NaviBar(){

    return(

       <>
            <nav>
                <Link to={INDEX_PATH}>Home</Link>
                <Link to={SIGN_UP_PATH}>Sign Up</Link>
                <Link to={LOGIN_IN_PATH}>Login</Link>
            </nav>

        </> 

    )
   
}

export default NaviBar; 