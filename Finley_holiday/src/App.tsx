import Userlogin from "./Pages/UserLogin";
import "./App.css";
import { INDEX_PATH, LOGIN_IN_PATH, NOT_FOUND_PATH, SIGN_UP_PATH } from "./constants/Paths";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import SignUP from "./Pages/SignUp";
import NaviBar from "./Pages/Navbar";
import NotFound from "./Pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NaviBar />}>
          <Route path={INDEX_PATH} element={<Homepage />} />
          <Route path={SIGN_UP_PATH} element={<SignUP />} />
          <Route path={LOGIN_IN_PATH} element={<Userlogin />} />
          <Route path={NOT_FOUND_PATH} element={<NotFound />} />
        </Route> 
      </Routes>
      
    </>
  );
}

export default App;
