import { useState,useRef } from 'react'
import forgotPassword from '../../../images/forgot-password.jpg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { baseURL } from '../../../config/apiURL'
import { toast, ToastContainer } from 'react-toastify'
import toastOptions from '../../../config/toast'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import VerificationCode from './VerificationCode'


export const ForgetPassword = ({toggleVerificationModal}) => {
  const myInput = useRef(null);
  const [loading, setLoading] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

  let history = useNavigate()

  const { handleChange, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required').email('Invalid email'),
    }),
    enableReinitialize: true,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const forgetPassword = async (e) => {
    try {
      // myInput.current.click();
      // verificationModal
   

      // return
      setLoading(true)
      e.preventDefault()
      if (!values.email) {
        return
      }
      if (errors.email) {
        return
      }
      let body = {
        email: values.email,
      }
      const {
        data: { data, token, refreshToken, message },
      } = await axios.post(baseURL + '/user/forgot-password', body)

      toast.success(message, toastOptions)
      setLoading(false)
      toggleVerificationModal()
      // history('/', { replace: true })
      // setTimeout(() => {
       
      // }, 1000)
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

  return (
    <>
      <div
        class="modal fade"
        id="forgetPassword"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Reset Password
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="p-4">
                <div className="text-center">
                  <img src={forgotPassword} className="w-50" />
                </div>
                <p>
                  Please enter your username or email address, you will receive
                  a link to create a new password via email.
                </p>
                <input
                  type="email"
                  name="email"
                  class="form-control mt-3"
                  placeholder="USERNAME OR EMAIL"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small className="form-text text-muted" id="emailHelp">
                  {errors.email && touched.email ? (
                    <p className="text-danger">{errors.email} </p>
                  ) : (
                    ''
                  )}
                </small>
                <button
                  className="btn btn-primary login-wrapper-btn"
                  type="submit"
                  onClick={forgetPassword}
                >
                  Reset Password
                </button>
              
              </div>
            </div>
          </div>
        </div>
      
      </div>

  
    </>
  )
}
