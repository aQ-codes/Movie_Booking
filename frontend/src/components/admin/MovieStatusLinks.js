import React from 'react'
import { Link } from 'react-router-dom'

function MovieStatusLinks() {
  return (
    <div>
       <div className="row mt-4">
          <div className="col-9 ">
            
            <Link to='/admin/movies/' href="#" class="link-dark movies-status-header border border-dark btn me-4 p-2 ">ALL MOVIES</Link>

            <Link to='/admin/movies/running/' href="#" class="link-danger movies-status-header border border-danger btn  me-4  p-2 ">RUNNING MOVIES</Link>

            <Link to='/admin/movies/paused/' href="#" class="link-secondary movies-status-header border border-secondary btn me-4 p-2">PAUSED MOVIES</Link>

            <Link to='/admin/movies/upcoming/'href="#" class="link-primary movies-status-header border border-primary btn  me-4 p-2">UPCOMING MOVIES</Link>

            <Link to='/admin/movies/completed/' href="#" class="link-info movies-status-header border border-success btn me-4 p-2" >COMPLETED MOVIES</Link>
          </div>

          <div className="col-3 text-end">
        
            <Link to="/admin/movies/add" className="btn btn-outline-success btn-large mt-2 ml-2 mb-2 btn-add"><i class="bi bi-plus-circle-fill"></i> 
            &nbsp; Add Movie
            </Link>
         </div>

       

    </div>


    </div>
  )
}

export default MovieStatusLinks