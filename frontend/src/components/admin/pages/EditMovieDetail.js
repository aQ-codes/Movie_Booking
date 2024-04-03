import React from 'react'

import Navbar from "../Navbar";
import Sidenav from '../Sidenav';
import EditMovie from '../EditMovie'


function EditMovieDetail() {
  return (
    <>
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
       <EditMovie/>
       </div>
    </div>
    </>
   
  )
}

export default EditMovieDetail