import React from 'react'
import Navbar from "../Navbar";
import Sidenav from '../Sidenav';
import ListAnalytics from '../ListAnalytics';
import "../css/body.css";

function Dashboard() {
  return (
    <> 
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
       <ListAnalytics/>
       </div>
    </div>
    </>
  )
}

export default Dashboard