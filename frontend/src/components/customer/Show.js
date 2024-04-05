import React from 'react'
import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
// import checkAuth from "./auth/checkAuth"
import './css/Show.css'


function Show(props) {

  const {movId} = useParams();

    let navigate = useNavigate();
   
    const [showdates, setShowDates] = useState('')
    const [showtimes, setShowTimes] = useState('')
    const [allshows, setShows] = useState([])
    const [booking, setBooking] =useState({
   
    // console.log(allshows)
            "bk_id": 'demo100',
            "date": '',
            "time": '',
         
        }
        );
    
  console.log(booking)
    
    const inputHandler = (event) => {
      setBooking({
        ...booking,
        [event.target.name]:event.target.value
      })
    
    }
    
  

    function fetchShow(){   
      axios.get('http://127.0.0.1:8000/api/shows2/'+movId
    ).then(response=>{

      setShows(response.data)
      // setShowTimeData(response.data);
      // console.log(response.data)
      // const shows = response.data

    //   response.data.map((item)=>
    //    console.log(item.movie.title)
    // //    console.log(item.movie.title)

    // )
  

  
      })
  
  }
  

  function submitHandler(event) {
    event.preventDefault();

        
  axios.post('http://127.0.0.1:8000/api/booking/temp/',{
//   {
//     name: name,
//     company: company,
//     expiry_date : date
// }
bk_id: booking.bk_id,
date: booking.date,
time: booking.time,
}
  // //     {
  // //       headers:{'Authorization':"Bearer "+ user.token}
  // //   }
    ).then(response=>{
          console.log(response.data)
          // console.log(response.data)
      })
  //   }
  //   else{
      // navigate('/login');
  //   }
  


  }


    
  useEffect(()=>{
       
    fetchShow()
  
  
    
  },[])
  



  return (

<>
    <div class='show-page col-6  '>
      

<div class="container col-8 tag shows-body text-white">
  <div class="row">
    <div class="col-md card-header">
      <div class="row justify-content-center text-custom">Dragon Ball Super</div>
    
      <div class="row justify-content-center"><div class="box shadow shadow"></div></div>
    </div>

    <div class="col-md">
      <div class="row justify-content-center">Screen</div>
      <div class="row justify-content-center">
        <p class="shadow text-custom tag">Dolby Atmos</p>
      </div>
    </div>

   
    <select class="form-select bg-dark text-white tag mt-4" name='date' onChange={inputHandler}> 
      <option value="null" selected>Select Date</option>
      {allshows.map((item,index)=>
            <option value={item.date.id}>{item.date.date}</option>
        )
      }
    </select>
    

    <select class="form-select bg-dark text-white tag mt-4" name='time' onChange={inputHandler}>
      <option value="null" selected>Select Time</option>
      {allshows.map((item,index)=>
            <option value={item.time.id}>{item.time.time}</option>
        )
      }

    </select>




    <div className="col-md-9">
    <button id="singlebutton" onClick={submitHandler} name="singlebutton" className="btn btn-primary col-md-4"  >Lets Book </button>
  </div>



{/* 


    <div class="col-md">

     
      <div class="row justify-content-center">
        <div class="card shadow-nohover">
          <div class="card-header">
            <h5 class="card-title">Card Title</h5>
          </div>
          <div class="card-block">
            <p class="card-text"></p>
          </div>
          </div>
     </div>
      
    </div> */}

    {/* <div class="col-md">
      <div class="row justify-content-center">Tag with hover effect</div>
      <div class="row justify-content-center">
        <p class="tag">Tag</p>
      </div>
    </div> */}


  </div>
</div>





</div>
</>
  )
}

export default Show;