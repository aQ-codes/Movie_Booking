import axios from "axios";
import {  useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


 return (

<>
<Carousel className="bg-primar m- movie-carousel " responsive={responsive} infinite={true}  keyBoardControl={true}  autoPlay={true }
  autoPlaySpeed={1200}>
{movies.map((movie) => ( 

  <ShowCard classname="me-5" key={movie.id} movie={movie} refresh={fetchRunning}/>     

))}
             


</Carousel>;



</>
    )
}
export default ListShows;

