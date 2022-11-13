import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/rvwala-about.jpg';
import image2 from '../images/slider2.jpg';

const AboutUs = () => {
  return (
    <>
  <section className="about-bg">
    <div className="container">
      <div className="row">
        <div>
          <h1>ABOUT US</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="about-sec-wrapper">
    <div className="container">
      <div className="row my-5">
        <div className="col-md-12">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-5 about-inner-div">
              <div className="about-img-wrap">
                <img src={image1} alt="Destine With Our Vision" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-content-wrap mt-3">
                <h3>Destine With Our Vision</h3>
                <p>
                Are you experiencing stress due to workload? Well, we all have experienced such times in our lives when we need something refreshing. Vacations can become the best time when planned right. We hope you are doing most of your fun with your friends and family. Making your vacation a success with our RVs is our priority. Our goal is to satisfy our customers with our services.
                </p>
                <p>
                  Doctors are ready to help you get the care you need, anywhere
                  in the United States. Access to doctors, psychiatrists,
                  psychologists, therapists and other medical experts, care is
                  available from 07:00 AM to 08:00 PM. Select and see your
                  favorite providers again and again, right from your
                  smartphone, tablet or computer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about-sec-wrapper-2">
    <div className="container">
      <div className="row my-5">
        <div className="col-md-12">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="about-content-wrap-2 mb-3">
                <h3>What is RV Wala?</h3>
                <p>
                RV Wala is a brand located in Canada to provide you with a whole new experience. We offer well-maintained rental services at a pretty affordable price to our customers.<Link to="/"> RV Wala</Link> has its focus fixed on providing the best holidays and vacations.
                </p>
                <p>Inviting you all to hire our services makes us feel happy. Also, we strive to make your experience stress-free with our assistance with a sincere commitment to our customers.</p>
                <p className='mt-3'>Our Brand devotes its services to r customers providing you with top-notch services with pre-knowledge about RVs. We work with experienced staff to help you with a suitable ecosystem for your tours. Further, RVs are easy to access with reliable equipment and safe locks.</p>
              </div>
            </div>
            <div className="col-md-5 about-inner-div">
              <div className="about-img-wrap-2">
                <img src={image2} alt="What is RV Wala" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="counter-sec-wrapper">
    <div className="container">
      <div className="row justify-content-around">
      <h1 className='text-white'>Don’t Miss Out Our Offers By Joining Us on <a href="https://www.facebook.com/thervwala" target="_blank" title="Social Media">Social Media</a></h1>
      </div>
    </div>
  </section>
</>

  )
}

export default AboutUs