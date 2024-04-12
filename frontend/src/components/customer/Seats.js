import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


function Seats(props) {
//   console.log(props.selshow)
    const navigate = useNavigate();

  function setBookingInfo(){
    // window.localStorage.setItem('selectedShow','hii')//
    localStorage.setItem("showselected", JSON.stringify(props.selshow));
    // console.log(props.selshow.id)
    navigate("/booking")



}

 
  return (
    <>
   
   <div className='col-6 '>

    <div class='seat-page me-5 '>

        <ul class="showcase  px-5">
            <li>
                <div class="seat"></div>
                <small>Available</small>
            </li>

            
            <li>
                <div class="seat occupied"></div>
                <small>Occupied</small>
            </li>

            <li>
                <div class="seat selected"></div>
                <small>Selected</small>
            </li>

        </ul>

        {/* <div class="screen "></div> */}

        <div class="row seat-section mt-4  ">

        <div className='text-center mb-4'> SCREEN </div>

        <div class=" seat-row  px-auto">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
        </div>
        <div class="seat-row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
        </div>

        <div class="seat-row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
        </div>

        <div class="seat-row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
        </div>

        <div class="seat-row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
        </div>

        <div class="seat-row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
            <div class="seat"></div>
        </div>
        
        </div>

        <div className='row  text-center p-4'>
        {/* <h4>Showing Seats For The Show DragonBallSuper on  16-08-2024</h4> */}
        <p class="text  ">
        You have selected <span id="count">0</span> seats for a price of &#8377;<span id="total">0</span>
        </p>

        <button className='col-6 btn btn-primary border-0 text-white p-2 mx-auto bk-txt' onClick={setBookingInfo}>Book Tickets</button>


        </div>


    </div>
</div>
    
    </>
  )
}

export default Seats