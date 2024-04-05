import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {  useSelector } from "react-redux";
// import checkAuth from "./auth/checkAuth"

function AddMovie() {

let navigate = useNavigate();
// const baseurl = 'http://127.0.0.1:8000/api/'
const [successmsg, setSuccessMsg] = useState('')
const [errormsg, setErrorMsg] = useState('')
const [moviedata, setMovieData] = useState({
        "title": "",
        "language": "",
        "description": "",
        "duration": "",
        "status": "Upcoming",
        "poster": ""
      });


const inputHandler = (event) => {
  setMovieData({
    ...moviedata,
    [event.target.name]:event.target.value
  })
  
}

const fileHandler = (event) => {
  setMovieData({
    ...moviedata,
    [event.target.name]:event.target.files[0]
  })
}

 function submitHandler(event) {
  event.preventDefault();
  const formdata = new FormData();
  formdata.append('title',moviedata.title)
  formdata.append('language',moviedata.language)
  formdata.append('description',moviedata.description)
  formdata.append('duration',moviedata.duration)
  formdata.append('status',moviedata.status)
  formdata.append('poster',moviedata.poster)
  console.log(formdata)

    axios.post('http://127.0.0.1:8000/api/movies/',formdata
 ).then(response=>{
  console.log(response.data)
   if(response.data==201){
    setErrorMsg(response.statusText)
    setSuccessMsg('')
   }
   else{
    setErrorMsg('')
    setSuccessMsg(response.statusText)

   }
  }) // navigate('/medicines')
  .catch(error=>{
    if(error.response.data.errors){
        setErrorMsg(Object.values(error.response.data.errors).join(' '));
    }else{
        setErrorMsg('Failed to connect to api');
    }
  })
//  console.log(moviedata)
navigate("/admin/movies");

}












  return (

<div className="card col-md-6">

  <div className="card-header">
    ADD MOVIE
  </div>

  <div className="card-body ">
 
  {successmsg && <div class="alert alert-success" role="alert">{successmsg}</div>}
  {errormsg && <div class="alert alert-danger" role="alert">{errormsg} </div>}

<form className="form-horizontal " >

<div className="form-group mb-2" >
  <label className="col-md-9 control-label" htmlFor="movie_name">Title</label>  
  <div className="col-md-9">
  <input id="movie_name" name="title" placeholder="Enter movie title" className="form-control input-md" required value={moviedata.title} type="text" onChange={inputHandler}/>
    
  </div>
</div>


<div className="form-group mb-2">
  <label className="col-md-9 control-label" htmlFor="product_name">Language</label>  
  <div className="col-md-9">
  <input id="product_name" name="language" placeholder="eg. Malayalam" className="form-control input-md" required="" value={moviedata.language} type="text"  onChange={inputHandler}/>
    
  </div>
</div>


<div className="form-group mb-2">
  <label className="col-md-9 control-label" htmlFor="product_description">Description</label>
  <div className="col-md-9">                     
    <textarea className="form-control" id="product_description" name="description" placeholder='Tell something amout the movie..' rows='6' value={moviedata.description}  onChange={inputHandler}></textarea>
  </div>
</div>


<div className="form-group mb-2">
  <label className="col-md-9 control-label" htmlFor="available_quantity">Runtime</label>  
  <div className="col-md-9">
  <input id="available_quantity" name="duration" placeholder="Duration in minutes" className="form-control input-md" required="" value={moviedata.duration} type="number"  onChange={inputHandler}/>
    
  </div>
</div>




<div className="form-group mb-2">
  <label className="col-md-9 control-label" htmlFor="product_category">Status</label>
  <div className="col-md-9">
    <select id="product_categorie" name="status" className="form-control"  onChange={inputHandler}>
      <option value="Upcoming">Upcoming</option>
      <option value="Running">Running</option>
      <option value="Paused">Paused</option>
      <option value="Completed">Completed</option>
    </select>
  </div>
</div>

<div className="form-group mb-4">
  <label className="col-md-9 control-label" htmlFor="filebutton">Movie Poster</label>
  <div className="col-md-9">
    <input id="filebutton" name="poster" className="input-file" type="file" onChange={fileHandler}/>
  </div>
</div>


<div className="form-group mt-4">
  <div className="col-md-9">
    <button id="singlebutton" name="singlebutton" className="btn btn-primary col-md-4"  onClick={submitHandler}>Add </button>
  </div>
  </div>


</form>

  </div>
</div>







  )
}

export default AddMovie