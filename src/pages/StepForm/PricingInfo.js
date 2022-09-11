import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const PricingInfo = ({ nextStep, prevStep, handleChange }) => {
  let initialValues = {
    nightly: "",
    weekly: "",
    monthly: "",
    deposit: "",
    damage_deposit: "",
    prep_fee: "",
    cleaning_fee: "",
    late_fee: "",
  };
  let listObj = JSON.parse(localStorage.getItem("listObj"));
  let PricingInfo = listObj
    ? { ...initialValues, ...listObj.Pricing }
    : initialValues;

  const formik = useFormik({
    initialValues: PricingInfo,
    validationSchema: Yup.object({
      nightly: Yup.number().required("Required").positive("Must be positive").integer(),
      weekly: Yup.number().required("Required").positive("Must be positive").integer(),
      monthly: Yup.number().required("Required").positive("Must be positive").integer(),
      deposit: Yup.number().required("Required").positive("Must be positive").integer(),
      damage_deposit: Yup.number().required("Required").positive("Must be positive").integer(),
      prep_fee: Yup.number().required("Required").positive("Must be positive").integer(),
      cleaning_fee: Yup.number().required("Required").positive("Must be positive").integer(),
      late_fee: Yup.number().required("Required").positive("Must be positive").integer(),
    }),
    enableReinitialize: true,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [proceedNext, setProceedNext] = useState(true);

  const { errors, touched, handleBlur, values } = formik;

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
    } = values;

    console.log({
      nightly,
      weekly,
      monthly,
      deposit,
      damage_deposit,
      prep_fee,
      cleaning_fee,
      late_fee,
    });
    if (
      nightly &&
      weekly &&
      monthly &&
      deposit &&
      damage_deposit &&
      prep_fee &&
      cleaning_fee &&
      late_fee
    ) {
      //
      setProceedNext(true);
      nextStep();
    } else {
      setProceedNext(false);
    }
  };
  return (
    <>
      <div class="form-card">
        <div class="row">
          <div class="col-7">
            <h2 class="fs-title">Prices</h2>
          </div>
          <div class="col-5">
            <h2 class="steps">Step 4 - 7</h2>
          </div>
          <div>
            <h5>Rental Pricing</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 mb-3">
            <label class="fieldlabels">Nightly Rate: *</label>
            <input
              type="number"
              name="nightly"
              min="0"
              placeholder="e.g.$100.00"
              value={listObj && listObj.Pricing && listObj.Pricing.nightly}
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "Pricing");
              }}
              onBlur={handleBlur}
            />
            {errors.nightly && touched.nightly && (
              <p className="text-danger">{errors.nightly} </p>
            )}
          </div>
          <div class="col-md-3 mb-3">
            <label class="fieldlabels">Weekly Rate: *</label>
            <input
              type="number"
              name="weekly"
              min="0"
              placeholder="e.g.$100.00"
              value={listObj && listObj.Pricing && listObj.Pricing.weekly}
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "Pricing");
              }}
              onBlur={handleBlur}
            />
              {errors.weekly && touched.weekly && (
              <p className="text-danger">{errors.weekly} </p>
            )}
          </div>
          <div class="col-md-3 mb:-3">
            <label class="fieldlabels">Monthly Rate: *</label>
            <input
              type="number"
              name="monthly"
              min="0"
              placeholder="e.g.$100.00"
              value={listObj && listObj.Pricing && listObj.Pricing.monthly}
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "Pricing");
              }}
              onBlur={handleBlur}
            />
             {errors.monthly && touched.monthly && (
              <p className="text-danger">{errors.monthly} </p>
            )}
          </div>
          <div class="col-md-3 mb-3">
            <label class="fieldlabels">Booking Deposit: *</label>
            <input
              type="number"
              name="deposit"
              min="0"
              placeholder="e.g.$100.00"
              value={listObj && listObj.Pricing && listObj.Pricing.deposit}
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "Pricing");
              }}
              onBlur={handleBlur}
            />
               {errors.deposit && touched.deposit && (
              <p className="text-danger">{errors.deposit} </p>
            )}
          </div>
          <div class="col-md-3 mb-3">
            <label class="fieldlabels">Damage Deposit: *</label>
            <input
              type="number"
              name="damage_deposit"
              min="0"
              placeholder="e.g.$100.00"
              value={
                listObj && listObj.Pricing && listObj.Pricing.damage_deposit
              }
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "Pricing");
              }}
              onBlur={handleBlur}
            />
                {errors.damage_deposit && touched.damage_deposit && (
              <p className="text-danger">{errors.damage_deposit} </p>
            )}
          </div>
          <div class="col-md-3 mb-3">
            <label class="fieldlabels">Prep Fee: *</label>
            <input
              type="number"
              name="prep_fee"
              min="0"
              placeholder="e.g.$100.00"
              value={listObj && listObj.Pricing && listObj.Pricing.prep_fee}
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "Pricing");
              }}
              onBlur={handleBlur}
            />
                {errors.prep_fee && touched.prep_fee && (
              <p className="text-danger">{errors.prep_fee} </p>
            )}
          </div>
          <div class="col-md-3 mb-3">
            <label class="fieldlabels">Cleaning Fee: *</label>
            <input
              type="number"
              name="cleaning_fee"
              min="0"
              placeholder="e.g.$100.00"
              value={listObj && listObj.Pricing && listObj.Pricing.cleaning_fee}
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "Pricing");
              }}
              onBlur={handleBlur}
            />
                {errors.cleaning_fee && touched.cleaning_fee && (
              <p className="text-danger">{errors.cleaning_fee} </p>
            )}
          </div>
          <div class="col-md-3 mb-3">
            <label class="fieldlabels">Late Fee: *</label>
            <input
              type="number"
              name="late_fee"
              min="0"
              placeholder="e.g.$100.00"
              value={listObj && listObj.Pricing && listObj.Pricing.late_fee}
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "Pricing");
              }}
              onBlur={handleBlur}
            />
                {errors.late_fee && touched.late_fee && (
              <p className="text-danger">{errors.late_fee} </p>
            )}
          </div>
        </div>
      </div>
      <input
        type="button"
        name="next"
        class="next action-button"
        value="Next"
        onClick={validateFields}
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
