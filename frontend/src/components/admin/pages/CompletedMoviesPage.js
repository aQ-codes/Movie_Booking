import React from 'react'
import Navbar from "../Navbar";
import Sidenav from '../Sidenav';

import MovieStatusLinks from '../MovieStatusLinks';
import CompletedMovies from '../CompletedMovies'

function CompletedMoviesPage() {
  return (
    <>
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
        <MovieStatusLinks/>
        <CompletedMovies/>
       </div>
    </div>
    </>
  )
}

export default CompletedMoviesPage