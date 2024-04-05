import React from 'react'
import "./css/navbar.css";

function Navbar() {
  return (

<nav className="navbar navbar-expand-lg admin-nav navbar-dark bg-dark yoho "  >
<div className="container-fluid " >
<a className="navbar-brand" href="#">ViewBliss</a>
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
    <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit"><i className="lni lni-exit"></i> Logout</button>
  </form>
</div>
</div>
</nav>




  )
}

export default Navbar