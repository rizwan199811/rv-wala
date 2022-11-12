import moment from 'moment'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { setBookingDetails } from '../../app/slice/BookSlice'

const AddDetails = () => {
  let history = useNavigate()
  const dispatch = useDispatch()
  const booking_details = useSelector((state) => state.booking.details)

  const proceedToCheckOut = async () => {
    delete values['terms_n_conditions']
    dispatch(setBookingDetails({...booking_details,...values}))
    history('/checkout', { replace: true })
  }

  const backToPreviousPage = () => {
    console.log({ booking_details })
    // return
    history('/rvs-for-rent/detail/' + booking_details._id, { replace: true })
  }
  const { handleBlur, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      traveller: '',
      terms_n_conditions: false,
      notes: '',
    },
    validationSchema: Yup.object({
      traveller: Yup.number().required("Required").positive("Must be positive").integer(),
      terms_n_conditions: Yup.boolean().oneOf(
        [true],
        'Please agree to the terms and conditions',
      ),
    }),
    enableReinitialize: true,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <>
      <div className="container">
        <div className="row my-4">
          <h3 className="pb-3">Add Details</h3>
          <div className="col-md-4 mb-2">
            <div className="book-detail-card-wrap">
              <div className="box">
                <span className="sf">TRAVEL TRAILER</span>
                <div className="top">
                  <img
                    src={
                      booking_details.ImageInfo.files[0]
                        ? booking_details.ImageInfo.files[0].path
                        : booking_details.ImageInfo.files[0].location
                    }
                    alt=""
                  />

                  <span>
                    <i class="fas fa-circle-check"></i>
                    {/* <i class="fa-solid fa-badge-check"></i>
      <i className="fas fa-heart" />
      <i className="fas fa-exchange-alt" /> */}
                  </span>
                </div>
                <div className="bottom">
                  <h3>
                    {booking_details.RVInfo.year} {booking_details.RVInfo.make}
                  </h3>
                  <p>
                    <i class="fa-solid fa-location-dot me-2"></i>
                    Saskatoon
                  </p>
                  <div className="d-flex justify-content-between detail-card-inner">
                    <div>
                      <p>
                        {' '}
                        <b>Model :</b> {booking_details.RVInfo.model}
                      </p>
                      <p>
                        {' '}
                        <b>Weight :</b>
                        {booking_details.RVInfo.weight}lbs.
                      </p>
                      <p>
                        {' '}
                        <b>Make :</b> {booking_details.RVInfo.make}
                      </p>
                    </div>
                    <div>
                      <p>
                        {' '}
                        <b>Length :</b>
                        {booking_details.RVInfo.length} ft.
                      </p>
                      <p>
                        {' '}
                        <b>Year :</b> {booking_details.RVInfo.year}
                      </p>
                    </div>
                  </div>

                  <div className="advants">
                    <div>
                      <div>
                        <i class="fa-solid fa-bed"></i>
                        <span>{booking_details.RVInfo.sleep}</span>
                      </div>
                    </div>

                    <div>
                      <div>
                        <i class="fa-solid fa-shield-dog"></i>
                        <span>Not Allowed</span>
                      </div>
                    </div>
                  </div>

                  <div className="price">
                    <span>Price</span>
                    <span>${booking_details.Pricing.nightly} / day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="booking-form-wrapper bg-white mw-100 m-0">
              <span className="change-date" onClick={backToPreviousPage}>
                <i class="fa-solid fa-arrow-left me-2"></i>Change Dates
              </span>
              <form action="#">
                <div className="mb-3">
                  <label className="form-label">START DATE</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    disabled
                    value={moment(booking_details.startDate).format(
                      'dddd, MMMM Do YYYY',
                    )}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">END DATE</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    disabled
                    value={moment(booking_details.endDate).format(
                      'dddd, MMMM Do YYYY',
                    )}
                  />
                </div>

                <div className="mt-4 form-group border-bottom d-flex align-items-center position-relative">
                  <input
                    type="text"
                    required=""
                    name="traveller"
                    placeholder="Traveller(s)"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="label" id="psngr" />
                  <span className="fas fa-users text-muted" />
                
                </div>
                {errors.traveller && touched.traveller && (
                    <p className="text-danger">{errors.traveller} </p>
                  )}
                <div className="mt-4 form-group border-bottom d-flex align-items-center position-relative">
                  <textarea
                    type="text"
                    required=""
                    placeholder="Notes (Optional)"
                    className="form-control"
                    name="notes"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                  />
                  {/* <div className="label" id="psngr" />
                  <span className="fas fa-users text-muted" /> */}
                </div>

                <div className="my-4">
                  <input
                    type="checkbox"
                    className="w-auto me-2"
                    name="terms_n_conditions"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  I agree to the{' '}
                  <a href="" className="text-primary">
                    {' '}
                    terms and conditions
                  </a>{' '}
                  and{' '}
                  <Link to="/cancellation-policy" target="_blank" className="text-primary">
                    Cancelation Policy
                  </Link>
                </div>
                {errors.terms_n_conditions && touched.terms_n_conditions && (
                  <p className="text-danger">{errors.terms_n_conditions} </p>
                )}
                <div className="form-group my-3">
                  <div
                    className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3"
                    onClick={proceedToCheckOut}
                    style={!values.terms_n_conditions || !values.traveller || errors.traveller || errors.terms_n_conditions ? {pointerEvents:'none',opacity:'0.5'}:{}}
                  >
                    Proceed to Payment
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddDetails
