import React from 'react'

export const PricingInfo = ({nextStep, prevStep,handleChange}) => {
  let listObj = JSON.parse(localStorage.getItem("listObj"))
  return (
  <>
            <div class="form-card">
                  <div class="row">
                    <div class="col-7">
                      <h2 class="fs-title">Prices</h2>
                    </div>
                    <div class="col-5">
                      <h2 class="steps">Step 4 - 7</h2>
                    </div>
                    <div>
                      <h5>Rental Pricing</h5>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3 mb-3">
                      <label class="fieldlabels">Nightly Rate: *</label>
                      <input
                        type="number"
                        name="nightly"
                        min="0"
                        placeholder="e.g.$100.00"
                        value = { listObj && listObj.Pricing && listObj.Pricing.nightly  }
                        onChange={(e) => {
                          handleChange(e, "Pricing");
                        }}
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <label class="fieldlabels">Weekly Rate: *</label>
                      <input
                        type="number"
                        name="weekly"
                        min="0"
                        placeholder="e.g.$100.00"
                        value={ listObj && listObj.Pricing && listObj.Pricing.weekly  }
                        onChange={(e) => {
                          handleChange(e, "Pricing");
                        }}
                      />
                    </div>
                    <div class="col-md-3 mb:-3">
                      <label class="fieldlabels">Monthly Rate: *</label>
                      <input
                        type="number"
                        name="monthly"
                        min="0"
                        placeholder="e.g.$100.00"
                        value={ listObj && listObj.Pricing && listObj.Pricing.monthly  }
                        onChange={(e) => {
                          handleChange(e, "Pricing");
                        }}
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <label class="fieldlabels">Booking Deposit: *</label>
                      <input
                        type="number"
                        name="deposit"
                        min="0"
                        placeholder="e.g.$100.00"
                        value={ listObj && listObj.Pricing && listObj.Pricing.deposit  }
                        onChange={(e) => {
                          handleChange(e, "Pricing");
                        }}
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <label class="fieldlabels">Damage Deposit: *</label>
                      <input
                        type="number"
                        name="damage_deposit"
                        min="0"
                        placeholder="e.g.$100.00"
                        value={ listObj && listObj.Pricing && listObj.Pricing.damage_deposit  }
                        onChange={(e) => {
                          handleChange(e, "Pricing");
                        }}
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <label class="fieldlabels">Prep Fee: *</label>
                      <input
                        type="number"
                        name="prep_fee"
                        min="0"
                        placeholder="e.g.$100.00"
                        value={ listObj && listObj.Pricing && listObj.Pricing.prep_fee  }
                        onChange={(e) => {
                          handleChange(e, "Pricing");
                        }}
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <label class="fieldlabels">Cleaning Fee: *</label>
                      <input
                        type="number"
                        name="cleaning_fee"
                        min="0"
                        placeholder="e.g.$100.00"
                        value={ listObj && listObj.Pricing && listObj.Pricing.cleaning_fee  }
                        onChange={(e) => {
                          handleChange(e, "Pricing");
                        }}
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <label class="fieldlabels">Late Fee: *</label>
                      <input
                        type="number"
                        name="late_fee"
                        min="0"
                        placeholder="e.g.$100.00"
                        value={ listObj && listObj.Pricing && listObj.Pricing.late_fee  }
                        onChange={(e) => {
                          handleChange(e, "Pricing");
                        }}
                      />
                    </div>
                  </div>
                </div>
                <input
                  type="button"
                  name="next"
                  class="next action-button"
                  value="Next"
                  onClick={nextStep}
                />
                <input
                  type="button"
                  name="previous"
                  class="previous action-button-previous"
                  value="Previous"
                  onClick={prevStep}
                />
  </>
  )
}
