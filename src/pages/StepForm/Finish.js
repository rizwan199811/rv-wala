import React from 'react';
import listingCheck from '../../images/listingCheck.png'

export const Finish = () => {
  return (
    <>   <div className="form-card">
    <div className="row">
      <div className="col-7">
        <h2 className="fs-title">Finish:</h2>
      </div>
      <div className="col-5">
        <h2 className="steps">Step 8 - 8</h2>
      </div>
    </div>
    <br /><br />
    <h2 className="purple-text text-center">
      <strong>SUCCESS !</strong>
    </h2>
    <br />
    <div className="row justify-content-center">
      <div className="col-3">
        <img
          src={listingCheck}
          className="fit-image"
        />
      </div>
    </div>
    <br /><br />
    <div className="row justify-content-center">
      <div className="col-7 text-center">
        <h5 className="purple-text text-center">
          You Have Successfully Create Listing
        </h5>
      </div>
    </div>
  </div>
  </>
  )
}
