import React from "react";
import { Fieldset } from "../../components/Fieldset";
import { useState } from "react";
import { RVInfo } from "../StepForm/RVInfo";
import { ListingInfo } from "../StepForm/ListingInfo";
import { InsuranceInfo } from "../StepForm/InsuranceInfo";
import { PricingInfo } from "../StepForm/PricingInfo";
import { ImagesInfo } from "../StepForm/ImagesInfo";
import { FeaturesInfo } from "../StepForm/FeaturesInfo";
import { UrlsInfo } from "../StepForm/UrlsInfo";
import { Finish } from "../StepForm/Finish";

export const CreateListing = () => {
  const [step, setStep] = useState(1);
  const [progressWidth, setProgressWidth] = useState(parseFloat(100 / 7) * 1);
  const [listObj, setListObj] = useState({});
  const nextStep = () => {
    let totalSteps = 8;
    let percent = parseFloat(100 / totalSteps) * (step + 1);
    setProgressWidth(percent);
    setStep(step + 1);
  };
  const prevStep = () => {
    let totalSteps = 8;
    let percent = parseFloat(100 / totalSteps) * (step - 1);
    setProgressWidth(percent);
    setStep(step - 1);
  };

  const set = (obj, path, val) => {
    const keys = path.split(".");
    const lastKey = keys.pop();
    const lastObj = keys.reduce((obj, key) => (obj[key] = obj[key] || {}), obj);
    lastObj[lastKey] = val;
  };
  const handleChange = (e, identifier,parseToNumber=false) => {
    let { name, value } = e.target;
    value = parseToNumber ? parseInt(value):value;
    let path = `${identifier}.${name}`;
    // let obj = { ...listObj };
  
    let obj = localStorage.getItem("listObj") ? JSON.parse(localStorage.getItem("listObj")) :{}
   
    set(obj, path, value);

    console.log({ obj });
    localStorage.setItem("listObj", JSON.stringify(obj));
    setListObj(obj);
  };
  const handleCheck = (e, identifier,radioChecked) => {
    let { name,checked } = e.target;
    let path = `${identifier}.${name}`;
    // let obj = { ...listObj };
    
    let obj = localStorage.getItem("listObj") ? JSON.parse(localStorage.getItem("listObj")) :{}
    if(radioChecked!==undefined){
      set(obj, path, radioChecked);
    }
    else{
      set(obj, path, checked);
    }
 
    console.log({ obj });
    localStorage.setItem("listObj", JSON.stringify(obj));
    setListObj(obj);
  };

  const handleCheckMount = (name,checked, identifier) => {
    let path = `${identifier}.${name}`;
    let obj = localStorage.getItem("listObj") ? JSON.parse(localStorage.getItem("listObj")) :{}
    set(obj, path, checked);
    console.log({ obj });
    localStorage.setItem("listObj", JSON.stringify(obj));
    setListObj(obj);
  };


  const onUpload =(files,identifier)=>{
    let path =`${identifier}.files`
    let obj = localStorage.getItem("listObj") ? JSON.parse(localStorage.getItem("listObj")) :{}
    set(obj, path, files);
    console.log({ obj });
    localStorage.setItem("listObj", JSON.stringify(obj));
    setListObj(obj);
  }
  return (
    <>
      <div className="container my-3 listing-form-wrapper">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-10 col-md-12 col-lg-12 col-xl-12 text-center p-0 mt-3 mb-2">
            <div className="card p-2 pt-4 pb-0 mt-3 mb-3">
              <h2 id="heading">Create Your Listing</h2>
              <p>Fill all form field to go to next step</p>
              <form id="msform">
                <ul id="progressbar">
                  <li id="account" className={step == 1 ? "active" : ""}>
                    <strong> RV Info</strong>
                  </li>
                  <li id="personal" className={step == 2 ? "active" : ""}>
                    <strong> Details</strong>
                  </li>
                  <li id="payment" className={step == 3 ? "active" : ""}>
                    <strong>Insurance</strong>
                  </li>
                  <li id="Prices" className={step == 4 ? "active" : ""}>
                    <strong>Prices</strong>
                  </li>
                  <li id="urls" className={step == 5 ? "active" : ""}>
                    <strong>URLs</strong>
                  </li>
                  <li id="Photos" className={step == 6 ? "active" : ""}>
                    <strong>Photos</strong>
                  </li>
                  <li id="Features" className={step == 7 ? "active" : ""}>
                    <strong>Features</strong>
                  </li>
                  {/* <li id="confirm" className={step == 8 ? "active" : ""}>
                    <strong>Finish</strong>
                  </li> */}
                  {/* <!-- <li id="confirm"><strong>Finish</strong></li> --> */}
                </ul>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuemin="0"
                    style={{ width: `${progressWidth}%` }}
                    aria-valuemax="100"
                  ></div>
                </div>
                <br />

                <Fieldset>
                  {step == 1 && (
                    <RVInfo
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleChange={handleChange}
                    />
                  )}
                  {step == 2 && (
                    <ListingInfo
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleChange={handleChange}
                      handleCheck={handleCheck}
                      handleCheckMount={handleCheckMount}
                    />
                  )}
                  {step == 3 && (
                    <InsuranceInfo
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleChange={handleChange}
                      handleCheck={handleCheck}
                     
                    />
                  )}
                  {step == 4 && (
                    <PricingInfo
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleChange={handleChange}
                      handleCheck={handleCheck}
                    />
                  )}
                  {step == 5 && (
                    <UrlsInfo
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleChange={handleChange}
                    />
                  )}
                  {step == 6 && (
                    <ImagesInfo
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleChange={handleChange}
                      onUpload={onUpload}
                    />
                  )}
                  {step == 7 && (
                    <FeaturesInfo
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleCheck={handleCheck}
                      handleChange={handleChange}
                    />
                  )}
                  {/* {step == 8 && (
                    <Finish nextStep={nextStep} prevStep={prevStep} />
                  )} */}
                </Fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
