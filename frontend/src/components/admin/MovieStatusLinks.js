import React from 'react'
import { Link } from 'react-router-dom'

function MovieStatusLinks() {
  return (
    <div>
       <div className="row mt-4">
          <div className="col-8 ">
       
            <a href="#" class="link-danger movies-status-header border border-danger  me-4 p-2">RUNNING MOVIES</a>

            <a href="#" class="link-secondary movies-status-header border border-secondary me-4 p-2">PAUSED MOVIES</a>
            <a href="#" class="link-primary movies-status-header border border-primary  me-4 p-2">UPCOMING MOVIES</a>
            <a href="#" class="link-info movies-status-header border border-success me-4 p-2" >COMPLETED MOVIES</a>
          </div>

          <div className="col-4 text-end">
        
            <Link to="/admin/movies/add" className="btn btn-outline-success btn-large mt-2 ml-2 mb-2"><i class="bi bi-plus-circle-fill"></i> 
               Add Movie
            </Link>
         </div>

       

    </div>


    </div>
  )
}

export default MovieStatusLinks