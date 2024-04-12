import React, { useState } from 'react'

function TimeTag(props) {

  return (
    <>

    {props.shows.map((show)=>
        
        <div class=" col-2 time-tag me-1 p-2 mb-2 ms-3" onClick={() => {
          props.setShowSelected(show)

         }}  >
        <div class=" justify-content-center text-center ">{show.time.time}</div>
        <div class="justify-content-center text-center h66">{show.screen.name}</div>
        </div>
        
        
        
        
        )}

</>
   
  )
}

export default TimeTag