import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const UrlsInfo = ({ nextStep, prevStep, handleChange }) => {


  const [proceedNext, setProceedNext] = useState(true);

  const youtube_re =/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
  const outdoorsy_re= /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
  const formik = useFormik({
    initialValues: {
      youtube:"",
      outdoorsy:''
    },
    validationSchema: Yup.object({
      youtube: Yup.string().matches(youtube_re,"Invalid youtube url"),
      outdoorsy: Yup.string().matches(outdoorsy_re,'Enter correct url!')
    }),
    enableReinitialize: true,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { errors, touched, handleBlur,values } = formik;

  return (
    <>
      <div className="form-card">
        <div className="row">
          <div className="col-7">
            <h2 className="fs-title">URLs</h2>
          </div>
          <div className="col-5">
            <h2 className="steps">Step 5 - 8</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <h5>YouTube</h5>
            <p>Including a video is optional, but will help you stand out! To use this feature, upload your video to YouTube, and then paste the URL here.</p>
            <input type="text" placeholder="https://rvwala.com/" 
               name="youtube"
               onChange={(e) => {
                formik.handleChange(e)
                // handleChange(e, 'URL')
              }}
              onBlur={handleBlur}
              />
               {errors.youtube && touched.youtube && (
              <p className="text-danger">{errors.youtube} </p>
            )}
          </div>
          <div className="col-md-12 mb-3">
            <h5>Outdoorsy</h5>
            <p>Including a Outdoorsy URL is optional, but will enable our automatic date syncing feature, which helps keep your listing availability up-to-date.</p>
            <input type="text" placeholder="https://rvwala.com/"    name="outdoorsy"
             onChange={(e) => {
              formik.handleChange(e)
              // handleChange(e, 'URL')
            }} 
            onBlur={handleBlur}
            />
             {errors.outdoorsy && touched.outdoorsy && (
              <p className="text-danger">{errors.outdoorsy} </p>
            )}
          </div>

        </div>
      </div>
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Next"
        onClick={nextStep}
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
