import React from 'react'
import './css/navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import axios from 'axios'
import { removeUser } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  var user = useSelector((store) => store.auth.user);
  const navigate = useNavigate();
 const dispatch = useDispatch();



  function logout() {
    if (user) {
      axios.post(
        "http://127.0.0.1:8000/api/customer/logout/",
        {},
        {
          headers: { Authorization: "Bearer " + user.token },
        }
      ).then(response=>{
        console.log(response.data)
        const bool=response.data.bool
        if(bool==true){
           dispatch(removeUser());
           navigate("/login");
   
        }
      });
     
    }
  }


  return (

    <nav class="navbar navbar-expand-lg navbar-dark NAVBOY fixed-top">
      {/* <!-- Container wrapper --> */}
      <div class="container-fluid">
        {/* <!-- Toggle button --> */}
      
    
        {/* <!-- Collapsible wrapper --> */}
        <div class=" navbar-collapse ourlogo" id="navbarSupportedContent">
          {/* <!-- Navbar brand --> */}
          <img className=' navboy-item'
              src={logo}
              height="30"
              alt="our_Logo"
              loading="lazy"
            />

          <a class=" mt-2 mt-lg-0 navboy-item navboy-title ourlogo" href="#">ViewBliss Cinemas
          </a>
           &nbsp; &nbsp;  &nbsp;
          {/* <!-- Left links --> */}
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-2">
            <li class="nav-item">
            <Link to={"/home"} class="nav-link navboy-item navboy-item-link"  href="#">Now Showing</Link>
            
            </li>

            <li class="nav-item">
            <a class="nav-link navboy-item navboy-item-link" href="#">Upcoming </a>
             
            </li>

          </ul>
          {/* <!-- Left links --> */}
        </div>



  
    
        {/* <!-- Right elements --> */}
        <div class="d-flex align-items-center navbar-nav">
   
   

        {!user ? (
        <>
        <li class="nav-item">
        <Link to={'/register'} class="nav-link navboy-item navboy-item-link me-3" href="#">Register </Link>
        </li>


        <li class="nav-item">
         <Link to={'/login'} class="nav-link navboy-item navboy-item-link me-3" href="#">Login </Link>
         </li>

        </>
         
         )  :   (
          <>
        <a href='#' class="nav-item">
      
        <i class="fa fa-user nav-link navboy-item navboy-item-link me-3" aria-hidden='true' > </i>
        </a>

        <li class="nav-item">
        <a class="nav-link navboy-item navboy-item-link me-3" href="#" onClick={logout}>Logout </a>
        </li>       
            
       
        </>
         
         )}

 
         </div>





        {/* <!-- Right elements --> */}
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
  )
}

export default Navbar