import axios from 'axios'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { toast, ToastContainer } from 'react-toastify'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
} from 'reactstrap'
import user1 from '../assets/images/users/user1.jpg'
import user2 from '../assets/images/users/user2.jpg'
import user3 from '../assets/images/users/user3.jpg'
import user4 from '../assets/images/users/user4.jpg'
import user5 from '../assets/images/users/user5.jpg'
import { baseURL } from '../config/apiURL'
import toastOptions from '../config/toast'
const tableData = [
  {
    avatar: user1,
    booking: '#791',
    email: 'hgover@gmail.com',
    project: '2009 R-POD',
    user: 'Jessica',
    weeks: 'August 22, 2022 - August 24, 2022',
    budget: '95K',
  },
]
const Booking = () => {
  const itemsPerPage = 1;
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [pageCount, setPageCount] = useState(0)
  const fetchBookings = async (currentPage = 1) => {
    try {
      setLoading(true)
      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      let body = {
        page: currentPage,
        limit: itemsPerPage,
      }
      const {
        data: {
          data: { docs, totalPages, limit, page },
        },
      } = await axios.post(baseURL + '/booking/list', body, { headers })
      console.log({totalPages})
      setPageCount(totalPages)
      setBookings(docs)
      setLoading(false)
    } catch (e) {}
  }

  const confirmBooking = async (e, bookingDetails) => {
    try {
      e.preventDefault()
      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      const {
        data: { data: paymentConfirm, message: paymentRecievedMessage },
      } = await axios.post(
        baseURL + '/payment/confirm',
        {
          paymentIntent: bookingDetails.paymentIntent.id,
          paymentMethod: bookingDetails.paymentIntent.payment_method,
          RVId: bookingDetails.RV._id,
          dates: bookingDetails.dates,
          bookingID: bookingDetails._id,
        },
        { headers },
      )
      console.log({ paymentConfirm })
      toast.success(paymentRecievedMessage, toastOptions)
      fetchBookings()
    } catch ({ message }) {
      toast.error(message, toastOptions)
    }
  }
  const cancelBooking = async (e, bookingDetails) => {
    try {
      e.preventDefault()
      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      const {
        data: { data: paymentConfirm, message: paymentRecievedMessage },
      } = await axios.post(
        baseURL + '/booking/cancel',
        {
          RVID: bookingDetails.RV._id,
          bookingID: bookingDetails._id,
        },
        { headers },
      )
      console.log({ paymentConfirm })
      toast.success(paymentRecievedMessage, toastOptions)
      fetchBookings()
    } catch ({ message }) {
      toast.error(message, toastOptions)
    }
  }
  const handlePageClick = async (event) => {
    console.log({ event })
    let currentPage = event.selected + 1
    await fetchBookings(currentPage)
  }
  useEffect(() => {
    fetchBookings()
  }, [])

  return (
    <div>
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Booking Listing</CardTitle>

            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>Booking Number</th>
                  <th>Listing</th>
                  <th>User</th>
                  <th>Dates</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length > 0 &&
                  bookings.map((booking, index) => (
                    <tr key={index} className="border-top">
                      <td>{booking.bookingId}</td>
                      <td>
                        {booking.RV.RVInfo.year + '-' + booking.RV.RVInfo.make}
                      </td>
                      <td>
                        {(booking.user && booking.user.fullname) || 'N/A'}
                      </td>
                      <td>
                        {moment(booking.dates[0]).format('MMMM Do, YYYY') +
                          '-' +
                          moment(
                            booking.dates[booking.dates.length - 1],
                          ).format('MMMM Do, YYYY')}
                      </td>

                      {booking.status == 'confirmed' && (
                        <td>
                          <Button
                            className="btn me-2"
                            outline
                            color="success"
                            size="sm"
                          >
                            Confirmed
                          </Button>
                        </td>
                      )}
                      {booking.status == 'pending' && (
                        <td>
                          <Button
                            className="btn me-2"
                            outline
                            color="warning"
                            size="sm"
                          >
                            Pending
                          </Button>
                        </td>
                      )}
                      {booking.status == 'cancelled' && (
                        <td>
                          <Button
                            className="btn me-2"
                            outline
                            color="danger"
                            size="sm"
                          >
                            Cancelled
                          </Button>
                        </td>
                      )}

                      {booking.status == 'pending' && (
                        <td>
                          <Button
                            className="btn me-2"
                            color="success"
                            size="sm"
                            onClick={(e) => {
                              confirmBooking(e, booking)
                            }}
                          >
                            Confirm
                          </Button>
                          <Button
                            className="btn"
                            color="danger"
                            size="sm"
                            onClick={(e) => {
                              cancelBooking(e, booking)
                            }}
                          >
                            {' '}
                            Decline
                          </Button>
                        </td>
                      )}
                      {booking.status === 'confirmed' && (
                        <td>
                          <Button
                            className="btn"
                            color="info"
                            size="sm"
                            onClick={(e) => {
                              cancelBooking(e, booking)
                            }}
                          >
                            {' '}
                            Cancel Booking
                          </Button>
                        </td>
                      )}
                      {booking.status === 'cancelled' && <td>N/A</td>}
                    </tr>
                  ))}
              </tbody>
            </Table>
            {bookings.length > 0 && (
              <div id="react-paginate">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={1}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                />
              </div>
            )}
            <ToastContainer />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Booking
