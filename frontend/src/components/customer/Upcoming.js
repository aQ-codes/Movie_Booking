import axios from "axios";
import {  useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";

import MovieCard from "./MovieCard";
import "./css/upcoming.css"

function Upcoming() {
    var [movies, setMovies]=useState([]);
    const [img, setImg] = useState('')
  
    async function fetchUpcoming(){
        axios.get('http://127.0.0.1:8000/api/movies/upcoming'
    // //     {
    // //       headers:{'Authorization':"Bearer "+ user.token}
    // //   }
      ).then(response=>{
            setMovies(response.data);
          //   console.log(response.data)
            
            
        })
    }
    
    useEffect(()=>{
     
        fetchUpcoming()
        
    },[])
  
  return (
    <div className="container upcoming">
      <div className="row bg-warnin mt-5 p-5 px-auto  ">

     {movies.map((movie) => ( 

       <MovieCard key={movie.id} movie={movie} />     

      ))}
      
     </div>
    </div>
  )
}

export default Upcoming