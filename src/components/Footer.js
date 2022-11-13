import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta py-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt" />
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>1010 Avenue,Saskatchewan, Canada</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone" />
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>9876543210 0</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open" />
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="footer-content py-4">
            <div className='container'>
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-3 mb-50 ">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src="https://rvwala.com/wp-content/uploads/2022/06/cropped-Untitled-design-3.png" className="img-fluid" alt="logo" /></a>
                  </div>
                  <div className="footer-text">
                    <p className='fs-5'>Book an RV seeking adventures of Canada.</p>
                  </div>
                  {/* <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#"><i className="fab fa-facebook-f facebook-bg" /></a>
                    <a href="#"><i className="fab fa-twitter twitter-bg" /></a>
                    <a href="#"><i className="fab fa-google-plus-g google-bg" /></a>
                  </div> */}
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30 ">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">about</Link></li>
                    <li><Link to="/rvs-for-rent">Listing</Link></li>
                    <li><Link to="/contact-us">Contact</Link></li>

                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    {/* <h3>Subscribe</h3> */}
                    <h3>Follow us</h3>
                  </div>
                  <div className="footer-social-icon">
                    <a href="#"><i className="fab fa-facebook-f facebook-bg" /></a>
                    <a href="#"><i className="fab fa-twitter twitter-bg" /></a>
                    <a href="#"><i className="fab fa-google-plus-g google-bg" /></a>
                  </div>
                  {/* <div className="footer-text mb-25">
                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button><i className="fab fa-telegram-plane" /></button>
                    </form>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright ©  RV Wala | 2022, All Right Reserved</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="">Terms</Link></li> */}
                    <li><Link to="">Terms of Use</Link></li>
                    <li><Link to="/privacy-policy">Policy Policy</Link></li>
                    {/* <li><Link to="/contact-us">Contact</Link></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer