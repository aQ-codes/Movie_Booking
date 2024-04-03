import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Dashboard from "./components/admin/pages/Dashboard";
import Movies from './components/admin/pages/Movies'
import AddMoviePage from "./components/admin/pages/AddMoviePage";
import MovieDetail from "./components/admin/pages/MovieDetail";
import EditMovieDetail from "./components/admin/pages/EditMovieDetail"
import AddShowPage from "./components/admin/pages/AddShowPage";
import Home from "./components/customer/pages/Home";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'home', element: <Home/> },
    

    // admin routes
    { path: 'admin/dashboard', element: <Dashboard/> },
              //movies
    { path: 'admin/movies', element: <Movies/> },
    { path: 'admin/movies/add', element: <AddMoviePage/> },
    { path: 'admin/movies/:movId/view', element: <MovieDetail/> },
    { path: 'admin/movies/:movId/edit', element: <EditMovieDetail/> },
               //  //shows
    { path: 'admin/shows/add', element: <AddShowPage/> },
    
    
    
   
  
]);

export default router;