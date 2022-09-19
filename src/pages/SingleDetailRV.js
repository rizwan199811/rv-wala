import React from 'react'

const SingleDetailRV = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <section className="single-product-carousel">
                        <div className="container">
                            <div className="row my-4">
                                <div className="col-md-7">
                                    <div>
                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Pricing</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Listing</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Amenities</button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div>
                                                    <div className='d-flex justify-content-evenly py-4'>
                                                        <h5><sup>$</sup>240<sup>/night</sup></h5>
                                                        <h5><sup>$</sup>1800<sup>/week</sup></h5>
                                                        <h5><sup>$</sup>7000<sup>/month</sup></h5>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
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

                                                        <div className='col-md-6'>
                                                            <div>
                                                                <h4>Cancellation Policy</h4>
                                                                <div>
                                                                    <h6>Strict</h6>
                                                                    <p>More Details  </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-6'>
                                                            <div>
                                                                <h4>Fees</h4>
                                                                <div>
                                                                    <h6>CLEANING FEE</h6>
                                                                    <p>$125</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-6'>
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

                                                        <div className='col-md-6'>
                                                            <div>
                                                                <h4>Electric Generator</h4>
                                                                <div>
                                                                    <h6>INCLUDED</h6>
                                                                    <p>24 hours/day</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-6'>
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

                                                        <div className='col-md-6'>
                                                            <div>
                                                                <h4>Delivery</h4>
                                                                <div>
                                                                    <h6>AVAILABLE</h6>
                                                                    <p>NO</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-6'>
                                                            <div>
                                                                <h4>One-Way Rentals</h4>
                                                                <div>
                                                                    <h6>AVAILABLE</h6>
                                                                    <p>Yes</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-6'>
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
                                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <div>
                                                    <div>
                                                        <h4>Vehicle</h4>
                                                        <div className='d-flex justify-content-evenly py-4'>
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
                                                    </div>

                                                    <div>
                                                        <h4>Vehicle</h4>
                                                        <div className='d-flex justify-content-between pt-4'>
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

                                                        <div className='d-flex justify-content-between pt-4'>
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
                                                        <div className='d-flex justify-content-between pt-4'>
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
                                                        <div className='d-flex justify-content-between pt-4'>
                                                            <div>
                                                                <p>The "Sunset" is a new 2021 Dodge Sprinter Van designed with sleeping comfort, head-room and storage in mind. We also spared no expense when it came to our state of the art solar and electrical system (includes shore power hookup) And, because we wanted you to enjoy the comforts of home on your journey, a hot water tank, refrigerator, gas stove and dining table were a must. Multiple 110 and 12 V outlets throughout the Sunset ensure you're "plugged in" whether you're winding down in bed or entertaining outside. Also, The cabinets and storage are designed to maximize your living space while allowing you to quickly access or secure your belongings.
                                                                    HD rear view camera, satellite radio and tow package are just a few of the extras you'll enjoy having.</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                <div>
                                                    <div className='col-md-12'>
                                                        <div className='row dposit-inp'>
                                                            <h4>Deposits</h4>
                                                            <div className='col-md-3'>
                                                                <input type="checkbox" />
                                                                <label>FM Radio</label>
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <input type="checkbox" />
                                                                <label>FM Radio</label>
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <input type="checkbox" />
                                                                <label>FM Radio</label>
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <input type="checkbox" />
                                                                <label>FM Radio</label>
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <input type="checkbox" />
                                                                <label>FM Radio</label>
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <input type="checkbox" />
                                                                <label>FM Radio</label>
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <input type="checkbox" />
                                                                <label>FM Radio</label>
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <input type="checkbox" />
                                                                <label>FM Radio</label>
                                                            </div>
                                                            <div>
                                                            </div>
                                                        </div>

                                                        <div className='row dposit-inp my-3'>
                                                            <h4>Outdoors</h4>
                                                            <div className='col-md-3'>
                                                                <input type="checkbox" />
                                                                <label>Outside Shower</label>
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <input type="checkbox" />
                                                                <label>Awning</label>
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <input type="checkbox" />
                                                                <label>Bike Rack</label>
                                                            </div>

                                                            <div>
                                                            </div>
                                                        </div>

                                                        <div className='row dposit-inp my-3'>
                                                            <h4>Other</h4>
                                                            <div className='col-md-3'>
                                                                <input type="checkbox" />
                                                                <label>Generator</label>
                                                            </div>
                                                            <div className='col-md-3'>
                                                                <input type="checkbox" />
                                                                <label>Propane Tank</label>
                                                            </div>

                                                            <div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='single-detail-user-card'>
                                        <div className="card">
                                            <div className="img">
                                                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                            </div>
                                            <div className="infos">
                                                <div className="name">
                                                    <h2>Vantrek LLC</h2>
                                                    <h4></h4>
                                                </div>
                                                <div>
                                                    <div className="name">
                                                        <h2>Member Since</h2>
                                                        <h4>2021</h4>
                                                    </div>
                                                    <div className="name">
                                                        <h2># Listings</h2>
                                                        <h4>2</h4>
                                                    </div>
                                                    <div className="name">
                                                        <h2>Responds to Inquiries</h2>
                                                        <h4>More often than not</h4>
                                                    </div>
                                                    <div className="name">
                                                        <h2>Verified Member</h2>
                                                        <img src='https://files.rvngo.com/a/rvrd-member-sm-74d1df166814dffe11f382517d7df3f45caf996605fb4ef350047af31e6f3efd.webp' />
                                                    </div>
                                                    <div className="name">
                                                        <h2>Host Rules</h2>
                                                        <a>Click to View</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="single-product-sale-div">
                                        <h3>2021 Ram Promaster 3500</h3>
                                        <p>in Spokane Valley, WA</p>
                                        <hr />
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <label>Check In*</label>
                                                <input type="date" />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Check Out*</label>
                                                <input type="date" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default SingleDetailRV