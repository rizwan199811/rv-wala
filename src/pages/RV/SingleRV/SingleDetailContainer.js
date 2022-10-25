import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { baseURL } from '../../../config/apiURL'
import Slider from 'react-slick'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { setBookingDetails } from '../../../app/slice/BookSlice'
import { toast, ToastContainer } from 'react-toastify'
import { toastOptionsDate } from '../../../config/toast'
import SingleDetailRV from './SingleDetailRVForRent'

export const SingleDetailContainer = () => {
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()
  const [RV, setRV] = useState({})
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [dateRange, setDateRange] = useState([
    moment().format('YYYY-MM-DD'),
    moment().format('YYYY-MM-DD'),
  ])
  const [invoiceInfo, setInvoiceInfo] = useState({
    reservation: [],
    hostServices: [],
    reservationTotal: 0,
    hostServicesTotal: 0,
  })

  const { id } = useParams()
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

      let hostServices = [
        { value: data.Pricing.cleaning_fee, label: 'Cleaning fee' },
        { value: data.Pricing.prep_fee, label: 'Prep fee' },
      ]
      const sum = hostServices.reduce((accumulator, object) => {
        return accumulator + parseInt(object.value)
      }, 0)
      setInvoiceInfo({ ...invoiceInfo, hostServices, hostServicesTotal: sum })
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
  const enumerateDaysBetweenDates = (startDate, endDate,nightly_rate) => {
    var now = startDate,
      dates = []
    while (now.isSameOrBefore(endDate)) {
      dates.push({date:now.format('YYYY-MM-DD'),rate:nightly_rate})
      now.add(1, 'days')
    }
    console.log({ dates })
    const sum = dates.reduce((accumulator, object) => {
      return accumulator + parseInt(object.rate);
    }, 0);
    return {dates,sum}
  }

  const bookNow = async () => {
    dispatch(setBookingDetails(RV))
    // checkout
    // history('/booking-details', { replace: true })
    history('/checkout', { replace: true })
  }
  const handleDateChange = async (e) => {
    const { name, value } = e.target;
    console.log(value)
    switch (name) {
      case 'checkIn':
        // if (moment(dateRange[1]).isBefore(value)) {
        //   setError(true)
        //   toast.error('Wrong date range', toastOptionsDate)
        //   break
        // }
        if (moment(dateRange[1]).diff(moment(value),'days')<RV.ListInfo.min_nights) {
          setError(true)
          toast.error(`Minimum nights for this RV is ${RV.ListInfo.min_nights}`, toastOptionsDate)
          break
        }
        setError(false)
         const {dates:checkInDates,sum:sumCheckIn} = enumerateDaysBetweenDates(
          moment(value),
          moment(dateRange[1]),
          RV.Pricing.nightly
        )
        setInvoiceInfo({
          ...invoiceInfo,
          reservation: checkInDates,
          reservationTotal:sumCheckIn
        })
        setDateRange([value, dateRange[1]])
        break
      case 'checkOut':
        console.log(moment(value).diff(moment(dateRange[0]),'days'))
        if (moment(value).diff(moment(dateRange[0]),'days')<RV.ListInfo.min_nights) {
          setError(true)
          toast.error(`Minimum nights for this RV is ${RV.ListInfo.min_nights}`, toastOptionsDate)
          break
        }
        const {dates:checkOutDates,sum:sumCheckOut} = enumerateDaysBetweenDates(
          moment(dateRange[0]),
          moment(value),
          RV.Pricing.nightly
        )
        setInvoiceInfo({
          ...invoiceInfo,
          reservation: checkOutDates,
          reservationTotal:sumCheckOut
        })
        setError(false)
        setDateRange([dateRange[0], value])
        break
      default:
        break
    }
    // if (!error) {
    //   console.log('called')
    //   const dateRanges = enumerateDaysBetweenDates(
    //     moment(dateRange[0]),
    //     moment(dateRange[1]),
    //   )
    //   setInvoiceInfo({
    //     ...invoiceInfo,
    //     reservation: dateRanges,
    //   })
    // }
    console.log({ dateRange })
  }

  let history = useNavigate()

  useEffect(() => {
    fetchRV()
  }, [])
  if (loading) {
    return (
      <section className="single-product-carousel">
        <div className="container">
          <lottie-player
            src="https://assets1.lottiefiles.com/private_files/lf30_d92kodgw.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px', margin: 'auto' }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </section>
    )
  }
  if(RV.ListInfo.for_rent){
      return <SingleDetailRV RV={RV} images={images} loading={loading} error={error} dateRange={dateRange}
      invoiceInfo={invoiceInfo} handleDateChange={handleDateChange} token={token} bookNow={bookNow}></SingleDetailRV>
  }
}
