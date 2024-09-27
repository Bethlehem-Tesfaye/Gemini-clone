import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FunctionContext } from '../../context/Context'
import './logout.css';

export default function LogOut() {

    const navigate = useNavigate()
    const {saveUser, setSubmit, submit, saveSub}= useContext(FunctionContext)

    const handleLogout=()=>{
        const updateUser = {name:"", email:"", password:""};
        saveUser(updateUser);
        // const sub = !submit;
        saveSub(false);
        setSubmit(false);
        navigate("/");

    }

    const handleBackToMain =()=>{
        navigate("/");
    }

  return (
     <>
        <div className="logout-conatiner">
            <p>Are You sure You want to Log Out?</p>
            <div>
                <button className='yes' onClick={()=>handleLogout()} >Yes</button>
                <button className='no' onClick={()=>handleBackToMain()} >No</button>
            </div>
        </div>
     </>
  )
}
