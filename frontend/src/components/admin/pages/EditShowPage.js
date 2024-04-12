import React from 'react'
import Navbar from "../Navbar";
import Sidenav from '../Sidenav';
import AddMovie from '../AddMovie';
import EditShow from '../EditShow';


function EditShowPage() {
  return (
    <> 
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
       <EditShow/>
       </div>
    </div>
    </>
  )
}

export default EditShowPage