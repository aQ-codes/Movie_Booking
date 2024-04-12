import React from 'react'
import Navbar from "../Navbar";
import Sidenav from '../Sidenav';
import AllShows from '../AllShows';
import MovieStatusLinks from '../MovieStatusLinks';
import { Link } from 'react-router-dom';

function AllShowsPage() {
  return (
    <>
    <Navbar/>
    <div className ="wrapper">
       <Sidenav/> 
       <div className="main">

       <div className="col-11 text-end">
        
        <Link to="/admin/shows/add" className="btn btn-outline-success btn-large mt-2 ml-2 mb-2 btn-add"><i class="bi bi-plus-circle-fill"></i> 
        &nbsp; Add Show
        </Link>
        </div>
      
       <AllShows/>
       </div>
    </div>
    </>
  )
}

export default AllShowsPage