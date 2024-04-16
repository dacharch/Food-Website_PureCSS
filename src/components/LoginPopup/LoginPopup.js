import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import "./LoginPopup.css"


export const LoginPopup = ({setShowLogin}) => {
    const [currentState,setCurrentState] = useState("Sing Up") ;
  return (
    <div className="login-popup">
      <div className="login-popup-title">
        <h2>{currentState}</h2>
        <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />;
      </div>
      <div className="login-popup-inputs">
        {currentState === "Login" ? (
          <></>
        ) : (
          <input type="text" placeholder="Your Name" required />
        )}

        <input type="email" placeholder="Your Name" required />
        <input type="password" placeholder="password" required />
      </div>
      <button>{currentState === "Sing Up" ? "Create Account" : "Login"}</button>

      <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>By Continuing, i agree to the term of use & privacy policy</p>
      </div>
      {currentState === "Login" ? (
        <p>
          Create a new account? <span onClick={()=>setCurrentState("Sing Up")}>Click here</span>
        </p>
      ) : (
        <p>
          Already a new account? <span onClick={()=>setCurrentState("Login Up")}>Click here</span>
        </p>
      )}
    </div>
  );
}
