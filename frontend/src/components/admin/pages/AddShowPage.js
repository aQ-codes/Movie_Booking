import React from 'react'
import Navbar from "../Navbar";
import Sidenav from '../Sidenav';
import AddMovie from '../AddMovie';
import AddShow from '../AddShow';


function AddShowPage() {
  return (
    <> 
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
       <AddShow/>
       </div>
    </div>
    </>
  )
}

export default AddShowPage