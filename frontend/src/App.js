import './App.css';
import LoginSignup from './components/customer/LoginSignup';
import Navbar from './components/customer/Navbar';
import ListShows from './components/customer/ListShows';

function App() {
  return (
    <div >
     {/* <LoginSignup/> */}
     <div >
    <Navbar/>
    <ListShows/>
    </div>
    </div>
  );
}

export default App;
