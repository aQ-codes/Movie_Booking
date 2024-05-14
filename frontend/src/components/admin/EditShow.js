import React from 'react'
import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {  useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
// import checkAuth from "./auth/checkAuth"

function AddShow() {

let navigate = useNavigate();
const {showId} = useParams();
// const baseurl = 'http://127.0.0.1:8000/api/'
const [successmsg, setSuccessMsg] = useState('')
const [errormsg, setErrorMsg] = useState('')
const [moviedata, setMovieData] = useState([])
const [screendata, setScreenData] = useState([])
const [showtimedata, setShowTimeData] = useState([])
const [showdatedata, setShowDateData] = useState([])
const [showdata, setShowData] = useState('');
const [showdata2, setShowData2] = useState('');
    
    // "status": "",
    // "movie": '',
    // "time": '',
    // "screen": '',
    // "date": '',
    // "price": '',
    // console.log(showId)
    // console.log(showdata2)
    console.log(showdata)

useEffect(()=>{
    fetchShow()
    fetchMovies()
    fetchScreens()
    fetchShowTimes()
    fetchShowDates()
},[]);


function fetchShow(){   
  axios.get('http://127.0.0.1:8000/api/show/'+showId
).then(response=>{
  setShowData2(response.data);
  console.log(response.data)

  })

}


  function fetchMovies(){   
  axios.get('http://127.0.0.1:8000/api/running/'
).then(response=>{
  setMovieData(response.data);
  // console.log(response.data)

  })

}
  function fetchScreens(){   
      axios.get('http://127.0.0.1:8000/api/screens/'
    ).then(response=>{
      setScreenData(response.data);
      // console.log(response.data)
  
      })
}

  function fetchShowTimes(){   
  axios.get('http://127.0.0.1:8000/api/showtimes/'
).then(response=>{
  setShowTimeData(response.data);
  // console.log(response.data)

  })
}


function fetchShowDates(){   
axios.get('http://127.0.0.1:8000/api/dates/'
).then(response=>{
setShowDateData(response.data);
// console.log(response.data)

})
}



const inputHandler = (event) => {
  setShowData({
    ...showdata,
    [event.target.name]:event.target.value
  })

    // console.log(showdata)  
}


 function submitHandler(event) {
event.preventDefault();
 
  // const formdata = new FormData();
  // formdata.append('status',showdata.status)
  // console.log(showdata.status)
  // formdata.append('movie',showdata.movie)
  // formdata.append('time',showdata.time)
  // formdata.append('screen',showdata.screen)
 
//   console.log(formdata)  //why this not showing ??

    axios.patch('http://127.0.0.1:8000/api/shows/'+showId,showdata
 ).then(response=>{
  console.log(response.data)
   if(response.data.success){
    //  setErrorMsg(response.data)
     setSuccessMsg(response.data.success)
    }
// //    else{
// //     setErrorMsg('')
// //     setSuccessMsg(response.statusText)

// //    }
  }) 
//   .catch(error=>{
//     if(error.response.data.errors){
//         setErrorMsg(Object.values(error.response.data.errors).join(' '));
//     }else{
//         setErrorMsg('Failed to connect to api');
//     }
//   })

}


  if(showdata2)  return  (

  <div className="card col-md-6 mx-auto mt-4">

   <div className="card-header bg-dark text-white">
     EDIT SHOW
   </div>

   <div className="card-body ">
  {successmsg && <div class="alert alert-success" role="alert">{successmsg}</div>}
  {errormsg && <div class="alert alert-danger" role="alert">{errormsg} </div>}

 <form className="form-horizontal " >

 <div className="form-group mb-2">
   <label className="col-md-9 control-label" htmlFor="show_movie">Select Movie ( * only active movies are listed ) </label>
   <div className="col-md-9">
     <select id="show-movies" name="movie" className="form-control"  onChange={inputHandler}>
       <option value={showdata2.movie.id} default>{showdata2.movie.title}</option>
       {moviedata.map((item,index)=>
            <option value={item.id}>{item.title}</option>
        )
      }

    </select>
  </div>
</div>


 <div className="form-group mb-2">
   <label className="col-md-9 control-label" htmlFor="show_movie">Select Screen </label>
   <div className="col-md-9">
     <select id="show-movies" name="screen" className="form-control"  onChange={inputHandler}>
     <option value={showdata2.screen.id} default>{showdata2.screen.name}</option>
      
       {screendata.map((item,index)=>
             <option value={item.id}>{item.name}</option>
         )
       }
     </select>
   </div>
 </div>



 <div className="form-group mb-2">
   <label className="col-md-9 control-label" htmlFor="show_movie">Select Date</label>
   <div className="col-md-9">
     <select id="show-movies" name="date" className="form-control"  onChange={inputHandler}>
     <option value={showdata2.date.id} default>{showdata2.date.date}</option>
      
      
       {showdatedata.map((item,index)=>
             <option value={item.id}>{item.date}</option>
         )
       }
     </select>
   </div>
 </div>




 <div className="form-group mb-2">
   <label className="col-md-9 control-label" htmlFor="show_movie">Select Time</label>
   <div className="col-md-9">
     <select id="show-movies" name="time" className="form-control"  onChange={inputHandler}>
     <option value={showdata2.time.id} default>{showdata2.time.time}</option>
      
      
       {showtimedata.map((item,index)=>
             <option value={item.id}>{item.time}</option>
         )
       }
    </select>
   </div>
 </div>


 <div className="form-group mb-2">
   <label className="col-md-9 control-label" htmlFor="show_movie">Status </label>
   <div className="col-md-9">
     <select id="show-movies" name="status" className="form-control"  onChange={inputHandler}>
     <option value={showdata2.status} default>{showdata2.status}</option>
       <option value="active">Active</option>
       <option value="disabled">Disable</option>
       <option value="finished">Finished</option>
     </select>
   </div>
 </div>



 <div className="form-group mb-2">
   <label className="col control-label" htmlFor="product_name">Price</label>  
   <div className="col">
   <input id="product_name" name="price" placeholder="Price in INR" className="form-control input-md" required value={showdata2.price} type="text"  onChange={inputHandler}/>
    
   </div>
 </div>

 <div className="form-group mt-4">
  <div className="col-md-9">
     <button id="singlebutton" onClick={submitHandler} name="singlebutton" className="btn btn-primary col-md-4" >Update </button>
   </div>
   </div>


 </form>
   </div>
 </div> 







  )
}

export default AddShow