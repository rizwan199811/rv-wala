import React from 'react'
import Sliderr from '../components/Slider'
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import classA from "../images/classA.webp";
import aaa from "../images/b.webp";
import bbb from "../images/c.webp";
import fifth from "../images/fifth.webp";
// import hauler from "../images/hauler.webp";
import camper from "../images/camper.webp";
import popcamper from "../images/popcamper.webp";
import campervan from "../images/campervan.webp";
import location_1 from "../images/location_1.webp";
import location_2 from "../images/location_2.webp";
import location_3 from "../images/location_3.webp";
import blog1 from "../images/blog1.webp";
import blog2 from "../images/blog2.webp";
import image1 from "../images/1.svg";
import image2 from "../images/2.svg";
import image3 from "../images/3.svg";
const Home = (props) => {
  let history = useNavigate();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

    ]
  };
  return (
    <>
  
  
    <Sliderr/>
  

    <div className="booking-form-wrapper bg-white">
  <form action="#">
    {/* <div className="form-group border-bottom d-flex align-items-center justify-content-between flex-wrap">
      <label className="option my-sm-0 my-2">
        <input type="radio" name="radio" defaultChecked="" />
        Round Trip
        <span className="checkmark" />
      </label>
      <label className="option my-sm-0 my-2">
        <input type="radio" name="radio" />
        One Way
        <span className="checkmark" />
      </label>
      <div className="d-flex align-items-center my-sm-0 my-2">
        <a href="#" className="text-decoration-none">
          Multi-city/Stopovers{" "}
          <span className="fas fa-angle-right ps-2 text-primary" />
        </a>
      </div>
    </div> */}
    <div className="form-group d-sm-flex margin">
      <div className="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
        <input
          type="text"
          required=""
          placeholder="From"
          className="form-control"
        />
        <div className="label" id="from" />
        <span className="fas fa-dot-circle text-muted" />
      </div>
      <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
        <input
          type="text"
          required=""
          placeholder="To"
          className="form-control"
        />
        <div className="label" id="to" />
        <span className="fas fa-map-marker text-muted" />
      </div>
    </div>
    <div className="form-group d-sm-flex margin">
      <div className="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
        <input
          type="date"
          required=""
          min={new Date().toISOString().split('T')[0]}
          placeholder="Depart Date"
          className="form-control"
        />
        <div className="label" id="depart" />
      </div>
      <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
        <input
          type="date"
          required=""
          min={new Date().toISOString().split('T')[0]}
          placeholder="Return Date"
          className="form-control"
        />
        <div className="label" id="return" />
      </div>
    </div>
    {/* <div className="form-group border-bottom d-flex align-items-center position-relative">
      <input
        type="text"
        required=""
        placeholder="Traveller(s)"
        className="form-control"
      />
      <div className="label" id="psngr" />
      <span className="fas fa-users text-muted" />
    </div> */}
    <div className="serachrv-classes">
      <div className='d-flex justify-content-between flex-wrap'> 
        <Link to="/rvs-for-rent?rvClass=Class A"><img src={classA}/></Link>
        <Link to="/rvs-for-rent?rvClass=Class B"><img src={aaa}/></Link>
        <Link to="/rvs-for-rent?rvClass=Class C"><img src={bbb}/></Link>
        <Link to="/rvs-for-rent?rvClass=Fifth Wheel"><img src={fifth}/></Link>
        <Link to="/rvs-for-rent?rvClass=Campervan"><img src={camper}/></Link>
        <Link to="/rvs-for-rent?rvClass=Campervan"><img src={campervan}/></Link>
        <Link to="/rvs-for-rent?rvClass=Pop up camper and other"><img src={popcamper}/></Link>
      </div>
    </div>
    <div className="form-group my-3">
      <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3">
        Search RV
      </div>
    </div>
  </form>
</div>

    


<div className='container text-center'>
  <div className='row home-step-tabs m-auto m-lg-0'>
  <h1 className='py-3'>How It Works</h1>
<ul class="nav nav-pills mb-3 py-3" id="pills-tab" role="tablist">
  <li class="nav-item col-6 p-1" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Rent A RV</button>
  </li>
  <li className="nav-item col-6 p-1" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">List My RV</button>
  </li>

</ul>
<div className="tab-content p-0" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

  
  <div className="container p-0">	

        <div className="">
          <div className="row steps-card-wrapper ">
            {/* Card 1 */}
            <div className="col-xs-12 col-sm-6 col-md-3 mb-3">
              <div className="card card-1">	
                <div className="top top-1">	
                  <h3>
                    Step 1
                  </h3>
                </div>
                <div className="bot">	
                  <img className="icon" src="//cdn.shopify.com/s/files/1/2083/7711/files/2_Form_1x_bbdc16b4-442e-4156-b506-6fb1d1f072cb.png?4742423178050864078" alt="" />
                  <hr />
                  <h4>
                  Find your RV
                  </h4>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-xs-12 col-sm-6 col-md-3 mb-3">
              <div className="card card-2">	
                <div className="top top-2">	
                  <h3>
                    Step 2
                  </h3>
                </div>
                <div className="bot">	
                  <img className="icon" src="//cdn.shopify.com/s/files/1/2083/7711/files/2_Form_1x_bbdc16b4-442e-4156-b506-6fb1d1f072cb.png?4742423178050864078" alt="" />
                  <hr />
                  <h4>
                  Book your RV
                  </h4>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-xs-12 col-sm-6 col-md-3 mb-3">
              <div className="card card-3">	
                <div className="top top-3">	
                  <h3>
                    Step 3
                  </h3>
                </div>
                <div className="bot">	
                  <img className="icon" src="//cdn.shopify.com/s/files/1/2083/7711/files/2_Form_1x_bbdc16b4-442e-4156-b506-6fb1d1f072cb.png?4742423178050864078" alt="" />
                  <hr />
                  <h4>
                  Start Your Adventure
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 mb-3">
              {/* Card 4 */}
              <div className="card card-4">	
                <div className="top top-4">	
                  <h3>
                    Step 4
                  </h3>
                </div>
                <div className="bot">	
                  <img className="icon" src="//cdn.shopify.com/s/files/1/2083/7711/files/2_Form_1x_bbdc16b4-442e-4156-b506-6fb1d1f072cb.png?4742423178050864078" alt="" />
                  <hr />
                  <h4>
                  Return
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

  <div className="container p-0">	

        <div className="">
          <div className="row steps-card-wrapper">
            {/* Card 1 */}
            <div className="col-xs-12 col-sm-6 col-md-3 mb-3">
              <div className="card card-1">	
                <div className="top top-1">	
                  <h3>
                    Step 1
                  </h3>
                </div>
                <div className="bot">	
                  <img className="icon" src="//cdn.shopify.com/s/files/1/2083/7711/files/2_Form_1x_bbdc16b4-442e-4156-b506-6fb1d1f072cb.png?4742423178050864078" alt="" />
                  <hr />
                  <h4>
                  List your RV with confidence
                  </h4>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-xs-12 col-sm-6 col-md-3 mb-3">
              <div className="card card-2">	
                <div className="top top-2">	
                  <h3>
                    Step 2
                  </h3>
                </div>
                <div className="bot">	
                  <img className="icon" src="//cdn.shopify.com/s/files/1/2083/7711/files/2_Form_1x_bbdc16b4-442e-4156-b506-6fb1d1f072cb.png?4742423178050864078" alt="" />
                  <hr />
                  <h4>
                  Receive Rental Requests
                  </h4>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-xs-12 col-sm-6 col-md-3 mb-3">
              <div className="card card-3">	
                <div className="top top-3">	
                  <h3>
                    Step 3
                  </h3>
                </div>
                <div className="bot">	
                  <img className="icon" src="//cdn.shopify.com/s/files/1/2083/7711/files/2_Form_1x_bbdc16b4-442e-4156-b506-6fb1d1f072cb.png?4742423178050864078" alt="" />
                  <hr />
                  <h4>
                  Set pick up location or drop off for your RV
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 mb-3">
              {/* Card 4 */}
              <div className="card card-4">	
                <div className="top top-4">	
                  <h3>
                    Step 4
                  </h3>
                </div>
                <div className="bot">	
                  <img className="icon" src="//cdn.shopify.com/s/files/1/2083/7711/files/2_Form_1x_bbdc16b4-442e-4156-b506-6fb1d1f072cb.png?4742423178050864078" alt="" />
                  <hr />
                  <h4>
                  Earn Money
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  </div>
</div>
</div>
</div>



<div className='container'>
<div className='row loaction-card-wrap mt-2 mb-5'>
<h1 className='text-center py-5'>Top RV Rental Locations</h1>
        <div className="row m-auto">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img className="profile" width="100%" src={location_1} alt="Neymar" />
                  {/* <h2>Neymar</h2> */}
                </div>
                <div className="back from-left">
                  <h2>LAS VEGAS</h2>
                  <p className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in
                  </p>
                  {/* <ul className="social-icon">
                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                    <li><a href><i className="fab fa-instagram" /></a></li>
                    <li><a href><i className="fab fa-twitter" /></a></li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img className="profile" width="100%" src={location_2} alt="Neymar" />
                  {/* <h2>Neymar</h2> */}
                </div>
                <div className="back from-left">
                  <h2>TAMPA</h2>
                  <p className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in
                  </p>
                  {/* <ul className="social-icon">
                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                    <li><a href><i className="fab fa-instagram" /></a></li>
                    <li><a href><i className="fab fa-twitter" /></a></li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img className="profile" width="100%" src={location_3} alt="Neymar" />
                  {/* <h2>Neymar</h2> */}
                </div>
                <div className="back from-left">
                  <h2>MIAMI</h2>
                  <p className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in
                  </p>
                  {/* <ul className="social-icon">
                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                    <li><a href><i className="fab fa-instagram" /></a></li>
                    <li><a href><i className="fab fa-twitter" /></a></li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img className="profile" width="100%" src={location_2} alt="Neymar" />
                  {/* <h2>Neymar</h2> */}
                </div>
                <div className="back from-left">
                  <h2>LAS VEGAS</h2>
                  <p className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in
                  </p>
                  {/* <ul className="social-icon">
                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                    <li><a href><i className="fab fa-instagram" /></a></li>
                    <li><a href><i className="fab fa-twitter" /></a></li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img className="profile" width="100%" src={location_3} alt="Neymar" />
                  {/* <h2>Neymar</h2> */}
                </div>
                <div className="back from-left">
                  <h2>TAMPA</h2>
                  <p className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in
                  </p>
                  {/* <ul className="social-icon">
                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                    <li><a href><i className="fab fa-instagram" /></a></li>
                    <li><a href><i className="fab fa-twitter" /></a></li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img className="profile" width="100%" src={location_1} alt="Neymar" />
                  {/* <h2>Neymar</h2> */}
                </div>
                <div className="back from-left">
                  <h2>MIAMI</h2>
                  <p className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in
                  </p>
                  {/* <ul className="social-icon">
                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                    <li><a href><i className="fab fa-instagram" /></a></li>
                    <li><a href><i className="fab fa-twitter" /></a></li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>

          
      </div>



</div>
</div>


<section className='experience-bg'>


<div className='container'>
    <div className='experience-div-wrap'>
  <div className='row'>
    <h1>The RVnGO Experience</h1>
    <p>Bring the comforts of home with you on the road. Escape and Explore, Cruise the American Highways in an RV rental. Try our free Person to Person network, or what we like to call our Person to Person Network.</p>
    <p>We are committed to bringing people closer together by letting people disconnect to reconnect through renting an RV. We do this by cutting out all the stuff that keeps you from doing the things you love with the people you love. Cultivating a community of committed RVers built on trust and transparency.</p>
    </div>
  </div>
</div>


<div className='container'>
  <div className='experience-div-wrap'>
  <div className='row '>

    <h1>Flexible Options</h1>
    <p>We have many options for you, whether you are you looking for an ADA Compliant, Wheelchair Accessible RV or a Pet Friendly RV we have you covered. You can find the perfect RV for a one way RV rental or an RV with a return trip. We even offer RVs and trailers that can be delivered to you.</p>
  <div className='col-4 '>
    <div className='flexible-img'>
      <img src={image1}/>
    </div>
  </div>
  <div className='col-4 '>
    <div className='flexible-img'>
      <img src={image2}/>
    </div>
  </div>
  <div className='col-4 '>
    <div className='flexible-img'>
      <img src={image3}/>
    </div>
  </div>

  </div>
  </div>
</div>
    
</section>




<div className='container'>
<div className='row loaction-card-wrap mt-2 mb-5'>
<h1 className='text-center py-5'>Latest On The Go Posts</h1>
        <div className="row m-auto">

<div className='col-md-4 col-sm-6 mb-3'>

        <div className="wrapper">
        <div className="card">
          <div className="card__img">
            <img src={blog1} />
          </div>
          <div className="card__content">
            <h3 className="card__title">What Is The Cheapest Way To Rent An RV?</h3>
            <div className="card__excerpt">
              <p>The absolute cheapest way to rent an RV is to rent through RVnGO. They don’t charge ANY transaction..</p>
            </div>
          </div>
          <div className="card__link">
            <a  className="button">Learn More</a>
          </div>
        </div>
      </div>
      </div>

      <div className='col-md-4 col-sm-6 mb-3'>

        <div className="wrapper">
        <div className="card">
          <div className="card__img">
            <img src={blog2} />
          </div>
          <div className="card__content">
            <h3 className="card__title">Getting Insurance for An RV Rental</h3>
            <div className="card__excerpt">
              <p>Every year there are thousands of Americans who make like Steppinwolf Steppinwolf Steppinwolf...</p>
            </div>
          </div>
          <div className="card__link">
            <a  className="button">Learn More</a>
          </div>
        </div>
      </div>
      </div>

      <div className='col-md-4 col-sm-6 mb-3'>

        <div className="wrapper">
        <div className="card">
          <div className="card__img">
            <img src={blog1} />
          </div>
          <div className="card__content">
            <h3 className="card__title">How To Choose Between A Class A or Class C RV</h3>
            <div className="card__excerpt">
              <p>Purchasing or renting an RV is an exciting experience for many people who love adventure...</p>
            </div>
          </div>
          <div className="card__link">
            <a  className="button">Learn More</a>
          </div>
        </div>
      </div>
      </div>
          
      </div>



</div>
</div>








<div className="container">
        <div className="row">
        
          <h1 className='text-center py-5'>What Our Client Says</h1>
          <Slider {...settings}>
        <div className="col-lg-6">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="pic">
                  <img src="https://images.pexels.com/photos/8035299/pexels-photo-8035299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="img-responsive" />
                </div>
                <h3 className="testimonial-info">
                  Alex Jhon
                </h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="pic">
                  <img src="https://media.istockphoto.com/photos/shot-of-an-attractive-young-businesswoman-standing-alone-outside-and-picture-id1348830933?b=1&k=20&m=1348830933&s=170667a&w=0&h=GpYjlzghbtqMmZNZhRBIqZb0_d8HGmQl1WA9dBZHO6w=" alt="" className="img-responsive" />
                </div>
                <h3 className="testimonial-info">
                  Diana Steve
                </h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.</p>
              </div>
            </div>
          </div>   <div className="col-lg-6">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="pic">
                  <img src="https://images.pexels.com/photos/8035299/pexels-photo-8035299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="img-responsive" />
                </div>
                <h3 className="testimonial-info">
                  Alex Jhon
                </h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="pic">
                  <img src="https://media.istockphoto.com/photos/shot-of-an-attractive-young-businesswoman-standing-alone-outside-and-picture-id1348830933?b=1&k=20&m=1348830933&s=170667a&w=0&h=GpYjlzghbtqMmZNZhRBIqZb0_d8HGmQl1WA9dBZHO6w=" alt="" className="img-responsive" />
                </div>
                <h3 className="testimonial-info">
                  Diana Steve
                </h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.</p>
              </div>
            </div>
          </div>

            </Slider>
        </div>
      </div>







    </>
  )
}

export default Home