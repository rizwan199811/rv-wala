import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams ,Navigate  } from 'react-router-dom'
import { baseURL } from '../../../config/apiURL'
import Slider from 'react-slick'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { setBookingDetails } from '../../../app/slice/BookSlice'
import { toast, ToastContainer } from 'react-toastify'
import toastOptions, { toastOptionsDate } from '../../../config/toast'
import SingleDetailRV from './SingleDetailRVForRent'
const _ =require('lodash')

export const SingleDetailContainer = () => {
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()
  const [RV, setRV] = useState({})
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);
  const [notFoundError,setNotFoundError] =useState(false);
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange
  const [invoiceInfo, setInvoiceInfo] = useState({
    reservation: [],
    hostServices: [],
    reservationTotal: 0,
    hostServicesTotal: 0,
    addOnTotal: 0,
    total: 0,
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
      let addOns = []
      data.Features &&
        data.Features.others &&
        data.Features.others.propane_tank &&
        addOns.push({
          value: data.Features.others.propane_tank,
          label: 'Propane Tank Refill',
        })
      data.Pricing &&
        data.Pricing.generator &&
        data.Pricing.generator.price_per_extra_hours &&
        addOns.push({
          value: data.Pricing.generator.price_per_extra_hours,
          label: 'Generator',
        })
      console.log({ addOns })
      const sumAddOn = addOns.reduce((accumulator, object) => {
        return accumulator + parseInt(object.value && object.value || 0)
      }, 0)
      const sum = hostServices.reduce((accumulator, object) => {
        return accumulator + parseInt(object.value && object.value || 0)
      }, 0)
      let total =
        sum +
        sumAddOn +
        parseFloat(data.Pricing.deposit) +
        parseFloat(data.Pricing.damage_deposit)
      console.log({ total })
      setInvoiceInfo({
        ...invoiceInfo,
        hostServices,
        hostServicesTotal: sum,
        addOns,
        addOnTotal: sumAddOn,
        initialAmount:total,
      })
      setRV(data)
      
      let images = _.get(data,'ImageInfo.RV.files',_.get(data,'ImageInfo.files','')).map((x, index) => {
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
    }  catch ({ message }) {
      console.log({message})
      setLoading(false)
      setNotFoundError(true)
      toast.error(message, toastOptions)
    }
  }
  const enumerateDaysBetweenDates = (startDate, endDate, nightly_rate,days=1) => {
    var now = startDate,
      dates = []
    while (now.isSameOrBefore(endDate)) {
      dates.push({ date: now.format('YYYY-MM-DD'), rate: nightly_rate })
      now.add(1, 'days')
    }
    console.log({ dates,startDate,endDate,days })
    const sum = days==7 ? parseInt(RV.Pricing.weekly) : (days==30 ? parseInt(RV.Pricing.monthly): dates.reduce((accumulator, object) => {
      return accumulator + parseInt(object.rate)
    }, 0))
    return { dates, sum }
  }
  const checkReservedDates = (startDateParam, endDateParam, reservedDates) => {
    let comparedChecks = []
    console.log({ startDateParam, endDateParam, reservedDates })
    //  let compareDate = moment("15/02/2013", "DD/MM/YYYY");
    let startDate = moment(startDateParam).format('YYYY-MM-DD')
    let endDate = moment(endDateParam).format('YYYY-MM-DD')
    for (let i = 0; i < reservedDates.length; i++) {
      let compareDate = moment(reservedDates[i]).format('YYYY-MM-DD')
      console.log({ compareDate, startDate, endDate })

      comparedChecks[i] = moment(compareDate).isBetween(
        moment(startDate),
        moment(endDate),
      )
      // console.log(compareDate.isBetween(startDate, endDate))
    }
    console.log({ comparedChecks })
    const isBetween = (element) => element === true
    console.log(comparedChecks.some(isBetween))
    return comparedChecks.some(isBetween)
  }

  const bookNow = async () => {
     
    const bookingDetails = {
      ...RV,
      invoiceInfo,
      startDate,
      endDate,
      booking_deposit: parseFloat(RV.Pricing.deposit),
      damage_deposit: parseFloat(RV.Pricing.damage_deposit),
    }
    console.log({ bookingDetails })

    // return
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails))
    dispatch(setBookingDetails(bookingDetails))
    // checkout
    history('/booking-details', { replace: true })
    // history('/checkout', { replace: true })
  }

  const validateDates = (dates) => {
    let formattedDates = [],days;

    setDateRange(dates)
    for (let i = 0; i < dates.length; i++) {
      if (dates[i] !== null) {
        formattedDates.push(moment(dates[i]).format('YYYY-MM-DD'))
        console.log({ formattedDates })
      }
    }
    if (dates[0] && dates[1]) {
      days= moment(dates[1]).diff(moment(dates[0]), 'days'); 
      if (
        moment(dates[1]).diff(moment(dates[0]), 'days') <
        RV.ListInfo.min_nights - 1
      ) {
        console.log(dates[1], dates[0])
        console.log(moment(dates[1]).diff(moment(dates[0]), 'days'))
        setError(true)
        setDateRange([dates[0], null])
        toast.error(
          `Minimum nights for this RV is ${RV.ListInfo.min_nights}`,
          toastOptionsDate,
        )
        return
      }

      if (checkReservedDates(dates[0], dates[1], RV.reserved_dates || [])) {
        setError(true)
        setDateRange([null, null])
        toast.error(
          `Please select dates other than previously reserved dates`,
          toastOptionsDate,
        )
        return
      }
      
      
      // console.log(moment(dates[0]))
      setError(false)
      const {
        dates: checkInDates,
        sum: sumCheckIn,
      } = enumerateDaysBetweenDates(
        moment(dates[0]),
        moment(dates[1]),
        RV.Pricing.nightly,
        days+1
        
      )
      console.log({sumCheckIn})
      const total = invoiceInfo.initialAmount + sumCheckIn
      setInvoiceInfo({
        ...invoiceInfo,
        reservation: checkInDates,
        reservationTotal: sumCheckIn,
        total: total+total*0.13,
      })
    }
  }
  const handleDateChange = async (name, value) => {
    // const { name, value } = e.target;
    switch (name) {
      case 'checkIn':
        // if (moment(dateRange[1]).isBefore(value)) {
        //   setError(true)
        //   toast.error('Wrong date range', toastOptionsDate)
        //   break
        // }
        if (
          moment(dateRange[1]).diff(moment(value), 'days') <
          RV.ListInfo.min_nights
        ) {
          setError(true)
          toast.error(
            `Minimum nights for this RV is ${RV.ListInfo.min_nights}`,
            toastOptionsDate,
          )
          break
        }
        setError(false)
        const {
          dates: checkInDates,
          sum: sumCheckIn,
        } = enumerateDaysBetweenDates(
          moment(value),
          moment(dateRange[1]),
          RV.Pricing.nightly,
        )
        setInvoiceInfo({
          ...invoiceInfo,
          reservation: checkInDates,
          reservationTotal: sumCheckIn,
        })
        setDateRange([value, dateRange[1]])
        break
      case 'checkOut':
        console.log(moment(value).diff(moment(dateRange[0]), 'days'))
        if (
          moment(value).diff(moment(dateRange[0]), 'days') <
          RV.ListInfo.min_nights
        ) {
          setError(true)
          toast.error(
            `Minimum nights for this RV is ${RV.ListInfo.min_nights}`,
            toastOptionsDate,
          )
          break
        }
        const {
          dates: checkOutDates,
          sum: sumCheckOut,
        } = enumerateDaysBetweenDates(
          moment(dateRange[0]),
          moment(value),
          RV.Pricing.nightly,
        )
        setInvoiceInfo({
          ...invoiceInfo,
          reservation: checkOutDates,
          reservationTotal: sumCheckOut,
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
  {if(notFoundError){
    return <><Navigate to="*" state={notFoundError}/><ToastContainer/></>}
  } 

  if (RV.ListInfo.for_rent) {
    return (
      <SingleDetailRV
        RV={RV}
        images={images}
        loading={loading}
        error={error}
        dateRange={dateRange}
        startDate={startDate}
        endDate={endDate}
        invoiceInfo={invoiceInfo}
        handleDateChange={validateDates}
        token={token}
        notFoundError={notFoundError}
        bookNow={bookNow}
      ></SingleDetailRV>
    )
  }
}
