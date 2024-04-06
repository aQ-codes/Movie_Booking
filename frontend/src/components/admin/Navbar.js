import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { removeAdmin } from "../../store/authSlice";

import "./css/navbar.css";
import logo from './Assets/images/viewbliss-logo.png'



function Navbar() {
  var admin = useSelector((store) => store.auth.admin);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logout() {
    if (admin) {
      axios.post(
        "http://127.0.0.1:8000/api/admin/logout/",
        {},
        {
          headers: { Authorization: "Bearer " + admin.token },
        }
      );
      
      dispatch(removeAdmin());
      navigate("/admin/login");
    }
  }


  return (

<nav className="navbar navbar-expand-lg admin-nav navbar-dark yoho "  >
<div className="container-fluid " >
<Link to='/admin/' className="navbar-brand " href="#">
       <img className='brand-logo ' src={logo} height="30" width="60" />
       <span className='outer-brand pacifico-regular'>View</span><span className='outer-brand inner-brand pacifico-regular'>Bliss </span>
</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto">
    {/* <li className="nav-item active">
      <a className="nav-link" href="#">Home</a>
    </li> */}
    {/* <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled" href="#">Disabled</a>
    </li> */}
  </ul>
  <form className="d-flex form-inline  my-2 my-lg-0">
    {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
    


    {admin ? (  <>

<button className="btn btn-outline-secondary my-2 my-sm-0 btn-sm" type="submit" onClick={logout}>


      
<i className="lni lni-exit"></i>Logout
         


</button>
            
          
           
            </> ) :('')}
           

  </form>
</div>
</div>
</nav>




  )
}

export default Navbar