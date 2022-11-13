
 
import React, { useRef,useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { baseURL } from '../../../config/apiURL'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import toastOptions from '../../../config/toast'
import { useEffect } from 'react'

export const ResetPassword = () => {
  const closeRef = useRef()
  const [loading, setLoading] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [c_passwordShown, setC_PasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }
  const toggleConfirmPassword = () => {
    setC_PasswordShown(!c_passwordShown)
  }
  const { handleBlur, handleChange, errors, values, touched } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Required')
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[!@#_\$%\^&\*]/, 'Password requires a special character'),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match',
      ),
    }),
    enableReinitialize: true,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  let history = useNavigate()
  // useEffect(() => {
  //   closeRef.ref.click()
  // }, [toggleModal])
  

  const resetPassword =async (e)=>{
    try {
      console.log("called");
      e.preventDefault()
      // return
      if(!values.password || !values.confirmPassword){
        return;
      }
      let body = {
       password:values.password,
       email:localStorage.getItem("forgetEmail")
      }
      const {
        data: { data, token, refreshToken, message },
      } = await axios.put(baseURL + '/user/reset-password', body)
      console.log({ message })
      setToggleModal(true)
      toast.success(message, toastOptions)
      // history('/login', { replace: true })
      window.location.reload()
      // window.onload(()=>{
        setTimeout(() => {
          // closeRef.current.click()
        }, 1000);
      // })

    }
    catch ({
      response: {
        data: { message },
      },
    }) {
      console.log({ message })
      toast.error(message, toastOptions)
    }
  }

  return (
    <div
      className="modal fade"
      id="resetPassword"
      data-bs-backdrop={!toggleModal ?"static" :false}
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Reset your password
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeRef}
            />
          </div>
          <div className="modal-body reset-pass-wrap">
            <div className="mainDiv">
              <div className="cardStyle">
                <form action="">
                  <div className="inputDiv">
                    <label className="inputLabel" htmlFor="password">
                      New Password
                    </label>
                    <input
                      type={passwordShown ? 'text' : 'password'}
                      id="password"
                      name="password"
                      required=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                        {passwordShown ? (<i class="fa-solid fa-eye eye-pass" onClick={togglePassword} ></i>) :
                         (<i class="fa-solid fa-eye-slash eye-pass" onClick={togglePassword} ></i> )}
                    <small className="form-text text-muted" id="emailHelp">
                      {errors.password && touched.password ? (
                        <p className="text-danger">{errors.password} </p>
                      ) : (
                        ''
                      )}
                    </small>
                  </div>
                  <div className="inputDiv">
                    <label className="inputLabel" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      type={c_passwordShown ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                       {c_passwordShown ? (<i class="fa-solid fa-eye eye-pass" onClick={toggleConfirmPassword} ></i>) :
                         (<i class="fa-solid fa-eye-slash eye-pass" onClick={toggleConfirmPassword} ></i> )}
                     <small className="form-text text-muted" id="emailHelp">
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <p className="text-danger">{errors.confirmPassword} </p>
                      ) : (
                        ''
                      )}
                    </small>
                  </div>
                  <div className="buttonWrapper">
                    <button type="submit" className="btn" onClick={resetPassword} style={errors.password || errors.confirmPassword ? {opacity:0.5,pointerEvents:'none'}:{}}>
                      <span>Continue</span>
                    </button>
                  </div>
                  <ToastContainer/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
