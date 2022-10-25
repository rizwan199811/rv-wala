import React, { useMemo } from 'react'
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js'
import { useFormik } from 'formik'
import { paymentSchema } from '../../schemas'
import useResponsiveFontSize from './useResponsiveFont'

const useOptions = () => {
  const fontSize = useResponsiveFontSize()
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }),
    [fontSize],
  )

  return options
}

const initialValues = {
  card_name: '',
  email: '',
  company_name: '',
  phone: '',
  country: '',
  postal_code: '',
  state: '',
  city: '',
  address: '',
  cardNumber: '',
  cvc: '',
  expiryMonth: '',
  expiryYear: '',
}
const SplitForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const options = useOptions()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    })
    console.log('[PaymentMethod]', payload)
  }

  const { values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues,
    validationSchema: paymentSchema,
    validateOnChange: true,
    validateOnBlur: false,
    //// By disabling validation onChange and onBlur formik will validate on submit.
    onSubmit: (values, action) => {
      console.log(' values', values)
      // action.resetForm();
    },
  })

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-7">
          <div className="payment-form-wrap">
            <div className="card">
              <div className="card-title mx-auto">Billing Details</div>
              <form>
                <div className="mb-3 position-relative">
                  <label className="form-label">Card Holder Name</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Anas Murtaza"
                    name="card_name"
                    id="card_name"
                    value={values.card_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.card_name && errors.card_name ? (
                    <p className="form-error">{errors.card_name}</p>
                  ) : null}
                </div>
                <div className="mb-3 position-relative">
                  <label className="form-label">
                    COMPANY NAME <em>(OPTIONAL)</em>
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="company_name"
                      id="company_name"
                      value={values.company_name}
                      onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                    {/* {touched.name && errors.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null} */}
                  </div>
                </div>
                <div className="row mb-3 position-relative">
                  <div className="col-md-6 mb-2 position-relative">
                    <label className="form-label">Email</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email ? (
                        <p className="form-error">{errors.email}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6 mb-2 position-relative">
                    <label className="form-label">Phone</label>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder=""
                        name="phone"
                        id="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.phone && errors.phone ? (
                        <p className="form-error">{errors.phone}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="mb-3 position-relative">
                  <label className="form-label">Country</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="country"
                      id="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.country && errors.country ? (
                      <p className="form-error">{errors.country}</p>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3 position-relative">
                    <label className="form-label">Postal Code</label>
                    <input
                      type="number"
                      className="form-control mt-3"
                      placeholder="Postal Code"
                      name="postal_code"
                      id="postal_code"
                      value={values.postal_code}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.postal_code && errors.postal_code ? (
                      <p className="form-error">{errors.postal_code}</p>
                    ) : null}
                  </div>
                  <div className="col-md-4 mb-3 position-relative">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      className="form-control mt-3"
                      placeholder="State"
                      name="state"
                      id="state"
                      value={values.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.state && errors.state ? (
                      <p className="form-error">{errors.state}</p>
                    ) : null}
                  </div>
                  <div className="col-md-4 mb-3 position-relative">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control mt-3"
                      placeholder="City"
                      name="city"
                      id="city"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.city && errors.city ? (
                      <p className="form-error">{errors.city}</p>
                    ) : null}
                  </div>
                </div>
                <div className="mb-3 position-relative">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    name="address"
                    id="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.address && errors.address ? (
                    <p className="form-error">{errors.address}</p>
                  ) : null}
                </div>
                <div className="mb-3 position-relative">
                <label>
                  Card number
                </label>
                <CardNumberElement
                    options={options}
                    onReady={() => {
                      console.log('CardNumberElement [ready]')
                    }}
                    onChange={(event) => {
                      console.log('CardNumberElement [change]', event)
                    }}
                    onBlur={() => {
                      console.log('CardNumberElement [blur]')
                    }}
                    onFocus={() => {
                      console.log('CardNumberElement [focus]')
                    }}
                  />
                </div>
                <div className="row">
                <div className="col-md-4 mb-3 position-relative">
                <label>
                  Expiration date
                </label>
                <CardExpiryElement
                    options={options}
                    onReady={() => {
                      console.log('CardExpiryElement [ready]')
                    }}
                    onChange={(event) => {
                      console.log('CardExpiryElement [change]', event)
                    }}
                    onBlur={() => {
                      console.log('CardExpiryElement [blur]')
                    }}
                    onFocus={() => {
                      console.log('CardExpiryElement [focus]')
                    }}
                  />
                </div>
                <div className="col-md-4 mb-3 position-relative">
                <label>
                  CVC
                </label>
                <CardCvcElement
                    options={options}
                    onReady={() => {
                      console.log('CardCvcElement [ready]')
                    }}
                    onChange={(event) => {
                      console.log('CardCvcElement [change]', event)
                    }}
                    onBlur={() => {
                      console.log('CardCvcElement [blur]')
                    }}
                    onFocus={() => {
                      console.log('CardCvcElement [focus]')
                    }}
                  />
                </div>  
                </div>
               
                <button type="submit" disabled={!stripe}>
                  Pay
                </button>
                {/* <button type="submit" className="btn btn-primary">
              Pay Now
            </button> */}
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <div className="row payment-order-summary-wrap">
              <div className="card">
                <div className="card-header">Order Summary</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Total Cost <span>$1234</span>
                  </li>
                  <li className="list-group-item">
                    To be Paid <span>$1234</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-4 payment-your-order-wrap">
              <div
                className="accordion accordion-flush p-0"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Your Order
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="card mb-3 position-relative">
                        <div className="row g-0">
                          <div className="d-flex">
                            <div className="image-wrap-inner">
                              <img
                                src="https://rvwala.com/wp-content/uploads/2022/07/f7ff8810-d21b-4fc3-9310-2c619c8e02a0-800x600.jpg"
                                className="img-fluid rounded-start"
                                alt="..."
                              />
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">
                                2010 Edgewater × 4
                                <span className="float-end">
                                  <b> Price: $300</b>
                                </span>
                              </h5>
                              <p className="card-text">
                                Propane Refill Fee
                                <span className="float-end">
                                  <b> Price: $40</b>
                                </span>
                              </p>
                              <p className="card-text">
                                Sanitization & Cleaning Fee
                                <span className="float-end">
                                  <b> Price: $60</b>
                                </span>
                              </p>
                              <p className="card-text">
                                Generator
                                <span className="float-end">
                                  <b> Price: $40</b>
                                </span>
                              </p>
                              <h6 className="float-end border-top pt-1">
                                Subtotal:$500
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplitForm
