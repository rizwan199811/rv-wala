import React, { useEffect, useRef } from 'react'
import { useFormik } from 'formik'
import { paymentSchema } from '../../schemas'
import MaskedInput from 'react-text-mask'
import {
  AMERICANEXPRESS,
  OTHERCARDS,
  EXPIRYDATE,
  CVC,
  CARDARR,
  CARDICON,
} from '../../config/constant'
import {Elements,useStripe,useElements,CardElement} from '@stripe/react-stripe-js';



import {
  stripeCardNumberValidation,
  stripeCardExpirValidation,
  textWithSpacesOnly,
  minLength,
} from '../../config/validations'
import {PaymentElement} from '@stripe/react-stripe-js';


const Checkout = () => {
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: 'sk_test_51ISVyOC4CGAQHYFq4mOcIhf7T7lNEBcMjcehwNbI2qbeLi5Y68pB5iaPzjaglhKKAyA6QzcnBgcFdTGSEPiw0duz00F4OGxuCV',
  // };
  const reducer = (state, action) => {
    console.log('action', action.data)
    switch (action.type) {
      case 'card':
        return { ...state, card: action.data }
      case 'expiry':
        return { ...state, expiry: action.data }
      case 'securityCode':
        return { ...state, securityCode: action.data }
      case 'cardHodler':
        return { ...state, cardHodler: action.data }
      case 'cleanState':
        return { ...action.data }
      default:
        return state
    }
  }
  const [error, setError] = React.useState({})
  const [cardType, setCardType] = React.useState()
  const [state, dispatch] = React.useReducer(reducer, {
    card: '',
    expiry: '',
    securityCode: '',
    cardHodler: '',
  })

  const stripe = useStripe();
  const elements = useElements();

  function findDebitCardType(cardNumber) {
    const regexPattern = {
      MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
      VISA: /^4[0-9]{2,}$/,
      AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
      DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
      DINERS_CLUB: /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/,
      JCB: /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/,
    }
    for (const card in regexPattern) {
      if (cardNumber.replace(/[^\d]/g, '').match(regexPattern[card]))
        return card
    }
    return ''
  }

  const handleInputData = (e) => {
    dispatch({ type: e.target.name, data: e.target.value })
  }
  const handleBlur = (e) => {
    handleValidations(e.target.name, e.target.value)
  }
  const handleValidations = (type, value) => {
    let errorText
    switch (type) {
      case 'card':
        setCardType(findDebitCardType(value))
        errorText = stripeCardNumberValidation(value)
        setError({ ...error, cardError: errorText })
        break
      case 'cardHodler':
        errorText = value === '' ? 'Required' : textWithSpacesOnly(value)
        setError({ ...error, cardHodlerError: errorText })
        break
      case 'expiry':
        errorText = value === '' ? 'Required' : stripeCardExpirValidation(value)
        setError({ ...error, expiryError: errorText })
        break
      case 'securityCode':
        errorText = value === '' ? 'Required' : minLength(3)(value)
        setError({ ...error, securityCodeError: errorText })
        break
      default:
        break
    }
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

  const cardNumRef = useRef()

  const { values, handleChange, errors, touched } = useFormik({
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
  console.log(errors)

  const handleCardChange = (e) => {
    // require(["payform"], function (payform) {
    //   // Format input for card number entry
    //   var input = cardNumRef.current;
    //   payform.cardNumberInput(input)
    // });
    // var input = document.getElementById('cardNumber');
    // payform.cardNumberInput(input)
  }
  
  // useEffect(() => {
  //   let input = document.getElementById('cardNumber');
  //   payform.cardNumberInput(input)
  // }, [])
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      // confirmParams: {
      //   return_url: "https://example.com/order/123/complete",
      // },
    });


    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

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
                <button type="submit" className="btn btn-primary">
                Pay Now
              </button>
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

                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-1 mb-3 position-relative">
        <div className="col-md-12">
          <h4 className="py-3">Payment Method</h4>
          <div className="card payment-meth">
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header p-0">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-light btn-block text-left p-3 rounded-0"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <span>Credit card / debit card</span>
                        <div className="icons">
                          <img
                            src="https://i.imgur.com/2ISgYja.png"
                            width={30}
                          />
                          <img
                            src="https://i.imgur.com/W1vtnOV.png"
                            width={30}
                          />
                          <img
                            src="https://i.imgur.com/35tC99g.png"
                            width={30}
                          />
                          <img
                            src="https://i.imgur.com/2ISgYja.png"
                            width={30}
                          />
                        </div>
                      </div>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body payment-card-body">
                    <span className="font-weight-normal card-text">
                      Card Number
                    </span>
                    <div className="input">
                      {/* <i className="fa fa-credit-card" />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="0000 0000 0000 0000"
                        name="cardNumber"
                        id="cardNumber"
                        ref={cardNumRef}
                        value={values.cardNumber}
                        onChange={handleCardChange}
                        onBlur={handleBlur}
                      /> */}
                      <i className="fa fa-credit-card" />
                      <MaskedInput
                        mask={
                          ['37', '34'].includes(
                            state && state.card.split('').splice(0, 2).join(''),
                          )
                            ? AMERICANEXPRESS
                            : OTHERCARDS
                        }
                        guide={false}
                        placeholderChar={'\u2000'}
                        placeholder="Card Number"
                        name="card"
                        required
                        value={state.card}
                        onChange={handleInputData}
                        onBlur={handleBlur}
                      />
                      {(!error || !error.cardError) &&
                        CARDARR.includes(cardType) && (
                          <img
                            style={{
                              float: 'right',
                              position: 'relative',
                              top: '-35px',
                            }}
                            src={CARDICON[cardType]}
                            alt="card"
                            width="50px"
                            height="33px"
                          />
                        )}

                      {touched.cardNumber && errors.cardNumber ? (
                        <p className="form-error">{errors.cardNumber}</p>
                      ) : null}
                    </div>
                    <div className="row mt-3 mb-3 position-relative">
                      <div className="col-md-3">
                        <span className="font-weight-normal card-text">
                          Card Holder Name
                        </span>
                        <div className="input">
                          <i class="fa-solid fa-id-card"></i>
                          {/* <input
                            type="text"
                            className="form-control"
                            placeholder="MM"
                            name="expiryMonth"
                            id="expiryMonth"
                            value={values.expiryMonth}
                            onChange={handleCardChange}
                            onBlur={handleBlur}
                          /> */}
                          <input
                            type="text"
                            name="cardHodler"
                            required
                            placeholder="CardHolder's Name"
                            value={state.cardHodler}
                            onChange={handleInputData}
                            onBlur={handleBlur}
                          />
                          {touched.expiryMonth && errors.expiryMonth ? (
                            <p className="form-error">{errors.expiryMonth}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-3">
                        <span className="font-weight-normal card-text">
                          Expiry Year
                        </span>
                        <div className="input">
                          <i className="fa fa-calendar" />
                          {/* <input
                            type="text"
                            className="form-control"
                            placeholder="YYYY"
                            name="expiryYear"
                            id="expiryYear"
                            value={values.expiryYear}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          /> */}
                          <MaskedInput
                            mask={EXPIRYDATE}
                            guide={false}
                            name="expiry"
                            required
                            placeholderChar={'\u2000'}
                            placeholder="Expiry Date (MM/YY)"
                            value={state.expiry}
                            onChange={handleInputData}
                            onBlur={handleBlur}
                          />
                          {/* {error &&
                    error.expiryError &&
                    error.expiryError.length > 1 && (
                      <Error>{error.expiryError}</Error>
                    )} */}
                          {touched.expiryYear && errors.expiryYear ? (
                            <p className="form-error">{errors.expiryYear}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <span className="font-weight-normal card-text">
                          CVC/CVV
                        </span>
                        <div className="input">
                          <i className="fa fa-lock" />
                          {/* <input
                            type="text"
                            className="form-control"
                            name="cvc"
                            id="cvc"
                            value={values.cvc}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          /> */}
                          <MaskedInput
                            mask={CVC}
                            guide={false}
                            name="securityCode"
                            required
                            placeholderChar={'\u2000'}
                            placeholder="Secuirty Code"
                            value={state.securityCode}
                            onChange={handleInputData}
                            onBlur={handleBlur}
                          />
                          {touched.cvc && errors.cvc ? (
                            <p className="form-error">{errors.cvc}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <span className="text-muted certificate-text">
                      <i className="fa fa-lock" /> Your transaction is secured .
                    </span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header p-0" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <span>Credit Card (Stripe)</span>
                        <img src="https://i.imgur.com/35tC99g.png" width={30} />
                      </div>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body payment-card-body">
                    <span className="font-weight-normal card-text">
                      Card Number
                    </span>
                    <div className="input">
                      <i className="fa fa-credit-card" />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>
                    <div className="row mt-3 mb-3 position-relative">
                      <div className="col-md-6">
                        <span className="font-weight-normal card-text">
                          Expiry Date
                        </span>
                        <div className="input">
                          <i className="fa fa-calendar" />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="MM/YY"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <span className="font-weight-normal card-text">
                          CVC/CVV
                        </span>
                        <div className="input">
                          <i className="fa fa-lock" />
                          <input
                            type="text"
                            className="form-control"
                            // placeholder={000}
                          />
                        </div>
                      </div>
                    </div>
                    <span className="text-muted certificate-text">
                      <i className="fa fa-lock" /> Your transaction is secured
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary my-3 w-100"
            onClick={handleSubmit}
          >
            Place Order
          </button>
        </div>
      </div>
  
    </div>
    

  )
}

export default Checkout
