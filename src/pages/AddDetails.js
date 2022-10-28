import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddDetails = () => {
    let history = useNavigate();
    const proceedToCheckOut = async () => {
        history('/checkout', { replace: true })
    }
    const booking_details = useSelector((state) => state.booking.details);
    const dateChange = (e) => {
        console.log({ value: e.target.value })
    }
    return (
        <>
            <div className='container'>
                <div className='row my-4'>
                    <h3 className='pb-3'>Add Details</h3>
                    <div className="col-md-4 mb-2">
                        {/* <div
                        className="product-card m-0"
                    >
                        <div className="badge">${booking_details.Pricing.nightly}/night</div>
                        <div className="product-tumb">
                            <img src="https://rvwala.com/wp-content/uploads/2022/07/f7ff8810-d21b-4fc3-9310-2c619c8e02a0-800x600.jpg" alt="" />
                        </div>
                        <div className="product-details">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <span className="product-catagory">Type</span>
                                    <h6>{booking_details.RVInfo.type}</h6>
                                </div>
                                <div>
                                    <span className="product-catagory">Year</span>
                                    <h6>{booking_details.RVInfo.year}</h6>
                                </div>
                            </div>
                            <span className="product-catagory">Make</span>
                            <h6>{booking_details.RVInfo.make}</h6>

                            <div className="product-bottom-details">
                                <div className="product-price">
                                    <h6>Model</h6>
                                    <p>{booking_details.RVInfo.model}</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    </div>
                    <div className='col-md-8'>
                        <div className="booking-form-wrapper bg-white mw-100 m-0">
                            {/* <form action="#">
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
                                    min={moment().format('YYYY-MM-DD')}
                                    placeholder="Depart Date"
                                    className="form-control"
                                    onChange={dateChange}
                                />
                                <div className="label" id="depart" />
                            </div>
                            <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                                <input
                                    type="date"
                                    required=""
                                    min={moment().format('YYYY-MM-DD')}
                                    placeholder="Return Date"
                                    className="form-control"
                                    onChange={dateChange}
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
                            <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3" onClick={proceedToCheckOut}>
                                Proceed to Payment
                            </div>
                        </div>
                    </form> */}
                        </div>

                        <div className="form-group my-3">
                            <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Proceed to Payment
                            </div>
                        </div>

                        <div className='selected_pay_card'>
                            <div className='d-flex'>
                                <img src='https://cdn-icons-png.flaticon.com/512/179/179457.png' width={50} />
                                <div className='ps-3'>
                                    <p><b>**** **** 2345</b></p>
                                    <small>Anas Murtaza</small>
                                </div>
                            </div>

                            <div>
                                <p><b>Expires</b> 02/2030</p>
                            </div>

                            <div className="form-check">
                                <input
                                    className="form-check-input p-0"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </div>



            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add your card details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3 position-relative">
                                    <label className="form-label">
                                        Card number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Card number"
                                        name="address"
                                        id="address"
                                    />
                                </div>
                                <div className="row mb-3 position-relative">
                                    <div className="col-md-6 mb-2 position-relative">
                                        <label className="form-label">Expiration date</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Expiration date"
                                                name="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2 position-relative">
                                        <label className="form-label">CVC</label>
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="CVC"
                                                name="phone"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-secondary" >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddDetails