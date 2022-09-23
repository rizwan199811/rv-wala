import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { baseURL } from '../config/apiURL'
import Slider from "react-slick";
import image1 from '../images/loigin.jpg'

const SingleDetailRV = () => {


  useEffect(() => {
    fetchRV()
  }, [])

  const [RV, setRV] = useState({})
  const { id } = useParams();
  const fetchRV = async () => {
    try {

      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      const {
        data: {
          data,
        },
      } = await axios.get(baseURL + '/rv/' + id, { headers })
      setRV(data)
    } catch (e) { }
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
  };
  return (
    <>
          <section className="single-product-carousel">
            <div className="container">
              <div className="row my-4">
                <div className='border-bottom p-0 mb-3 d-flex justify-content-between align-items-baseline'>
                  <h3>THIS RV IS FOR RENT</h3>
                  <h6>$240/night</h6>
                </div>
                <div className="col-md-7">
                  <div className="col-md-12 thumnail-carousel">
                    <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">
                      {/* slides */}
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src="https://i.imgur.com/weXVL8M.jpg" alt="Hills" />
                        </div>
                        <div className="carousel-item">
                          <img src="https://i.imgur.com/Rpxx6wU.jpg" alt="Hills" />
                        </div>
                        <div className="carousel-item">
                          <img src="https://i.imgur.com/83fandJ.jpg" alt="Hills" />
                        </div>
                        <div className="carousel-item">
                          <img src="https://i.imgur.com/JiQ9Ppv.jpg" alt="Hills" />
                        </div>
                      </div>
                      {/* Left right */}
                      <a className="carousel-control-prev" href="#custCarousel" data-slide="prev">
                        <span className="carousel-control-prev-icon" />
                      </a>
                      <a className="carousel-control-next" href="#custCarousel" data-slide="next">
                        <span className="carousel-control-next-icon" />
                      </a>
                      {/* Thumbnails */}
                      <ol className="carousel-indicators list-inline">
                        <li className="list-inline-item active">
                          <a id="carousel-selector-0" className="selected" data-slide-to={0} data-target="#custCarousel">
                            <img src="https://i.imgur.com/weXVL8M.jpg" className="img-fluid" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a id="carousel-selector-1" data-slide-to={1} data-target="#custCarousel">
                            <img src="https://i.imgur.com/Rpxx6wU.jpg" className="img-fluid" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a id="carousel-selector-2" data-slide-to={2} data-target="#custCarousel">
                            <img src="https://i.imgur.com/83fandJ.jpg" className="img-fluid" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a id="carousel-selector-2" data-slide-to={3} data-target="#custCarousel">
                            <img src="https://i.imgur.com/JiQ9Ppv.jpg" className="img-fluid" />
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className='col-12 rv_details_tabs mb-3'>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active"
                          id="home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#home"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Pricing
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#profile"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Listing
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="contact-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#contact"
                          type="button"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          Amenities
                        </button>
                      </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div>
                          <div className="d-flex justify-content-evenly py-4">
                            <h5>
                              <sup>$</sup>240<sup>/night</sup>
                            </h5>
                            <h5>
                              <sup>$</sup>1800<sup>/week</sup>
                            </h5>
                            <h5>
                              <sup>$</sup>7000<sup>/month</sup>
                            </h5>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div>
                                <h4>Deposits</h4>
                                <div>
                                  <h6>BOOKING DEPOSIT</h6>
                                  <p>$300</p>
                                  <h6>SECURITY DEPOSIT (REFUNDABLE)</h6>
                                  <p>$800</p>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div>
                                <h4>Cancellation Policy</h4>
                                <div>
                                  <h6>Strict</h6>
                                  <p>More Details </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div>
                                <h4>Fees</h4>
                                <div>
                                  <h6>CLEANING FEE</h6>
                                  <p>$125</p>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div>
                                <h4>Mileage</h4>
                                <div>
                                  <h6>INCLUDED</h6>
                                  <p>120 miles/day</p>
                                  <h6>EXCESS</h6>
                                  <p>$0.50/mile</p>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div>
                                <h4>Electric Generator</h4>
                                <div>
                                  <h6>INCLUDED</h6>
                                  <p>24 hours/day</p>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div>
                                <h4>Pets</h4>
                                <div>
                                  <h6>ALLOWED</h6>
                                  <p>Yes</p>
                                  <h6>FEE</h6>
                                  <p>$20/pet</p>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div>
                                <h4>Delivery</h4>
                                <div>
                                  <h6>AVAILABLE</h6>
                                  <p>NO</p>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div>
                                <h4>One-Way Rentals</h4>
                                <div>
                                  <h6>AVAILABLE</h6>
                                  <p>Yes</p>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div>
                                <h4>Other Prices</h4>
                                <div>
                                  <h6>EXT. PROPANE GAS GRILL </h6>
                                  <p>$50</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div>
                          <div>
                            <h4>Vehicle</h4>
                            <div className="d-flex justify-content-between pt-4">
                              <div>
                                <h6>MAKE</h6>
                                <p>Ram</p>
                              </div>
                              <div>
                                <h6>MODEL</h6>
                                <p>Promaster 3500</p>
                              </div>
                              <div>
                                <h6>YEAR</h6>
                                <p>2021</p>
                              </div>
                            </div>

                            <div className="d-flex justify-content-between pt-4">
                              <div>
                                <h6>TYPE</h6>
                                <p>Class B</p>
                              </div>
                              <div>
                                <h6>LENGTH</h6>
                                <p>21 ft.</p>
                              </div>
                              <div>
                                <h6>WEIGHT</h6>
                                <p>9350 lb.</p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4>Accommodations</h4>
                            <div className="d-flex justify-content-between pt-4">
                              <div>
                                <h6>BEDS</h6>
                                <p>2</p>
                              </div>
                              <div>
                                <h6>SEATBELTS</h6>
                                <p>3</p>
                              </div>
                              <div>
                                <h6>SLIDE-OUTS</h6>
                                <p>0</p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4>Full Description</h4>
                            <div className="d-flex justify-content-between pt-4">
                              <div>
                                <p>
                                  The "Sunset" is a new 2021 Dodge Sprinter Van
                                  designed with sleeping comfort, head-room and
                                  storage in mind. We also spared no expense
                                  when it came to our state of the art solar and
                                  electrical system (includes shore power
                                  hookup) And, because we wanted you to enjoy
                                  the comforts of home on your journey, a hot
                                  water tank, refrigerator, gas stove and dining
                                  table were a must. Multiple 110 and 12 V
                                  outlets throughout the Sunset ensure you're
                                  "plugged in" whether you're winding down in
                                  bed or entertaining outside. Also, The
                                  cabinets and storage are designed to maximize
                                  your living space while allowing you to
                                  quickly access or secure your belongings. HD
                                  rear view camera, satellite radio and tow
                                  package are just a few of the extras you'll
                                  enjoy having.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        <div>
                          <div className="col-md-12">
                            <div className="row dposit-inp">
                              <h4>Deposits</h4>
                              <div className="col-md-3">
                                
                                <input type="checkbox" defaultChecked disabled />
                                <label>FM Radio</label>
                              </div>
                              <div className="col-md-3">
                                <input type="checkbox" defaultChecked disabled />
                                <label>FM Radio</label>
                              </div>
                              <div className="col-md-3">
                                <input type="checkbox" defaultChecked disabled />
                                <label>FM Radio</label>
                              </div>
                              <div className="col-md-3">
                                <input type="checkbox" defaultChecked disabled />
                                <label>FM Radio</label>
                              </div>
                              <div className="col-md-3">
                                <input type="checkbox" defaultChecked disabled />
                                <label>FM Radio</label>
                              </div>
                              <div className="col-md-3">
                                <input type="checkbox" defaultChecked disabled />
                                <label>FM Radio</label>
                              </div>
                              <div className="col-md-3">
                                <input type="checkbox" defaultChecked disabled />
                                <label>FM Radio</label>
                              </div>
                              <div className="col-md-3">
                                <input type="checkbox" defaultChecked disabled />
                                <label>FM Radio</label>
                              </div>
                              <div></div>
                            </div>

                            <div className="row dposit-inp my-3">
                              <h4>Outdoors</h4>
                              <div className="col-md-3">
                                <input type="checkbox" />
                                <label>Outside Shower</label>
                              </div>
                              <div className="col-md-3">
                                <input type="checkbox" />
                                <label>Awning</label>
                              </div>
                              <div className="col-md-3">
                                <input type="checkbox" />
                                <label>Bike Rack</label>
                              </div>

                              <div></div>
                            </div>

                            <div className="row dposit-inp my-3">
                              <h4>Other</h4>
                              <div className="col-md-3">
                                <input type="checkbox" />
                                <label>Generator</label>
                              </div>
                              <div className="col-md-3">
                                <input type="checkbox" />
                                <label>Propane Tank</label>
                              </div>

                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-detail-user-card">
                    <div className="card">
                      <div className="img">
                        <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                      </div>
                      <div className="infos">
                        <div className="name">
                          <h2>Vantrek LLC</h2>
                        </div>
                        <div>
                          <div className='d-flex justify-content-between'>
                            <div className="name">
                              <h2>Member Since</h2>
                              <h4>2021</h4>
                            </div>
                            <div className="name">
                              <h2>Responds to Inquiries</h2>
                              <h4>More often than not</h4>
                            </div>

                          </div>
                          <div className='d-flex justify-content-between'>
                            <div className="name">
                              <h2># Listings</h2>
                              <h4>2</h4>
                            </div>
                            <div className="name">
                              <h2>Verified Member</h2>
                              <img src="https://files.rvngo.com/a/rvrd-member-sm-74d1df166814dffe11f382517d7df3f45caf996605fb4ef350047af31e6f3efd.webp" style={{width:"auto"}} />
                            </div>
                          </div>
                          {/* <div className="name">
                            <h2>Host Rules</h2>
                            <a>Click to View</a>
                          </div> */}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="single-product-sale-div">
                    <h3>2021 Ram Promaster 3500</h3>
                    <p>in Spokane Valley, WA</p>
                    <div class="rate">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text">1 star</label>
                      </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-6">
                        <label>Check In*</label>
                        <input type="date" />
                      </div>
                      <div className="col-md-6">
                        <label>Check Out*</label>
                        <input type="date" />
                      </div>
                      <em className='text-center'>(minimum 1 night rental)</em>
                    </div>
                  </div>
                  <div className='my-3'>
                  <div className="card" style={{width:"100%"}}>
                    <div className="card-header">
                    Invoice
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">An item</li>
                      <li className="list-group-item">A second item</li>
                      <li className="list-group-item">A third item</li>
                    </ul>
                  </div>
                  </div>
                  <div className='my-3'>
                  <div className="card" style={{width:"100%"}}>
                    <div className="card-header">
                    Deposit Terms
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between"><span>Booking Deposit<em>(required to book)</em></span><span><b>$309.27</b></span></li>
                      <li className="list-group-item d-flex justify-content-between"><span>Security Deposit<em>(due by check-in)</em></span><span><b>$800.00</b></span></li>
                      <li className="list-group-item d-flex justify-content-between"><span>Balance Due<em>(due by 10/16)</em></span><span><b>$2,351.22</b></span></li>
                    </ul>
                  </div>
                  </div>
                  <div className='my-3'>
                  <div className="card" style={{width:"100%"}}>
                    <div className="card-header">
                    Other Charges That May Apply
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between"><span>Mileage <br/><em>(120 included a day)</em></span><span className='text-end'><b>$0.50</b><br/><em>per extra mile</em> </span></li>
                      <li className="list-group-item d-flex justify-content-between"><span>Deductible paid by Guest<br/> <em>(per incident)</em></span><span><b>$2,500</b></span></li>
                    </ul>
                  </div>
                  </div>
                  <div class="alert alert-warning" role="alert">
                  To make an inquiry for this listing, please log-in or sign-up. Once logged-in, you'll be brought back here to complete your inquiry.
                 <div className='d-flex justify-content-center mt-3'>
                 <div className="nav-item">
                      <Link to="/login" className="nav-link log" href="#">
                      Login
                      </Link>
                    </div>
                    <div className="nav-item">
                      <Link to="/signup" className="nav-link reg" href="#">
                      Sign up
                      </Link>
                    </div>
                 </div>
                  </div>
                </div>
              </div>
              <div className='mb-3 mt-2'>
                <h2 className='mb-3 border-bottom'> Nearby RVs</h2>
                <Slider {...settings}>
                  <div class="col-md-4 near-rv-card">

                    <div className="card">
                      <a className="card-image" >
                        <img src="https://files.rvngo.com/u/list_photo/photo/255252/sm_c4f6a0c50608c1bebda1060abebad068.webp" alt="" />
                      </a>
                      <div className="card-description">
                        <h6>The River Run 2021 RAM 3500 High Roof</h6>
                        <p>0 miles away, Nightly Rate: $250</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 near-rv-card">

                    <div className="card">
                      <a className="card-image" >
                        <img src="https://files.rvngo.com/u/list_photo/photo/255252/sm_c4f6a0c50608c1bebda1060abebad068.webp" alt="" />
                      </a>
                      <div className="card-description">
                        <h6>The River Run 2021 RAM 3500 High Roof</h6>
                        <p>0 miles away, Nightly Rate: $250</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 near-rv-card">

                    <div className="card">
                      <a className="card-image" >
                        <img src="https://files.rvngo.com/u/list_photo/photo/255252/sm_c4f6a0c50608c1bebda1060abebad068.webp" alt="" />
                      </a>
                      <div className="card-description">
                        <h6>The River Run 2021 RAM 3500 High Roof</h6>
                        <p>0 miles away, Nightly Rate: $250</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 near-rv-card">

                    <div className="card">
                      <a className="card-image" >
                        <img src="https://files.rvngo.com/u/list_photo/photo/255252/sm_c4f6a0c50608c1bebda1060abebad068.webp" alt="" />
                      </a>
                      <div className="card-description">
                        <h6>The River Run 2021 RAM 3500 High Roof</h6>
                        <p>0 miles away, Nightly Rate: $250</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </section>
    </>
  )
}

export default SingleDetailRV
