import React from 'react'
import Navbar from '../Navbar'
import '../css/profile.css'
import MyBookings from '../MyBookings'
import checkAuth from '../auth/checkAuth';

function Profile() {

  
  return (
  <>

    <Navbar/>
    <div className='profile-sec'>
    <MyBookings/>
    </div>

  </>
  )
}

export default checkAuth(Profile)


