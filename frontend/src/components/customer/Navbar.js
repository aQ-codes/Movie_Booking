import React from 'react'
import axios from 'axios'
import { Link ,NavLink} from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import './css/navbar.css'

function Navbar() {

  var user = useSelector((store) => store.auth.user);
  const navigate = useNavigate();

  return (
    <>
 
    <nav class="navbar navbar-dark  navbar-expand-lg  NAVBOY  fixed-top">


      <div class="container ">

  <Link to='/' className="navbar-brand ">
    
       <span className='outer-brand pacifico-regular'>View</span><span className='outer-brand inner-brand pacifico-regular'>Bliss </span>
  </Link>



   
        <div class=" navbar-collapse " id="navbarSupportedContent">
      
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-2">

            <li class="nav-item">
            <NavLink to={"/"} className={
                "nav-link navboy-item " + ((status) => (status.isActive ? "active" : ""))
              }  >Now Showing</NavLink>
            
            </li>

            <li class="nav-item">
            <NavLink to={"/upcoming"} className={
                "nav-link navboy-item " + ((status) => (status.isActive ? "active" : ""))
              }  >Upcoming</NavLink>
            
            </li>


          </ul>
          {/* <!-- Left links --> */}
        </div>

    
        {/* <!-- Right links --> */}
        <div class="d-flex align-items-center navbar-nav">
   
        {!user ? (
        <>
 
        <li class="nav-item">
            <NavLink to={"/register"} className={
                "nav-link navboy-item me-3 " + ((status) => (status.isActive ? "active" : ""))
              }  >Register</NavLink>
            
         </li>

         <li class="nav-item">
            <NavLink to={"/login"} className={
                "nav-link navboy-item me-3 " + ((status) => (status.isActive ? "active" : ""))
              }  >Login</NavLink>
            
         </li>

        </>
         
         )  :   (
          <>
      
       <li class="nav-item">
        <NavLink to={'/profile'} className={
                "fa fa-user nav-link navboy-item me-3 " + ((status) => (status.isActive ? "active" : ""))
              }>
        </NavLink>
        </li>

        </>
         
         )}

 
         </div>

        {/* <!-- Right elements --> */}
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
    </> )
}

export default Navbar