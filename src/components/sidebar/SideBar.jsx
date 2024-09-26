import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './sidebar.css'
import { useState } from 'react'
import { FunctionContext } from '../../context/Context';

export default function SideBar() {
    const[menu, setMenu]=useState(false);
    const{storeQuestions, onSent, newChat}=useContext(FunctionContext)

    const openMenu = ()=>{
        setMenu(prev=>!prev);
    }

  return (
     <>
        <div className="sidebar">
            <div className="sidebar-top">
                 <div className="menu">
                <img onClick={()=>openMenu()} src={assets.menu_icon} alt="" />
            </div>
                <div onClick={()=>newChat()} className="newchat">
                    <img src={assets.plus_icon} alt="" />
                    {menu?<p>New Chat</p>:null}
                </div>
                <div className='rec'>
                 {menu? 
                 <>
                     <div>Recent</div>
                {storeQuestions.map((item, index)=>{
                    return(
                        <div onClick={()=>{
                            onSent(item);
                        }} className="recent-list">
                        <img src={assets.message_icon} alt="" />
                        <p>{item.slice(0,15)} ...</p>
                        </div>
                    )
                })}
                 </>:null}
                
            </div></div>
            <div className="sidebar-bottom">
                <div className="recent-list">
                    <img src={assets.question_icon} alt="" />
                    {menu?<p>Help</p>:null}
                </div>
                <div className="recent-list">
                    <img src={assets.history_icon} alt="" />
                    {menu?<p>Activities</p>:null}
                </div>
                <div className="recent-list">
                    <img src={assets.setting_icon} alt="" />
                    {menu?<p>Settings</p>:null}
                </div>
            </div>
        </div>
     </>
  )
}
