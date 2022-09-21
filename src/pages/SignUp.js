import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { baseURL } from '../config/apiURL'
import { useDispatch } from 'react-redux'
import { setToken } from '../app/slice/AuthSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify';
import toastOptions from "../config/toast";

 
const SignUp = () => {

  const formik = useFormik({
    initialValues: {
      fullname:'',
      email: '',
      password: '',
      username:'',
      confirmpassword:''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required').email('Invalid email'),
      password: Yup.string()
        .required('Required')
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[!@#_\$%\^&\*]/, 'Password requires a special character'),
     confirmpassword: Yup.string().when("password", {
          is: val => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Both password need to be the same"
          )
        }) ,
        fullname: Yup.string().required('Required'),
        username: Yup.string().required('Required'),
         
    }),
    enableReinitialize: true,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  const {handleChange,handleBlur,errors,touched,values} =formik;
  let history = useNavigate()
  const createAccount =async (e)=>{
    try{
      if (!values.email && !values.password && !values.username && !values.fullname ) {
        return
      }
      if (errors.email && errors.password && errors.username && errors.fullname) {
        return
      }
      let body = {
        email: values.email,
        password: values.password,
        username:values.username,
        fullname:values.fullname
      }
      const {
        data: { message },
      } = await axios.post(baseURL + '/auth/signup', body)
      toast.success(message,toastOptions
        );
        setTimeout(() => {
          history('/login', { replace: true })
        },5000);
    }
    catch({response :{ data :{message}}}){
      console.log({message})
      toast.error(message, toastOptions
        );
    }
 
  }


  return (
    <div className="container-fluid px-2 px-md-4 py-5 mx-auto signup-wrapper">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-5">
            <div className="card1 pb-5">
              <div className="row px-3">
                <h5 className="logo">
                  {/* <u>izylearning</u> */}
                </h5>
              </div>
              <div className="row px-3 justify-content-center mt-4 mb-5">
           
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
                    <div className="carousel-item card border-0 card-0">
                      <div className="text-center">
                        <img
                          src="https://i.imgur.com/IjkibdE.jpg"
                          className="img-fluid profile-pic"
                        />
                      </div>
                      <h6 className="font-weight-bold mt-5">John Paul</h6>{" "}
                      <small className="mb-2">USER REVIEW</small>
                      <hr width="50%" />
                      <p className="content mt-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod incididunt ut labore et dolore
                        magna aliqua.
                        <br />
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>
                    <div className="carousel-item card border-0 card-0">
                      <div className="text-center">
                        <img
                          src="https://i.imgur.com/oW8Wpwi.jpg"
                          className="img-fluid profile-pic"
                        />
                      </div>
                      <h6 className="font-weight-bold mt-5">Ximena Vegara</h6>{" "}
                      <small className="mb-2">USER REVIEW</small>
                      <hr width="50%" />
                      <p className="content mt-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod incididunt ut labore et dolore
                        magna aliqua.
                        <br />
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>
                    <div className="carousel-item active card border-0 card-0">
                      <div className="text-center">
                        <img
                          src="https://i.imgur.com/EUYNvE1.jpg"
                          className="img-fluid profile-pic"
                        />
                      </div>
                      <h6 className="font-weight-bold mt-5">Lena Maria</h6>{" "}
                      <small className="mb-2">USER REVIEW</small>
                      <hr width="50%" />
                      <p className="content mt-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod incididunt ut labore et dolore
                        magna aliqua.
                        <br />
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>
                  </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

           
              </div>
              <div className=" px-3 text-center d-flex justify-content-center mb-0 social">
                <span className="fa-brands fa-facebook-square mx-2" />
                <span className="fa-brands fa-twitter mx-2" />
                <span className="fa-brands fa-instagram mx-2" />
                <span className="fa-brands fa-youtube mx-2" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="card2 card border-0 px-4 px-sm-5 py-5">
              <small className="text-right mb-3">
                <Link to={'/login'}>
                  <u>I already have an account</u>
                </Link>
              </small>
              <h3 className="mb-1">Sign up to RV wala</h3>
              <p className="mb-4 text-sm">
                Create our account and start holidays with thousands of memories
              </p>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="mb-0">
                    <h6 className="mb-0 text-sm">Full Name</h6>
                  </label>
                  <input type="text" name="fullname" placeholder="John Doe" onChange={handleChange} onBlur={handleBlur} />
                  {errors.fullname && touched.fullname ? (
                    <p className="text-danger">{errors.fullname} </p>
                  ) : (
                    ''
                  )}
                </div>
                <div className="col-md-6">
                  <label className="mb-0">
                    <h6 className="mb-0 text-sm">Username</h6>
                  </label>
                  <input type="text" name="username" placeholder="johndoe123" onChange={handleChange} onBlur={handleBlur} />
                  {errors.username && touched.username ? (
                    <p className="text-danger">{errors.username} </p>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className="row my-3 px-3">
                <label className="mb-0">
                  <h6 className="mb-0 text-sm">Email Address</h6>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="john.doe@email.com"
                  onChange={handleChange}
                  onBlur={handleBlur} 
                />
                  {errors.email && touched.email ? (
                    <p className="text-danger">{errors.email} </p>
                  ) : (
                    ''
                  )}
              </div>
              <div className="row px-3 mb-3">
                <label className="mb-0">
                  <h6 className="mb-0 text-sm">Password</h6>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="●●●●●●●●●●"
                  onChange={handleChange}
                  onBlur={handleBlur} 
                />
                  {errors.password && touched.password ? (
                    <p className="text-danger">{errors.password} </p>
                  ) : (
                    ''
                  )}
              </div>
              <div className="row px-3">
                <label className="mb-0">
                  <h6 className="mb-0 text-sm">Confirm Password</h6>
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="●●●●●●●●●●"
                  onChange={handleChange}
                  onBlur={handleBlur} 
                />
                 {errors.confirmpassword && touched.confirmpassword ? (
                    <p className="text-danger">{errors.confirmpassword} </p>
                  ) : (
                    ''
                  )}
              </div>
              <div className="row px-3 mb-3">
                <small className="text-muted">
                  By signing up, you agree our{" "}
                  <a href className="text-primary">
                    Terms of services
                  </a>{" "}
                  and{" "}
                  <a href className="text-primary">
                    Privacy Policy
                  </a>
                </small>
              </div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <button className="btn btn-blue text-center mb-1 py-2"
                  onClick={createAccount}>
                    Create Account
                  </button>
                </div>
              </div>
              <div className="row px-3 mb-4">
                <div className="line" />
                <small className="text-muted or text-center">OR</small>
                <div className="line" />
              </div>
              <div className="row text-center">
                <div className="col-sm-6">
                  <p className="social-connect">
                    <span className="fa-brands fa-facebook-square" />
                    <small className="pl-3 pr-1">Sign up with facebook</small>
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="social-connect">
                    <span className="fa-brands fa-google-plus" />
                    <small className="pl-3 pr-1">Sign up with google+</small>
                  </p>
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
