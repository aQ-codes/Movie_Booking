import React from 'react'
import Navbar from "../Navbar";
import Sidenav from '../Sidenav';
import ListMovies from '../ListMovies'

function Movies() {
  return (
    <>
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
       <ListMovies/>
       </div>
    </div>
    </>
  )
}

export default Movies




   