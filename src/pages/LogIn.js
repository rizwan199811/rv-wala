import React from 'react'
import login from '../images/loigin.jpg'


const LogIn = () => {
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
        <p style={{ fontSize: "78.5% !important" }}>
          Use your credentials to access your account
        </p>
      </small>
      <form>
        <div className="form-group mt-3">
          <code
            htmlFor="exampleInputEmail1"
            style={{
              background: "#cb5644",
              padding: 5,
              color: "white !important"
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
          />
          <small className="form-text text-muted" id="emailHelp">
            Please enter your e-mail address above.
          </small>
        </div>
        <div className="form-group mt-3">
          <code
            htmlFor="exampleInputPassword1"
            style={{
              background: "#cb5644",
              padding: 5,
              color: "white !important"
            }}
          >
            Password
          </code>
          <input
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            type="password"
          />
          <small className="form-text text-muted" id="passwordHelp">
            Please enter your password address above.
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
        <button className="btn btn-primary" type="submit">
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