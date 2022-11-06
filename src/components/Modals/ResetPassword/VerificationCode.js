import React, { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Countdown from 'react-countdown'
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
  console.log({hours,minutes})
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
const VerificationCode = ({ isOpen = false }) => {
  // if(!isOpen){

  //   return null
  // }
  // if(isOpen){

  const [key, setKey] = useState(0)
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
                      className="form-control"
                    />
                    <input
                      type="tel"
                      maxLength={1}
                      pattern="[0-9]"
                      className="form-control"
                    />
                    <input
                      type="tel"
                      maxLength={1}
                      pattern="[0-9]"
                      className="form-control"
                    />
                    <input
                      type="tel"
                      maxLength={1}
                      pattern="[0-9]"
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
                  <Countdown date={Date.now() + 5000} renderer={renderer} />
                  <button type="submit" className="w-100 btn btn-primary">
                    Verify account
                  </button>
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
