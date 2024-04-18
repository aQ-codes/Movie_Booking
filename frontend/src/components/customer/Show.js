import React from 'react'
import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
// import checkAuth from "./auth/checkAuth"
import './css/Show.css'

import TimeTag from './TimeTag';


function Show({setShowSelected}) {

  let navigate = useNavigate();
  const {movId} = useParams();
  const [activedate , setActiveDate] =useState('')
  var [movie, setMovie]=useState([]);
  let imgLink = 'http://127.0.0.1:8000' + movie.poster
  const [allshows, setShows] = useState([])
  const [dates , setDates] = useState([])
  const[showsbymov,setShowsbyMovie]=useState([]);

 const uniquedates = [...new Map(dates.map(item =>
        [item['id'], item])).values()];
      
    
//consoling the state variables
        // console.log(allshows)
        // console.log(dates)
        // console.log (new Set(dates))
        // console.log(movie)
        // console.log(booking)
        // console.log(showsbymov)
        // console.log(activedate)
        // console.log(uniquedates)

        

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

    function fetchShow(){   
      axios.get('http://127.0.0.1:8000/api/shows2/'+movId+'/active'
    ).then(response=>{

      setShows(response.data)

      setDates(response.data.map((item,index)=>{

  //  console.log(item.date)
      return item.date

      }))//end of map

    })//end of then

      // setShows(response.data)
      
      // setShowTimeData(response.data);
      // console.log(response.data)
      // const shows = response.data

    //   response.data.map((item)=>
    //    console.log(item.movie.title)
    // //    console.log(item.movie.title)

    // )
  
  
      } //end of fetchShow 


      function fetchShowsByDate(date_id){
  
        // console.log(date_id)
        setActiveDate(date_id)
        axios.get('http://127.0.0.1:8000/api/shows2/date/'+date_id
       //     {
       //       headers:{'Authorization':"Bearer "+ user.token}
       //   }
      ).then(response=>{
      
        setShowsbyMovie( response.data.filter(function (show) {
            return show.movie.id == movId
          })  )
            // setShows(response.data);
      
            // console.log(response.data)     
            
        })
      } //end of fetchShowsByDate
  

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
        <div class="col-3 mt-3 ">
        <div class=" justify-content-center">
          <p value={date.id} className={"tag text-white date-tag " +  (activedate==date.id ? 'date-active' : '')  } onClick={() => {
        fetchShowsByDate(date.id);
       }} >     {date.date}</p>

        </div>
        </div>
        )}

        </div>
               

          <div class="row mt-4  ps-4 ">

          {activedate && <TimeTag key={activedate} shows={showsbymov} setShowSelected={setShowSelected} /> }


          </div> 

         

  
      
</div> 

</>

  )
}

export default Show;