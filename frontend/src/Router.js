import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Dashboard from "./components/admin/pages/DashboardPage";
import Movies from './components/admin/pages/Movies'
import AddMoviePage from "./components/admin/pages/AddMoviePage";
import MovieDetail from "./components/admin/pages/MovieDetail";
import EditMovieDetail from "./components/admin/pages/EditMovieDetail"
import AddShowPage from "./components/admin/pages/AddShowPage";
import Home from "./components/customer/pages/Home";
import SelectShow from "./components/customer/SelectShow";
import CustomerLogin from "./components/customer/CustomerLogin";
import CustomerRegister from "./components/customer/CustomerRegister";
import HomePageAdmin from "./components/admin/pages/HomePageAdmin";
import AdminLoginPage from "./components/admin/pages/AdminLoginPage";
import DashboardPage from "./components/admin/pages/DashboardPage";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'home', element: <Home/> },
    { path: 'register', element: <CustomerRegister/> },
    { path: 'login', element: <CustomerLogin/> },
    { path: 'select/:movId', element: <SelectShow/> },
    

           // admin routes

    { path: 'admin/', element: <HomePageAdmin/> },
    { path: 'admin/login', element: <AdminLoginPage/> },
    { path: 'admin/dashboard', element: <DashboardPage/> },
    //movies
    { path: 'admin/movies', element: <Movies/> },
    { path: 'admin/movies/add', element: <AddMoviePage/> },
    { path: 'admin/movies/:movId/view', element: <MovieDetail/> },
    { path: 'admin/movies/:movId/edit', element: <EditMovieDetail/> },
               //shows
    { path: 'admin/shows/add', element: <AddShowPage/> },
    
    
    
   
  
]);

export default router;