import React from 'react'
import image from '../Assets/gk.jpg'
import offer from '../Assets/offer.png'

function Carousel() {
  return (
    <>
     
<div className='container carousel-container'>
    <div id="carouselExampleCaptions" class="carousel carousel-dark slide carousel-fade " data-bs-ride="carousel">

        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button> */}
        </div>

        <div class="carousel-inner">

            <div class="carousel-item active " data-bs-interval="1500">
                <img src={image} height='320px' class="d-block w-100 carousel-poster" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h2>Trending</h2>
                    <button class="btn btn-primary">Book Now</button>

                </div>
            </div>

            <div class="carousel-item " data-bs-interval="1500">
                <img src={offer} height='320px' class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>

            {/* <div class="carousel-item" data-bs-interval="1500">
                <img src="https://source.unsplash.com/1920x500/?nature,water" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div> */}

        </div> 

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

</div>
    </>
  )
}

export default Carousel