import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
// import checkAuth from "./auth/checkAuth"

import ListMovieItem from "./ListMovieItem";


function RunningMovies() {
 // var user = useSelector(store=>store.auth.user);
 var [movies, setMovies]=useState([]);
 // var [filteredMeds, setFilteredMeds] = useState([]);
 // const [SearchTerm, setSearchTerm] = useState("");
 // var [errorMessage, setErrorMessage] = useState('');

 // const handleSearchInputChange = (event) => {
 //   event.preventDefault();
 //   setSearchTerm(event.target.value);
 // };

 // const handleSearch = (event) => {
 //   event.preventDefault();
 //   if (SearchTerm.trim() === "") {
 //     // If the search input is empty, reset the filteredPosts state.
 //     setFilteredMeds(meds);
 //   } else {
 //     // Otherwise, filter the posts based on the search term.
 //     var filteredItems = meds.filter((item) =>
 //       item.name.toLowerCase().includes(SearchTerm.toLowerCase())
 //     );
 //     setFilteredMeds(filteredItems);
 //   }
 // };





 async function fetchMovies(){
     // const response = await fetch("http://127.0.0.1:8000/api/movies/");
     // const movies = await response.json();
     // console.log(movies);
 //   if (user){
     
     axios.get('http://127.0.0.1:8000/api/movies/active'
 // //     {
 // //       headers:{'Authorization':"Bearer "+ user.token}
 // //   }
   ).then(response=>{
         setMovies(response.data);
         console.log('exec')
     })
 //   }
 //   else{
     // navigate('/login');
 //   }
 }
 
 useEffect(()=>{
  
     fetchMovies()
     
 },[])



return (
 <>
 <div className="row">
   <div className="col-12 ">

   <div class="card">
   <div class="card-header card-header-e movies-status-header bg-danger text-dark">RUNNING MOVIES</div>

    </div>

     
     <table className="table table-striped table-hover mt-3 text-center table-bordered">
     <thead>

       <tr>
         <th>Title</th>
         <th>Language</th>
         <th>Duration</th>
         <th>Status</th>
         {/* <th>Shows</th> */}
         <th colSpan='3'>Actions</th>
       </tr>
       </thead>
       <tbody>
       
         {/* {meds.map(med =>  <tr><ListItem key={med.id} medicine={med} refresh={fetchMeds}/>  </tr> )}  */}
         {/* {filteredMeds.length === 0 ? (
           <p>No matching posts found.</p>
          ) 
          : ( */}
           {movies.map((movie) => ( <tr><ListMovieItem key={movie.id} movie={movie} refresh={fetchMovies}/>  </tr>      ))}
          

          {/* )}
          */}

       </tbody>
     
     </table>
   </div>
 </div>
{/* </div> */}
</>
);
}

export default RunningMovies