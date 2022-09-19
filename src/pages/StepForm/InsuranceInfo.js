import { useState } from 'react'

export const InsuranceInfo = ({ nextStep, prevStep, handleCheck,handleChange }) => {
  const initialState = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  }
  let listObj = JSON.parse(localStorage.getItem('listObj'))
  const [activeClass, setActiveclass] = useState(initialState)
  const [active, setActive] = useState(false)

  const set = (obj, path, val) => {
    const keys = path.split(".");
    const lastKey = keys.pop();
    const lastObj = keys.reduce((obj, key) => (obj[key] = obj[key] || {}), obj);
    lastObj[lastKey] = val;
  };
  const toggleClass = (index,value) => {
    let path = `InsuranceInfo.rental_coverage`
    delete value['key']
    let obj = localStorage.getItem("listObj") ? JSON.parse(localStorage.getItem("listObj")) :{} 
    set(obj, path, value);
    localStorage.setItem("listObj", JSON.stringify(obj));
    setActiveclass((state) => ({ ...initialState, [index]: true }))
  }
  let property_rental_coverage = [
    {
      key: 'option1',
      limit: 200000,
      deductible: 1500,
      nightly_rate: 40,
    },
    {
      key:'option2',
      limit: 100000,
      deductible: 1500,
      nightly_rate: 35,
    },
    {
      key: 'option3',
      limit: 25000,
      deductible: 1500,
      nightly_rate: 30,
    },
    {
      key: 'option4',
      limit: 10000,
      deductible: 1500,
      nightly_rate: 25,
    },
  ]

  const toggle = () => {
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
            <h2 className="steps">Step 3 - 8</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <label className="fieldlabels">Insurance ?</label>
            <input
              type="checkbox"
              name="insurance"
              onChange={(e) => {
                handleCheck(e, 'InsuranceInfo')
              }}
              checked={
                listObj &&
                listObj.InsuranceInfo &&
                listObj.InsuranceInfo.insurance
              }
            />
            <p>I have regular RV insurance for non rentals</p>
          </div>

          <div className="col-md-12 mb-3">
            <h6>Select RVnGO Property Rental Coverage Limit:</h6>
            <p>
              (this limit is separate and does not reduce our $1 million auto
              liability coverage limit)
            </p>
          </div>
        </div>
        <div className="row">
          {property_rental_coverage.length > 0 && (
            property_rental_coverage.map(x=>{
              return (
              <div className="col-md-3">
                <div
                  className={
                    activeClass[[x.key]] ? 'card insurance_card_active' : 'card'
                  }
                  onClick={() => toggleClass(x.key,x)}
                  style={{ width: '100%' }}
                >
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                      <b>Property Limit:</b> ${x.limit.toLocaleString()}
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <b>Deductible:</b> ${x.deductible.toLocaleString()}
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <b>Nightly Rate Paid by Guest:</b> ${x.nightly_rate.toLocaleString()}
                    </li>
                  </ul>
                </div>
              </div>
              )
            })
          
          )}

      
          <div>
            <p className="pt-4">
              RVnGO will cover claims up to, but NOT exceeding, the property
              limit of the selected rental coverage, and Host waives any claims
              for property damage above the selected coverage limit, for terms
              and conditions and other limitations visit our Insurance Knowledge
              Base.
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
