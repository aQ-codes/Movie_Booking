import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";

import ListBookingItem from "./ListBookingItem";


function Bookings() {
    var [bookings, setBookings]=useState([]);
    const [search,setSearch] = useState([]);

    // console.log(search)
    
    async function fetchBookings(){
        axios.get('http://127.0.0.1:8000/api/bookings/'
      ).then(response=>{
            setBookings(response.data);
            // console.log(response.data)
        })
    //   }
    //   else{
        // navigate('/login');
    //   }
    }

        
    useEffect(()=>{
     
        fetchBookings()
        
    },[])

  return (
    <div className="row">
    <div className="col-12 ">

    <div class="card">
    <div class="card-header card-header-e movies-status-header bg-white text-dark">ALL BOOKINGS</div>
     </div>
     <br/>
      <div class="form-outline" data-mdb-input-init>
       <input type="search" id="form1" class="form-control" placeholder="Search Bookings..." aria-label="Search" onChange={(e)=>{setSearch(e.target.value)  }}/>
     </div>

      <table className="table table-striped table-hover mt-3 text-center table-bordered">
      <thead>

        <tr>
          <th>Booking Id</th>
          <th>Customer</th>
          <th>Movie</th>
          <th>Seats</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        
            {bookings.filter((booking)=>{
                return search.toString().toLowerCase() === '' ? booking : booking.bk_id.toString().toLowerCase().includes(search)
            }).map((booking) => ( <tr><ListBookingItem key={booking.id} booking={booking} refresh={fetchBookings}/>  </tr>      ))}
        

        </tbody>
      
      </table>
    </div>
  </div>

  )
}

export default Bookings