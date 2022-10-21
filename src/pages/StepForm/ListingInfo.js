import {useState,useEffect} from "react";
import { useFormik} from "formik";
import * as Yup from "yup";

export const ListingInfo = ({
  nextStep,
  prevStep,
  handleChange,
  handleCheck,
}) => {
  let initialValues ={
    title: "",
    description: "",
    address: "",
    for_rent: "",
    cancel_policy: "",
    for_sale: ""
  }

  let policies = [
    {
      label: "Rental cancellation policy",
      value: "Rental cancellation policy",
    },
    {
      label: "Strict",
      value: "strict",
    },
    {
      label: "Flexible",
      value: "flexible",
    },
  ];
  let listObj = JSON.parse(localStorage.getItem("listObj"));
  let ListInfo = listObj ? {...initialValues ,...listObj.ListInfo} : initialValues;

  const formik = useFormik({
    initialValues: ListInfo,
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      for_rent: Yup.string().required("Required"),
      cancel_policy: Yup.string().required("Required"),
      for_sale: Yup.string().required("Required")
    }),
    enableReinitialize: true,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  const { errors, touched, handleBlur,values } = formik;

  const [proceedNext, setProceedNext] = useState(true);

  const validateFields = () => {
    const {
      title,
      description,
      address,
      for_rent,
      cancel_policy,
      for_sale,
      value
    } = values;
  
    console.log({
      title,
      description,
      address,
      for_rent,
      cancel_policy,
      for_sale
    }
    )
    if (
      title   &&
      description &&
      address &&
      // for_rent &&
      cancel_policy 
      // &&
      // for_sale 
    ) {
      // 
      setProceedNext(true);
      nextStep();
    } else {
      setProceedNext(false);
    }
  };

useEffect(() => {

  function initMap() {
      
      
      var input = document.getElementById("address");
         var options = {
          fields: ["formatted_address", "geometry", "name"],
          strictBounds: false,
          types: ["establishment"],
      };
      
      var autocomplete = new window.google.maps.places.Autocomplete(input, options);
      
  }
  initMap()
  
}, [])

  return (
    <>
      <div class="form-card">
        <div class="row">
          <div class="col-7">
            <h2 class="fs-title">Listing Details:</h2>
          </div>
          <div class="col-5">
            <h2 class="steps">Step 2 - 8</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mb-3">
            <label class="fieldlabels">Title: *</label>
            <input
              type="text"
              name="title"
              defaultValue={
                listObj && listObj.ListInfo && listObj.ListInfo.title
              }
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "ListInfo");
              }}
              onBlur={handleBlur}
              placeholder="Clear, Concise Title of your listing"
            />
            {errors.title && touched.title && (
              <p className="text-danger">{errors.title} </p>
            )}
          </div>
          <div class="col-md-12 mb-3">
            <label class="fieldlabels">Description: *</label>
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              name="description"
              defaultValue={
                listObj && listObj.ListInfo && listObj.ListInfo.description
              }
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "ListInfo");
              }}
              onBlur={handleBlur}
              
              style={{ height: "100px" }}
            ></textarea>
             {errors.description && touched.description && (
              <p className="text-danger">{errors.description} </p>
            )}
          </div>

          <div class="col-md-9 mb-3">
            <label class="fieldlabels">
              Address: * (Ex. 92 East Barnard St, West Chester, PA, USA )
            </label>
            <input
              type="text"
              placeholder="Full address of vehicle's location"
              name="address"
              id="address"
              defaultValue={
                listObj && listObj.ListInfo && listObj.ListInfo.address
              }
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "ListInfo");
              }}
              onBlur={handleBlur}
            />
              {errors.address && touched.address && (
              <p className="text-danger">{errors.address} </p>
            )}
          </div>
          
          <div class="col-md-3 mb-3 m-auto d-flex justify-content-around">
            <label class="fieldlabels">For Rent: *</label>
            <input
              type="checkbox"
              name="for_rent"
              checked={listObj && listObj.ListInfo && listObj.ListInfo.for_rent}
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleCheck(e, "ListInfo");
              }}
              onBlur={handleBlur}
            />
              {errors.for_rent && touched.for_rent && (
              <p className="text-danger">{errors.for_rent} </p>
            )}
          </div>
          <div class="col-md-9 mb-3 ">
            <label class="fieldlabels">Cancellation Policy : *</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="cancel_policy"
              defaultValue={
                listObj && listObj.ListInfo && listObj.ListInfo.cancel_policy
              }
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "ListInfo");
              }}
              onBlur={handleBlur}
            >
              {policies.length > 0 &&
                policies.map((x) => {
                  return <option value={x.value}>{x.label}</option>;
                })}
            </select>
            {errors.cancel_policy && touched.cancel_policy && (
              <p className="text-danger">{errors.cancel_policy} </p>
            )}
          </div>
          <div class="col-md-3 mb-3 m-auto d-flex justify-content-around">
            <label class="fieldlabels" name="for_sale">
              For Sale: *
            </label>
            <input
              type="checkbox"
              name="for_sale"
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleCheck(e, "ListInfo");
              }}
              onBlur={handleBlur}
              checked={
                listObj && listObj.ListInfo && listObj.ListInfo.for_sale
              }
            />
              {errors.for_sale && touched.for_sale && (
              <p className="text-danger">{errors.for_sale} </p>
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
