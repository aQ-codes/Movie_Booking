import React from 'react'
import { useState } from 'react'

import Navbar from '../Navbar';
import Seats from '../Seats';
import Show from '../Show';
import '../css/selectshow.css'



function SelectShow() {

  const [selshow, setShowSelected] =useState('');
  // const [activetime , setActiveTime] =useState('')

  // console.log(selshow)


  return (
    <>

    <Navbar/>
    <div class='show-main'>
    
    <Show setShowSelected={setShowSelected} />
    <Seats selshow={selshow} />
    </div>
    
    </>  
      
  )
}

export default SelectShow