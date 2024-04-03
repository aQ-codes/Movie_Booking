import axios from "axios";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";


function ListMovieItem(props) {
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
    
              
                    <td> {props.movie.title} </td>
                    <td> {props.movie.language} </td>
                    <td> {props.movie.duration} </td>
                    <td> {props.movie.status} </td>
                    <td>
                    <Link to={"/admin/movies/"+props.movie.id+"/view"} className="btn btn-outline-info">VIEW</Link>
                    </td>
                    <td>
                    <Link to={"/admin/movies/"+props.movie.id+"/edit"} className="btn btn-outline-info">EDIT</Link>
                    </td> 
                    <td>
                    {/* <Link to={"/admin/movies/"+props.movie.id+"/delete"} className="btn btn-outline-info">DELETE</Link> */}
                    </td> 
                    {/* <td>
                    <button className="btn btn-outline-secondary " onClick={deleteMed}>Delete</button>
                    </td>
              
        
        {/* <Link to={"/blog/posts/"+props.post.id} className="btn btn-info float-right">View</Link> */}
    </>

}
export default ListMovieItem;