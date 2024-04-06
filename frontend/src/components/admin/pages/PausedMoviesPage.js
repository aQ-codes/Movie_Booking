import React from 'react'
import Navbar from "../Navbar";
import Sidenav from '../Sidenav';

import MovieStatusLinks from '../MovieStatusLinks';
import PausedMovies from '../PausedMovies'
function PausedMoviesPage() {
  return (
    <>
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
        <MovieStatusLinks/>
        <PausedMovies/>
       </div>
    </div>
    </>
  )
}

export default PausedMoviesPage