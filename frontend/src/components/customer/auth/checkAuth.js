import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

export const checkAuth = (Component) =>{
    function Wrapper(props){
        // var [user, setUser] = useSelector(store=>store.auth.user)
        var user = window.localStorage.getItem('user');
        // user = JSON.parse(user);
        console.log(user)
        var navigate = useNavigate();
        useEffect(()=>{
            if(!user){
                navigate('/login');
            }
    
        },[user]);
        
        return <Component {...props}/>;
    }
    return Wrapper;
}

export default checkAuth;