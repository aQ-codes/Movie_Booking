import React from 'react'
import Navbar from "../Navbar";
import Sidenav from '../Sidenav';
import ListMovies from '../ListMovies'
import MovieStatusLinks from '../MovieStatusLinks';

function Movies() {
  return (
    <>
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
       <MovieStatusLinks/>
       <ListMovies/>
       </div>
    </div>
    </>
  )
}

export default Movies




   