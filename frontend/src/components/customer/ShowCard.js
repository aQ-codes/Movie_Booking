import React from 'react'
import broly from "../Assets/broly.jpg";
import { Link } from "react-router-dom";

function ShowCard(props) {

  const title = props.movie.title
  const dataToPass = { name: title };
  // console.log(title)
  return (
    <>
    
    
    
    <div class="movie_card" id="tomb">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src="https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg"/>
      <h1>{props.movie.title}</h1>
      <h4>2018, <span>{props.movie.language}</span></h4>
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

      {/* <Link to={"/select/"+props.movie.id} >
      <li>
      <i class="fa fa-ticket"></i>
      <i class="material-icons">GET YOUR TICKETS</i>
  
      </li>

      </Link> */}
      <Link to={{ pathname: "/select/"+props.movie.id, state:  dataToPass }}>
      <li>
      <i class="fa fa-ticket"></i>
      <i class="material-icons">GET YOUR TICKETS</i>
  
      </li>

      </Link>
      

      </ul>
    </div>
  </div>
  <div class="blur_back ave_back" style={{  
  backgroundImage: "url(" + broly + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}></div>
  
</div>
    
    </>
  )
}

export default ShowCard