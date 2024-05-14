import React from "react";
import broly from "../Assets/broly.jpg";

import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function EditMovie() {
    let navigate = useNavigate();
    // var user = useSelector(store=>store.auth.user);
    const [successmsg, setSuccessMsg] = useState('')
    const [errormsg, setErrorMsg] = useState('')
    var {movId} = useParams()
    var [moviedata,setMovieData] = useState({
        "title": "",
        "language": "",
        "description": "",
        "duration": "",
        "status": "",
        "poster": ""}) 
    const [img, setImg] = useState(null) //movie image from server
    const [img2, setImg2] = useState(null) //movie image from server


    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/movies/'+movId).then(response=>{
            setMovieData(response.data)
            // console.log(response.data)
            let imgLink = 'http://127.0.0.1:8000' + response.data.poster
            // console.log(imgLink)
            setImg(imgLink)
            setImg2( response.data.poster)
        })
    },[movId]);

    // console.log(img)
    // console.log(moviedata.poster)
    console.log(moviedata)

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
  if(moviedata.poster==''){
    formdata.append('poster',img2)}
  else{
    formdata.append('poster',moviedata.poster)
  }
  //   for (var pair of formdata.entries()) {
  //     console.log(pair[0]+ ' - ' + pair[1]); 
  // }
    axios.patch('http://127.0.0.1:8000/api/movies/'+movId+'/edit/',formdata
 ).then(response=>{

    console.log(response.data)
    if(response.data==201){
    setErrorMsg(response.statusText)
    setSuccessMsg('')
    }
    else if(response.data.error){
    setErrorMsg(response.data.error)
    setSuccessMsg('')}

   else{
    setSuccessMsg(response.data)
   }
  }) // navigate('/medicines')
  .catch(error=>{
    if(error.response.data.errors){
        setErrorMsg(Object.values(error.response.data.errors).join(' '));
    }else{
        setErrorMsg('Failed to connect to api');
    }
  })

// navigate("/admin/movies");

 }



  return (
    <>

      
<div className="card  col-md-6 mx-auto mt-4">

  <div className="card-header bg-dark text-white ">
    EDIT MOVIE
  </div>

  <div className="card-body ">
 
  {successmsg && <div class="alert alert-success" role="alert">{successmsg}</div>}
  {errormsg && <div class="alert alert-danger" role="alert">{errormsg} </div>}


<form className="form-horizontal  " >

<div className="form-group mb-2" >
  <label className="col-md-9 control-label" htmlFor="movie_name">Title</label>  
  <div className="col">
  <input id="movie_name" name="title" placeholder="Enter movie title" className="form-control input-md " required value={moviedata.title} type="text" onChange={inputHandler}/>
    
  </div>
</div>


<div className="form-group mb-2">
  <label className="col control-label" htmlFor="product_name">Language</label>  
  <div className="col">
  <input id="product_name" name="language" placeholder="eg. Malayalam" className="form-control input-md" required value={moviedata.language} type="text"  onChange={inputHandler}/>
    
  </div>
</div>


<div className="form-group mb-2">
  <label className="col control-label" htmlFor="product_description">Description</label>
  <div className="col">                     
    <textarea className="form-control" id="product_description" name="description" placeholder='Tell something amout the movie..' rows='6' value={moviedata.description}  onChange={inputHandler}></textarea>
  </div>
</div>


<div className="form-group mb-2">
  <label className="col-md-9 control-label" htmlFor="available_quantity">Runtime</label>  
  <div className="col">
  <input id="available_quantity" name="duration" placeholder="Duration in minutes" className="form-control input-md" required="" value={moviedata.duration} type="number"  onChange={inputHandler}/>
    
  </div>
</div>




<div className="form-group mb-2">
  <label className="col-md-9 control-label" htmlFor="product_category">Status</label>
  <div className="col">
    <select id="product_category" name="status" className="form-control"  onChange={inputHandler}>
    <option value={moviedata.status} default>{moviedata.status}</option>
      <option value="Upcoming">Upcoming</option>
      <option value="Active">Active</option>
      <option value="Paused">Paused</option>
      <option value="Completed">Completed</option>
    </select>
  </div>
</div>

<div className="form-group mb-4">
  <label className="col-md-9 control-label" htmlFor="filebutton">Movie Poster</label>
  <div className="col-md-9 mb-4 ">
    <input id="filebutton" name="poster" className="input-file " type="file" onChange={fileHandler}/>
  </div>
 
  <img src={img}  height="150" width="100" className="thumbnail"></img>
 
</div>
 

<div className="form-group mt-4">
  <div className="col text-center">
    <button id="singlebutton" name="singlebutton" className="btn btn-primary col-md-4 "  onClick={submitHandler}>Update </button>
  </div>
  </div>

  {/* </div> */}
</form>


  </div>
</div>

</>

  );

}
export default EditMovie;
