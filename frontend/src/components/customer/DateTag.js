import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';

function DateTag(props) {
   

    const[shows,setShows]=useState([]);
    const[showsbymov,setShowsbyMovie]=useState([]);
    
     // console.log(props.movid)
    async function fetchShows(){
        axios.get('http://127.0.0.1:8000/api/shows2/date/'+props.date.id
    // //     {
    // //       headers:{'Authorization':"Bearer "+ user.token}
    // //   }
      ).then(response=>{

        setShowsbyMovie(response.data.filter(function (show) {
            return show.movie.id == props.movid
          })  )
            // setShows(response.data);

            // console.log(response.data)     
            
        })
    } //end of fetchShows



    //   let showsbymovie = shows.filter(function (show) {
    //     return show.movie.id == props.movid
    //   }) 
   

    //   setShowsbyMovie(showsbymovie)
// console.log(showsbymovie)
// console.log(showsbymov)
    //   console.log(shows)



    // useEffect(()=>{
   
    //     fetchShows()
        
    // },[])

    // let newArray = shows.filter(function (el) {
    //     return 
    // }
    // );



  return (
    <>
    
    
    
     {/* <div class="col-3  ">
         <div class=" justify-content-center "></div>
         <div class=" justify-content-center">
            <Link to={'/select/date/'+props.date.id}  className={
                   ((status) => (status.isActive ? "date-active" : ""))
                }>
           <p value={props.date.id} class="tag text-white  date-tag">{props.date.date}</p>
           </Link>
         </div>
    </div> */}


    
    
    </>
  )
}

export default DateTag