import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import ListMovieItem from "./ListMovieItem";
import {  useSelector } from "react-redux";
// import checkAuth from "./auth/checkAuth"



function ListMovies() {

    // var user = useSelector(store=>store.auth.user);
    var [movies, setMovies]=useState([]);
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





    async function fetchMovies(){
        // const response = await fetch("http://127.0.0.1:8000/api/movies/");
        // const movies = await response.json();
        // console.log(movies);
    //   if (user){
        
        axios.get('http://127.0.0.1:8000/api/movies/'
    // //     {
    // //       headers:{'Authorization':"Bearer "+ user.token}
    // //   }
      ).then(response=>{
            setMovies(response.data);
            // console.log(response.data)
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
      <div className="col-8">
        
      <Link to="/admin/movies/add" className="btn btn-info mt-2 ml-2 mb-2">
          Add Movie
        </Link>
      </div>
    </div>

    <div className="row">
      <div className="col-10 ">


        {/* <form>
          <label>Search Movies :  &nbsp;</label>
          <input
            type="text"
            value={SearchTerm}
            onChange={handleSearchInputChange}
          />
          &nbsp;
          <button
            className="btn btn-small btn-outline-success"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
          &nbsp;
        </form> */}

         
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


// export default checkAuth(ListMedicine);
export default ListMovies;
