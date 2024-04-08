import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Dashboard from "./components/admin/pages/DashboardPage";
import Movies from './components/admin/pages/Movies'
import AddMoviePage from "./components/admin/pages/AddMoviePage";
import MovieDetail from "./components/admin/pages/MovieDetail";
import EditMovieDetail from "./components/admin/pages/EditMovieDetail"
import AddShowPage from "./components/admin/pages/AddShowPage";
import Home from "./components/customer/pages/Home";
import SelectShow from "./components/customer/pages/SelectShow";
import CustomerLogin from "./components/customer/CustomerLogin";
import CustomerRegister from "./components/customer/CustomerRegister";
import HomePageAdmin from "./components/admin/pages/HomePageAdmin";
import AdminLoginPage from "./components/admin/pages/AdminLoginPage";
import DashboardPage from "./components/admin/pages/DashboardPage";
import RunningMoviesPage from "./components/admin/pages/RunningMoviesPage";
import PausedMoviesPage from "./components/admin/pages/PausedMoviesPage";
import UpcomingMoviesPage from "./components/admin/pages/UpcomingMoviesPage";
import CompletedMoviesPage from "./components/admin/pages/CompletedMoviesPage";
import DeleteMovie from "./components/admin/DeleteMovie";
import DatesPage from "./components/admin/pages/DatesPage";
import AllShowsPage from "./components/admin/pages/AllShowsPage";



const router = createBrowserRouter([

          //customer routes

    { path: '', element: <App/> },
    { path: 'home', element: <Home/> },
    { path: 'register', element: <CustomerRegister/> },
    { path: 'login', element: <CustomerLogin/> },
    { path: 'select/movie/:movId', element: <SelectShow/> },
    { path: 'select/date/:dateId', element: <SelectShow/> },
    



             // admin routes

    { path: 'admin/', element: <HomePageAdmin/> },
    { path: 'admin/login', element: <AdminLoginPage/> },
    { path: 'admin/dashboard', element: <DashboardPage/> },
    //------getting movies based on status------------
    { path: 'admin/movies', element: <Movies/> },
    { path: 'admin/movies/running', element: <RunningMoviesPage/> },
    { path: 'admin/movies/paused', element: <PausedMoviesPage/> },
    { path: 'admin/movies/upcoming', element: <UpcomingMoviesPage/> },
    { path: 'admin/movies/completed', element: <CompletedMoviesPage/> },
    //---------add,delete,update,view movie---------
    { path: 'admin/movies/add', element: <AddMoviePage/> },
    { path: 'admin/movies/:movId/view', element: <MovieDetail/> },
    { path: 'admin/movies/:movId/edit', element: <EditMovieDetail/> },
    { path: 'admin/movies/:movId/delete', element: <DeleteMovie/> },
    //-------------------all shows--------------------
    { path: 'admin/shows', element: <AllShowsPage/> },



    //--------------------dates---------------------------
    { path: 'admin/dates', element: <DatesPage/> },

             //shows
    { path: 'admin/shows/add', element: <AddShowPage/> },
    
    
    
   
  
]);

export default router;