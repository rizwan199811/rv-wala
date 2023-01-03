import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { paymentSchema } from "../../schemas";
import { Country, State, City } from 'country-state-city'

const initialValues = {
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
  const optionsCountry = Country.getAllCountries().map((x) => {
    return { label: x.name, value: x.isoCode }
  })
export const PaymentInfo = ({ nextStep, prevStep, handleChanges }) => {
  const [proceedNext, setProceedNext] = useState(true);
  const [cities, setCities] = useState([])
  const [states, setStates] = useState([])
  
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
    <>
           <div className="container">
           <div class="row">
          <div class="col-7">
            <h2 class="fs-title">Billing Details</h2>
          </div>
          <div class="col-5">
            <h2 class="steps">Step 7 - 8</h2>
          </div>
        </div>
      <div className="row my-4">
        <div className="col-12 ">
          <div className="payment-form-wrap">
            <div className="">
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
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      name="country"
                      onChange={(e) => {
                        handleChange(e)
                        console.log(e.target.value)
                        let state = State.getStatesOfCountry(e.target.value)
                        console.log({ state })
                        state =
                          state.length > 0
                            ? state.map((x) => {
                                return {
                                  label: x.name,
                                  value: x.isoCode,
                                }
                              })
                            : []
                        setCities([])
                        setStates(state)
                        // setProceedNext(true)
                        // handleChange(e, 'RVInfo')
                      }}
                      onBlur={handleBlur}
                    >
                      <option value="">Select Country</option>
                      {optionsCountry.length > 0 &&
                        optionsCountry.map((x) => {
                          return <option value={x.value}>{x.label}</option>
                        })}
                    </select>
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
                    <label className="form-label mb-3">State</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      name="state"
                      onChange={(e) => {
                        handleChange(e)
                        console.log({ values: values.country })
                        let cities = City.getCitiesOfState(
                          values.country,
                          e.target.value,
                        )
                        cities =
                          cities.length > 0
                            ? cities.map((x) => {
                                return {
                                  label: x.name,
                                  value: x.name,
                                }
                              })
                            : []
                        setCities(cities)
                      }}
                      disabled={states.length == 0}
                      onBlur={handleBlur}
                    >
                      <option value="">Select State</option>
                      {states.length > 0 &&
                        states.map((x) => {
                          return <option value={x.value}>{x.label}</option>
                        })}
                    </select>
                    {touched.state && errors.state ? (
                      <p className="form-error">{errors.state}</p>
                    ) : null}
                  </div>
                  <div className="col-md-4 mb-3 position-relative">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label mb-3"
                    >
                      City
                    </label>

                    <select
                      class="form-select"
                      aria-label="Default select example"
                      name="city"
                      onChange={(e) => {
                        handleChange(e)
                      }}
                      disabled={cities.length == 0}
                      onBlur={handleBlur}
                    >
                      <option value="">Select City</option>

                      {cities.length > 0 &&
                        cities.map((x) => {
                          return <option value={x.value}>{x.label}</option>
                        })}
                    </select>
                    {touched.city && errors.city ? (
                      <p className="form-error">{errors.city}</p>
                    ) : null}
                  </div>
                </div>
                <div className="mb-3 position-relative">
                  <label className="form-label">Address</label>
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

                {/* <div className="mb-3 position-relative stripe-div">
                  <label className="form-label">Card number</label>
                  <CardNumberElement
                    options={options}
                    onReady={() => {
                      console.log('CardNumberElement [ready]')
                    }}
                    onChange={(event) => {
                      console.log('CardNumberElement [change]', event)
                      setProceedNext(true)
                      setCardError('')
                    }}
                    onBlur={() => {
                      console.log('CardNumberElement [blur]')
                    }}
                    onFocus={() => {
                      console.log('CardNumberElement [focus]')
                    }}
                  />
                </div>
                <div className="row stripe-div">
                  <div className="col-sm-6 mb-3 position-relative">
                    <label className="form-label">Expiration date</label>
                    <CardExpiryElement
                      options={options}
                      onReady={() => {
                        console.log('CardExpiryElement [ready]')
                      }}
                      onChange={(event) => {
                        console.log('CardExpiryElement [change]', event)
                        setProceedNext(true)
                        setCardError('')
                      }}
                      onBlur={() => {
                        console.log('CardExpiryElement [blur]')
                      }}
                      onFocus={() => {
                        console.log('CardExpiryElement [focus]')
                      }}
                    />
                  </div>
                  <div className="col-sm-6 mb-3 position-relative">
                    <label className="form-label">CVC</label>
                    <CardCvcElement
                      options={options}
                      onReady={() => {
                        console.log('CardCvcElement [ready]')
                      }}
                      onChange={(event) => {
                        console.log('CardCvcElement [change]', event)
                        setProceedNext(true)
                        setCardError('')
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
                <div className="form-check mb-4">
                  <input
                    className="form-check-input w-auto p-2 me-2"
                    type="checkbox"
                    id="flexCheckDefault"
                  />
                  <small>
                    SAVE PAYMENT INFORMATION TO MY ACCOUNT FOR FUTURE PURCHASES.
                  </small>
                </div>
                <div className="alert alert-primary">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </div>
                <button type="submit" disabled={!stripe} onClick={handleSubmit}>
                  Pay
                </button> */}

              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

    </div>

   
      <input
        type="button"
        name="next"
        class="next action-button"
        value="Next"
        onClick={nextStep}
        style={!proceedNext ? { opacity: 0.5, pointerEvents: "none" } : {}}
      />
      <input
        type="button"
        name="previous"
        class="previous action-button-previous"
        value="Previous"
        onClick={prevStep}
      />
    </>
  );
};
