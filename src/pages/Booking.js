import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { baseURL } from '../config/apiURL'
import moment from 'moment'
const _ =require('lodash')

const Booking = () => {
  const itemsPerPage = 10
  const dispatch = useDispatch()
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const fetchBookings = async (currentPage = 1) => {
    try {
      setLoading(true)
      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      let body = {
        page: currentPage,
        limit: itemsPerPage,
        isHost: false
      }
      const {
        data: { data:{docs} },
      } = await axios.post(baseURL + '/booking/list',body, { headers })
      // console.log({ data })
      setBookings(docs)
      setLoading(false)
    } catch (e) {}
  }
  useEffect(() => {
    fetchBookings()
  }, [])

  return (
    <div className="container booking-wrap my-4">
      <div className="row">
        <h1>Bookings</h1>
        {bookings.length > 0 &&
          bookings.map((booking) => {
            return (
              <div className="card p-0 mb-3">
                <div className="card-header fs-3">
                  Booking <b># {_.get(booking,'bookingId','N/A') || ' N/A'}</b>{' '}
                </div>
                <div className="card-body">
                  <Link to="">
                    <i class="fa-solid fa-up-right-from-square me-2"></i>
                    {_.get(booking,'RV.RVInfo.year','N/A')} {_.get(booking,'RV.RVInfo.make','N/A')}
                  </Link>
                  {/* <p> <i class="fa-solid fa-up-right-from-square me-2"></i>
                                  2010 Edgewater
                              </p> */}
                  <p className="my-3">
                    BOOKED ON{' '}
                    {moment(booking.createdAt).format('dddd, MMMM Do YYYY')} BY{' '}
                    {_.get(booking,'user.fullname',_.get(booking,'customer.fullname','N/A'))}
                  </p>
                  <button type="button" class="btn btn-outline-danger">
                    {booking.status && booking.status.toUpperCase()}
                  </button>
                </div>
                <div className="card-footer text-muted fs-4">
                  {moment(booking.dates[0]).format('dddd, MMMM Do YYYY')} -{' '}
                  {moment(booking.dates[booking.dates.length - 1]).format(
                    'dddd, MMMM Do YYYY',
                  )}
                  <span className="float-end">
                    <b> Guests :</b> {booking.guests || 1}
                  </span>
                </div>
              </div>
            )
          })}
        {/* <div className="card p-0 mb-3">
          <div className="card-header fs-3">
            Booking <b>#809</b>{' '}
          </div>
          <div className="card-body">
            <Link to="">
              <i class="fa-solid fa-up-right-from-square me-2"></i>
              2010 Edgewater
            </Link>
            <p> <i class="fa-solid fa-up-right-from-square me-2"></i>
                            2010 Edgewater
                        </p>
            <p className="my-3">BOOKED ON NOVEMBER 2, 2022 BY RIZWAN.199811</p>
            <button type="button" class="btn btn-outline-danger">
              Cancelled
            </button>
          </div>
          <div className="card-footer text-muted fs-4">
            October 31, 2022 - November 4, 2022
            <span className="float-end">
              <b> Guests :</b> 8
            </span>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Booking
