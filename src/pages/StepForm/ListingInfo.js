import {useState,useEffect,useRef} from "react";
import { useFormik} from "formik";
import * as Yup from "yup";
import $ from 'jquery';

export const ListingInfo = ({
  nextStep,
  prevStep,
  handleChange,
  handleCheck,
  handleCheckMount
}) => {
  let initialValues ={
    title: "",
    description: "",
    address: "",
    for_rent: "",
    cancel_policy: "",
    for_rent: "",
    min_nights:""
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
      for_sale: Yup.string().required("Required"),
      min_nights: Yup.number()
      .required('Required')
      .positive('Must be positive')
      .integer(),
    }),
    enableReinitialize: true,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const rvRentRef =useRef();


  const { errors, touched, handleBlur,values } = formik;

  const [proceedNext, setProceedNext] = useState(true);
  const [minNightsToggle, setMinNightsToggle] = useState(null);

  const validateFields = () => {
    const {
      title,
      description,
      address,
      for_rent,
      cancel_policy
    } = values;
    const {
      title:titleError,
      description :descriptionError,
      address :addressError,
      for_rent :for_rentError,
      cancel_policy :cancel_policyError,
      min_nights:min_nightsError
    } = errors;
  
    console.log({
      title,
      description,
      address,
      for_rent,
      cancel_policy
    }
    )
 
    

    if (
     !titleError && !descriptionError && !addressError && !cancel_policyError
    ) {
      console.log({min_nightsError})
      if(for_rent && min_nightsError){
        setProceedNext(false);
        return
      }
     
      console.log("called")
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
  if(listObj && listObj.ListInfo==undefined){
    handleCheckMount('for_rent',true,'ListInfo')
    setMinNightsToggle(true)
  }

  if(listObj && listObj.ListInfo && listObj.ListInfo.for_rent ){
    setMinNightsToggle(true)
  }

  


}, [])

  return (
    <>
      <div className="form-card">
        <div className="row">
          <div className="col-7">
            <h2 className="fs-title">Listing Details:</h2>
          </div>
          <div className="col-5">
            <h2 className="steps">Step 2 - 8</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <label className="fieldlabels">Title: *</label>
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
              <p classNameName="text-danger">{errors.title} </p>
            )}
          </div>
          <div className="col-md-12 mb-3">
            <label className="fieldlabels">Description: *</label>
            <textarea
              className="form-control"
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
              <p classNameName="text-danger">{errors.description} </p>
            )}
          </div>

          <div className="col-md-9 mb-3">
            <label className="fieldlabels">
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
              <p classNameName="text-danger">{errors.address} </p>
            )}
          </div>
          
          <div className="col-md-3 mb-3 m-auto d-flex justify-content-around">
            <label className="fieldlabels">For Rent: *</label>
            <input
              type="radio"
              name="for_rent"
              checked={listObj && listObj.ListInfo && listObj.ListInfo.for_rent}
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleCheck(e, "ListInfo",true);
                setMinNightsToggle(true)
              }}
              onBlur={handleBlur}
            />
              {errors.for_rent && touched.for_rent && (
              <p classNameName="text-danger">{errors.for_rent} </p>
            )}
          </div>
          <div className="col-md-9 mb-3 ">
            <label className="fieldlabels">Cancellation Policy : *</label>
            <select
              className="form-select"
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
              <p classNameName="text-danger">{errors.cancel_policy} </p>
            )}
          </div>
          <div className="col-md-3 mb-3 m-auto d-flex justify-content-around">
            <label className="fieldlabels" name="for_sale">
              For Sale: *
            </label>
            <input
              type="radio"
              name="for_rent"
              id="for_rent"
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleCheck(e, "ListInfo",false);
                setMinNightsToggle(false)
              }}
              onBlur={handleBlur}
              checked={
                listObj && listObj.ListInfo && !listObj.ListInfo.for_rent
              }
            />
              {errors.for_sale && touched.for_sale && (
              <p classNameName="text-danger">{errors.for_sale} </p>
            )}
          </div>
          {minNightsToggle &&
            <div className="col-md-9 mb-3">
            <label className="fieldlabels">
              Minimum nights: *
            </label>
            <input
              type="number"
              placeholder="Minimum nights for rent "
              name="min_nights"
              min="1"
              defaultValue={
                listObj && listObj.ListInfo && listObj.ListInfo.min_nights
              }
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "ListInfo");
              }}
              onBlur={handleBlur}
            />
              {errors.min_nights && touched.min_nights && (
              <p classNameName="text-danger">{errors.min_nights} </p>
            )}
          </div> }
        
        </div>
      </div>
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Next"
        onClick={validateFields}
        style={!proceedNext ? { opacity: 0.5, pointerEvents: "none" } : {}}
      />
      <input
        type="button"
        name="previous"
        className="previous action-button-previous"
        value="Previous"
        onClick={prevStep}
        
      />
    </>
  );
};
