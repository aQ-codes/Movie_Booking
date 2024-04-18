import React from 'react'

import checkAuthAdmin from "../auth/checkAuthAdmin"

import Navbar from "../Navbar";
import Sidenav from '../Sidenav';
import ListAnalytics from '../ListAnalytics';

import "../css/body.css";

function DashboardPage() {
  
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

export default checkAuthAdmin(DashboardPage)