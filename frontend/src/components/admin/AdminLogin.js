import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";

import { setAdmin } from "../../store/authSlice";





function AdminLogin() {

        var [username, setUsername] = useState('');
        var [password, setPassword] = useState('');
        var [errorMessage, setErrorMessage] = useState('');
        const dispatch = useDispatch();
        const navigate = useNavigate();
      
      
          function attemptLogin(event) {
              event.preventDefault();
               
              axios.post('http://127.0.0.1:8000/api/admin/login/',{

                  username:username,
                  password:password
              }).then(response=>{
                  if (response.data.error){
                      setErrorMessage(response.data.error)
                  }
                  else{ 
                      var admin = {
                          username:username,
                          token:response.data.token
                      }
                      dispatch(setAdmin(admin));
                      console.log(admin)
                      navigate("/admin/dashboard")
                  }
                //   console.log(response.data)
              
        
              })

          }     
 
 const buttonEnable = (username!='') && (password!='')
        

  return (
    <div>

<section class="page-section" id="contact">
            <div class="container  px-3 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0 custom1 text-primary">Admin Login!</h2>
                        <hr class="divider divider-light" />
                        <p class="text-white mb-5">Type in Username and Password</p>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div class="col-lg-6">
                  
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                           
                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" value={username}
                        onInput={(event)=>setUsername(event.target.value)} />

                                <label for="name">username</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="password" placeholder="" data-sb-validations="required,email" value={password} onInput={(event)=>setPassword(event.target.value)}/>

                                <label for="email">Password</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                                            
                            { errorMessage && <div class="text-center text-danger mb-3">{errorMessage}</div> }

          
                         
                            <div class="d-grid"><button class="btn btn-primary btn-xl " id="submitButton" type="submit" disabled={!buttonEnable} onClick={attemptLogin}>Login</button></div>
                        </form>
                 </div>
                </div>
            </div>
        </section>




    </div>
  )
}

export default AdminLogin