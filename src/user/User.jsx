import React from 'react'
import { assets } from '../assets/assets'

export default function User() {
  return (
    <>
        <div className="conatiner">
            <img src={assets.user} alt="" />
            <div className="sign-up">
                <img src={assets.signup} alt="" />
                <p>Sign Up</p>
            </div>
            <div className="log-in">
                <img src={assets.login} alt="" />
            </div>
            <div className="policy">
                <p>Privacy Policy . Term of service</p>
            </div>
        </div>
    </>
  )
}
