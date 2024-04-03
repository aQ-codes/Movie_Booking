import axios from "axios";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
import broly from "../Assets/broly.jpg";


function ListShows(props) {
    // var user = useSelector(store=>store.auth.user);

    // function deleteMed() {
    //     axios.delete('https://medicalstore.mashupstack.com/api/movie/'+props.movie.id,
    //     {
    //         headers:{'Authorization':"Bearer "+ user.token}
    //      }).then(response=>{
    //         alert(response.data.message)
    //         props.refresh()
    //     })
    // }
    return (

<>

<div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"/>
      <h1>Bright</h1>
      <h4>2017, David Ayer</h4>
      <span class="minutes">117 min</span>
      <p class="type">Action, Crime, Fantasy</p>
    </div>
    <div class="movie_desc">
      <p class="text">
        Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. 
      </p>
    </div>
    <div class="movie_social">
      <ul>
        <li><i class="material-icons">GET YOUR TICKETS</i></li>
      </ul>
    </div>
  </div>
  <div class="blur_back bright_back"></div>
</div>





<div class="movie_card" id="tomb">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg"/>
      <h1>Tomb Raider</h1>
      <h4>2018, Roar Uthaug</h4>
      <span class="minutes">125 min</span>
      <p class="type">Action, Fantasy</p>
    </div>
    <div class="movie_desc">
      <p class="text">
        Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.
      </p>
    </div>
    <div class="movie_social">
      <ul>
      <li><i class="material-icons">GET YOUR TICKETS</i>
       <i class="fa fa-ticket"></i></li>
    
      </ul>
    </div>
  </div>
  <div class="blur_back tomb_back">



  </div>
</div>


<div class="movie_card" id="ave">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src="https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg"/>
      <h1>Black Panther</h1>
      <h4>2018, Ryan Coogler</h4>
      <span class="minutes">134 min</span>
      <p class="type">Action, Adventure, Sci-Fi</p>
    </div>
    <div class="movie_desc">
      <p class="text">
        T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake. 
      </p>
    </div>
    <div class="movie_social">
      <ul>
      <li>
      <i class="fa fa-ticket"></i>
      <i class="material-icons">GET YOUR TICKETS</i>
  
      </li>

      </ul>
    </div>
  </div>
  <div class="blur_back ave_back" style={{  
  backgroundImage: "url(" + broly + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}></div>
  
</div>






<div class="movie_card" id="ave">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src={broly}/>
      <h1>Black Panther</h1>
      <h4>2018, Ryan Coogler</h4>
      <span class="minutes">134 min</span>
      <p class="type">Action, Adventure, Sci-Fi</p>
    </div>
    <div class="movie_desc">
      <p class="text">
        T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake. 
      </p>
    </div>
    <div class="movie_social">
      <ul>
      <li>
        
      <i class="fa fa-ticket"></i>
      <i class="material-icons">  GET YOUR TICKETS  </i>
      
      </li>
 
      </ul>
    </div>
  </div>
  <div class="blur_back ave_back" style={{  
  backgroundImage: "url(" + broly + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
  
  </div>
</div>
</>
    )
}
export default ListShows;

