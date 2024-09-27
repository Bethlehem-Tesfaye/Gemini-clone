import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { assets } from '../../assets/assets';
import './user.css';
import { FunctionContext } from '../../context/Context';

export default function User(props) {

  const{submit, setSubmit , name} = useContext(FunctionContext);

  const getName = JSON.parse(localStorage.getItem("user"));
  const getSub = JSON.parse(localStorage.getItem("submitted")) | false;

  return (
    <>
      <div className="user-container">
        <div className='profile-pic'><img src={assets.user} alt="User" /></div>

        {!getSub?
          <div className="sign">
          <div className="sign-up">
            <img src={assets.signup} alt="Sign Up" />
            <p><Link to="/signup" >Sign Up</Link></p> 
          </div>
          <div className="log-in">
            <img src={assets.login} alt="Log In" />
            <p><Link to="/login" >Log In</Link></p> 
          </div>
        </div>:
          <div className="log-out">
          <div className="greet-by-name">
            <p>Hi, {getName.name}</p><br></br>
          </div>
          <div className="sign-up Log-Out">
            <img src={assets.logout} alt="log out" />
            <p><Link to="/logout" >Log Out</Link></p> 
          </div>
        </div>
        }

        <div className="policy">
          <p>Privacy Policy . Term of Service</p>
        </div>
      </div>
    </>
  );
}
