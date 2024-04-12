import React from 'react'
import useRazorpay from "react-razorpay";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

import './css/Ticket.css'

function BkSuccess() {
  
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
  var amount =show.price * 100
  razorpayData.append('amount',show.price * 100)
  razorpayData.append('order_id',order_id)
// console.log(order_id)
   axios.post('http://127.0.0.1:8000/api/booking/'+order_id+'/create-razorpay-order/',razorpayData).then(response=>{
    // console.log(response.data)
    if(response.data.bool==true){

      // code from razorpay


      const options= {
        key: "rzp_test_OZZv3kK0jph7j5",
        amount: amount,
        currency: "INR",
        name: show.movie.title,
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: response.data.data.id,
        handler: (res) => {
          
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
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
          <div class="stub">
            <div class="top">
              <span class="admit">Admit</span>
              <span class="line"></span>
              <span class="num">
                Invitation
                <span>31415926</span>
              </span>
            </div>
            <div class="number">1</div>
            <div class="invite">
              Invite for you
            </div>
          </div>

          <div class="check">
            <div class="big">
             Success<br/> 
            </div>
            <div class="number">#1</div>
            <div class="info">
              <section>
                <div class="title ">DATE</div>
                <div>4/27/2016</div>
              </section>
              <section>
                <div class="title">TIME</div>
                <div>Ampersand</div>
              </section>
              <section>
                <div class="title">Invite Number</div>
                <div>31415926</div>
              </section>
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
          Pay 2000
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

export default BkSuccess