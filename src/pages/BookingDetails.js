import {useEffect} from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { baseURL } from '../config/apiURL'
import axios from 'axios'
import { toast } from 'react-toastify';
import toastOptions from '../config/toast';
const _ =require('lodash')
const tableData = [
  {
    name: "2009 R-POD",
    project: "$99.00",
    status: "2",
    weeks: "$198.00",
  },
  {
    name: "Sanitizing & Cleaning",
    weeks: "$60.00",
  },

];
const statuses=[
{
  label:'Pending',
  value:'pending'
},
{
  label:'Processing',
  value:'processing'
},
{
  label:'On hold',
  value:'hold'
},
{
  label:'Completed',
  value:'completed'
},
{
  label:'Cancelled',
  value:'cancelled'
},
{
  label:'Refunded',
  value:'refunded'
},
{
  label:'Failed',
  value:'failed'
},
{
  label:'Draft',
  value:'draft'
},
]



const BookingDetails = () => {
  const [booking, setBooking] = useState({})
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [status, setStatus] = useState('pending')
  let history = useNavigate()
  const { id } = useParams()
  useEffect(() => {
    fetchBookingDetail()
  }, [])

  const fetchBookingDetail = async()=>{
    try {
      
      setLoading(true)
      let headers = {
        Authorization: localStorage.getItem('token'),
      }

      const {
        data: { data },
      } = await axios.get(baseURL + '/booking/' + id, { headers })
      console.log({ data })
  
      // let hostServices =[{value:data.Pricing.cleaning_fee,label:'Cleaning fee'},{value:data.Pricing.prep_fee,label:'Prep fee'}]
      // const sum = hostServices.reduce((accumulator, object) => {
      //   return accumulator + parseInt(object.value);
      // }, 0);
      // setInvoiceInfo({...invoiceInfo,hostServices,hostServicesTotal:sum})
      setBooking(data);
      setLoading(false)
    } catch (e) {}
  }

  const handleChange =(e)=>{
   setStatus(e.target.value)
  }
  const updateBooking =async(e)=>{
    try {
      
      e.preventDefault()
      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      const {
        data: { data: paymentConfirm, message: paymentRecievedMessage },
      } = await axios.post(
        baseURL + '/booking/status',
        {
          paymentIntent: booking.paymentIntent.id,
          paymentMethod: booking.paymentIntent.payment_method,
          RVId: booking.RV._id,
          dates: booking.dates,
          bookingID: booking._id,
          status

        },
        { headers },
      )
      console.log({ paymentConfirm })
      toast.success(paymentRecievedMessage, toastOptions)
    } catch (e) {}
  }
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Order #{booking.bookingId || 'N/A'}</CardTitle>
          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            Payment via WooCommerce Payments (pi_3LXSrV2HWsDNz9wa0MgqTESU). Paid on August 16, 2022 @ 5:04 pm. Customer IP: 207.195.86.184
          </CardSubtitle> */}

          <div className='row mt-3 billing-detail-p'>
            <div className='col-md-4'>
              <p><b>General</b></p>
                <div className='booking-dates my-2'>
                  <p className="text-muted">Date Created:</p>
                  <DatePicker
                      multiple
                      placeholder='Select Dates'
                      plugins={[
                      <DatePanel />
                      ]}
                    />
                </div>
                <div  className='my-2'>
                  <p className="text-muted">Status:</p>
                  <select className="form-select" aria-label="Default select example" onChange={handleChange}>
                    <option value="">Select status</option>
                    {statuses.map(status=>{
                      return <option value={status.value} selected={status.value==booking.status}>{status.label}</option>
                    })}
                   
                  </select>
                </div>
                <div className='my-2'>
                <p className="text-muted">Customer:</p>
                <input type="text" class="form-control" placeholder={_.get(booking,"customer.fullname","N/A")} disabled/>
              </div>
              <div>
                <p className="text-muted">Host:</p>
                <p>{_.get(booking,"host.fullname","N/A")}</p>
              </div>
            </div>
            <div className='col-md-4'>
              <p><b>Billing</b></p>
              <div>
                <p>{_.get(booking,"customer.fullname","N/A")}</p>
                {/* <p>217</p> */}
                <p>{_.get(booking,"billingDetails.address.state","N/A")}</p>
                <p>{_.get(booking,"billingDetails.address.city","N/A")}</p>
              </div>
              <p className="text-muted"><b>Email Address:</b></p>
              <p>{_.get(booking,"personalInfo.email","N/A")}</p>
              <p className="text-muted"><b>Phone:</b></p>
              <p>{_.get(booking,"personalInfo.phone","N/A")}</p>
            </div>
            <div className='col-md-4'>
              <p><b>Shipping</b></p>
              <div>
                <p className="text-muted">Address:</p>
                <p>{_.get(booking,"shippingDetails.address","N/A")}</p>
              </div>
            </div>
          </div>

          <Button className="btn mt-3" outline color="primary" onClick={updateBooking}>
                  Update
                </Button>
        </CardBody>
      </Card>

      <Card>
        <CardBody>

          <Table className="no-wrap mt-3 mb-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Item</th>
                <th>Cost</th>

                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>{tdata.name}</td>
                  <td>{tdata.project}</td>
                  <td>{tdata.status}</td>
                  <td>{tdata.weeks}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className='col-md-6 ms-auto'>
                <div className='d-flex justify-content-between'>
                  <span>Items Subtotal:	</span>
                  <b>$198.00</b>
                </div>
                <div className='d-flex justify-content-between'>
                  <span>Fees:	</span>
                  <b>$60.00</b>
                </div>
                <div className='d-flex justify-content-between'>
                  <span>Order Total:	</span>
                  <b>$258.00 CAD</b>
                </div>
                <hr/>
                <div className='d-flex justify-content-between'>
                  <span>Paid:	</span>
                  <b>$258.00 CAD</b>
                </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default BookingDetails