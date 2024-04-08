import React from "react";
import broly from "../Assets/broly.jpg";

import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import {  useSelector } from "react-redux";
import Popup from "../global/Popup";


function ViewMovie() {
 
  const [popup, setPopup] = useState(false)
  const [img, setImg] = useState([]) //movie image from server


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
            let imgLink = 'http://127.0.0.1:8000' + response.data.poster
            console.log(imgLink)
            // conso
            setImg(imgLink)

        })
    },[movId]);

  
    function deleteMovie() {
        axios.delete('http://127.0.0.1:8000/api/movies/'+movId+'/delete',
      ).then(response=>{
            navigate('/admin/movies');


        })
    }

    function setPopupfn(){
      setPopup(true)
    }

  return (
    <>
    <div className="container ">
  <div className="row " >

    <div className="col-md-3 mb-3">

      <div className="card">
      <img src={img} class="card-img-top img-thumbnail img-movie-detail" alt="" />
      </div>

    </div>

    <div class="col-md-5 mb-3">
      <div class="card">
        
      <div className="card-header card-header-e bg-info">
      <h2 class="card-title">{movie.title}</h2>
      </div>
        <div class="card-body">
        <p class="card-text text-secondary">{movie.description}</p>
          <h5 class="card-title">{movie.language}</h5>
          <h6 class="card-title">{movie.duration} minutes</h6>
          <h6 class="card-title text-danger ">{movie.status}</h6>
          
        </div>
        <div className="card-footer">
        <Link to={"/admin/movies/"+movId+"/edit"} className="btn btn-outline-primary">EDIT</Link>
        &nbsp;&nbsp;
        <button className="btn btn-danger " onClick={setPopupfn}>Delete</button>
        </div>


        <Popup trigger={popup}>
  
  <div className='text-danger text-center'><h3>Are You Sure want to delete this item ?</h3>
  </div>
       <div class="modal-footer my-4 card-footer  mx-auto">
           <button type="button" class="btn btn-danger  " onClick={deleteMovie} >OK</button>
         </div> 

       </Popup>
 
      </div>
    </div>
 
  </div>
</div>
    </>
  );
}

export default ViewMovie;
