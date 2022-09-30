import React from 'react'

const AddDetails = () => {
    return (
        <div className='container'>
            <div className='row my-4'>
                <h3 className='pb-3'>Add Details</h3>
                <div className="col-md-4 mb-2">
                    <div
                        className="product-card m-0"
                    >
                        <div className="badge">$100/night</div>
                        <div className="product-tumb">
                            <img src="https://rvwala.com/wp-content/uploads/2022/07/f7ff8810-d21b-4fc3-9310-2c619c8e02a0-800x600.jpg" alt="" />
                        </div>
                        <div className="product-details">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <span className="product-catagory">Type</span>
                                    <h6>abcd</h6>
                                </div>
                                <div>
                                    <span className="product-catagory">Year</span>
                                    <h6>200</h6>
                                </div>
                            </div>
                            <span className="product-catagory">Make</span>
                            <h6>abbbb</h6>

                            <div className="product-bottom-details">
                                <div className="product-price">
                                    <h6>Model</h6>
                                    {/* model */}
                                    <p>sssssss</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-8'>
                <div className="booking-form-wrapper bg-white mw-100 m-0">
                    <form action="#">
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
                        <div className='my-4'>
                            <input type="checkbox" className='w-auto me-2' />
                            I agree to the terms and conditions
                        </div>
                        <div className="form-group my-3">
                            <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3">
                                Proceed to Payment
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AddDetails