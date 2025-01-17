import React from 'react'

import Navbar from "../Navbar";
import Sidenav from '../Sidenav';
import ViewMovie from '../ViewMovie'
import ListMovieShows from '../ListMovieShows';

function MovieDetail() {
  return (
    <>
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
       <ViewMovie/>
       <ListMovieShows/>

       </div>
    </div>
    </>
   
  )
}

export default MovieDetail