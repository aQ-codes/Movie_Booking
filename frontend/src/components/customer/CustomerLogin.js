import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";

import { setUser } from "../../store/authSlice";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import person_icon from "../Assets/person.png";
import  "./css/LoginSignup.css";
import Navbar from "./Navbar";

// import checkGuest from "./checkGuest";


function CustomerLogin() {
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var [errorMessage, setErrorMessage] = useState('');
 const dispatch = useDispatch();
 const navigate = useNavigate();


    function attemptLogin() {

        axios.post('http://127.0.0.1:8000/api/customer/login/',{
            email:email,
            password:password
        }).then(response=>{
            if (response.data.error){
                setErrorMessage(response.data.error)
            }
            else{ 
                var user = {
                    email:email,
                    token:response.data.token,
                    customer_id:response.data.customer_id,
                    name:response.data.name
                }
                dispatch(setUser(user));

                var navloc1 = window.localStorage.getItem('navigate');
                var navloc2 = JSON.parse(navloc1);
                if (navloc2){
                 window.localStorage.removeItem('navigate')
                   navigate(navloc2)
                }
                else{
                navigate("/home")
               }
                
            }
            console.log(response.data)
        
  
        })
        // .catch(error=>{
    //         if(error.response.data.errors){
    //             setErrorMessage(Object.values(error.response.data.errors).join(''))
    //         }else if(error.response.data.message){
    //             setErrorMessage(error.response.data.message)
    //         }else{
    //             setErrorMessage('Failed to login user. Please contact admin')
    //         }
    //     })
    }


    const buttonEnable = (email!='') && (password!='')
    
  return (

    <>
    
    <Navbar/>
    <div className="loginsignup-page">
    <div className="container loginsignup-container ">
      <div className="header">
        <div className="heading text-primary">Start Your Bookings</div>
        <div className="underline"></div>
      </div>
      
    

      <div className="inputs ">

      { errorMessage && <p className="text-danger form-error">{errorMessage}</p>}
       
          <div className="input bg-dark">
            <img src={email_icon} alt="" />
            <input type="email" className="bg-dark inp-drk" placeholder="Email" value={email}
                        onInput={(event)=>setEmail(event.target.value)}/>
          </div>
        
        <div className="input bg-dark">
          <img src={password_icon} alt="" />
          <input className="bg-dark inp-drk"  type="password" placeholder="Password" value={password} onInput={(event)=>setPassword(event.target.value)}/>
        </div>
       

         <div className="forget-password ">
            Forget Password? <span className="text-primary" >Click Here</span>
          </div>

             
        <div className="submit-container">
        <button disabled={!buttonEnable}  className={"btn-login " +  (buttonEnable ? 'btn-enable' : '')  }  onClick={attemptLogin}>
        Sign In
        </button>
          
          
        </div>
      </div>
    </div>
    </div>
    </>
  
  );
}

export default CustomerLogin;
