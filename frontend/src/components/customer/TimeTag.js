import React from 'react'

function TimeTag(props) {

    // console.log(props.shows)


  return (
    <>

    {props.shows.map((show)=>
        
        <div class=" col-2 time-tag me-1 p-2 mb-2 ms-3">
        <div class=" justify-content-center text-center ">{show.time.time}</div>
        <div class="justify-content-center text-center h66">{show.screen.name}</div>
        </div>
        
        
        
        
        )}

</>
   
  )
}

export default TimeTag