import React from 'react'
import { useState } from 'react'

import Navbar from '../Navbar';
import BkSuccess from '../BkSuccess';
import '../css/Ticket.css'




function BookingSuccess() {

  const [selshow, setShowSelected] =useState('');
  // console.log(selshow)


  return (
    <>
   
    <div className='booking-page ' >
    <Navbar/>
    <BkSuccess/>
    </div>
  
    
    </>  
      
  )
}

export default BookingSuccess