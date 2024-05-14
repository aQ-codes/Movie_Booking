import React, { useEffect } from 'react'
import QRCode from "react-qr-code";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import './css/Ticketpopup.css'
import checkAuth from './auth/checkAuth';



function Ticket(props) {
    // var user = useSelector((store) => store.auth.user);
    

    var user = window.localStorage.getItem('user');
    user = JSON.parse(user);
    const pdfRef = useRef()
    let qrvalue = `Booking Id : ${props.booking.bk_id}, Movie:${props.booking.show.movie.title},Seats: ${props.booking.seats},Date: ${props.booking.show.date.date},Time:${props.booking.show.time.time},Status:${props.booking.status}`;

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
useEffect(()=>{
     
    //  {props.setTicket(false)} 
  
},[])

function setPopupfn(id){
    props.setPopupTicket(false)
    props.setTicket({
        ...props.ticket,
        [id]:false
       
      })
  }


return (props.trigger) ? (
    <>
    <div className='container ticket-popup'>

    <div className='row tkt-row bg-transparent '>
    {/* <div className='row'>close</div> */}
    <div className='row bg-inf mb-0 '>
        <div className='col-7 bg-succes p-0 d-flex justify-content-end  mx-auto'>
           <div className='col-1  btn btn-outline-danger' onClick={()=>{setPopupfn(props.booking.id)}}><i class="fa fa-times" aria-hidden="true"></i>
           </div>
        </div>
    </div>
    {/* ticket */}  
    <div class="col ticketp mx-auto bg-warning mb-0 col-7 p-0" ref={pdfRef}>
    {/* ticket left side  */}
         <div class="stubp bg-primary col-4 ">

          <div class="topp">
            <span class="admitp">{props.booking.bk_id}</span>
            <span class="linep"></span>
            <span class="nump">
              {user.email}
             </span>
          </div>

           <div class="numberp bg-warnin"> <QRCode
           size={120}
            value={qrvalue} />
          </div>

          <div className='row welcomep'>
            ViewBliss Cinemas Welcomes You &#128512;
          </div>
  
        </div>
  {/* ticket right side  */}
        <div class="checkp col-8">
        
             <div class="bigp mb-2"> {props.booking.show.movie.title}   <br/> 
             </div>
             <div> {props.booking.show.movie.language}</div>
   
             <div class="numberp">{props.booking.seats.split(',').length}</div>

            <div class="infop mt-4 row ">
        
              <section className='col-3 bg-warnin'>
                <div class="titlep mb-2">DATE</div>
                 <div> {props.booking.show.date.date}</div>
               </section>
               <section className='col-2  bg-inf'>
               <div class="titlep mb-2">TIME</div>
                 <div>  {props.booking.show.time.time}</div>
               </section>
               <section className='col-3 bg-secondar'>
                 <div class="titlep mb-2">Screen</div>
                <div> {props.booking.show.screen.name}</div>
                
               </section>

               <section className='col-4  '>
                 <div class="titlep mb-2 ">Seats</div>
                 <div className='ovflwp' >{props.booking.seats}</div>
               </section>

            </div>

               <div>
               <div class="titlep mt-3 mb-2">Payment :
                 <span class="text-boldp text-info"> &#8377;{props.booking.amount} </span>
               </div>              
               </div>
        {/* end of right side ticket  */}
         </div> 
        {/* end of ticket  */}
       </div>

       <div className='row bg-inf'>
        <div className='col'>
        <button className='btn btn-secondary mx-auto col-3' onClick={downloadPDF}>Download &ensp;
        <i class="fa fa-download" aria-hidden="true"></i></button>
        </div>
       </div>
    {/* end of row  */}
    </div>
   {/* end of ticket container  */}
   </div>

 </>
 ) : "";



  
}

export default checkAuth(Ticket)