import { useRef } from "react";

export const RVInfo = ({ nextStep, prevStep, handleChange }) => {
  let types = [
    {
      label: "Class A",
      value: "Class A",
    },
    {
      label: "Class B",
      value: "Class B",
    },
    {
      label: "Class C",
      value: "Class C",
    },
    {
      label: "Fifth Wheel",
      value: "Fifth Wheel",
    },
    {
      label: "Toy Hauler",
      value: "Toy Hauler",
    },
    {
      label: "Travel Trailer",
      value: "Travel Trailer",
    },
    {
      label: "Pop up camper and other",
      value: "Pop up camper and other",
    },
    {
      label: "Campervan",
      value: "Campervan",
    },
  ];
  let makes = [
    {
      label: "A-Liner",
      value: "A-Liner",
    },
    {
      label: "Adirondack",
      value: "Adirondack",
    },
    {
      label: "Aerolite",
      value: "Aerolite",
    },
    {
      label: "Airstream",
      value: "Airstream",
    },
    {
      label: "Alfa",
      value: "Alfa",
    },
    {
      label: "Alfa Leisure",
      value: "Alfa Leisure",
    },
    {
      label: "Allegro",
      value: "Allegro",
    },
    {
      label: "American Coach",
      value: "American Coach",
    },
    {
      label: "American Cruiser",
      value: "American Cruiser",
    },
    {
      label: "Arctic Fox",
      value: "Arctic Fox",
    },
    {
      label: "Athens Park Homes",
      value: "Athens Park Homes",
    },
    {
      label: "Autumn Ridge",
      value: "Autumn Ridge",
    },
  ];
  let years =[
    {
      label: "2022",
      value: "2022",
    },
    {
      label: "2021",
      value: "2021",
    },
    {
      label: "2020",
      value: "2020",
    },
    {
      label: "2019",
      value: "2019",
    },
    {
      label: "2018",
      value: "2018",
    },
  ]
  let listObj = JSON.parse(localStorage.getItem("listObj"))

  return (
    <>
      <div class="form-card">
        <div class="row">
          <div class="col-7">
            <h2 class="fs-title">Basic RV Info</h2>
          </div>
          <div class="col-5">
            <h2 class="steps">Step 1 - 7</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">VIN: *</label>
            <input
              type="text"
              name="vin"
              value = { listObj && listObj.RVInfo && listObj.RVInfo.vin  }
              placeholder="Vehcile Identification Number"
              onChange={(e) => {
                handleChange(e, "RVInfo");
              }}
            />
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Type: *</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="type"
              defaultValue = {listObj &&   listObj.RVInfo && listObj.RVInfo.type  }
              onChange={(e) => {
                handleChange(e, "RVInfo");
              }}
            >
              <option selected>Select Type</option>
              {types.length > 0 &&
                types.map((x) => {
                  return <option value={x.value}>{x.label}</option>;
                })}
              {/*  */}
            </select>
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Make: *</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="make"
              defaultValue = {listObj && listObj.RVInfo && listObj.RVInfo.make  }
              onChange={(e) => {
                handleChange(e, "RVInfo");
              }}
            >
              <option selected>Vehcile Make</option>
              {makes.length > 0 &&
                makes.map((x) => {
                  return <option value={x.value}>{x.label}</option>;
                })}
            </select>
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Model: *</label>
            <input type="text" name="model" placeholder="Model Model" defaultValue = {listObj && listObj.RVInfo && listObj.RVInfo.model  }
              onChange={(e) => {
                handleChange(e, "RVInfo");
              }}/>
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Year: *</label>
            <select class="form-select" aria-label="Default select example" 
             name="year"
             defaultValue = {listObj && listObj.RVInfo && listObj.RVInfo.year  }
             onChange={(e) => {
                handleChange(e, "RVInfo");
              }}
              >
              <option selected>Select Year</option>
               { years.length > 0 &&
                years.map((x) => {
                  return <option value={x.value}>{x.label}</option>;
                })}
            </select>
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Sleeps: *</label>
            <select class="form-select" aria-label="Default select example"
              name="sleep"
              defaultValue = {listObj && listObj.RVInfo && listObj.RVInfo.sleep  }
              onChange={(e) => {
                 handleChange(e, "RVInfo");
               }}
            >
              <option selected>Number of beds</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Slides: *</label>
            <select class="form-select" aria-label="Default select example"  
             name="slides"
             onChange={(e) => {
                 handleChange(e, "RVInfo");
               }}
               defaultValue = {listObj && listObj.RVInfo && listObj.RVInfo.slides  }
               >
              <option selected>Number of slides</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Seatbelts: *</label>
            <select class="form-select" aria-label="Default select example"
             name="seatbelts"
             onChange={(e) => {
                 handleChange(e, "RVInfo");
               }}
               defaultValue = {listObj && listObj.RVInfo && listObj.RVInfo.seatbelts  }
            >
              <option selected>Number of Seatbelts</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Mileage: *</label>
            <input type="number" placeholder="Current Mileage" min="0" name="mileage"
             onChange={(e) => {
                 handleChange(e, "RVInfo");
               }}
               defaultValue = {listObj && listObj.RVInfo && listObj.RVInfo.mileage  } />
          </div>

          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Length (ft.): *</label>
            <select class="form-select" aria-label="Default select example"
            name="length"
            onChange={(e) => {
                handleChange(e, "RVInfo");
              }}
              defaultValue = {listObj && listObj.RVInfo && listObj.RVInfo.length  }   
            >
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Weight (lb.): *</label>
            <input type="number" placeholder="Gross Vehcile Weight (lb.)" min="0"
              name="weight"
              onChange={(e) => {
                  handleChange(e, "RVInfo");
                }}
                defaultValue = {listObj && listObj.RVInfo && listObj.RVInfo.weight  }    
                />
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Value (USD): *</label>
            <input type="number" placeholder="Estimated Value (USD)" min="0"
              name="value"
              onChange={(e) => {
                  handleChange(e, "RVInfo");
                }}
                defaultValue = {listObj && listObj.RVInfo && listObj.RVInfo.value  }  
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
    </>
  );
};
