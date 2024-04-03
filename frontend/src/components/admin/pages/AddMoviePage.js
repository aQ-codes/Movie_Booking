import React from 'react'
import Navbar from "../Navbar";
import Sidenav from '../Sidenav';
import AddMovie from '../AddMovie';


function AddMoviePage() {
  return (
    <> 
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
       <AddMovie/>
       </div>
    </div>
    </>
  )
}

export default AddMoviePage