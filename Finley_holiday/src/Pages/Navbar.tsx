import { Link, Outlet } from "react-router-dom";
import { INDEX_PATH, LOGIN_IN_PATH, SIGN_UP_PATH } from "../constants/Paths";
import "./NavBar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NaviBar(){
    const navRef = useRef(null);

    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    };
  
    return (
      <>
        <header>
          <nav ref={navRef}>
            <Link to={INDEX_PATH}>Home</Link>
            <Link to={LOGIN_IN_PATH}>Login</Link>
            <Link to={SIGN_UP_PATH}>Signup</Link>
            
            <button
              type="button"
              className="nav-btn nav-close-btn "
              onClick={showNavbar}
            >
              <FaTimes />
            </button>
          </nav>
          <button type="button" className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
        <Outlet />
      </>
    );
}

export default NaviBar; 