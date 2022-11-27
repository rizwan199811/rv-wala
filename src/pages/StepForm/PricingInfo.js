import React from 'react'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const PricingInfo = ({
  nextStep,
  prevStep,
  handleChange,
  handleCheck,
}) => {
  let initialValues = {
    nightly: '',
    weekly: '',
    monthly: '',
    deposit: '',
    damage_deposit: '',
    prep_fee: '',
    cleaning_fee: '',
    late_fee: '',
    free_hours_per_night: '',
    price_per_extra_hours: '',
    max_free_miles_per_night: '',
    pet_fee: '',
    price_per_mile: '',
    weight_limit: '',
  }
  let listObj = JSON.parse(localStorage.getItem('listObj'))
  let PricingInfo = listObj
    ? {
        ...initialValues,
        ...listObj.Pricing,

        max_free_miles_per_night:
          listObj.Pricing &&
          listObj.Pricing.mileage &&
          listObj.Pricing &&
          listObj.Pricing.mileage.max_free_miles_per_night,
        per_extra_miles_charge:
          listObj.Pricing &&
          listObj.Pricing.mileage &&
          listObj.Pricing &&
          listObj.Pricing.mileage.per_extra_miles_charge,

        free_hours_per_night:
          listObj.Pricing &&
          listObj.Pricing.generator &&
          listObj.Pricing &&
          listObj.Pricing.generator.free_hours_per_night,
        price_per_extra_hours:
          listObj.Pricing &&
          listObj.Pricing.generator &&
          listObj.Pricing &&
          listObj.Pricing.generator.price_per_extra_hours,

        weight_limit:
          listObj.Pricing &&
          listObj.Pricing.towing_package &&
          listObj.Pricing &&
          listObj.Pricing.towing_package.weight_limit,
        price_per_mile:
          listObj.Pricing &&
          listObj.Pricing.towing_package &&
          listObj.Pricing &&
          listObj.Pricing.towing_package.price_per_mile,

        pet_fee:
          listObj.Pricing && listObj.Pricing.pet && listObj.Pricing.pet.pet_fee,
      }
    : initialValues
  const formik = useFormik({
    initialValues: PricingInfo,
    validationSchema: Yup.object({
      nightly: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
      weekly: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
      monthly: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
      deposit: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
      damage_deposit: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
      prep_fee: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
      cleaning_fee: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
      late_fee: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
      free_hours_per_night: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
      price_per_extra_hours: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
      max_free_miles_per_night: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
      pet_fee: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
      price_per_mile: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
      weight_limit: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
    }),
    enableReinitialize: true,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const [proceedNext, setProceedNext] = useState(true)
  const [checked, setChecked] = useState({
    mileage: listObj.Pricing && listObj.Pricing.mileage ? true : false,
    generator: listObj.Pricing && listObj.Pricing.generator ? true : false,
    towing_package:
      listObj.Pricing && listObj.Pricing.towing_package ? true : false,
    delivery: listObj.Pricing && listObj.Pricing.delivery ? true : false,
    pet: listObj.Pricing && listObj.Pricing.pet ? true : false,
    rental_avaliability:
      listObj.Pricing && listObj.Pricing.rental_avaliability ? true : false,
    wheelchair: listObj.Pricing && listObj.Pricing.wheelchair ? true : false,
  })

  const { errors, touched, handleBlur, values } = formik

  const validateFields = () => {
    const {
      nightly,
      weekly,
      monthly,
      deposit,
      damage_deposit,
      prep_fee,
      cleaning_fee,
      late_fee,
      max_free_miles_per_night,
      per_extra_miles_charge,
      free_hours_per_night,
      price_per_extra_hours,
      weight_limit,
      price_per_mile,
      pet_fee,
    } = values

    console.log(
      {
        values,
        checked: checked['mileage'],
      },
      parseInt(per_extra_miles_charge) < 0,
    )

    if (
      (checked['mileage'] && parseInt(max_free_miles_per_night) < 0) ||
      parseInt(per_extra_miles_charge) < 0
    ) {
      return setProceedNext(false)
    }
    if (
      (checked['generator'] && free_hours_per_night < 0) ||
      price_per_extra_hours < 0
    ) {
      return setProceedNext(false)
    }
    if ((checked['towing_package'] && weight_limit < 0) || price_per_mile < 0) {
      return setProceedNext(false)
    }
    if (checked['pet'] && pet_fee < 0) {
      return setProceedNext(false)
    }
    if (
      nightly < 0 &&
      weekly < 0 &&
      monthly < 0 &&
      deposit < 0 &&
      damage_deposit < 0 &&
      prep_fee < 0 &&
      cleaning_fee < 0 &&
      late_fee < 0
    ) {
      return setProceedNext(false)
    }
    setProceedNext(true)
    nextStep()
  }

  const handleCheckWithDropdown = (event) => {
    let { name } = event.target
    let PricingInfo = listObj.Pricing

    if (!event.target.checked) {
      delete PricingInfo[[name]]
    }
    listObj.Pricing = PricingInfo
    localStorage.setItem('listObj', JSON.stringify(listObj))
    setChecked({
      ...checked,
      [name]: !checked[name],
    })
  }

  return (
    <>
      <div className="form-card">
        <div className="row">
          <div className="col-7">
            <h2 className="fs-title">Prices</h2>
          </div>
          <div className="col-5">
            <h2 className="steps">Step 4 - 8</h2>
          </div>
          <div>
            <h5>Rental Pricing</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <label className="fieldlabels">Nightly Rate: *</label>
            <input
              type="number"
              name="nightly"
              min="0"
              placeholder="e.g.$100.00"
              value={listObj && listObj.Pricing && listObj.Pricing.nightly}
              onChange={(e) => {
                formik.handleChange(e)
                setProceedNext(true)
                handleChange(e, 'Pricing')
              }}
              onBlur={handleBlur}
            />
            {errors.nightly && touched.nightly && (
              <p classNameName="text-danger">{errors.nightly} </p>
            )}
          </div>
          <div className="col-md-3 mb-3">
            <label className="fieldlabels">Weekly Rate: *</label>
            <input
              type="number"
              name="weekly"
              min="0"
              placeholder="e.g.$100.00"
              value={listObj && listObj.Pricing && listObj.Pricing.weekly}
              onChange={(e) => {
                formik.handleChange(e)
                setProceedNext(true)
                handleChange(e, 'Pricing')
              }}
              onBlur={handleBlur}
            />
            {errors.weekly && touched.weekly && (
              <p classNameName="text-danger">{errors.weekly} </p>
            )}
          </div>
          <div className="col-md-3 mb-3">
            <label className="fieldlabels">Monthly Rate: *</label>
            <input
              type="number"
              name="monthly"
              min="0"
              placeholder="e.g.$100.00"
              value={listObj && listObj.Pricing && listObj.Pricing.monthly}
              onChange={(e) => {
                formik.handleChange(e)
                setProceedNext(true)
                handleChange(e, 'Pricing')
              }}
              onBlur={handleBlur}
            />
            {errors.monthly && touched.monthly && (
              <p classNameName="text-danger">{errors.monthly} </p>
            )}
          </div>
          <div className="col-md-3 mb-3">
            <label className="fieldlabels">Booking Deposit: *</label>
            <input
              type="number"
              name="deposit"
              min="0"
              placeholder="e.g.$100.00"
              value={listObj && listObj.Pricing && listObj.Pricing.deposit}
              onChange={(e) => {
                formik.handleChange(e)
                setProceedNext(true)
                handleChange(e, 'Pricing')
              }}
              onBlur={handleBlur}
            />
            {errors.deposit && touched.deposit && (
              <p classNameName="text-danger">{errors.deposit} </p>
            )}
          </div>
          <div className="col-md-3 mb-3">
            <label className="fieldlabels">Damage Deposit: *</label>
            <input
              type="number"
              name="damage_deposit"
              min="0"
              placeholder="e.g.$100.00"
              value={
                listObj && listObj.Pricing && listObj.Pricing.damage_deposit
              }
              onChange={(e) => {
                formik.handleChange(e)
                setProceedNext(true)
                handleChange(e, 'Pricing')
              }}
              onBlur={handleBlur}
            />
            {errors.damage_deposit && touched.damage_deposit && (
              <p classNameName="text-danger">{errors.damage_deposit} </p>
            )}
          </div>
          <div className="col-md-3 mb-3">
            <label className="fieldlabels">Prep Fee: *</label>
            <input
              type="number"
              name="prep_fee"
              min="0"
              placeholder="e.g.$100.00"
              value={listObj && listObj.Pricing && listObj.Pricing.prep_fee}
              onChange={(e) => {
                formik.handleChange(e)
                setProceedNext(true)
                handleChange(e, 'Pricing')
              }}
              onBlur={handleBlur}
            />
            {errors.prep_fee && touched.prep_fee && (
              <p classNameName="text-danger">{errors.prep_fee} </p>
            )}
          </div>
          <div className="col-md-3 mb-3">
            <label className="fieldlabels">Cleaning Fee: *</label>
            <input
              type="number"
              name="cleaning_fee"
              min="0"
              placeholder="e.g.$100.00"
              value={listObj && listObj.Pricing && listObj.Pricing.cleaning_fee}
              onChange={(e) => {
                formik.handleChange(e)
                setProceedNext(true)
                handleChange(e, 'Pricing')
              }}
              onBlur={handleBlur}
            />
            {errors.cleaning_fee && touched.cleaning_fee && (
              <p classNameName="text-danger">{errors.cleaning_fee} </p>
            )}
          </div>
          <div className="col-md-3 mb-3">
            <label className="fieldlabels">Late Fee: *</label>
            <input
              type="number"
              name="late_fee"
              min="0"
              placeholder="e.g.$100.00"
              value={listObj && listObj.Pricing && listObj.Pricing.late_fee}
              onChange={(e) => {
                formik.handleChange(e)
                setProceedNext(true)
                handleChange(e, 'Pricing')
              }}
              onBlur={handleBlur}
            />
            {errors.late_fee && touched.late_fee && (
              <p classNameName="text-danger">{errors.late_fee} </p>
            )}
          </div>

          <div className="col-md-4 mb-3">
            <input
              type="checkbox"
              name="mileage"
              checked={checked['mileage']}
              onChange={handleCheckWithDropdown}
            />
            <label className="fieldlabels">Mileage Charges</label>
            {checked['mileage'] && (
              <div classNameName="priceing-checkhide-div">
                <label className="fieldlabels pt-3">Max Free Miles per Night</label>
                <input
                  type="number"
                  min="0"
                  name="max_free_miles_per_night"
                  placeholder="Max Free Miles per Night"
                  value={
                    listObj &&
                    listObj.Pricing &&
                    listObj.Pricing.mileage &&
                    listObj.Pricing.mileage.max_free_miles_per_night
                  }
                  onChange={(e) => {
                    formik.handleChange(e)
                    setProceedNext(true)
                    handleChange(e, 'Pricing.mileage')
                  }}
                  onBlur={handleBlur}
                />
                {errors.max_free_miles_per_night &&
                  touched.max_free_miles_per_night && (
                    <p classNameName="text-danger">
                      {errors.max_free_miles_per_night}{' '}
                    </p>
                  )}
                <label className="fieldlabels pt-3">
                  Per Mile Charge (extra miles)
                </label>
                <input
                  type="number"
                  min="0"
                  name="per_extra_miles_charge"
                  placeholder="e.g.$100.00"
                  value={
                    listObj &&
                    listObj.Pricing &&
                    listObj.Pricing.mileage &&
                    listObj.Pricing.mileage.per_extra_miles_charge
                  }
                  onChange={(e) => {
                    formik.handleChange(e)
                    setProceedNext(true)
                    handleChange(e, 'Pricing.mileage')
                  }}
                  onBlur={handleBlur}
                />
                {errors.per_extra_miles_charge &&
                  touched.per_extra_miles_charge && (
                    <p classNameName="text-danger">
                      {errors.per_extra_miles_charge}{' '}
                    </p>
                  )}
              </div>
            )}
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="checkbox"
              name="generator"
              checked={checked['generator']}
              onChange={handleCheckWithDropdown}
            />
            <label className="fieldlabels">Generator</label>
            {checked['generator'] && (
              <div classNameName="priceing-checkhide-div">
                <label className="fieldlabels pt-3">Free Hours Per Night</label>
                <input
                  type="number"
                  min="0"
                  name="free_hours_per_night"
                  placeholder="0"
                  value={
                    listObj &&
                    listObj.Pricing &&
                    listObj.Pricing.generator &&
                    listObj.Pricing.generator.free_hours_per_night
                  }
                  onChange={(e) => {
                    formik.handleChange(e)
                    setProceedNext(true)
                    handleChange(e, 'Pricing.generator')
                  }}
                  onBlur={handleBlur}
                />
                {errors.free_hours_per_night &&
                  touched.free_hours_per_night && (
                    <p classNameName="text-danger">
                      {errors.free_hours_per_night}{' '}
                    </p>
                  )}
                <label className="fieldlabels pt-3">
                  Price Per Hour (extra hours)
                </label>
                <input
                  min="0"
                  type="number"
                  name="price_per_extra_hours"
                  placeholder="e.g.$100.00"
                  onChange={(e) => {
                    formik.handleChange(e)
                    setProceedNext(true)
                    handleChange(e, 'Pricing.generator')
                  }}
                  value={
                    listObj &&
                    listObj.Pricing &&
                    listObj.Pricing.generator &&
                    listObj.Pricing.generator.price_per_extra_hours
                  }
                  onBlur={handleBlur}
                />
                {errors.price_per_extra_hours &&
                  touched.price_per_extra_hours && (
                    <p classNameName="text-danger">
                      {errors.price_per_extra_hours}{' '}
                    </p>
                  )}
              </div>
            )}
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="checkbox"
              name="towing_package"
              min="0"
              checked={checked['towing_package']}
              onChange={handleCheckWithDropdown}
            />
            <label className="fieldlabels">Towing Package</label>
            {checked['towing_package'] && (
              <div classNameName="priceing-checkhide-div">
                <label className="fieldlabels pt-3">Weight Limit</label>
                <input
                  type="number"
                  name="weight_limit"
                  placeholder="0"
                  min="0"
                  onChange={(e) => {
                    formik.handleChange(e)
                    setProceedNext(true)
                    handleChange(e, 'Pricing.towing_package')
                  }}
                  value={
                    listObj &&
                    listObj.Pricing &&
                    listObj.Pricing.towing_package &&
                    listObj.Pricing.towing_package.weight_limit
                  }
                  onBlur={handleBlur}
                />
                {errors.weight_limit && touched.weight_limit && (
                  <p classNameName="text-danger">{errors.weight_limit} </p>
                )}
                <label className="fieldlabels pt-3">Price per Mile</label>
                <input
                  type="number"
                  name="price_per_mile"
                  placeholder="e.g.$0.10"
                  min="0"
                  onChange={(e) => {
                    formik.handleChange(e)
                    setProceedNext(true)
                    handleChange(e, 'Pricing.towing_package')
                  }}
                  value={
                    listObj &&
                    listObj.Pricing &&
                    listObj.Pricing.towing_package &&
                    listObj.Pricing.towing_package.price_per_mile
                  }
                  onBlur={handleBlur}
                />
                {errors.price_per_mile && touched.price_per_mile && (
                  <p classNameName="text-danger">{errors.price_per_mile} </p>
                )}
              </div>
            )}
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="checkbox"
              name="delivery"
              min="0"
              checked={checked['delivery']}
              onChange={(e) => {
                handleCheckWithDropdown(e);
                handleCheck(e, 'Pricing')
              }}
            />
            <label className="fieldlabels">Delivery Available</label>
            {checked['delivery'] && (
              <div classNameName="priceing-checkhide-div">
                <span>
                  As a host you will have the ability to provide an amount upon
                  confirmation of inquiries
                </span>
              </div>
            )}
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="checkbox"
              name="rental_avaliability"
              checked={checked['rental_avaliability']}
              onChange={(e) => {
                handleCheckWithDropdown(e)
                handleCheck(e, 'Pricing')
              }}
            />
            <label className="fieldlabels">One Way Rental Available</label>
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="checkbox"
              name="pet"
              checked={checked['pet']}
              onChange={handleCheckWithDropdown}
            />
            <label className="fieldlabels">Pet Friendly</label>
            {checked['pet'] && (
              <div classNameName="priceing-checkhide-div">
                <label className="fieldlabels pt-3">Pet Fee</label>
                <input
                  type="number"
                  name="pet_fee"
                  placeholder="e.g.$20.00"
                  min="0"
                  value={
                    listObj &&
                    listObj.Pricing &&
                    listObj.Pricing.pet &&
                    listObj.Pricing.pet.pet_fee
                  }
                  onChange={(e) => {
                    formik.handleChange(e)
                    setProceedNext(true)
                    handleChange(e, 'Pricing.pet')
                  }}
                  onBlur={handleBlur}
                />
                {errors.pet_fee && touched.pet_fee && (
                  <p classNameName="text-danger">{errors.pet_fee} </p>
                )}
              </div>
            )}
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="checkbox"
              name="wheelchair"
              checked={checked['wheelchair']}
              onChange={(e) => {
                handleCheckWithDropdown(e)
                handleCheck(e, 'Pricing')
              }}
            />
            <label className="fieldlabels">Wheelchair Accessible</label>
          </div>
        </div>
      </div>
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Next"
        onClick={validateFields}
        style={!proceedNext ? { opacity: 0.5, pointerEvents: 'none' } : {}}
      />
      <input
        type="button"
        name="previous"
        className="previous action-button-previous"
        value="Previous"
        onClick={prevStep}
      />
    </>
  )
}
