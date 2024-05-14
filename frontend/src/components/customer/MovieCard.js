import React from 'react'
import broly from "../Assets/broly.jpg";

function MovieCard(props) {
    let imgLink = 'http://127.0.0.1:8000' + props.movie.poster
  return (
    <>

<div className='co m-card bg-dark p-2 mx-auto mb-5 mb-3 rounded' >

<div class="card col h-100 border-0"  >

    <div class=' bg-info overflow-hidde '>
      <img src={imgLink} class="c-image" alt=""  />
    </div>
    <div class="card-body bg-dark px-0">
        <h5 class="card-title font-weight-bold text-secondary text-center">{props.movie.title}</h5>

    </div>
</div>
</div>
</>
  )
}

export default MovieCard


// card-img-top img-cover  img-fluidimg-thumbnail card-image