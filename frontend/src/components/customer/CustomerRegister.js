import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import axios from "axios";


import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import person_icon from "../Assets/person.png";
import  "./css/LoginSignup.css";
import Navbar from "./Navbar";

function CustomerRegister() {

  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var [name, setName] = useState('');
  var [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function attemptRegister() {

    axios.post('http://127.0.0.1:8000/api/customer/register/',{
        name:name,
        email:email,
        password:password
    }).then(response=>{
       console.log(response.data)
        if (response.data.error){
            setErrorMessage(response.data.error)
        }
        else{ 
            navigate("/login")
        }
        
    

    })
  }

  const buttonEnable = (email!='') && (password!='') && (name!='')


  return (
    <>
    <Navbar/>

    <div className="loginsignup-page">
    <div className="container loginsignup-container">
      <div className="header">
        <div className="heading text-primary">Create Your Account</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">

      { errorMessage && <p className="text-danger form-error">{errorMessage}</p>}
        
          <div className="input bg-dark" >
            <img src={person_icon} alt="" />
            <input className="bg-dark inp-drk" type="text" placeholder="Name" required  value={name}  onInput={(event)=>setName(event.target.value)}/>
          </div>
     

        <div className="input bg-dark">
          <img src={email_icon} alt="" />
          <input  className="bg-dark inp-drk" type="email" placeholder="Email" required value={email}  onInput={(event)=>setEmail(event.target.value)} />
        </div>

        <div className="input bg-dark">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" className="bg-dark inp-drk"  value={password}  onInput={(event)=>setPassword(event.target.value)}/>
        </div>
      
          <div></div>
       
            <div className="forget-password ">
            Forget Password? <span className="text-primary">Click Here</span>
          </div>

        
       
        <div className="submit-container">
        <button disabled={!buttonEnable}  className={"btn-login " +  (buttonEnable ? 'btn-enable' : '')  }  onClick={attemptRegister}>
        Sign Up
        </button>
          
          
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default CustomerRegister;
