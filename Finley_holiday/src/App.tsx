import Userlogin from "./Pages/UserLogin"
import "./App.css";
import { INDEX_PATH, LOGIN_IN_PATH, SIGN_UP_PATH } from "./assets/constants/paths";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import SignUP from "./Pages/SignUp";
import NaviBar from "./Pages/Navbar";

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<NaviBar />}>
          <Route path={INDEX_PATH} element={<Homepage/>} />
          <Route path={SIGN_UP_PATH} element={<SignUP/>} />
          <Route path={LOGIN_IN_PATH} element={<Userlogin/>} />
        </Route> 
      </Routes>
      
    </>
  );
}

export default App;
