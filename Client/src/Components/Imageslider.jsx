import React from 'react'

export default function Imageslider() {
    return (
        <>
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" style={{height:"270px", marginTop:"-25px"}}>
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/68dad970da9c63c7.jpg?q=50" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/6c93de92458aa0c1.jpeg?q=50" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/d02b3b49e4150abb.jpg?q=50" alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/c0bec65432fb07fc.jpg?q=50" alt="Fourth slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://rukminim1.flixcart.com/flap/1688/280/image/75a15c3e19c3f7de.jpg?q=50" alt="Fifth slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        </>
    )
}
