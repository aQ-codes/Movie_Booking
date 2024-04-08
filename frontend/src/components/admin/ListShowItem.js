import axios from "axios";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
import Popup from "../global/Popup";


function ListShowItem(props) {


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
    return <>
    
              
                    <td> {props.show.movie.title} </td>
                    <td> {props.show.date.date} </td>
                    <td> {props.show.time.time} </td>
                    <td> {props.show.screen.name} </td>
                    <td> {props.show.status} </td>
                    <td>
                    <Link to={"/admin/movies/"+props.show.id+"/view"} className="btn btn-outline-info">VIEW</Link>
                    </td>
                    <td>
                    <Link to={"/admin/movies/"+props.show.id+"/edit"} className="btn btn-outline-warning">EDIT</Link>
                    </td> 
                    {/* <td>
                    <Link to={"/admin/movies/"+props.movie.id+"/delete"} className="btn btn-outline-danger">DELETE</Link>
                    </td>  */}
                  



                    {/* <td>
                  
                 
        
        {/* <Link to={"/blog/posts/"+props.post.id} className="btn btn-info float-right">View</Link> */}
    </>

}
export default ListShowItem;