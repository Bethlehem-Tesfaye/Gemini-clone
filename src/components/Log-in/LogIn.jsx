import React, { useContext, useState } from 'react'
import './login.css'

import { Link } from 'react-router-dom'; // Import Linkbb
import { useNavigate } from 'react-router-dom';
import { FunctionContext } from '../../context/Context';


export default function LogIn() {
    const[loginEmail, setLoginEmail]=useState("");
    const[loginPas, setLoginPass]=useState("");
    const[error, setError]=useState("");
    const[account, setAccount]=useState(true);

    const navigate = useNavigate();
    const{setSubmit} = useContext(FunctionContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if(!emailPattern.test(loginEmail)){
            setError("plaese enter valid gmail email")

        }
        else{
            const get = JSON.parse(localStorage.getItem("user"));
            const getPass = JSON.parse(localStorage.getItem("user"))
            if(loginEmail!=get.email && getPass.password!=loginPas){
                setError("no account with this email or incorrect password");
                setAccount(false);

            }
            else{
                setError("")
                alert("loged in ")
                setSubmit(true)
                navigate('/');
                setAccount(true);
            }
            

        }
       
    }

  return (
    <div className="login-container">
        <form onSubmit={handleSubmit}>
            <input value={loginEmail} type="email" placeholder='Email Address' onChange={(e)=>setLoginEmail(e.target.value)} required />
            {error && <p className="error-message">{error}</p>}
            <input type="password" value={loginPas}  placeholder='Password' required onChange={(e)=>setLoginPass(e.target.value)} />
            <button type='submit'>Log In</button>
            {!account?<Link to="/signup">Sign Up Instead</Link>:null}
        </form>
    </div>
  )
}
