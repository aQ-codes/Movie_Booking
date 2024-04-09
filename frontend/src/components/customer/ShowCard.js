import React from 'react'
import broly from "../Assets/broly.jpg";
import { Link } from "react-router-dom";
import { useState } from 'react';
function ShowCard(props) {

  const title = props.movie.title
  const dataToPass = { name: title };
  let imgLink = 'http://127.0.0.1:8000' + props.movie.poster
            // console.log(imgLink)
            
  // console.log(props.movie)
  return (
    <>
    
    
    
    <div class="movie_card" id="tomb">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src={imgLink}/>
      <h1>{props.movie.title}</h1>
      <h4> <span>{props.movie.language}</span></h4>
      <span class="minutes">{props.movie.duration} mins</span>
      <p class="type">Action, Adventure, Sci-Fi</p>
    </div>
    <div class="movie_desc">
      <p class="text">
     {  props.movie.description }
      </p>
    </div>
    <div class="movie_social">
      <ul>

      <Link to={{ pathname: "/select/movie/"+props.movie.id, state:  dataToPass }}>
      <li>
      <i class="fa fa-ticket"></i>
      <i class="material-icons">GET YOUR TICKETS</i>
  
      </li>

      </Link>
      

      </ul>
    </div>
  </div>
  <div class="blur_back ave_back" style={{  
  backgroundImage: "url(" + imgLink + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}></div>
  
</div>
    
    </>
  )
}

export default ShowCard