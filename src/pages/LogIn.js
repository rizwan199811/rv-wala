import React from 'react'
import login from '../images/loigin.jpg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { stagingURL, localURL } from '../config/apiURL'
import { useDispatch } from 'react-redux'
import { setToken } from '../app/slice/AuthSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
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

  const SignIn = async (e) => {
    try {
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
        data: { data, token, refreshToken },
      } = await axios.post(stagingURL + '/auth/login', body)
      dispatch(setToken(token))
      localStorage.setItem('token', token)
      history('/', { replace: true })
    } catch (e) {
      console.log({ e })
    }
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
              <div className="form-group mt-3">
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
                  type="password"
                  name="password"
                  onChange={(e) => {
                    formik.handleChange(e)
                  }}
                  onBlur={handleBlur}
                />
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
                      className="form-check-input"
                      id="exampleCheck1"
                      type="checkbox"
                    />
                    <small className="form-check-label" htmlFor="exampleCheck1">
                      Remember me
                    </small>
                  </div>
                </div>
                <div className="col-md-6 text-right">
                  <small className="form-check-label" htmlFor="exampleCheck1">
                    Lost password
                  </small>
                </div>
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={SignIn}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn
