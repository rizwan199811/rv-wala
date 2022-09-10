import {useState} from 'react'

export const InsuranceInfo = ({nextStep, prevStep,handleCheck}) => {
  const initialState = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
}
let listObj = JSON.parse(localStorage.getItem("listObj"));
  const [activeClass, setActiveclass] = useState(initialState);
  const [active, setActive] = useState(false);
  const toggleClass=(index)=>{
    setActiveclass(state => ({ ...initialState, [index]: true }))
  }

  const toggle =()=>{
    setActive(!active)
  }

  return (
 <>
     <div className="form-card">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="fs-title">Insurance</h2>
                    </div>
                    <div className="col-5">
                      <h2 className="steps">Step 3 - 7</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <label className="fieldlabels">Insurance ?</label>
                      <input type="checkbox" name="insurance"
                       onChange = {(e)=>{handleCheck(e,"InsuranceInfo")}}
                       checked={listObj && listObj.InsuranceInfo && listObj.InsuranceInfo.insurance}/>
                      <p>I have regular RV insurance for non rentals</p>
                    </div>

                    <div className="col-md-12 mb-3">
                      <h6>Select RVnGO Property Rental Coverage Limit:</h6>
                      <p>
                        (this limit is separate and does not reduce our $1
                        million auto liability coverage limit)
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <div
                     className="card"
                  
                        className={activeClass.option1 ? "card insurance_card_active" : "card"}
                        onClick={() => toggleClass('option1')}
                        style={{width: "100%"}}
                       
                      >
                        <ul className="list-group list-group-flush"  >
                          <li
                            className="list-group-item d-flex justify-content-between"
                          >
                            <b>Property Limit:</b> $200,000
                          </li>
                          <li
                            className="list-group-item d-flex justify-content-between"
                          >
                            <b>Deductible:</b> $2,500
                          </li>
                          <li
                            className="list-group-item d-flex justify-content-between"
                          >
                            <b>Nightly Rate Paid by Guest:</b> $60
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div  
                      className={activeClass.option2 ? "card insurance_card_active" : "card"}
                       onClick={() => toggleClass('option2')}
                       style={{width: "100%"}}>
                        <ul className="list-group list-group-flush">
                          <li
                            className="list-group-item d-flex justify-content-between"
                          >
                            <b>Property Limit:</b> $200,000
                          </li>
                          <li
                            className="list-group-item d-flex justify-content-between"
                          >
                            <b>Deductible:</b> $2,500
                          </li>
                          <li
                            className="list-group-item d-flex justify-content-between"
                          >
                            <b>Nightly Rate Paid by Guest:</b> $60
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div 
                       className={activeClass.option3 ? "card insurance_card_active" : "card"}
                       onClick={() => toggleClass('option3')} 
                      style={{width: '100%'}}>
                        <ul className="list-group list-group-flush">
                          <li
                            className="list-group-item d-flex justify-content-between"
                          >
                            <b>Property Limit:</b> $200,000
                          </li>
                          <li
                            className="list-group-item d-flex justify-content-between"
                          >
                            <b>Deductible:</b> $2,500
                          </li>
                          <li
                            className="list-group-item d-flex justify-content-between"
                          >
                            <b>Nightly Rate Paid by Guest:</b> $60
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div 
                      className={activeClass.option4 ? "card insurance_card_active" : "card"}
                      onClick={() => toggleClass('option4')} 
                       style={{width: '100%'}}>
                        <ul className="list-group list-group-flush">
                          <li
                            className="list-group-item d-flex justify-content-between"
                          >
                            <b>Property Limit:</b> $200,000
                          </li>
                          <li
                            className="list-group-item d-flex justify-content-between"
                          >
                            <b>Deductible:</b> $2,500
                          </li>
                          <li
                            className="list-group-item d-flex justify-content-between"
                          >
                            <b>Nightly Rate Paid by Guest:</b> $60
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p>
                        RVnGO will cover claims up to, but NOT exceeding, the
                        property limit of the selected rental coverage, and Host
                        waives any claims for property damage above the selected
                        coverage limit, for terms and conditions and other
                        limitations visit our Insurance Knowledge Base.
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  type="button"
                  name="next"
                  className="next action-button"
                  value="Next"
                  onClick={nextStep}
                />

                <input
                  type="button"
                  name="previous"
                  className="previous action-button-previous"
                  value="Previous"
                  onClick={prevStep}
                />
 </>
  )
}
