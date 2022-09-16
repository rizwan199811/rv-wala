import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const UrlsInfo = ({ nextStep, prevStep, handleChange }) => {


  const [proceedNext, setProceedNext] = useState(true);


  return (
    <>
      <div class="form-card">
        <div class="row">
          <div class="col-7">
            <h2 class="fs-title">URLs</h2>
          </div>
          <div class="col-5">
            <h2 class="steps">Step 5 - 8</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mb-3">
            <h5>YouTube</h5>
            <p>Including a video is optional, but will help you stand out! To use this feature, upload your video to YouTube, and then paste the URL here.</p>
            <input type="text" placeholder="https://rvwala.com/"/>
          </div>
          <div class="col-md-12 mb-3">
            <h5>Outdoorsy</h5>
            <p>Including a Outdoorsy URL is optional, but will enable our automatic date syncing feature, which helps keep your listing availability up-to-date.</p>
            <input type="text" placeholder="https://rvwala.com/"/>
          </div>

        </div>
      </div>
      <input
        type="button"
        name="next"
        class="next action-button"
        value="Next"
        // onClick={validateFields}
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
