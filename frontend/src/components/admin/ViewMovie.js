import React from "react";
import broly from "../Assets/broly.jpg";

import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import {  useSelector } from "react-redux";



function ViewMovie() {


    // var user = useSelector(store=>store.auth.user);
    let navigate = useNavigate();

    var {movId} = useParams()
    var [movie,setMovie] = useState({title: "",
    language: "",
    description: "",
    duration: "",
    status: "Upcoming",
    poster: ""
})

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/movies/'+movId).then(response=>{
            setMovie(response.data)
        })
    },[movId]);


    function deleteMovie() {
        axios.delete('http://127.0.0.1:8000/api/movies/'+movId+'/delete',
      ).then(response=>{
            navigate('/admin/movies');


        })
    }

  return (
    <>
    <div className="container ">
  <div className="row " >

    <div className="col-md-3 mb-3">

      <div className="card">
      <img src={broly} class="card-img-top img-thumbnail img-movie-detail" alt="" />
        <div class="card-footer w-100 text-muted">
        <a href="#" class="btn btn-primary mr-2"> ADD SHOW </a>
        &nbsp;&nbsp;
        <a href="#" class="btn btn-primary"> EDIT SHOW </a>
        </div>
      </div>

    </div>

    <div class="col-md-5 mb-3">
      <div class="card">
        
      <div className="card-header">
      <h2 class="card-title">{movie.title}</h2>
      </div>
        <div class="card-body">
        <p class="card-text text-secondary">{movie.description}</p>
          <h5 class="card-title">{movie.language}</h5>
          <h6 class="card-title">{movie.duration} minutes</h6>
          <h6 class="card-title text-danger ">{movie.status}</h6>
          
        </div>
        <div className="card-footer">
        <Link to={"/admin/movies/"+movId+"/edit"} className="btn btn-primary">EDIT</Link>
        &nbsp;&nbsp;
        {/* <Link to={"/admin/movies/"+movId+"/delete"} className="btn btn-danger">DELETE</Link> */}
        <button className="btn btn-danger " onClick={deleteMovie}>Delete</button>
        </div>
      </div>
    </div>
 
  </div>
</div>
    </>
  );
}

export default ViewMovie;