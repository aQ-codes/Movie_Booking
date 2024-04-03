import React, { useState } from "react";

import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import person_icon from "../Assets/person.png";
import  "./css/LoginSignup.css";

function LoginSignup() {
  const [action, setAction] = useState("signup");

  return (
    <div className="container loginsignup-container">
      <div className="header">
        <div className="text">{action}</div>
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
          <div
            className={action === "login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("signup");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "signup" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
