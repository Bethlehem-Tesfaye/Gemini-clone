import React, { Children, createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './signup.css'
import { FunctionContext } from '../../context/Context';

export default function SignUp() {
    // const[email, setEmail]=useState("");
    const[emailError, setEmailError] =useState("")
    
    const navigate = useNavigate();

    const {name, email, setName, setEmail, submit, setSubmit, password, setPassword, user, setUser, saveUser, saveSub}= useContext(FunctionContext)

    const handleSubmit =(e)=>{
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if(!emailPattern.test(email)){
            setEmailError("Please enter a valid Gmail address.")
            return;
        }
        
        setEmailError("");
        // setEmail("")
        // setSubmit(true);
        alert("Account Created!")
        const updateUser={name:name, email:email, password:password };
        const sub = !submit;
        setSubmit(sub)

        saveSub(sub);

        setUser(updateUser);
        saveUser(updateUser);
        navigate('/');
    }
  return (
    <>
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='First Name' value={name} onChange={(e)=>setName(e.target.value)} required/>
                <input type="text" placeholder='Last Name' required/>
                <input value={email} type="email"  placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} required/>
                {emailError && <p className="error-message">{emailError}</p>}
                <input 
                    type="password" 
                    value={password} 
                    placeholder='Password' 
                    required 
                    onChange={(e) => {
                    setPassword(e.target.value);
                    console.log("Password:", e.target.value); 
                }} 
/>
                <button type='submit'>Submit </button>

            </form>
        </div>
    </>
  )
}
