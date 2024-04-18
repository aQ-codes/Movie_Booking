import React, { useState } from 'react'
import axios from 'axios'

function TimeTag(props) {

const [activetime , setActiveTime] =useState('')



  return (
    <>
 
       {props.shows.map((show)=>
        
        <div className={"col-2 time-tag me-1 p-2 mb-2 ms-3 "+(activetime==show.time.id ? 'time-active' : '')}  onClick={() => {
          props.setShowSelected(show)
          setActiveTime(show.time.id)

         }}>
        <div class="justify-content-center text-center text-light">{show.time.time}</div>
        <div class="justify-content-center text-center h66">{show.screen.name}</div>
        </div>
       )}
      
</>
   
  )
}

export default TimeTag