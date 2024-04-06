import React from 'react'
import './Popup.css'

function Popup(props) {
  return (props.trigger) ? (
    <div class="container popup card col-4  mt-4 ">
    <div class="popup-inner" >

          <div class="card-header text-center col-12 mx-auto ">
            <h4 class="modal-title ">Message</h4>
          </div>

          <div class="card-body modal-body mt-4">
           {props.children}
          </div>

          {/* <div class="modal-footer my-4 card-footer  mx-auto">
            <button type="button" class="btn btn-danger " >Close</button>
          </div> */}


    </div>
    
  </div>

  ) :"";
}

export default Popup






