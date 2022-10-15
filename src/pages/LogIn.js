import React,{useState} from 'react'
import login from '../images/loigin.jpg'
import forgotPassword from '../images/forgot-password.jpg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { baseURL } from '../config/apiURL'
import { useDispatch } from 'react-redux'
import { setToken } from '../app/slice/AuthSlice'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify';
import toastOptions from "../config/toast";
import { setProfileImage } from '../app/slice/ProfileSlice'

const LogIn = () => {
  const [passwordShown, setPasswordShown] = useState(false);
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
        .matches(/[!@#_\$%\^&\*]/, 'Password requires a special character'),
    }),
    enableReinitialize: true,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  const { errors, touched, handleBlur, values } = formik
  const [loading, setLoading] = useState(false)
  const SignIn = async (e) => {
    try {
      setLoading(true);
      e.preventDefault()
      if (!values.email && !values.password) {
        return
      }
      if (errors.email && errors.password) {
        return
      }
      let body = {
        email: values.email,
        password: values.password,
      }
      const {
        data: { data, token, refreshToken ,message},
      } = await axios.post(baseURL + '/auth/login', body)
        let profileImage =data.profileImage || 'https://res.cloudinary.com/dxtpcpwwf/image/upload/v1616176827/Asaan-Dukaan/default-avatar-profile-icon-vector-18942381_hytaov.jpg'
        toast.success(message,toastOptions);
        setTimeout(() => {
          setLoading(false);
          dispatch(setToken(token))
          dispatch(setProfileImage(profileImage))
          localStorage.setItem('token', token)
          localStorage.setItem('image', profileImage)
          history('/', { replace: true })
        },3000);
    }     
    catch({response :{ data :{message}}}){
      console.log({message})
      toast.error(message, toastOptions
        );
    }
  }
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
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
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  onChange={(e) => {
                    formik.handleChange(e)
                  }}
                  onBlur={handleBlur}
                />
              {passwordShown? <i class="fa-solid fa-eye eye-pass" onClick={togglePassword}></i>:<i class="fa-solid fa-eye-slash eye-pass"  onClick={togglePassword}></i>} 
                <small className="form-text text-muted" id="passwordHelp">
                  {errors.password && touched.password ? (
                    <p className="text-danger">{errors.password} </p>
                  ) : (
                    ''
                  )}
                </small>
              </div>
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
                  <Link to="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Reset Password</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <div className='p-4'>
        <div className='text-center'>
        <img src={forgotPassword} className="w-50"/>
        </div>
        <p>Please enter your username or email address, you will receive a link to create a new password via email.</p>
        <input type="email" class="form-control mt-3" placeholder='USERNAME OR EMAIL'/>
              <button
                className="btn btn-primary login-wrapper-btn"
                type="submit"
              >
                Reset Password
              </button>
       </div>
      </div>
  
    </div>
  </div>
</div>
      {/* ============= FORGOT MODAL =============== */}
    </>
  )
}

export default LogIn
