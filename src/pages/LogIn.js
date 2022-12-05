import React, { useState, useRef,useEffect } from 'react'
import login from '../images/loigin.jpg'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { baseURL } from '../config/apiURL'
import { useDispatch } from 'react-redux'
import { setToken } from '../app/slice/AuthSlice'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import toastOptions from '../config/toast'
import { setProfileImage } from '../app/slice/ProfileSlice'
import { ForgetPassword } from '../components/Modals/ResetPassword/ForgetPassword'
import VerificationCode from '../components/Modals/ResetPassword/VerificationCode'
import { ResetPassword } from '../components/Modals/ResetPassword/ResetPassword'

const LogIn = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [toggleVerifyCode, setVerifyCode] = useState(null);
  const [renderVerifyCode, setRenderVerifyCode] = useState(false);
  const [toggleResetModal, setToggleResetModal] = useState(null);
  const [renderResetModal, setRenderResetModal] = useState(false);
  
  let history = useNavigate()
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required').email('Invalid email'),
      password: Yup.string()
        .required('Required')
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[!@#_\$%\^&\*]/, 'Password requires a special character')
    }),
    enableReinitialize: true,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const { errors, touched, handleBlur, values } = formik
  const [loading, setLoading] = useState(false)

  const verifyRef = useRef(null)
  const resetRef = useRef(null)
  const toggleVerificationModal = async () => {
    setRenderVerifyCode(true)
    setRenderResetModal(false)
    setVerifyCode(!toggleVerifyCode)
  }

  const toggleResetPassModal = () => {
    console.log("toggleResetPassModal")
    setRenderVerifyCode(false)
    setRenderResetModal(true)
    setToggleResetModal(!toggleResetModal)
  }
  useEffect(() => {
  verifyRef.current.click()
  }, [toggleVerifyCode]);

  useEffect(() => {
    resetRef.current.click()
    }, [toggleResetModal]);

  const SignIn = async (e) => {
    try {
      setLoading(true)
      e.preventDefault()
      if (!values.email || !values.password) {
        toast.error("Please fill all fields", toastOptions);
        setLoading(false)
        return
      }
      if (errors.email || errors.password) {
        toast.error("Please fill form correctly", toastOptions);
        setLoading(false)
        return
      }
      let body = {
        email: values.email,
        password: values.password,
      }
      const {
        data: { data, token, refreshToken, message },
      } = await axios.post(baseURL + '/auth/login', body)
      let profileImage =
        data.profileImage ||
        'https://res.cloudinary.com/dxtpcpwwf/image/upload/v1616176827/Asaan-Dukaan/default-avatar-profile-icon-vector-18942381_hytaov.jpg'
      toast.success(message, toastOptions)
      setTimeout(() => {
        dispatch(setToken(token))
        dispatch(setProfileImage(profileImage))
        localStorage.setItem('token', token)
        localStorage.setItem('image', profileImage)
        localStorage.setItem('user', JSON.stringify(data))
        history('/', { replace: true })
        setLoading(false)
      }, 3000)
    } catch ({
      response: {
        data: { message },
      },
    }) {
      console.log({ message })
      setLoading(false)
      toast.error(message, toastOptions)
    }
  }


  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }
  return (
    <>
      <div
        className="d-flex align-items-center flex-column justify-content-center h-100 login-wrapper text-dark"
        id="header"
      >
        <div className="row my-5" id="loginForm">
          <div className="col-md-6 col-sm-12 text" id="right">
            <h2>Log into account</h2>
            <small className="mb-3">
              <p style={{ fontSize: '78.5% !important' }}>
                Use your credentials to access your account
              </p>
            </small>
            <form>
              <div className="form-group mt-3">
                <code
                  htmlFor="exampleInputEmail1"
                  style={{
                    background: '#cb5644',
                    padding: 5,
                    color: 'white !important',
                  }}
                >
                  Email address
                </code>
                <input
                  aria-describedby="emailHelp"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  type="email"
                  name="email"
                  onChange={(e) => {
                    formik.handleChange(e)
                  }}
                  onBlur={handleBlur}
                />

                <small className="form-text text-muted" id="emailHelp">
                  {errors.email && touched.email ? (
                    <p className="text-danger">{errors.email} </p>
                  ) : (
                    ''
                  )}
                </small>
              </div>
              <div className="form-group mt-3 position-relative">
                <code
                  htmlFor="exampleInputPassword1"
                  style={{
                    background: '#cb5644',
                    padding: 5,
                    color: 'white !important',
                  }}
                >
                  Password
                </code>
                <input
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  type={passwordShown ? 'text' : 'password'}
                  name="password"
                  onChange={(e) => {
                    formik.handleChange(e)
                  }}
                  onBlur={handleBlur}
                />
                {passwordShown ? (
                  <i
                    class="fa-solid fa-eye eye-pass"
                    onClick={togglePassword}
                  ></i>
                ) : (
                  <i
                    class="fa-solid fa-eye-slash eye-pass"
                    onClick={togglePassword}
                  ></i>
                )}
              </div>
              <small className="form-text text-muted" id="passwordHelp">
                  {errors.password && touched.password ? (
                    <p className="text-danger">{errors.password} </p>
                  ) : (
                    ''
                  )}
                </small>

              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="form-group form-check">
                    <input
                      className="form-check-input p-0"
                      id="exampleCheck1"
                      type="checkbox"
                    />
                    <small className="form-check-label" htmlFor="exampleCheck1">
                      Remember me
                    </small>
                  </div>
                </div>
                <div className="col-md-6 text-end">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#forgetPassword"
                  >
                    <small className="form-check-label" htmlFor="exampleCheck1">
                      Forgot Password?
                    </small>
                  </Link>
                </div>
              </div>
              <button
                className="btn btn-primary login-wrapper-btn"
                type="submit"
                onClick={SignIn}
                disabled={loading?true:false}
              >
                {loading && <i class="fa fa-spinner fa-spin"></i>}
                Sign In
              </button>
            </form>
          </div>
          <ToastContainer />
        </div>
      </div>

      {/* ============= FORGOT MODAL =============== */}

      <ForgetPassword toggleVerificationModal={toggleVerificationModal} />
      {/* ============= FORGOT MODAL =============== */}

      {/* ============= RESET PASS MODAL =============== */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#verificationModal"
        // style={{ display: 'none' }}
        ref={verifyRef}
      >
        Launch VerificationCode
      </button>
      { renderVerifyCode && <VerificationCode toggleResetModal ={ toggleResetPassModal}  />}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#resetPassword"
        ref={resetRef}
      >
        Launch Reset Password backdrop modal
      </button>

      {/* <div
        className="modal fade"
        id="resetPassword"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      > */}
      {renderResetModal && <ResetPassword />}

        {/* <div className="modal-dialog modal-dialog-centered">
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
                        type="password"
                        id="password"
                        name="password"
                        required=""
                      />
                    </div>
                    <div className="inputDiv">
                      <label className="inputLabel" htmlFor="confirmPassword">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                      />
                    </div>
                    <div className="buttonWrapper">
                      <button type="submit" className="btn">
                        <span>Continue</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      {/* ============= RESET PASS MODAL =============== */}
    </>
  )
}

export default LogIn
