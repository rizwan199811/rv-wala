import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import { baseURL } from '../config/apiURL'
import { toast, ToastContainer } from 'react-toastify'
import toastOptions from '../config/toast'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { setToken } from '../app/slice/AuthSlice'
import { Link, useNavigate } from 'react-router-dom'
import { setProfileImage } from '../app/slice/ProfileSlice'
import { useRef } from 'react'
import { useEffect } from 'react'
import { ForgetPassword } from '../components/Modals/ResetPassword/ForgetPassword'
import VerificationCode from '../components/Modals/ResetPassword/VerificationCode'
import { ResetPassword } from '../components/Modals/ResetPassword/ResetPassword'

const Setting = () => {
  let profile = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {}
  const [proceedNext, setProceedNext] = useState(true)
  const [loading, setLoading] = useState(false)
  const [toggleVerifyCode, setVerifyCode] = useState(null);
  const [renderVerifyCode, setRenderVerifyCode] = useState(false);
  const [toggleResetModal, setToggleResetModal] = useState(null);
  const [renderResetModal, setRenderResetModal] = useState(false);
  const verifyRef = useRef(null)
  const resetRef = useRef(null)
  const [image, setImage] = useState(
    profile.profileImage ||
      'https://res.cloudinary.com/dxtpcpwwf/image/upload/v1616176827/Asaan-Dukaan/default-avatar-profile-icon-vector-18942381_hytaov.jpg',
  )
  let history = useNavigate()
  const dispatch = useDispatch()
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: async (acceptedFile) => {
      await imageUpload(acceptedFile)
      // setFiles(acceptedFiles.map(file => Object.assign(file, {
      //   preview: URL.createObjectURL(file)
      // })));
    },
    multiple: false,
  })

  const imageUpload = async (files) => {
    try {
      setLoading(true)
      let formData = new FormData()
      files.forEach((file) => {
        formData.append('files', file)
      })
      // formData.append("files", files);
      const {
        data: { data, message },
      } = await axios.post(baseURL + '/misc/upload-file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      setProceedNext(true)
      setImage(data[0].location ? data[0].location : data[0].path)
      //   onUpload(data, 'ImageInfo')
      setLoading(false)
      toast.success(message, toastOptions)
      console.log({ data })
    } catch ({
      response: {
        data: { message },
      },
    }) {
      toast.error(message, toastOptions)
      setTimeout(() => {
        setLoading(false)
      }, 6000)
    }
  }

  const updateProfile = async (e) => {
    try {
      setLoading(true)
      e.preventDefault()
      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      if (errors.password || errors.confirmPassword) {
        return
      }
      delete values['confirmPassword'];
      let body = {
        ...values,
        profileImage:image
      }
      const {
        data: { data, token, refreshToken, message },
      } = await axios.put(baseURL + '/user/update', body,{headers})
      
      toast.success(message, toastOptions)
      
      setTimeout(() => {
        setLoading(false)
     
        dispatch(setProfileImage(image))
        localStorage.setItem('user', JSON.stringify(data))
        localStorage.setItem('image',image )
        // history('/', { replace: true })
      }, 3000)
    } catch ({
      response: {
        data: { message },
      },
    }) {
      console.log({ message })
      toast.error(message, toastOptions)
    }
  }

  const { handleBlur, handleChange, errors, values, touched } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
      fullname: profile.fullname || '',
      info:  profile.info || '',
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
  // const [passwordShown, setPasswordShown] = useState(false);
  // const [c_passwordShown, setC_PasswordShown] = useState(false);
  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown)
  // }
  // const toggleConfirmPassword = () => {
  //   setC_PasswordShown(!c_passwordShown)
  // }
 
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

  return (
    <>
      <div className="container profile-setting-wrap my-4">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-auto">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      {/* <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="user image"
                      /> */}
                      <div className="mt-3">
                        {/* <input className="form-control form-control-sm m-0" id="formFileSm" type="file" /> */}
                        <div {...getRootProps({ className: 'dropzone' })}>
                          {/* <i class="fa-solid fa-cloud-arrow-down fs-1"></i> */}
                          <i class="fa-solid fa-pen-to-square fs-2 edit-p-pic"></i>
                          <input {...getInputProps()} />
                       { loading ?  (<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>):(<img src={image} alt="user image" />)}
                          
                          {/* <p>
                         Click to upload
                            files
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h2 className="mb-2 fw-bold">Settings</h2>
                    <hr />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label htmlFor="">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        name="fullname"
                        value={values.fullname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" name="email"/>
                    </div>
                  </div> */}

                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label htmlFor="">Profile Info</label>
                      <textarea
                        type="info"
                        className="form-control"
                        rows={5}
                        id="info"
                        value={values.info}
                        name="info"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group position-relative">
                      <label htmlFor="password">Password</label>
                      <input
                        type={passwordShown ? 'text' : 'password'}
                        className="form-control"
                        id="password"
                        placeholder='********'
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                        {passwordShown ? (<i class="fa-solid fa-eye eye-pass" onClick={togglePassword} ></i>) :
                         (<i class="fa-solid fa-eye-slash eye-pass" onClick={togglePassword} ></i> )}
                        </div>
                      <small className="form-text text-muted" id="passwordHelp">
                        {errors.password && touched.password ? (
                          <p className="text-danger">{errors.password} </p>
                        ) : (
                          ''
                        )}
                      </small>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group position-relative">
                      <label htmlFor="password">Confirm Password</label>
                      <input
                        type={c_passwordShown ? 'text' : 'password'}
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder='********'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                          {c_passwordShown ? (<i class="fa-solid fa-eye eye-pass" onClick={toggleConfirmPassword} ></i>) :
                         (<i class="fa-solid fa-eye-slash eye-pass" onClick={toggleConfirmPassword} ></i> )}
                        </div>
                      <small className="form-text text-muted" id="passwordHelp">
                        {errors.confirmPassword && touched.confirmPassword ? (
                          <p className="text-danger">
                            {errors.confirmPassword}{' '}
                          </p>
                        ) : (
                          ''
                        )}
                      </small>
                  </div> */}
                </div>
                <div className="row gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="text-right">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-primary"
                        onClick={updateProfile}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="text-end">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#forgetPassword"
                        // onClick={updateProfile}
                      >
                        Reset Password
                      </button>
                    </div>
                  </div>
                </div>
                  <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============  MODAL =============== */}
      <ForgetPassword toggleVerificationModal={toggleVerificationModal} />
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#verificationModal"
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

      {renderResetModal && <ResetPassword />}
    </>
  )
}

export default Setting
