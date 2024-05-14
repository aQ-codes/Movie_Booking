import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';

import Navbar from '../Navbar';
import BkSuccess from '../BkSuccess';
import '../css/Ticket.css'
import checkAuth from '../auth/checkAuth';




function BookingSuccess() {
  var user = useSelector((store) => store.auth.user);
  const [selshow, setShowSelected] =useState('');
  // console.log(selshow)


 if (user) return (
    <>
   
    <div className='booking-page ' >
    <Navbar/>
    <BkSuccess/>
    </div>
  
    
    </>  
      
  )
}

export default checkAuth(BookingSuccess)