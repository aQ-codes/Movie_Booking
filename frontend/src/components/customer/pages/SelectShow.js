import React from 'react'
import Navbar from '../Navbar';
import Seats from '../Seats';
import Show from '../Show';
import '../css/selectshow.css'



function SelectShow() {


// const { state } = this.props.location;
//  const { name } = state;
  // console.log(name)
  return (
    <>

    <Navbar/>
    <div class='show-main'>
    
    <Show  />
    <Seats />
    </div>
    
    </>  
      
  )
}

export default SelectShow