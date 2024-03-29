import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { baseURL } from '../../../config/apiURL'
import Slider from 'react-slick'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { setBookingDetails } from '../../../app/slice/BookSlice'
import { toast, ToastContainer } from 'react-toastify'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { toastOptionsDate } from '../../../config/toast'
import { Review } from '../../../components/Modals/Review'
const _ =require('lodash')
// import DatePicker from 'react-multi-date-picker'
const SingleDetailRV = ({
  RV,
  images,
  loading,
  error,
  invoiceInfo,
  handleDateChange,
  token,
  bookNow,
  startDate,
  endDate,
  notFoundError
}) => {
  console.log({ startDate })
  // const settings = {
  //   className: 'center',
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: '60px',
  //   slidesToShow: 4,
  //   speed: 500,
  //   autoplay: true,
  //   dots: true,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 500,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //   ],
  // }

  const settings = {
    // dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const history = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams();
  console.log({ searchParams: searchParams.get('rvClass') })

  const itemsPerPage = 12, minDistance = 0;
  let initialShow = {
    price: false,
    distance: false,
  }

  const [RVs, setRVs] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  // const [loading, setLoading] = useState(false)
  const [show, toggleShow] = useState(initialShow)
  const [value, setValue] = useState([0, 1000]);
  const [searchCriteria, setSearch] = useState({});

  useEffect(() => {
    // fetchRVs()
  }, [])
  const fetchRVs = async (currentPage = 1) => {
    try {
      let queryParams = {};
      const rvClass =RV?.RVInfo?.type;
      queryParams = rvClass ? { class: rvClass } : queryParams;
      console.log({ queryParams })
      setRVs([])
      // setLoading(true)
      let body = {
        page: currentPage,
        limit: itemsPerPage,
        searchCriteria: {
          ...searchCriteria,
          ...queryParams,
          disabled:false
        },
        token:localStorage.getItem('token')
      }
      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      const { 
        data: {
          data: { docs, totalPages, limit, page },
        },
      } = await axios.post(baseURL + '/rv/list', body, { headers })
      setPageCount(totalPages)
      setRVs(docs)
      // setLoading(false)
    } catch (e) { }
  }
console.log(RVs,"RVs")

  return (
    <>
      <section className="single-product-carousel">
        <div className="container">
          <div className="row my-4">
            <div className="border-bottom p-0 mb-3 d-flex justify-content-between align-items-baseline">
              <h3>THIS RV IS FOR RENT</h3>
              <h6>${(RV.Pricing && RV.Pricing.nightly) || 0}/night</h6>
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
                    {images.map((x) => {
                      return (
                        <div
                          className={
                            x.active ? 'carousel-item active' : 'carousel-item'
                          }
                        >
                          <img src={x.path || x.location} alt="Hills" />
                        </div>
                      )
                    })}
                    {/* <div className="carousel-item active">
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
                        </div> */}
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
                    {images.map((x, index) => {
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
                            <img
                              src={x.path || x.location}
                              className="img-fluid"
                            />
                          </a>
                        </li>
                      )
                    })}
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
                          {RV.Pricing && RV.Pricing.nightly}
                          <sup>/night</sup>
                        </h5>
                        <h5>
                          <sup>$</sup>
                          {RV.Pricing && RV.Pricing.weekly}
                          <sup>/week</sup>
                        </h5>
                        <h5>
                          <sup>$</sup>
                          {RV.Pricing && RV.Pricing.monthly}
                          <sup>/month</sup>
                        </h5>
                      </div>
                      <div className="row my-4">
                        <div className="col-md-6 mb-3">
                          <div>
                            <h4>Deposits</h4>
                            <div>
                              <h6>BOOKING DEPOSIT</h6>
                              <p>${RV.Pricing && RV.Pricing.deposit}</p>
                              <h6>SECURITY DEPOSIT (REFUNDABLE)</h6>
                              <p>${RV.Pricing && RV.Pricing.damage_deposit}</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 mb-3">
                          <div>
                            <h4>Cancellation Policy</h4>
                            <div>
                              <h6>
                                {RV.ListInfo &&
                                  RV.ListInfo.cancel_policy
                                    .charAt(0)
                                    .toUpperCase() +
                                    RV.ListInfo.cancel_policy.slice(1)}
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
                              <p>${RV.Pricing && RV.Pricing.cleaning_fee}</p>
                            </div>
                          </div>
                        </div>
                        {RV.RVInfo && RV.Pricing.mileage && (
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
                        )}

                        <div className="col-md-6 mb-3">
                          <div>
                            <h4>Electric Generator</h4>
                            <div>
                              {RV.Pricing && RV.Pricing.generator && (
                                <>
                                  <h6>INCLUDED</h6>
                                  <p>
                                    {RV.Pricing.generator.free_hours_per_night}{' '}
                                    hours/day
                                  </p>
                                </>
                              )}
                              {RV.Pricing && !RV.Pricing.generator && (
                                <>
                                  <h6>NOT INCLUDED</h6>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 mb-3">
                          <div>
                            <h4>Pets</h4>
                            <div>
                              <h6>ALLOWED</h6>
                              <p>
                                {(RV.Pricing && RV.Pricing.pet && 'Yes') ||
                                  'No'}
                              </p>
                              {RV.Pricing && RV.Pricing.pet && (
                                <>
                                  <h6>FEE</h6>
                                  <p>${RV.Pricing.pet.pet_fee}/pet</p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 mb-3">
                          <div>
                            <h4>Delivery</h4>
                            <div>
                              <h6>AVAILABLE</h6>
                              <p>
                                {(RV.Pricing && RV.Pricing.delivery && 'Yes') ||
                                  'No'}
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
                                {(RV.Pricing &&
                                  RV.Pricing.rental_avaliability &&
                                  'Yes') ||
                                  'No'}
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
                    {RV.RVInfo && (
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
                    )}
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
                          {RV.featuresArray &&
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
                            })}
                            {RV.featuresArray.length===0 && <p>No Data Added</p>}
                        </div>

                        <div className="row dposit-inp my-3">
                          <h4>Outdoors</h4>
                          {RV.featuresArray &&
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
                            })}
                            {RV.featuresArray.length===0 && <p>No Data Added</p>}
                        </div>

                        <div className="row dposit-inp my-3">
                          <h4>Other</h4>
                          {RV.featuresArray &&
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
                            })}
                            {RV.featuresArray.length===0 && <p>No Data Added</p>}
                          <div>
                          </div>
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
                      src={
                        (RV.user.profileImage && RV.user.profileImage) ||
                        'https://res.cloudinary.com/dxtpcpwwf/image/upload/v1616176827/Asaan-Dukaan/default-avatar-profile-icon-vector-18942381_hytaov.jpg'
                      }
                    />
                    <h2>{RV.user && RV.user.fullname}</h2>
                  </div>
                  <div className="infos">
                    {/* <div className="name">
                      <h2>{RV.user && RV.user.fullname}</h2>
                    </div> */}
                    <div className="row">
                      <div className="col-sm-6 col-12">
                        <div className="name">
                          <h2>Member Since</h2>
                          <h4>{moment(RV.user.createdAt).year()}</h4>
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
                          <h4>{RV.listingCount}</h4>
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
                  {RV.RVInfo.year} {RV.RVInfo.make} {RV.RVInfo.model}{' '}
                </h3>
                <p>in {RV.ListInfo.address}</p>
             
                <hr />
                <div className="row">
                  <div className="col-md-12">
                    <DatePicker
                      placeholderText="Select Date"
                      selectsRange={true}
                      startDate={startDate}
                      endDate={endDate}
                      minDate={new Date()}
                      dateFormat="MMMM d, yyy"
                      onChange={(dates) => {
                        handleDateChange(dates)
                      }}
                      isClearable={true}
                      selected={startDate}
                      excludeDates={
                        RV.reserved_dates
                          ? RV.reserved_dates.map((x) => {
                              return new Date(x)
                            })
                          : []
                      }
                    />
                  </div>

                  {RV.ListInfo.for_rent && (
                    <em className="text-center">
                      (minimum {RV.ListInfo.min_nights} night(s) rental)
                    </em>
                  )}
                </div>
              </div>

              <div className="my-3">
                <div className="card  invoice-accor" style={{ width: '100%' }}>
                  <div className="card-header">Invoice</div>
                  <ul className="list-group list-group-flush">
                    <div
                      className="panel-group"
                      id="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <li className="list-group-item d-flex justify-content-between">
                        <div className="panel panel-default col-md-5">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingTwo"
                          >
                            <h6 className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                reservation
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseTwo"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingTwo"
                          >
                            <div className="panel-body">
                              {invoiceInfo.reservation.map((x) => {
                                return (
                                  <p>
                                    <b>{x.date}</b>{' '}
                                    <span className="float-end">${x.rate}</span>{' '}
                                  </p>
                                )
                              })}

                              {/* <p>
                                <b>2022-10-31</b>{' '}
                                <span className="float-end">$98.10</span>{' '}
                              </p>
                              <p>
                                <b>2022-10-31</b>{' '}
                                <span className="float-end">$98.10</span>{' '}
                              </p>
                              <p>
                                <b>2022-10-31</b>{' '}
                                <span className="float-end">$98.10</span>{' '}
                              </p>
                              <p>
                                <b>2022-10-31</b>{' '}
                                <span className="float-end">$98.10</span>{' '}
                              </p> */}
                            </div>
                          </div>
                        </div>
                        <span>${invoiceInfo.reservationTotal}</span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between">
                        <div className="panel panel-default col-md-5">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingThree"
                          >
                            <h6 className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Host Services
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseThree"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingThree"
                          >
                            <div className="panel-body">
                              {invoiceInfo.hostServices.map((x) => {
                                return (
                                  <p>
                                    <b>{x.label}</b>{' '}
                                    <span className="float-end">
                                      ${x.value}
                                    </span>{' '}
                                  </p>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                        <span>${invoiceInfo.hostServicesTotal}</span>
                      </li>

                      {/* <li className="list-group-item d-flex justify-content-between">
                        <div className="panel panel-default col-md-5">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingFour"
                          >
                            <h6 className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                RVnGO Services
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseFour"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingFour"
                          >
                            <div className="panel-body">
                              <p>
                                <b>Insurance</b>{' '}
                                <span className="float-end">$210.00</span>{' '}
                              </p>
                              <p>
                                <b>Roadside Assistance</b>{' '}
                                <span className="float-end">$98.10</span>{' '}
                              </p>
                              <p>
                                <b>Processing Fee</b>{' '}
                                <span className="float-end">$98.10</span>{' '}
                              </p>
                            </div>
                          </div>
                        </div>
                        <span>$325.84</span>
                      </li> */}
                    </div>

                    {/* <li className="list-group-item d-flex justify-content-between">
                      <b>Total</b>
                      <span>
                        $
                        {invoiceInfo.reservationTotal +
                          invoiceInfo.hostServicesTotal +
                          (invoiceInfo.reservationTotal +
                            invoiceInfo.hostServicesTotal) }
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="my-3">
                <div className="card" style={{ width: '100%' }}>
                  <div className="card-header">Deposit Terms</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                      <span>
                        Booking Deposit<em>(required to book)</em>
                      </span>
                      <span>
                        <b>${RV.Pricing.deposit}</b>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>
                        Security Deposit<em>(due by check-in)</em>
                      </span>
                      <span>
                        <b>${RV.Pricing.damage_deposit}</b>
                      </span>
                    </li>
                    {/* <li className="list-group-item d-flex justify-content-between">
                      <span>
                        Balance Due<em>(due by 10/16)</em>
                      </span>
                      <span>
                        <b>$2,351.22</b>
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="my-3">
                <div className="card  invoice-accor" style={{ width: '100%' }}>
                  <div className="card-header">Add-ons</div>
                  <ul className="list-group list-group-flush">
                    {RV.Pricing.mileage &&
                      RV.Pricing.mileage.per_extra_miles_charge && (
                        <li className="list-group-item d-flex justify-content-between">
                          <b>
                            Mileage(
                            {RV.Pricing.mileage.max_free_miles_per_night})
                          </b>
                          <span>
                            {RV.Pricing.mileage.per_extra_miles_charge}/km
                          </span>
                        </li>
                      )}
                    {/* <li className="list-group-item d-flex justify-content-between">
                      <b>Mileage</b>
                      <span>0.5/km</span>
                    </li> */}
                    {RV.Features && RV.Features.others && (
                      <li className="list-group-item d-flex justify-content-between">
                        <b>Propane Refill </b>
                        <span>
                          {RV.Features.others.propane_tank
                            ? '$' + RV.Features.others.propane_tank
                            : '$' + 0}
                        </span>
                      </li>
                    )}

                    {RV.Pricing.generator &&
                      RV.Pricing.generator.price_per_extra_hours && (
                        <li className="list-group-item d-flex justify-content-between">
                          <b>Generator</b>
                          <span>
                            ${RV.Pricing.generator.price_per_extra_hours}
                          </span>
                        </li>
                      )}
                    {/* {!RV.Pricing.generator &&
                      !RV.Features.others &&
                      !RV.Pricing.mileage && (
                        <li className="list-group-item d-flex justify-content-between">
                          <b>Add-ons not provided by RV owner</b>
                        </li>
                      )} */}
                    <li className="list-group-item d-flex justify-content-between">
                      <b>Sales Tax</b>
                      <span>Included</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <b>Total Amount</b>
                      <span>${invoiceInfo.total.toFixed(2)}</span>
                    </li>
                  </ul>
                </div>
              </div>
              {!token && (
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
              )}

              {token && (
                <button
                  className="btn btn-primary login-wrapper-btn"
                  type="submit"
                  style={
                    invoiceInfo.reservation.length == 0
                      ? { opacity: 0.5, pointerEvents: 'none' }
                      : {}
                  }
                  onClick={bookNow}
                >
                  {loading && <i class="fa fa-spinner fa-spin"></i>}
                  Book now
                </button>
              )}

              <ToastContainer />
              <button
                className="btn btn-primary login-wrapper-btn"
                type="submit"
                data-bs-toggle="modal"
                data-bs-target="#reviewModal"
              >
                Write a Review
              </button>
              <button
                className="btn btn-primary login-wrapper-btn"
                type="submit"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Send Message
              </button>
            </div>
          </div>
          <div className=" my-5 related-sli">
            <h2 className="mb-3 border-bottom"> Nearby RVs</h2>
            <Slider {...settings}>
            {RVs.length > 0 &&
            RVs.map((x) => {
              return (
                <div className="mb-2 pe-3">
                  <div
                    className="product-card"
                    onClick={() => {
                      history(`/rvs-for-rent/detail/${x._id}`, {
                        replace: true,
                      })
                    }}
                  >
                    <div className="badge">${x.Pricing.nightly}/night</div>
                    <div className="product-tumb">
                      <img src={_.get(x,'ImageInfo.RV.files[0].location',_.get(x,'ImageInfo.files[0].location',''))} alt="Rv" />
                    </div>
                    <div className="product-details">
                      <div className="d-flex justify-content-between">
                        <div>
                          <span className="product-catagory">Type</span>
                          <h6>{x.RVInfo.type}</h6>
                        </div>
                        <div className='year-ty'>
                          <span className="product-catagory text-white">Year</span>
                          <h6>{x.RVInfo.year}</h6>
                        </div>
                      </div>
                      <div className='d-flex justify-content-between align-items-end'>
                      <div>
                      <span className="product-catagory">Make</span>
                      <h6>{x.RVInfo.make}</h6>
                      </div>
                      <div>
                      <i class="fa-solid fa-bed mx-2"></i>{x.RVInfo.sleep}
                      <i class="fa-solid fa-gauge mx-2"></i>{x.RVInfo.mileage}
                      
                      {/* <span className="product-catagory">Make</span> */}
                      {/* <h6>{x.RVInfo.make}</h6> */}
                      </div>
                      </div>
                      <div className="product-bottom-details">
                        <div className="product-price">
                          <h6>Model</h6>
                          {/* model */}
                          <p>{x.RVInfo.model}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {RVs.length===0 && <h4>No Related Rv Found</h4>}

              {/* <div className="near-rv-card">
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
              </div> */}

            </Slider>
          </div>
     
        </div>
      </section>

      {/* ============== SEND MESSAGE MODAL =============== */}
      {/* <button
{/* ============== SEND MESSAGE MODAL =============== */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Send Message
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className=" bg-white mw-100 m-0">
                <form action="#">
                  <label class="form-label">Message</label>
                  <div className="form-group border-bottom d-flex align-items-center position-relative">
                    <textarea
                      type="text"
                      required=""
                      placeholder="Enter Message"
                      className="form-control"
                      rows={4}
                    />
                  </div>
                  <div className="form-group my-3">
                    <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center">
                      Send
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* ============== SEND MESSAGE MODAL =============== */}

      {/* ============== REVIEW MODAL =============== */}

     <Review RV={RV._id}/>
   
      {/* ============== REVIEW MODAL =============== */}
    </>
  )
}

export default SingleDetailRV
