import React, { useState } from "react";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import person_icon from "../Assets/person.png";
import  "./css/LoginSignup.css";
import Navbar from "./Navbar";

function CustomerRegister() {
  const [action, setAction] = useState("signup");

  return (
    <>
    <Navbar/>

    <div className="loginsignup-page">
    <div className="container loginsignup-container">
      <div className="header">
        <div className="heading">Create Your Account</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={person_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="password" />
        </div>
        {action === "signup" ? (
          <div></div>
        ) : (
            <div className="forget-password">
            Forget Password? <span>Click Here</span>
          </div>
        )}
        
       
        <div className="submit-container">
        <button className="submit-container submit" type="submit">
        Login
        </button>
          
          
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default CustomerRegister;
