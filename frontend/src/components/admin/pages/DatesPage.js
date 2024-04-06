import React from 'react'
import ListDate from '../ListDate'
import Navbar from "../Navbar";
import Sidenav from '../Sidenav';

function DatesPage() {
  return (
    <>
     <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
       <ListDate/>
       </div>
    </div>
  
    </>
  )
}

export default DatesPage