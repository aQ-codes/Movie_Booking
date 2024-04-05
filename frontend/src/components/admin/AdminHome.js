import React from 'react'
import { Link } from 'react-router-dom'

function AdminHome() {
  return (
    <>
    <div>     
    
        <section class="page-section " id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white ">Go to View Bliss Cinemas</h2>
                        <hr class="divider divider-light" />
                        {/* <p class="text-white-75 mb-4 custom1">Book Now Showing Movies...</p> */}
                        <a class="btn btn-primary  btn-xl mt-4" href="#services">ViewBliss Cinemas</a>
                    </div>
                </div>
            </div>
        </section>


        <header class="masthead bg-dark">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">Welcome To ViewBliss Admin</h1>
                        <hr class="divider divider-light" />
                    </div>
                    <div class="col-lg-8 align-self-baseline custom1">
                        <p class="text-white-75 mb-5">Login with your admin username and password to manage shows </p>
                        <Link to='/admin/dashboard' class="btn btn-dark btn-custom btn-xl mb-3" href="#about">GO ADMIN</Link>
                    </div>
                </div>
            </div>
        </header>
   

      
    
      


    </div>



    </>
   
  )
}

export default AdminHome