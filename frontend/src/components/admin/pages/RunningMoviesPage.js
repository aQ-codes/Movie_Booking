import React from 'react'
import Navbar from "../Navbar";
import Sidenav from '../Sidenav';

import MovieStatusLinks from '../MovieStatusLinks';
import RunningMovies from '../RunningMovies'



function RunningMoviesPage() {
  return (
    <>
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
        <MovieStatusLinks/>
        <RunningMovies/>
       </div>
    </div>
    </>
  )
}

export default RunningMoviesPage




   