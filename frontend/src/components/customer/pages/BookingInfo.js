import React from 'react'
import { useState } from 'react'

import Navbar from '../Navbar';
import ConfirmBooking from '../ConfirmBooking';
import '../css/Ticket.css'
import checkAuth from '../auth/checkAuth';



function BookingInfo() {

  const [selshow, setShowSelected] =useState('');
  // console.log(selshow)


  return (
    <>
   
    <div className='booking-page' >
    <Navbar/>
    <ConfirmBooking/>
    </div>
  
    
    </>  
      
  )
}

export default checkAuth(BookingInfo)