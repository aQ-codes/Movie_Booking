import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";

import ListShowItem from "./ListShowItem";
import {  useSelector } from "react-redux";
// import checkAuth from "./auth/checkAuth"

function AllShows() {
   // var user = useSelector(store=>store.auth.user);
  var [allShows, setallShows]=useState([]);
  // var [filteredMeds, setFilteredMeds] = useState([]);
  // const [SearchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();
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





  async function fetchShows(){
      // const response = await fetch("http://127.0.0.1:8000/api/movies/");
      // const movies = await response.json();
      // console.log(movies);
  //   if (user){
      
      axios.get('http://127.0.0.1:8000/api/shows2/'
  // //     {
  // //       headers:{'Authorization':"Bearer "+ user.token}
  // //   }
    ).then(response=>{
          setallShows(response.data);
          console.log(response.data)
      })
  //   }
  //   else{
      // navigate('/login');
  //   }
  }
  
    
  useEffect(()=>{
     
    fetchShows()
    
},[])


  return(
<>

<div className="row">
      <div className="col-12 ">

      <div class="card">
      <div class="card-header card-header-e movies-status-header bg-white text-dark">ALL SHOWS</div>

       </div>

        
        <table className="table table-striped table-hover mt-3 text-center table-bordered">
        <thead>

          <tr>
            <th>Movie</th>
            <th>Date</th>
            <th>Time</th>
            <th>Screen</th>
            <th>Status</th>
            <th>Price</th>
            <th colSpan='3'>Actions</th>
          </tr>
          </thead>
          <tbody>
          
              {allShows.map((show) => ( <tr><ListShowItem key={show.id} show={show} refresh={fetchShows}/>  </tr>      ))}
             

             {/* )}
             */}

          </tbody>
        
        </table>
      </div>
    </div>




</>


  )
}

export default AllShows