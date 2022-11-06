import React, { useEffect, useState } from 'react'

const VerificationCode = () => {
  const [counter, setCounter] = useState(90);
    useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
  

  return (
    <>
  {/* Button trigger modal */}
  <button
    type="button"
    className="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#verificationModal"
  >
    Launch static backdrop modal
  </button>
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
        <div className='verification-code-wrapper'>
                <form action="#">
            <h4 className="text-center mb-4">Enter your code</h4>
            <div className="d-flex mb-3">
                <input type="tel" maxLength={1} pattern="[0-9]" className="form-control" />
                <input type="tel" maxLength={1} pattern="[0-9]" className="form-control" />
                <input type="tel" maxLength={1} pattern="[0-9]" className="form-control" />
                <input type="tel" maxLength={1} pattern="[0-9]" className="form-control" />
            </div>
            <button type="submit" className="w-100 btn btn-primary mb-2">
               {counter===0?"Resend Code":"Verify account"}
            </button>
            <p className='text-end'> Resend in <span style={{color:"green",fontWeight:"bold"}}> 00:{counter}</span> </p>
            </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</>

   
  )
}

export default VerificationCode