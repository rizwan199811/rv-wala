import React, { useState } from 'react'

export const ResetPassword = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [c_passwordShown, setC_PasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }
  const toggleConfirmPassword = () => {
    setC_PasswordShown(!c_passwordShown)
  }
  return (
    <div
      className="modal fade"
      id="resetPassword"
      data-bs-backdrop="static"
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
                    />
                        {passwordShown ? (<i class="fa-solid fa-eye eye-pass" onClick={togglePassword} ></i>) :
                         (<i class="fa-solid fa-eye-slash eye-pass" onClick={togglePassword} ></i> )}
                  </div>
                  <div className="inputDiv">
                    <label className="inputLabel" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      type={c_passwordShown ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                    />
                       {c_passwordShown ? (<i class="fa-solid fa-eye eye-pass" onClick={toggleConfirmPassword} ></i>) :
                         (<i class="fa-solid fa-eye-slash eye-pass" onClick={toggleConfirmPassword} ></i> )}
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
      </div>
    </div>
  )
}
