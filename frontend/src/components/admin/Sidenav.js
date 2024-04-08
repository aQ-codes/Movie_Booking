import { Link } from "react-router-dom"



function Sidenav() {
  return (
    // <div className ="wrapper">
        <aside id="sidebar" className="col-2">
            <div className="d-flex">
                <button className="toggle-btn" type="button">
                    <i className="lni lni-grid-alt"></i>
                </button>
            </div>
            <ul className="sidebar-nav">
                <li className="sidebar-item">
                <Link to="/admin/dashboard" className="sidebar-link" >
                        {/* <i className="lni lni-user"></i> */}
                        <i className="lni lni-layout"></i>

                        <span>Dashboard</span>
                 
                </Link>
                </li>

                <li className="sidebar-item">
                <Link to="/admin/movies" className="sidebar-link" >
                        {/* <i className="lni lni-agenda"></i> */}
                        <i class="lni lni-image"></i>
                        <span>Movies</span>
                </Link>
                </li>
                
                <li className="sidebar-item">
                <Link to="/admin/shows" className="sidebar-link" >
                <i class="lni lni-video"></i>


                        <span>Shows</span>
                </Link>
                   
                <Link to="/admin/dates/" className="sidebar-link" >

                        <i class="lni lni-calendar"></i>
                        <span>Dates</span>
                </Link>
                   
                    {/* <ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse"
                                data-bs-target="#multi-two" aria-expanded="false" aria-controls="multi-two">
                                Two Links
                            </a>
                            <ul id="multi-two" className="sidebar-dropdown list-unstyled collapse">
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">Link 1</a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">Link 2</a>
                                </li>
                            </ul>
                        </li>
                    </ul> */}
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
                        <i className="lni lni-protection"></i>
                        <span>Bookings</span>
                    </a>
                    <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link">Login</a>
                        </li>
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link">Register</a>
                        </li>
                    </ul>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <i className="lni lni-popup"></i>
                        <span>Notification</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <i className="lni lni-cog"></i>
                        <span>Setting</span>
                    </a>
                </li>
            </ul>

        </aside>




        
        
    // </div>
  )
}

export default Sidenav