import React from 'react';
import listingCheck from '../../images/listingCheck.png'

export const Finish = () => {
  return (
    <>   <div class="form-card">
    <div class="row">
      <div class="col-7">
        <h2 class="fs-title">Finish:</h2>
      </div>
      <div class="col-5">
        <h2 class="steps">Step 8 - 8</h2>
      </div>
    </div>
    <br /><br />
    <h2 class="purple-text text-center">
      <strong>SUCCESS !</strong>
    </h2>
    <br />
    <div class="row justify-content-center">
      <div class="col-3">
        <img
          src={listingCheck}
          class="fit-image"
        />
      </div>
    </div>
    <br /><br />
    <div class="row justify-content-center">
      <div class="col-7 text-center">
        <h5 class="purple-text text-center">
          You Have Successfully Create Listing
        </h5>
      </div>
    </div>
  </div>
  </>
  )
}
