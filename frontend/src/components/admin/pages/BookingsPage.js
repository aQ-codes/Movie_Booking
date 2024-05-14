import React from 'react'
import Bookings from '../Bookings'
import Sidenav from '../Sidenav'
import Navbar from '../Navbar'

function BookingsPage() {
  return (

   <> 
   <Navbar/>
   <div className ="wrapper">
      <Sidenav/> 
      <div className="main">
      <Bookings/>
      </div>
   </div>
   </>
  )
}

export default BookingsPage