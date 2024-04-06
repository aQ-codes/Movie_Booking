import React from 'react'
import Navbar from "../Navbar";
import Sidenav from '../Sidenav';

import MovieStatusLinks from '../MovieStatusLinks';
import UpcomingMovies from '../UpcomingMovies'

function UpcomingMoviesPage() {
  return (
    <>
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
        <MovieStatusLinks/>
        <UpcomingMovies/>
       </div>
    </div>
    </>
  )
}

export default UpcomingMoviesPage