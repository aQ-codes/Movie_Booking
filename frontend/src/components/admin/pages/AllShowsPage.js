import React from 'react'
import Navbar from "../Navbar";
import Sidenav from '../Sidenav';
import AllShows from '../AllShows';
import MovieStatusLinks from '../MovieStatusLinks';

function AllShowsPage() {
  return (
    <>
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">
       {/* <MovieStatusLinks/> */}
       <AllShows/>
       </div>
    </div>
    </>
  )
}

export default AllShowsPage