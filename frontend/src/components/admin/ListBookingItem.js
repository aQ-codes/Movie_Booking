import axios from "axios";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";



function ListBookingItem(props) {

    return <>
    
              
                    <td> {props.booking.bk_id} </td>
                    <td> {props.booking.customer.user.username} </td>
                    <td> {props.booking.show.movie.title} </td>
                    <td> {props.booking.seats} </td>
                    <td> {props.booking.amount} </td>
                    <td> {props.booking.status} </td>
                    <td> {props.booking.date_created} </td>
 </>

}
export default ListBookingItem;