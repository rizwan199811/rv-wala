import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseURL } from '../config/apiURL'

const RvDetails = () => {
  let history = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    
    fetchRV()
  }, [])
  const [RV, setRV] = useState({})
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const fetchRV = async () => {
    try {
    
      setLoading(true)
      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      const {
        data: { data },
      } = await axios.get(baseURL + '/rv/' + id, { headers })
      console.log({ data })
  
      let hostServices =[{value:data.Pricing.cleaning_fee,label:'Cleaning fee'},{value:data.Pricing.prep_fee,label:'Prep fee'}]
      const sum = hostServices.reduce((accumulator, object) => {
        return accumulator + parseInt(object.value);
      }, 0);
      // setInvoiceInfo({...invoiceInfo,hostServices,hostServicesTotal:sum})
      setRV(data)
      const images = data.ImageInfo.files.map((x, index) => {
        if (index == 0) {
          return {
            ...x,
            active: true,
          }
        }
        return {
          ...x,
          active: false,
        }
      })
      console.log({ images })
      setImages(images)
      setLoading(false)
    } catch (e) {}
  }
  return (
    <div>
          <div className="col-12 rv_details_tabs mb-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
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
                  <li className="nav-item" role="presentation">
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
                  <li className="nav-item" role="presentation">
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
                        <div>
                          <h4>Vehicle</h4>
                          <div className="d-flex justify-content-between pt-4">
                            <div>
                              <h6>MAKE</h6>
                              <p>{RV.RVInfo.make}</p>
                            </div>
                            <div>
                              <h6>MODEL</h6>
                              <p>{RV.RVInfo.model}</p>
                            </div>
                            <div>
                              <h6>YEAR</h6>
                              <p>{RV.RVInfo.year}</p>
                            </div>
                          </div>

                          <div className="d-flex justify-content-between pt-4">
                            <div>
                              <h6>TYPE</h6>
                              <p>{RV.RVInfo.type}</p>
                            </div>
                            <div>
                              <h6>LENGTH</h6>
                              <p>{RV.RVInfo.length}</p>
                            </div>
                            <div>
                              <h6>WEIGHT</h6>
                              <p>{RV.RVInfo.weight}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4>Accommodations</h4>
                          <div className="d-flex justify-content-between pt-4">
                            <div>
                              <h6>BEDS</h6>
                              <p>{RV.RVInfo.sleep}</p>
                            </div>
                            <div>
                              <h6>SEATBELTS</h6>
                              <p>{RV.RVInfo.seatbelts}</p>
                            </div>
                            <div>
                              <h6>SLIDE-OUTS</h6>
                              <p>{RV.RVInfo.slides}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4>Full Description</h4>
                          <div className="d-flex justify-content-between pt-4">
                            <div>
                              <p>
                                {(RV.ListInfo && RV.ListInfo.description) ||
                                  'No description provided'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    className="tab-pane fade"
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
                                  <div className="col-md-3">
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
                        </div>

                        <div className="row dposit-inp my-3">
                          <h4>Outdoors</h4>
                          {RV.featuresArray &&
                            RV.featuresArray.map((x) => {
                              if (x.type == 'outside') {
                                return (
                                  <div className="col-md-3">
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
                        </div>

                        <div className="row dposit-inp my-3">
                          <h4>Other</h4>
                          {RV.featuresArray &&
                            RV.featuresArray.map((x) => {
                              if (x.type == 'others') {
                                return (
                                  <div className="col-md-3">
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

                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default RvDetails