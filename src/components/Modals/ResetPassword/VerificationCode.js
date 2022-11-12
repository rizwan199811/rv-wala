import React, { useState, useEffect, useRef } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Countdown from 'react-countdown'
import Timer from '../../Timer'
import axios from 'axios'
import { baseURL } from '../../../config/apiURL'
import { toast, ToastContainer } from 'react-toastify'
import toastOptions from '../../../config/toast'

// const renderTime = ({ remainingTime }) => {
//   if (remainingTime === 0) {
//     return <div className="timer">Too lale...</div>
//   }

//   return (
//     <div className="timer">
//       <div className="text">Remaining</div>
//       <div className="value">{remainingTime}</div>
//       <div className="text">seconds</div>
//     </div>
//   )
// }

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    // return <Completionist />
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}
      </span>
    )
  }
}
const VerificationCode = ({ toggleResetModal }) => {
  const [key, setKey] = useState(0)
  const [codeErrors, setCodeErrors] = useState([])
  const [code, setCodes] = useState([])
  const firstDigitRef = useRef()
  const secondDigitRef = useRef()
  const thirdDigitRef = useRef()
  const fourthDigitRef = useRef()
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  const goToNextInput = (e, position) => {
    console.log('e.target', e.target.value)
    var key = e.which
    console.log('goToNextInput', key, position)

    if (!digits.includes(e.target.value)) {
      e.preventDefault()
      let errors = [...codeErrors]
      errors[position] = '1st digit code is invalid'
      setCodeErrors(errors)
      return false
    }

    if (key === 9) {
      return true
    }

    let errors = [...codeErrors]
    errors[position] = ''
    let values = [...code]
    values[position] = e.target.value
    setCodes(values)
    setCodeErrors(errors)
    switch (position) {
      case 1:
        secondDigitRef.current.focus()
        break
      case 2:
        thirdDigitRef.current.focus()
        break
      case 3:
        fourthDigitRef.current.focus()
        break
      case 4:
        firstDigitRef.current.focus()
        break
      default:
        break
    }
  }

  const verifyAccount = async (e) => {
    try {
      e.preventDefault()
      if (!code[1] || !code[2] || !code[3] || !code[4]) {
        return false
      }
      let body = {
        email: localStorage.getItem('forgetEmail') || '',
        code: parseInt(code[1] + code[2] + code[3] + code[4]),
      }
      const {
        data: { data, token, refreshToken, message },
      } = await axios.post(baseURL + '/user/verify', body)
      console.log({ message })

      toast.success(message, toastOptions)
      toggleResetModal()
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
    <>
      {/* Button trigger modal */}

      {/* Modal */}
      <div
        className="modal fade"
        id="verificationModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="verificationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="verification-code-wrapper">
                <form action="#">
                  <h4 className="text-center mb-4">Enter your code</h4>
                  <div className="d-flex mb-3">
                    <input
                      type="tel"
                      maxLength={1}
                      pattern="[0-9]"
                      onKeyUp={(e) => {
                        goToNextInput(e, 1)
                      }}
                      style={codeErrors[1] ? { border: '2px solid red' } : {}}
                      ref={firstDigitRef}
                      className="form-control"
                    />
                    <input
                      type="tel"
                      maxLength={1}
                      pattern="[0-9]"
                      ref={secondDigitRef}
                      onKeyUp={(e) => {
                        goToNextInput(e, 2)
                      }}
                      style={codeErrors[2] ? { border: '2px solid red' } : {}}
                      className="form-control"
                    />
                    <input
                      type="tel"
                      maxLength={1}
                      pattern="[0-9]"
                      onKeyUp={(e) => {
                        goToNextInput(e, 3)
                      }}
                      style={codeErrors[3] ? { border: '2px solid red' } : {}}
                      ref={thirdDigitRef}
                      className="form-control"
                    />
                    <input
                      type="tel"
                      maxLength={1}
                      pattern="[0-9]"
                      onKeyUp={(e) => {
                        goToNextInput(e, 4)
                      }}
                      style={codeErrors[4] ? { border: '2px solid red' } : {}}
                      ref={fourthDigitRef}
                      className="form-control"
                    />
                  </div>
                  {/* <CountdownCircleTimer
                    key={key}
                    isPlaying
                    duration={10}
                    colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
                    onComplete={() => [true, 1000]}
                  >
                    {renderTime}
                  </CountdownCircleTimer> */}
                  {/* {<Countdown date={Date.now() + 10000}
                  
                    intervalDelay={0}
                    precision={3}
                     renderer={renderer} />} */}
                  <Timer initialMinute={0} initialSeconds={15} />
                  <button
                    type="submit"
                    className="w-100 btn btn-primary"
                    onClick={verifyAccount}
                    style={
                      codeErrors[1] ||
                      codeErrors[2] ||
                      codeErrors[3] ||
                      codeErrors[4]
                        ? { opacity: 0.5, pointerEvents: 'none' }
                        : {}
                    }
                  >
                    Verify account
                  </button>
                  <ToastContainer/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  // }
}

export default VerificationCode
