import React from 'react'
import useRazorpay from "react-razorpay";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import './css/Ticket.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import QRCode from "react-qr-code";
// import emailjs from '@emailjs/browser';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function BkSuccess() {
  
  // var user = useSelector((store) => store.auth.user);
  var user = window.localStorage.getItem('user');
  user = JSON.parse(user);
  var show = window.localStorage.getItem('showselected');
  show = JSON.parse(show);
  var booking = window.sessionStorage.getItem('initialbooking');
  booking = JSON.parse(booking);
  var qrvalue = booking.bk_id + ' ' + show
  const pdfRef = useRef()
  
  useEffect(()=>{
    
    var bk_email = window.sessionStorage.getItem('email');
    if (bk_email){
    bk_email = JSON.parse(bk_email);
      if (bk_email!=booking.bk_id){
         sentMail()
       }
      }
    else{
      sentMail()
     }
},[])


function sentMail(){

  var data = {
    service_id: 'service_z24g7ji',
    template_id: 'template_bger1q7',
    user_id: 'HcQi47K2HyZHjB8r1',
    template_params: {
      from_name : 'ViewBliss',
      from_email : 'vpaqil@gmail.com',
      to_name : user.name ,
      to_email:user.email,
      message: 'Your Booking for '+ show.movie.title + ' is confirmed.You can download your ticket from your profile at our website.Enjoy the Show.'
    }
};
  axios.post('https://api.emailjs.com/api/v1.0/email/send',data).then(response=>{
    console.log(response.data)
    
    }).catch(error=>{
      console.log(error)
    })
    sessionStorage.setItem("email", JSON.stringify(booking.bk_id));

  }
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth , pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth*ratio, imgHeight*ratio);
      pdf.save('ticket.pdf');
    })
  }

  return (
    <>
    <div className='booking bg-warnin p-2  '>     
{/* heading */}
      <div className='p-4 bg-inf' > 
        <h1 className='text-center  success'>Your Ticket is Ready !!! &#128525;</h1>
        <h5 className='text-center  text-secondary'>Download from your profile</h5>
       </div>
{/* ticket */}  
      <div class="ticket m-4  mx-auto col-8" ref={pdfRef}>
     {/* ticket left side  */}
          <div class="stub col-3">

            <div class="top">
              <span class="admit">{booking.bk_id}</span>
              <span class="line"></span>
              <span class="num">
               {user.email}
              </span>
            </div>

            <div class="number bg-warnin"> <QRCode
             size={120}
              value={qrvalue} />
            </div>

            <div className='row welcome'>
              ViewBliss Cinemas Welcomes You &#128512;
            </div>
    
            {/* <div class="invite">
              Invite for you
            </div> */}
          </div>
    {/* ticket right side  */}
          <div class="check col-6">
         
              <div class="big mb-2">
                {show.movie.title}<br/> 
              </div>
              <div> {show.movie.language}</div>
              <div class="number">{booking.seats.split(',').length}</div>

              <div class="info mt-3 row ">
          
                <section className='col-3'>
                  <div class="title mb-2 ">DATE</div>
                  <div>{show.date.date}</div>
                </section>
                <section className='col-2'>
                  <div class="title mb-2">TIME</div>
                  <div>{show.time.time}</div>
                </section>
                <section className='col-3'>
                  <div class="title mb-2">Screen</div>
                  <div>{show.screen.name}</div>
                </section>

                <section className='col-4  '>
                  <div class="title mb-2 ">Seats</div>
                  <div className='ovflw ' >{booking.seats}</div>
                </section>

              </div>

                <div>
                <div class="title mt-3 mb-2">Payment :
                  <span class="text-bold text-info">  &#8377; {booking.amount} </span>
                </div>              
                </div>
          
          </div> 
          {/* end of right side ticket  */}
        </div>
       {/* end of ticket  */}

       <div class="dwnld text-center">
       <Link className='' onClick={downloadPDF}> DOWNLOAD&ensp;<i class="fa fa-download" aria-hidden="true"></i> 
                </Link>
        </div>



   
    </div>
    </>
  )
}

export default BkSuccess