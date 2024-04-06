import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListMovieItem from "./ListMovieItem";

function ListDate() {
    let navigate = useNavigate();
 
  var [dates, setDates] = useState([]);
  var [newdate, setNewDate] = useState(
    {
        "date": ""
    }
  );
  var [errormsg, setErrorMsg] = useState('');
  const [successmsg, setSuccessMsg] = useState('')


  function fetchDates() {
    axios
      .get(
        "http://127.0.0.1:8000/api/dates/"
        // //     {
        // //       headers:{'Authorization':"Bearer "+ user.token}
        // //   }
      )
      .then((response) => {
        setDates(response.data);
        console.log(response.data);
      });
    //   }
    //   else{
    // navigate('/login');
    //   }
  }//end of fetchDates


  useEffect(() => {
    fetchDates();
   }, []);



  
const inputHandler = (event) => {
    setNewDate({
      ...newdate,
      [event.target.name]:event.target.value
    })
  
      console.log(newdate)  

  }//end of Input Handler



  function submitHandler(event) {

     event.preventDefault();
  
      axios.post('http://127.0.0.1:8000/api/dates/',{

      date:newdate.date,
     
  }
   ).then(response=>{
    console.log(response.data)
     if(response.data.errors){
        setErrorMsg(response.data.error)
        setSuccessMsg('')
     }
     else{
      setErrorMsg('')
      setSuccessMsg(response.data)
      fetchDates();

     
     }
    }) 
  }//end of submitHandler




  return (
    <div>
      <div className="row">
        <div className="col-6 ">
          <div class="card">
            <div class="card-header card-header-e movies-status-header bg-white text-dark">
              ALL DATES
            </div>
          </div>

          <table className="table table-striped table-hover mt-3 text-center table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th colSpan="3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dates.map((date) => (
                <tr>
                  <td>{date.date}</td>
                  <td>
                    <button className="btn btn-outline-warning">Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-outline-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


        </div>

        <div className="col-6  ">

                <div class="card">
                    <div class="card-header card-header-e movies-status-header bg-white text-dark">
                    ADD NEW DATE
                    </div>
                 </div>

                <div className="row  mx-auto">

                        <div className=" col-6 ml-2 mb-4">
                            <label className="my-2" htmlFor="newdate">(day-month-year)</label>  
                            <input id="newdate" name="date" placeholder="eg.01-01-2021 " className="form-control input-md" required="" value={newdate.date} type="text"  onChange={inputHandler}/>
                       </div>

        
                        <div className=" mt-4 col-4 mb-2">
                            <button  className="btn btn-outline-success btn-large mt-2 ml-2 mb-2 btn-add" onClick={submitHandler}><i class="bi bi-plus-circle-fill"></i> 
                            &nbsp; Add 
                            </button>
                        </div>      


               </div>


               <div className="row"> 
               {successmsg && <div class="alert alert-success" role="alert">{successmsg}</div>}
                 {errormsg && <div class="alert alert-danger" role="alert">{errormsg} </div>}
               
               
               </div>

        </div>



      </div>
    </div>
  );
}

export default ListDate;
