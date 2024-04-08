import React from 'react'
import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
// import checkAuth from "./auth/checkAuth"
import './css/Show.css'

import DateTag from './DateTag';
import TimeTag from './TimeTag';


function Show(props) {

  const {movId} = useParams();
  let navigate = useNavigate();
  const [activedate , setActiveDate] =useState('hi')
  var [movie, setMovie]=useState([]);
  let imgLink = 'http://127.0.0.1:8000' + movie.poster
  const [allshows, setShows] = useState([])
  const [dates , setDates] = useState([])
  const[showsbymov,setShowsbyMovie]=useState([]);

  const [booking, setBooking] =useState({
    
            "bk_id": 'demo100',
            "date": '',
            "time": '',
         
        }
        );

    const uniquedates = [...new Map(dates.map(item =>
        [item['id'], item])).values()];
        // console.log(uniquedates)
    

//consoling the state variables
        // console.log(allshows)
        // console.log(dates)
        // console.log (new Set(dates))
        // const unique = [...new Set(dates.map(item => item))]
        // console.log(movie)

  // console.log(booking)

    
    const inputHandler = (event) => {
      setBooking({
        ...booking,
        [event.target.name]:event.target.value
      })
    
    }
    
   

     

  async function fetchMovie(){
    axios.get('http://127.0.0.1:8000/api/movies/'+movId
// //     {
// //       headers:{'Authorization':"Bearer "+ user.token}
// //   }
  ).then(response=>{
        setMovie(response.data);
        // console.log(response.data)
        
        
    })
}



 function fetchShowsByDate(date_id){
  
  // console.log(date_id)
  setActiveDate(date_id)
  axios.get('http://127.0.0.1:8000/api/shows2/date/'+date_id
// //     {
// //       headers:{'Authorization':"Bearer "+ user.token}
// //   }
).then(response=>{

  setShowsbyMovie( response.data.filter(function (show) {
      return show.movie.id == movId
    })  )
      // setShows(response.data);

      // console.log(response.data)     
      
  })
} //end of fetchShows




  // console.log(showsbymov)
  // console.log(activedate)

    function fetchShow(){   
      axios.get('http://127.0.0.1:8000/api/shows2/'+movId+'/active'
    ).then(response=>{

      setShows(response.data)

      setDates(response.data.map((item,index)=>{

  //  console.log(item.date)
      return item.date



      }))//end of map


      // setDates({
      //   ...dates,
      //   [item.date.id]:item.date.date
             
      //   }
     
          
  
  

        // setShows(response.data)

       

    })//end of then

      // setShows(response.data)
      
      // setShowTimeData(response.data);
      // console.log(response.data)
      // const shows = response.data

    //   response.data.map((item)=>
    //    console.log(item.movie.title)
    // //    console.log(item.movie.title)

    // )
  
  
      } //end of fetchShow function
  
  



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
          // console.log(response.data)
          // console.log(response.data)
      })
  //   }
  //   else{
      // navigate('/login');
  //   }
  }


  // console.log(allshows)
  // console.log(datestimes)
    
  useEffect(()=>{
       
    fetchShow()
    fetchMovie()
    // showDatesTimes()
    // console.log(allshows)

    
  },[])
  

  return (
<>

{/* main column  */}
<div class="col-md  p-5 ">

{/* row 1  */}
      <div class="row justify-content-center  mt-4">

        <div class="  shadow-nohover card-e show-heading py-4 px-4">
          {/* column 1 inside card */}

           <div className='row '>

                 <div className='col-4 ' >
                 <img src={imgLink}  height="150" width="120" className="thumbnail "></img>
                 </div>       
                  
                  <div className='col-8  '>
                    <div class="card-header mt-4">
                        <h3 class="card-title text-white text-center ">{movie.title}</h3>
                      </div>
                      <div class="card-block text-secondary text-center mt-2">
                        <h5 class="card-text">{movie.language}</h5>
                        <h6 class="card-text text-info">{movie.duration} minutes</h6>
                      </div>
                    </div>
                 </div>
                  
           </div> 
         
    </div>
  {/* end  of row 1 */}

{/* date row */}

      
        <div class="row  ps-5 ">
       

        {uniquedates.map((date)=>
        <div class="col-3  ">
        <div class=" justify-content-center "></div>
        <div class=" justify-content-center">
          <p value={date.id} className={"tag text-white date-tag " +  (activedate==date.id ? 'date-active' : '')  } onClick={() => {
        fetchShowsByDate(date.id);
       }} >     {date.date}</p>

        </div>
        </div>
        )}
        </div>
        
          
       
         

          <div class="row mt-4  ps-4 ">

          {activedate &&<TimeTag key={activedate} shows={showsbymov} /> }


          </div> 

         

  
      
</div> 
{/* end of main column  */}
   {/* ( <DateTag key={date.id} date={date} movid={movId} refresh={fetchShow}/>   ) */}



</>

  )
}

export default Show;