import React from 'react'
import Sliderr from '../components/Slider'
import Slider from "react-slick";
const Home = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <>
  
  
    <Sliderr/>
  
  
  
  
    <div className="booking-form-wrapper bg-white">
  <form action="#">
    <div className="form-group border-bottom d-flex align-items-center justify-content-between flex-wrap">
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
      {/* <div className="d-flex align-items-center my-sm-0 my-2">
        <a href="#" className="text-decoration-none">
          Multi-city/Stopovers{" "}
          <span className="fas fa-angle-right ps-2 text-primary" />
        </a>
      </div> */}
    </div>
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
          placeholder="Depart Date"
          className="form-control"
        />
        <div className="label" id="depart" />
      </div>
      <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
        <input
          type="date"
          required=""
          placeholder="Return Date"
          className="form-control"
        />
        <div className="label" id="return" />
      </div>
    </div>
    <div className="form-group border-bottom d-flex align-items-center position-relative">
      <input
        type="text"
        required=""
        placeholder="Traveller(s)"
        className="form-control"
      />
      <div className="label" id="psngr" />
      <span className="fas fa-users text-muted" />
    </div>
    <div className="form-group my-3">
      <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3">
        Search RV
      </div>
    </div>
  </form>
</div>

    


<div className='container text-center'>
  <div className='row'>
  <h1 className='py-3'>How It Works</h1>
<ul class="nav nav-pills mb-3 py-3" id="pills-tab" role="tablist">
  <li class="nav-item col-md-6 p-1" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Rent A RV</button>
  </li>
  <li class="nav-item col-md-6 p-1" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">List My RV</button>
  </li>

</ul>
<div class="tab-content p-0" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

  
  <div className="container p-0">	

        <div className="">
          <div className="row steps-card-wrapper">
            {/* Card 1 */}
            <div className="col-xs-12 col-sm-6 col-md-3">
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
            <div className="col-xs-12 col-sm-6 col-md-3">
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
            <div className="col-xs-12 col-sm-6 col-md-3">
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
            <div className="col-xs-12 col-sm-6 col-md-3">
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
            <div className="col-xs-12 col-sm-6 col-md-3">
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
            <div className="col-xs-12 col-sm-6 col-md-3">
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
            <div className="col-xs-12 col-sm-6 col-md-3">
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
            <div className="col-xs-12 col-sm-6 col-md-3">
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
</div>
</div>
</div>



