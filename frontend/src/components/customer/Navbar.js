import React from 'react'
import './css/navbar.css'
import logo from '../Assets/logo.png'
function Navbar() {
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
              <a class="nav-link navboy-item navboy-item-link" href="#">Now Showing</a>
            </li>

            <li class="nav-item">
              <a class="nav-link navboy-item navboy-item-link"  href="#">Upcoming</a>
            </li>

          </ul>
          {/* <!-- Left links --> */}
        </div>



  
    
        {/* <!-- Right elements --> */}
        <div class="d-flex align-items-center">

          {/* <!-- Icon --> */}
          <a class="text-reset me-3" href="#">
            <i class="fas fa-shopping-cart"></i>fdfdsfdsfs
          </a>
        </div>
        {/* <!-- Right elements --> */}
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
  )
}

export default Navbar