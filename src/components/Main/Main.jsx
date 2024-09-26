import React from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { useState } from 'react'
import { useContext } from 'react'
import { FunctionContext } from '../../context/Context'
import User from '../../user/User'

export default function Main() {

   const {showingResult, displayQuestion,setShowingResult, input, setInput,displayAnswer, loading, onSent}= useContext(FunctionContext);
//    const card1 = document.querySelector(".cards .crad-1 p").i;
const samples =["Suggest beautiful places to see on an upcoming road trip", "Brief summarize this concept: urban planning", "Brainstorm team bonding activities for our work retreat", "Improve the readability of the following code"];



  return (

    <>
       
        <div className="main">
            <div className="main-top">
                <p>Gemini</p>
                <img onClick={()=>{
                    return(
                        <User></User>
                    )
                }} src={assets.user_icon} alt="" />
            </div>
            <div className="main-cont">

            {!showingResult? 
            <><div className="greet">
            <p><span>Hello, Dev.</span><br /> How can i help you today?</p>
        </div><div className="cards">
                <div onClick={()=>setInput(samples[0])} className="card card-1">
                    <p>{samples[0]}</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div onClick={()=>setInput(samples[1])} className="card card-2">
                    <p>{samples[1]}</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div onClick={()=>setInput(samples[2])} className="card card-3">
                    <p>{samples[2]}</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div onClick={()=>setInput(samples[3])} className="card card-4">
                    <p>{samples[3]}</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div></> :
                <> 
                    <div className="container">
                        <div className="question-display">
                            <img src={assets.user_icon} alt="" />
                            <p>{displayQuestion}</p>
                        </div>

                        {loading? <>
                            <div className='container'>
                                <hr></hr>
                                <hr></hr>
                                <hr></hr> </div>
                        
                        </>:<div className="answer-display">
                            <img src={assets.gemini_icon} alt="" />
                            {/* <div>{displayAnswer}</div> */}
                            <p dangerouslySetInnerHTML={{__html:displayAnswer}}></p>
                        </div>}
                        
                    </div>
                </>
            
            }
            
            </div>
            <div className="input">
                <input value={input} onChange={(e)=>{
                    setInput(e.target.value)
                }} type="text" placeholder='Enter a Prompt here' />
                <div className="input-logos">
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null }
                </div>
            </div>
            <div className="main-bottom">
                <p>Gemini may display inaccurate info, includung about people, so double-check its responses. Your privacy and Geminin Apps</p>
            </div>
        </div>
    </>
  )
}