<div className='container'>
<div className='row loaction-card-wrap mt-2 mb-5'>
<h1 className='text-center py-5'>Top RV Rental Locations</h1>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img className="profile" width="100%" src="https://files.rvngo.com/assets/city/lasvegas-94478218b4c7657ce7d335bcce6afc5a41f13b4d40c7939b1939b21c17bf53d7.jpg" alt="Neymar" />
                  {/* <h2>Neymar</h2> */}
                </div>
                <div className="back from-left">
                  <h2>LAS VEGAS</h2>
                  {/* <h3>10</h3>
                  <h3>PSG | BRA</h3>
                  <img className="tem-img" src="https://github.com/free-source-code-bd/all-public-resource/blob/main/psg.jpg?raw=true" alt="" /> &nbsp;
                  <img className="tem-img" src="https://github.com/free-source-code-bd/all-public-resource/blob/main/bra.jpg?raw=true" alt="" />  <br /> */}
                  <p className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in
                  </p>
                  <ul className="social-icon">
                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                    <li><a href><i className="fab fa-instagram" /></a></li>
                    <li><a href><i className="fab fa-twitter" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img className="profile" width="100%" src="https://files.rvngo.com/assets/city/tampa-6a3c6b26466809347d1042d5fc9517b4d61927d3161fe2134b551cae7c89b7e6.png" alt="Neymar" />
                  {/* <h2>Neymar</h2> */}
                </div>
                <div className="back from-left">
                  <h2>TAMPA</h2>
                  {/* <h3>10</h3>
                  <h3>PSG | BRA</h3>
                  <img className="tem-img" src="https://github.com/free-source-code-bd/all-public-resource/blob/main/psg.jpg?raw=true" alt="" /> &nbsp;
                  <img className="tem-img" src="https://github.com/free-source-code-bd/all-public-resource/blob/main/bra.jpg?raw=true" alt="" />  <br /> */}
                  <p className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in
                  </p>
                  <ul className="social-icon">
                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                    <li><a href><i className="fab fa-instagram" /></a></li>
                    <li><a href><i className="fab fa-twitter" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img className="profile" width="100%" src="https://files.rvngo.com/assets/city/miami-43cffa5a83d2097be177098e35bb9987d63940d3e0c34250934a351495af65ee.png" alt="Neymar" />
                  {/* <h2>Neymar</h2> */}
                </div>
                <div className="back from-left">
                  <h2>MIAMI</h2>
                  {/* <h3>10</h3>
                  <h3>PSG | BRA</h3>
                  <img className="tem-img" src="https://github.com/free-source-code-bd/all-public-resource/blob/main/psg.jpg?raw=true" alt="" /> &nbsp;
                  <img className="tem-img" src="https://github.com/free-source-code-bd/all-public-resource/blob/main/bra.jpg?raw=true" alt="" />  <br /> */}
                  <p className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in
                  </p>
                  <ul className="social-icon">
                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                    <li><a href><i className="fab fa-instagram" /></a></li>
                    <li><a href><i className="fab fa-twitter" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img className="profile" width="100%" src="https://files.rvngo.com/assets/city/lasvegas-94478218b4c7657ce7d335bcce6afc5a41f13b4d40c7939b1939b21c17bf53d7.jpg" alt="Neymar" />
                  {/* <h2>Neymar</h2> */}
                </div>
                <div className="back from-left">
                  <h2>LAS VEGAS</h2>
                  {/* <h3>10</h3>
                  <h3>PSG | BRA</h3>
                  <img className="tem-img" src="https://github.com/free-source-code-bd/all-public-resource/blob/main/psg.jpg?raw=true" alt="" /> &nbsp;
                  <img className="tem-img" src="https://github.com/free-source-code-bd/all-public-resource/blob/main/bra.jpg?raw=true" alt="" />  <br /> */}
                  <p className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in
                  </p>
                  <ul className="social-icon">
                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                    <li><a href><i className="fab fa-instagram" /></a></li>
                    <li><a href><i className="fab fa-twitter" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img className="profile" width="100%" src="https://files.rvngo.com/assets/city/tampa-6a3c6b26466809347d1042d5fc9517b4d61927d3161fe2134b551cae7c89b7e6.png" alt="Neymar" />
                  {/* <h2>Neymar</h2> */}
                </div>
                <div className="back from-left">
                  <h2>TAMPA</h2>
                  {/* <h3>10</h3>
                  <h3>PSG | BRA</h3>
                  <img className="tem-img" src="https://github.com/free-source-code-bd/all-public-resource/blob/main/psg.jpg?raw=true" alt="" /> &nbsp;
                  <img className="tem-img" src="https://github.com/free-source-code-bd/all-public-resource/blob/main/bra.jpg?raw=true" alt="" />  <br /> */}
                  <p className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in
                  </p>
                  <ul className="social-icon">
                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                    <li><a href><i className="fab fa-instagram" /></a></li>
                    <li><a href><i className="fab fa-twitter" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img className="profile" width="100%" src="https://files.rvngo.com/assets/city/miami-43cffa5a83d2097be177098e35bb9987d63940d3e0c34250934a351495af65ee.png" alt="Neymar" />
                  {/* <h2>Neymar</h2> */}
                </div>
                <div className="back from-left">
                  <h2>MIAMI</h2>
                  {/* <h3>10</h3>
                  <h3>PSG | BRA</h3>
                  <img className="tem-img" src="https://github.com/free-source-code-bd/all-public-resource/blob/main/psg.jpg?raw=true" alt="" /> &nbsp;
                  <img className="tem-img" src="https://github.com/free-source-code-bd/all-public-resource/blob/main/bra.jpg?raw=true" alt="" />  <br /> */}
                  <p className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in
                  </p>
                  <ul className="social-icon">
                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                    <li><a href><i className="fab fa-instagram" /></a></li>
                    <li><a href><i className="fab fa-twitter" /></a></li>
                  </ul>
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
  <div className='col-md-4 '>
    <div className='flexible-img'>
      <img src="https://files.rvngo.com/assets/icons/pull-camper-693369f3403b67100a30df18e8eef1bb272a5270fe7c7ca3d9e1e3d06fc0ca20.svg"/>
    </div>
  </div>
  <div className='col-md-4 '>
    <div className='flexible-img'>
      <img src="https://files.rvngo.com/assets/icons/pet-love-d382132f36bc3bf85ea33ba2c1737e2c84d6125b7663416bb971650d482badfc.svg"/>
    </div>
  </div>
  <div className='col-md-4 '>
    <div className='flexible-img'>
      <img src="https://files.rvngo.com/assets/icons/chair-badge-5cd8e442585050b977fc6edf20455efe742ff88a8f7414c932557a72a18d1100.svg"/>
    </div>
  </div>

  </div>
  </div>
