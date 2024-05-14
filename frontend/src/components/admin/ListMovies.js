import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";

import ListMovieItem from "./ListMovieItem";
import {  useSelector } from "react-redux";
// import checkAuth from "./auth/checkAuth"



function ListMovies() {

    // var user = useSelector(store=>store.auth.user);
    var [movies, setMovies]=useState([]);
    let navigate = useNavigate();



    async function fetchMovies(){
        axios.get('http://127.0.0.1:8000/api/movies/'
     //     {
    //       headers:{'Authorization':"Bearer "+ user.token}
     //   }
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
      <div className="col-12 ">

      <div class="card">
      <div class="card-header card-header-e movies-status-header bg-white text-dark">ALL MOVIES</div>

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
          
              {movies.map((movie) => ( <tr><ListMovieItem key={movie.id} movie={movie} refresh={fetchMovies}/>  </tr>      ))}
             

             {/* )}
             */}

          </tbody>
        
        </table>
      </div>
    </div>

  </>
  );
}


// export default checkAuth(ListMedicine);
export default ListMovies;
