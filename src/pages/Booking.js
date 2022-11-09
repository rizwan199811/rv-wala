import React from 'react'
import { Link } from 'react-router-dom'

const Booking = () => {
    return (
        <div className='container booking-wrap my-4'>
            <div className='row'>
                <h1>Bookings</h1>
                <div className="card p-0 mb-3">
                    <div className="card-header fs-3">Booking <b>#809</b> </div>
                    <div className="card-body">
                        <Link to=""><i class="fa-solid fa-up-right-from-square me-2"></i>
                            2010 Edgewater</Link>
                        {/* <p> <i class="fa-solid fa-up-right-from-square me-2"></i>
                            2010 Edgewater
                        </p> */}
                        <p className='my-3'>BOOKED ON NOVEMBER 2, 2022 BY RIZWAN.199811</p>
                        <button type="button" class="btn btn-outline-danger">Cancelled</button>
                    </div>
                    <div className="card-footer text-muted fs-4">
                        October 31, 2022 - November 4, 2022
                        <span className='float-end'><b> Guests :</b> 8</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Booking