</div>
    
</section>




<div className='container'>
<div className='row loaction-card-wrap mt-2 mb-5'>
<h1 className='text-center py-5'>Latest On The Go Posts</h1>
        <div className="row">

<div className='col-md-4'>

        <div className="wrapper">
        <div className="card">
          <div className="card__img">
            <img src="https://files.rvngo.com/assets/couple-celebrate-a854016a0a1ccacad333332a7d15de089bbeb52690cfca5dfe066f2aebc66568.png" />
          </div>
          <div className="card__content">
            <h3 className="card__title">What Is The Cheapest Way To Rent An RV?</h3>
            <div className="card__excerpt">
              <p>The absolute cheapest way to rent an RV is to rent through RVnGO. They don’t charge ANY transaction..</p>
            </div>
          </div>
          <div className="card__link">
            <a href className="button">Learn More</a>
          </div>
        </div>
      </div>
      </div>

      <div className='col-md-4'>

        <div className="wrapper">
        <div className="card">
          <div className="card__img">
            <img src="https://files.rvngo.com/assets/couple-9c5ef4950bce9185424ff2e2896ed4f548326da9038ff919510683c73fce4355.png" />
          </div>
          <div className="card__content">
            <h3 className="card__title">Getting Insurance for An RV Rental</h3>
            <div className="card__excerpt">
              <p>Every year there are thousands of Americans who make like Steppinwolf Steppinwolf Steppinwolf...</p>
            </div>
          </div>
          <div className="card__link">
            <a href className="button">Learn More</a>
          </div>
        </div>
      </div>
      </div>

      <div className='col-md-4'>

        <div className="wrapper">
        <div className="card">
          <div className="card__img">
            <img src="https://files.rvngo.com/assets/couple-celebrate-a854016a0a1ccacad333332a7d15de089bbeb52690cfca5dfe066f2aebc66568.png" />
          </div>
          <div className="card__content">
            <h3 className="card__title">How To Choose Between A Class A or Class C RV</h3>
            <div className="card__excerpt">
              <p>Purchasing or renting an RV is an exciting experience for many people who love adventure...</p>
            </div>
          </div>
          <div className="card__link">
            <a href className="button">Learn More</a>
          </div>
        </div>
      </div>
      </div>
          
      </div>



</div>
</div>







{/* <Slider {...settings}>
<div className="container">
        <div className="row">
        <div className="col-md-6">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="pic">
                  <img src="http://www.markharwood.plus.com/images/people%20large/people8.jpg" alt="" className="img-responsive" />
                </div>
                <h3 className="testimonial-info">
                  Diana
                  <small>Web Designer</small>
                </h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="pic">
                  <img src="http://www.markharwood.plus.com/images/people%20large/people8.jpg" alt="" className="img-responsive" />
                </div>
                <h3 className="testimonial-info">
                  Diana
                  <small>Web Designer</small>
                </h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="pic">
                  <img src="http://www.markharwood.plus.com/images/people%20large/people8.jpg" alt="" className="img-responsive" />
                </div>
                <h3 className="testimonial-info">
                  Diana
                  <small>Web Designer</small>
                </h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="pic">
                  <img src="http://www.markharwood.plus.com/images/people%20large/people8.jpg" alt="" className="img-responsive" />
                </div>
                <h3 className="testimonial-info">
                  Diana
                  <small>Web Designer</small>
                </h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.</p>
              </div>
            </div>
          </div>
          </div>
      </div>
        </Slider> */}



<div className="container">
        <div className="row">
          <h1 className='text-center py-5'>What Our Client Says</h1>
          <div className="col-md-6">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="pic">
                  <img src="https://images.pexels.com/photos/8035299/pexels-photo-8035299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="img-responsive" />
                </div>
                <h3 className="testimonial-info">
                  Alex Jhon
                  {/* <small>Web Designer</small> */}
                </h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="pic">
                  <img src="https://media.istockphoto.com/photos/shot-of-an-attractive-young-businesswoman-standing-alone-outside-and-picture-id1348830933?b=1&k=20&m=1348830933&s=170667a&w=0&h=GpYjlzghbtqMmZNZhRBIqZb0_d8HGmQl1WA9dBZHO6w=" alt="" className="img-responsive" />
                </div>
                <h3 className="testimonial-info">
                  Diana Steve
                  {/* <small>Web Designer</small> */}
                </h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>







    </>
  )
}

export default Home