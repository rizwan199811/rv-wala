import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import moment from 'moment'


const RVforSale = () => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
      }
    
    
  return (
    <div>
             <section className="single-product-carousel">
        <div className="container">
          <div className="row my-4">
            <div className="border-bottom p-0 mb-3 d-flex justify-content-between align-items-baseline">
              <h3>THIS RV IS FOR SALE</h3>
              <h6>$200/night</h6>
            </div>
            <div className="col-md-7">
              <div className="col-md-12 thumnail-carousel">
                <div
                  id="custCarousel"
                  className="carousel slide"
                  data-ride="carousel"
                  align="center"
                >
                  {/* slides */}
                  <div className="carousel-inner">
                    {/* {images.map((x) => {
                      return (
                        <div
                          className={
                            x.active ? 'carousel-item active' : 'carousel-item'
                          }
                        >
                          <img src={x.path} alt="Hills" />
                        </div>
                      )
                    })} */}
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
                  <a
                    className="carousel-control-prev"
                    href="#custCarousel"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#custCarousel"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon" />
                  </a>
                  {/* Thumbnails */}
                  <ol className="carousel-indicators list-inline">
                    {/* {images.map((x, index) => {
                      return (
                        <li
                          className={
                            x.active
                              ? 'list-inline-item active'
                              : 'list-inline-item'
                          }
                        >
                          <a
                            id={`carousel-selector-${index}`}
                            className="selected"
                            data-slide-to={index}
                            data-target="#custCarousel"
                          >
                            <img src={x.path} className="img-fluid" />
                          </a>
                        </li>
                      )
                    })} */}
                  </ol>
                </div>
              </div>
              <div className="col-12 rv_details_tabs mt-5 mb-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item col-4" role="presentation">
                    <button
                      className="nav-link active"
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
                  <li className="nav-item col-4" role="presentation">
                    <button
                      className="nav-link"
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
                  <li className="nav-item col-4" role="presentation">
                    <button
                      className="nav-link"
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
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div>
                      <div className="d-flex justify-content-evenly py-4">
                        <h5>
                          <sup>$</sup>
                          {/* {RV.Pricing && RV.Pricing.nightly} */}
                          <sup>/night</sup>
                        </h5>
                        <h5>
                          <sup>$</sup>
                          {/* {RV.Pricing && RV.Pricing.weekly} */}
                          <sup>/week</sup>
                        </h5>
                        <h5>
                          <sup>$</sup>
                          {/* {RV.Pricing && RV.Pricing.monthly} */}
                          <sup>/month</sup>
                        </h5>
                      </div>
                      <div className="row my-4">
                        <div className="col-md-6 mb-3">
                          <div>
                            <h4>Deposits</h4>
                            <div>
                              <h6>BOOKING DEPOSIT</h6>
                              {/* <p>${RV.Pricing && RV.Pricing.deposit}</p> */}
                              <h6>SECURITY DEPOSIT (REFUNDABLE)</h6>
                              {/* <p>${RV.Pricing && RV.Pricing.damage_deposit}</p> */}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 mb-3">
                          <div>
                            <h4>Cancellation Policy</h4>
                            <div>
                              <h6>
                                {/* {RV.ListInfo &&
                                  RV.ListInfo.cancel_policy
                                    .charAt(0)
                                    .toUpperCase() +
                                    RV.ListInfo.cancel_policy.slice(1)} */}
                              </h6>
                              <p>More Details </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 mb-3">
                          <div>
                            <h4>Fees</h4>
                            <div>
                              <h6>CLEANING FEE</h6>
                              {/* <p>${RV.Pricing && RV.Pricing.cleaning_fee}</p> */}
                            </div>
                          </div>
                        </div>
                        {/* {RV.RVInfo && RV.Pricing.mileage && (
                          <div className="col-md-6 mb-3">
                            <div>
                              <h4>Mileage</h4>
                              <div>
                                <h6>INCLUDED</h6>
                                <p>
                                  {(RV.RVInfo &&
                                    RV.Pricing.mileage &&
                                    RV.Pricing.mileage
                                      .max_free_miles_per_night) ||
                                    0}{' '}
                                  miles/day
                                </p>
                                <h6>EXCESS</h6>
                                <p>
                                  $
                                  {(RV.RVInfo &&
                                    RV.Pricing.mileage &&
                                    RV.Pricing.mileage
                                      .per_extra_miles_charge) ||
                                    0}
                                  /mile
                                </p>
                              </div>
                            </div>
                          </div>
                        )} */}

                        <div className="col-md-6 mb-3">
                          <div>
                            <h4>Electric Generator</h4>
                            <div>
                              {/* {RV.Pricing && RV.Pricing.generator && (
                                <>
                                  <h6>INCLUDED</h6>
                                  <p>
                                    {RV.Pricing.generator.free_hours_per_night}{' '}
                                    hours/day
                                  </p>
                                </>
                              )} */}
                              {/* {RV.Pricing && !RV.Pricing.generator && (
                                <>
                                  <h6>NOT INCLUDED</h6>
                                </>
                              )} */}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 mb-3">
                          <div>
                            <h4>Pets</h4>
                            <div>
                              <h6>ALLOWED</h6>
                              <p>
                                {/* {(RV.Pricing && RV.Pricing.pet && 'Yes') ||
                                  'No'} */}
                              </p>
                              {/* {RV.Pricing && RV.Pricing.pet && (
                                <>
                                  <h6>FEE</h6>
                                  <p>${RV.Pricing.pet.pet_fee}/pet</p>
                                </>
                              )} */}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 mb-3">
                          <div>
                            <h4>Delivery</h4>
                            <div>
                              <h6>AVAILABLE</h6>
                              <p>
                                {/* {(RV.Pricing && RV.Pricing.delivery && 'Yes') ||
                                  'No'} */}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 mb-3">
                          <div>
                            <h4>One-Way Rentals</h4>
                            <div>
                              <h6>AVAILABLE</h6>
                              <p>
                                {/* {(RV.Pricing &&
                                  RV.Pricing.rental_avaliability &&
                                  'Yes') ||
                                  'No'} */}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 mb-3">
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
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    {/* {RV.RVInfo && (
                      <div>
                        <h4>Vehicle</h4>
                        <div className="row py-3">
                          <div className="col-sm-6 mb-2">
                            <h6>MAKE</h6>
                            <p>{RV.RVInfo.make}</p>
                          </div>
                          <div className="col-sm-6 mb-2">
                            <h6>MODEL</h6>
                            <p>{RV.RVInfo.model}</p>
                          </div>
                          <div className="col-sm-6 mb-2">
                            <h6>YEAR</h6>
                            <p>{RV.RVInfo.year}</p>
                          </div>

                          <div className="col-sm-6 mb-2">
                            <h6>TYPE</h6>
                            <p>{RV.RVInfo.type}</p>
                          </div>
                          <div className="col-sm-6 mb-2">
                            <h6>LENGTH</h6>
                            <p>{RV.RVInfo.length}</p>
                          </div>
                          <div className="col-sm-6 mb-2">
                            <h6>WEIGHT</h6>
                            <p>{RV.RVInfo.weight}</p>
                          </div>
                        </div>

                        <h4>Accommodations</h4>
                        <div className="row py-3">
                          <div className="col-sm-6 mb-2">
                            <h6>BEDS</h6>
                            <p>{RV.RVInfo.sleep}</p>
                          </div>
                          <div className="col-sm-6 mb-2">
                            <h6>SEATBELTS</h6>
                            <p>{RV.RVInfo.seatbelts}</p>
                          </div>
                          <div className="col-sm-6 mb-2">
                            <h6>SLIDE-OUTS</h6>
                            <p>{RV.RVInfo.slides}</p>
                          </div>
                        </div>

                        <h4>Full Description</h4>
                        <div className="row py-3">
                          <div>
                            <p>
                              {(RV.ListInfo && RV.ListInfo.description) ||
                                'No description provided'}
                            </p>
                          </div>
                        </div>
                      </div>
                    )} */}
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
                          <h4>Inside</h4>
                          {/* {RV.featuresArray &&
                            RV.featuresArray.map((x) => {
                              if (x.type == 'inside') {
                                return (
                                  <div className="col-md-4 mt-3">
                                    <input
                                      type="checkbox"
                                      name={x.value}
                                      defaultChecked
                                      disabled
                                    />
                                    <label>{x.label}</label>
                                  </div>
                                )
                              }
                            })} */}
                        </div>

                        <div className="row dposit-inp my-3">
                          <h4>Outdoors</h4>
                          {/* {RV.featuresArray &&
                            RV.featuresArray.map((x) => {
                              if (x.type == 'outside') {
                                return (
                                  <div className="col-md-4 mt-3">
                                    <input
                                      type="checkbox"
                                      name={x.value}
                                      defaultChecked
                                      disabled
                                    />
                                    <label>{x.label}</label>
                                  </div>
                                )
                              }
                            })} */}
                        </div>

                        <div className="row dposit-inp my-3">
                          <h4>Other</h4>
                          {/* {RV.featuresArray &&
                            RV.featuresArray.map((x) => {
                              if (x.type == 'others') {
                                return (
                                  <div className="col-md-4 mt-3">
                                    <input
                                      type="checkbox"
                                      name={x.value}
                                      defaultChecked
                                      disabled
                                    />
                                    <label>{x.label}</label>
                                  </div>
                                )
                              }
                            })} */}

                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-detail-user-card">
                <div className="card">
                  <p className="your-host-text">
                    Your
                    <br /> Host
                  </p>
                  <div className="img">
                    <img
                      src=
                        // (RV.user.profileImage && RV.user.profileImage) ||
                        'https://res.cloudinary.com/dxtpcpwwf/image/upload/v1616176827/Asaan-Dukaan/default-avatar-profile-icon-vector-18942381_hytaov.jpg'
                      
                    />
                    {/* <h2>{RV.user && RV.user.fullname}</h2> */}
                  </div>
                  <div className="infos">
                    {/* <div className="name">
                      <h2>{RV.user && RV.user.fullname}</h2>
                    </div> */}
                    <div className="row">
                      <div className="col-sm-6 col-12">
                        <div className="name">
                          <h2>Member Since</h2>
                          {/* <h4>{moment(RV.user.createdAt).year()}</h4> */}
                        </div>
                      </div>
                      <div className="col-sm-6 col-12">
                        <div className="name">
                          <h2>Responds to Inquiries</h2>
                          <h4>More often than not</h4>
                        </div>
                      </div>
                      <div className="col-sm-6 col-12">
                        <div className="name">
                          <h2># Listings</h2>
                          {/* <h4>{RV.listingCount}</h4> */}
                        </div>
                      </div>
                      <div className="col-sm-6 col-12">
                        <div className="name">
                          <h2>Verified Member</h2>
                          <img
                            src="https://files.rvngo.com/a/rvrd-member-sm-74d1df166814dffe11f382517d7df3f45caf996605fb4ef350047af31e6f3efd.webp"
                            style={{ width: 'auto' }}
                          />
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
                <h3>
                  {/* {RV.RVInfo.year} {RV.RVInfo.make} {RV.RVInfo.model}{' '} */}
                </h3>
                {/* <p>in {RV.ListInfo.address}</p> */}
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label htmlFor="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label htmlFor="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label htmlFor="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label htmlFor="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label htmlFor="star1" title="text">
                    1 star
                  </label>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-12">
                    <em>To inquire about buying this RV, please fill in and submit the form below.</em>
                  <form>
                  <div className="mb-3 mt-3 ">
          <label  className="form-label">Name</label>
          <input type="text" className="form-control" placeholder='Enter Name' autoComplete='off'/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="" placeholder='Enter Email address'/>
        </div>
        
  
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea type="text" className="form-control" placeholder='Enter Email Mesaage' />
        </div>
  
      </form>
                  </div>

                </div>
              </div>
     
              {/* {!token && (
                <div className="alert alert-warning" role="alert">
                  To make an inquiry for this listing, please log-in or sign-up.
                  Once logged-in, you'll be brought back here to complete your
                  inquiry.
                  <div className="d-flex justify-content-center mt-3">
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
              )} */}

                <button
                  className="btn btn-primary login-wrapper-btn"
                  type="submit"

                >
                 Contact Seller
                </button>

              {/* <button
                  className="btn btn-primary login-wrapper-btn"
                  type="submit"
                >
                  Send Message
                </button> */}
            </div>
          </div>
          <div className="mb-3 mt-2">
            <h2 className="mb-3 border-bottom"> Nearby RVs</h2>
            <Slider {...settings}>
              <div className="col-md-4 near-rv-card">
                <div className="card">
                  <a className="card-image">
                    <img
                      src="https://files.rvngo.com/u/list_photo/photo/255252/sm_c4f6a0c50608c1bebda1060abebad068.webp"
                      alt=""
                    />
                  </a>
                  <div className="card-description">
                    <h6>The River Run 2021 RAM 3500 High Roof</h6>
                    <p>0 miles away, Nightly Rate: $250</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 near-rv-card">
                <div className="card">
                  <a className="card-image">
                    <img
                      src="https://files.rvngo.com/u/list_photo/photo/255252/sm_c4f6a0c50608c1bebda1060abebad068.webp"
                      alt=""
                    />
                  </a>
                  <div className="card-description">
                    <h6>The River Run 2021 RAM 3500 High Roof</h6>
                    <p>0 miles away, Nightly Rate: $250</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 near-rv-card">
                <div className="card">
                  <a className="card-image">
                    <img
                      src="https://files.rvngo.com/u/list_photo/photo/255252/sm_c4f6a0c50608c1bebda1060abebad068.webp"
                      alt=""
                    />
                  </a>
                  <div className="card-description">
                    <h6>The River Run 2021 RAM 3500 High Roof</h6>
                    <p>0 miles away, Nightly Rate: $250</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 near-rv-card">
                <div className="card">
                  <a className="card-image">
                    <img
                      src="https://files.rvngo.com/u/list_photo/photo/255252/sm_c4f6a0c50608c1bebda1060abebad068.webp"
                      alt=""
                    />
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
    </div>
  )
}

export default RVforSale