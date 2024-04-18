import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState , useEffect} from 'react'
import axios from 'axios'
import { removeUser } from '../../store/authSlice'
import { Link } from 'react-router-dom'
function MyBookings() {
    var user = useSelector((store) => store.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    var [mybookings, setMybookings]=useState([]);
    // var [date, setDate]=useState([]);
  
    function logout() {
      if (user) {
        axios.post(
          "http://127.0.0.1:8000/api/admin/logout/",
          {},
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        ).then(response=>{
          console.log(response.data)
          const bool=response.data.bool
          if(bool==true){
             dispatch(removeUser());
             navigate("/login");
     
          }
        });
       
      }
    }
    // get bookings 
    function myBookings(){
        axios.get('http://127.0.0.1:8000/api/bookings/customer/'+user.customer_id
        // //     {
        // //       headers:{'Authorization':"Bearer "+ user.token}
        // //   }
          ).then(response=>{
                setMybookings(response.data);
                // console.log(response.data)
                
                
            })
    }
  
    useEffect(()=>{
   
        myBookings()
        
    },[])
  

  return (
  <div className='mybookings bg-warnin container '>
    {/* profile section */}
    <div className='row text-white profile-info mt-4'>

        <div className='col-2 bg-primar p-3'>
            <i class="fa fa-5x fa-user-circle" aria-hidden="true"></i>
        </div>

        <div className='col-4 bg-prim p-4'>
            <h3 className='mt-3'>Hello!  {user.name}</h3>
        </div>

        <div className='col-4  text-center p-4 ' >
            <div className='row'>EMAIL</div>
            <div className='row'>  {user.email}  </div>
        </div>

        <div className='col-2  text-center p-4 ' >
            <button className='btn btn-outline-danger p-2' onClick={logout}>LOGOUT <span class="fa fa-sign-out"></span></button>    
        </div>

    </div>
  {/* bookings section  */}

    <div className='row'>

    <h2 className='text-white'>MY BOOKINGS</h2>
    <div className='col-6 ' >
    <table className="table table-dark table-hover mt-3 text-center ">
        <thead>

          <tr >
            <th>Movie</th>
            <th>Date</th>
            <th>Booking Id</th>
            <th>Ticket</th>
          </tr>
          </thead>
          <tbody>
          
              {mybookings.map((booking) => ( 
              <tr > 
                <td>{booking.show.movie.title}</td>
                <td>{booking.date_created.split( /[T]/ )[0] }</td>
                <td>{booking.bk_id}</td>
                <td><Link to={{ pathname: "/select/movie/" }}>
                <i class="fa fa-download" aria-hidden="true"></i>
                </Link></td>

              </tr>      
              ))}
             

             {/* )}
             */}

          </tbody>
        
        </table>

    </div>

   


    </div>
 
   
      

 {/* end of mybookings             */}
    </div>
  )
}

export default MyBookings