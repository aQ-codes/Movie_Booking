import React from 'react'

import Navbar from "../Navbar";
import Sidenav from '../Sidenav';
import ViewMovie from '../ViewMovie'


function MovieDetail() {
  return (
    <>
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
       <ViewMovie/>
       </div>
    </div>
    </>
   
  )
}

export default MovieDetail