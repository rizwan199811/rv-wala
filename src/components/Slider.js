import React from 'react'
import Slider2 from '../images/slider2.jpeg'
import Slider1 from '../images/slider1.jpg'

const Slider = () => {
  return (
    <>
    {/* <div
  id="carouselExampleFade"
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Slider1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Slider1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Slider1} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}



            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner" role="listbox">
              <div className="carousel-item home-slider-img active">
                <img src={Slider1} className="w-100"/>
                <div className="carousel-caption">
                  <h2 className="animated bounceInRight" style={{animationDelay: '1s'}}>How to Rent an <span>RV</span></h2>
                  <h3 className="animated bounceInLeft" style={{animationDelay: '2s'}}>Plan an Epic, Socially Distant Road Trip</h3>
                  <p className="animated bounceInRight" style={{animationDelay: '3s'}}><a href="#">Contact Us</a></p>
                </div>
              </div>
              <div className="carousel-item home-slider-img">
                <img src={Slider1} className="w-100"/>
                <div className="carousel-caption">
                  <h2 className="animated slideInDown" style={{animationDelay: '1s'}}>How to Rent an <span>RV</span></h2>
                  <h3 className="animated fadeInUp" style={{animationDelay: '2s'}}>Plan an Epic, Socially Distant Road Trip</h3>
                  <p className="animated zoomIn" style={{animationDelay: '3s'}}><a href="#">Contact Us</a></p>
                </div>
              </div>
              <div className="carousel-item home-slider-img">
                <img src={Slider1} className="w-100"/>
                <div className="carousel-caption">
                  <h2 className="animated zoomIn" style={{animationDelay: '1s'}}>How to Rent an <span>RV</span></h2>
                  <h3 className="animated fadeInLeft" style={{animationDelay: '2s'}}>Plan an Epic, Socially Distant Road Trip</h3>
                  <p className="animated zoomIn" style={{animationDelay: '3s'}}><a href="#">Contact Us</a></p>
                </div>
              </div>
            </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
            
     






    </>
  )
}

export default Slider