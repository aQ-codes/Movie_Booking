import axios from "axios";
import {  useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import broly from "../Assets/broly.jpg";
import ShowCard from "./ShowCard";

function ListShows() {
    // var user = useSelector(store=>store.auth.user);

  // var user = useSelector(store=>store.auth.user);
  var [movies, setMovies]=useState([]);
  let navigate = useNavigate();
  const [img, setImg] = useState('')
 

  async function fetchRunning(){
      axios.get('http://127.0.0.1:8000/api/running/'
  // //     {
  // //       headers:{'Authorization':"Bearer "+ user.token}
  // //   }
    ).then(response=>{
          setMovies(response.data);
        //   console.log(response.data)
          
          
      })
  }
  
  useEffect(()=>{
   
      fetchRunning()
      
  },[])


    return (

<>


{movies.map((movie) => ( <ShowCard key={movie.id} movie={movie} refresh={fetchRunning}/>      ))}
             

</>
    )
}
export default ListShows;

