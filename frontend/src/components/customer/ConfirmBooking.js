import React from 'react'
import useRazorpay from "react-razorpay";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/Ticket.css'

function ConfirmBooking() {
 const navigate = useNavigate();
  var user = useSelector((store) => store.auth.user);
  const [Razorpay] = useRazorpay();
  var [paymentmethod, setPaymentMethod] = useState('');
  const buttonEnable = (paymentmethod!='') 
  var show = window.localStorage.getItem('showselected');
  show = JSON.parse(show);
  var [order_id, setOrderId] = useState('');

  // console.log(buttonEnable)
  // console.log(paymentmethod)
  // console.log(show.price)
  // console.log(user.customer_id)
  
function handleCheckbox(event){
if (event.target.checked) {
  setPaymentMethod(event.target.value)
}
else 
  setPaymentMethod('')
}

function payHandler(event){
  event.preventDefault();
  axios.post('http://127.0.0.1:8000/api/booking/',{
  bk_id: '125969',
  show:show.id,
  customer:user.customer_id
  }).then(response=>{
  //  console.log(response.data)
   setOrderId(response.data.booking_id)


   razorpayHandler()
  })
}


function razorpayHandler(){
  var razorpayData = new FormData();
  var order_amount =show.price * 100
  razorpayData.append('amount',order_amount)
  razorpayData.append('order_id',order_id)
// console.log(order_id)
   axios.post('http://127.0.0.1:8000/api/booking/create-razorpay-order/',razorpayData).then(response=>{
    // console.log(response.data)
    if(response.data.bool==true){

      // code from razorpay


      const options= {
        key: "rzp_test_OZZv3kK0jph7j5",
        amount: order_amount,
        currency: "INR",
        name: show.movie.title,
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: response.data.data.id,
        handler: (res) => {
          navigate("/booking/success")
          
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    ;
  
    }
   }) //end of then

  //  const order =  createRazerpayOrder({

  //  }); //order created in razorpay server

}







  return (
    <>
    <div className='booking'>     

{/* ticket */}

        <div class="ticket ">

          <div class="check check1">
            <div class="big mb-2">
              {show.movie.title}<br/> 
            </div>
            <div>  {show.movie.language}</div>
            <div class="number">1</div>
            <div class="info mt-3">
              <section>
                <div class="title mb-2 ">DATE</div>
                <div>{show.date.date}</div>
              </section>
              <section>
                <div class="title mb-2">TIME</div>
                <div>{show.time.time}</div>
              </section>
              <section>
                <div class="title mb-2">Screen</div>
                <div>{show.screen.name}</div>
              </section>
            </div>

            <div>
            <div class="title mt-3 mb-2">Ticket Price :
               <span class="text-danger">  &#8377; {show.price} </span>
            </div>              
            </div>

            <div>
            <div class="title  mb-2">Convenience Fees :
               <span class="text-danger"> &#8377; 0 </span>
            </div>              
            </div>

          </div>

        </div>

{/* choose payment method */}
        <div className='col mt-5'>

        <div class="card bg-dark text-white col-5 mx-auto">
         <div class="card-header text-center">Choose Payment</div>
         <div class="card-body">

           <div class="form-check">
           <input class="form-check-input" type="checkbox" value="razorpay" id="defaultCheck1" onChange={handleCheckbox}/>
           <label class="form-check-label" for="defaultCheck1">
           RazorPay
            </label>
            </div>

         </div>

        <div class="card-footer text-center">
          <button className='btn col-4 btn-danger ' disabled={!buttonEnable} onClick={payHandler}>
          Pay  &#8377; {show.price}
        </button>
        </div>

        </div>
        {/* end of card  */}

        </div>
 {/* end of payment method col  */}

  
    </div>
    </>
  )
}

export default ConfirmBooking