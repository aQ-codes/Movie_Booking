import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Seats(props) {
var user = useSelector(store=>store.auth.user);
const navigate = useNavigate();
const rows = ['A','B','C','D','E' ]
const cols = ['1','2','3','4','5','6','7','8','9','10']
const [seatoccup , setSeatOccup] =useState([])
const [seatselected , setSeatSelected] =useState({})
let buttonDisable
let bookEnable = false;
let seatselarray =[]
const [count ,setCount] = useState(0)


function setBooking(){

    Object.keys(seatselected).map(key => {
                 if(seatselected[key]==true){
                    seatselarray.push(key);
        
                 }
                }) //end of object.keys


    let bookinginfo = {
         'show':props.selshow.id,
          'seats':seatselarray.join(','),
          'amount':props.selshow.price * count,
          'status':'pending'
    }
        
    localStorage.setItem("showselected", JSON.stringify(props.selshow));
    sessionStorage.setItem("initialbooking", JSON.stringify(bookinginfo));
    
    if(!user){
    localStorage.setItem("navigate", JSON.stringify('/booking'));
      navigate('/login');
    }
    else{
        navigate("/booking")
    }

}


function fetchSeats(){
    let occupied=[]
    axios.get('http://127.0.0.1:8000/api/bookings/show/'+props.selshow.id,).then(response=>{
        // console.log(response.data)
         if( response.data){
            response.data.map((booking)=>{
            {booking.seats.split(',').map((seat)=>
            occupied.push(seat)   
            
            ) }//end of map
           })//end of map
       } //end of if
       setSeatOccup(occupied)

    }) //end of then

      }//end of fetchSeats

function handleSeatSelection(seat){
    // console.log(seat)
    // console.log(seatselected[seat])
    if(seatselected[seat]==true){
        setSeatSelected( { ...seatselected,  [seat]:false  } )
        setCount(count-1)
      }
    else if(seatselected[seat]==false){
        setSeatSelected( { ...seatselected,  [seat]:true  } )
        setCount(count+1)

      }
     else {
        setSeatSelected( { ...seatselected,  [seat]:true  } )
        setCount(count+1)
      }
    //   seatManage()


      }//end of handleSeatSelection

if (count>0){
    bookEnable=true;   
}

useEffect(()=>{
    if(props.selshow){
        fetchSeats()
    }
},[props.selshow])

// console.log(seatoccup)
console.log(seatselected)
// console.log(bookEnable)
// console.log(seatselarray)
// console.log(count)
// console.log(props.selshow.id)
// console.log(occupied)
// console.log(bookinginfo)




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

        <div class="row seat-section mt-4  ">

        <h5 className='text-center mb-4'> SCREEN </h5>

        <div class="row seat-row  px-auto">

         {/* {console.log(seatoccup.includes("A1"))} */}

            { props.selshow && rows.map((row) => 


            ( <div class='row'>{row}&nbsp;
              
                {cols.map((col)=>

                    //   ( buttonDisable=seatoccup.includes(row+col))

                      <button value={row+col}   class={"seat col-2 " + (buttonDisable=seatoccup.includes(row+col) ? 'occupied' : '') + (seatselected[row+col]==true ? 'selected' : '')} onClick={(event)=>{handleSeatSelection(event.target.value)} } disabled={buttonDisable}>{col}</button>
                    //   
                          )}

            </div> ) 
            )}
                
        </div>

 
        </div>

        <div className='row  text-center p-4'>
        {/* <h4>Showing Seats For The Show DragonBallSuper on  16-08-2024</h4> */}
        <p class="text  ">
        You have selected <span id="count">{count}</span> seats for a price of &#8377;<span id="total">{count * props.selshow.price}</span>
        </p>

        <button className='col-6 btn btn-primary border-0 text-white p-2 mx-auto bk-txt' onClick={setBooking} disabled={!bookEnable}>Book Tickets</button>


        </div>


    </div>
</div>
    
    </>
  )
}

export default Seats