// AppWithRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 
import Main from "./components/Main/Main";
import SideBar from "./components/sidebar/SideBar";
import Context from "./context/Context";
import SignUp from "./components/Sign-up/SignUp.jsx";
import LogIn from './components/Log-in/LogIn.jsx';
import LogOut from './components/Log-out/LogOut.jsx';

function AppRouter() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/signup' && location.pathname !== '/login' && location.pathname !== '/logout'?<SideBar />:null} 
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/logout" element={<LogOut/>}/>
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Context>
      <Router>
        <AppRouter />
      </Router>
    </Context>
  );
}
