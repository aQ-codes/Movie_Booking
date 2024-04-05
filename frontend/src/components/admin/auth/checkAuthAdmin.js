import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

export const checkAuthAdmin = (Component) =>{
    function Wrapper(props){
        var admin = useSelector(store=>store.auth.admin);
        var navigate = useNavigate();
        useEffect(()=>{
            if(!admin){
                navigate('/admin/login');
            }
        },[admin]);
        return <Component {...props}/>;
    }
    return Wrapper;
}

export default checkAuthAdmin;