import { useRef, useState } from "react";
import { useFormik} from "formik";
import * as Yup from "yup";

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
  let years = [
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
  ];
  let initialValues ={
    make: "",
    type: "",
    vin: "",
    model: "",
    year: "",
    sleep: "",
    slides: "",
    seatbelts: "",
    mileage: "",
    weight: "",
    length: "",
    value: "",
  }

  let listObj = JSON.parse(localStorage.getItem("listObj"));
  let RVInfo = listObj ? {...initialValues ,...listObj.RVInfo} : initialValues
  
  const [proceedNext, setProceedNext] = useState(true);
  const formik = useFormik({
    initialValues: RVInfo,
    validationSchema: Yup.object({
      vin: Yup.string().required("Required"),
      type: Yup.string().required("Required"),
      make: Yup.string().required("Required"),
      model: Yup.string().required("Required"),
      year: Yup.string().required("Required"),
      sleep: Yup.string().required("Required"),
      slides: Yup.string().required("Required"),
      seatbelts: Yup.string().required("Required"),
      mileage: Yup.number().required("Required").positive("Must be positive").integer(),
      weight: Yup.number().required("Required").positive("Must be positive").integer(),
      length: Yup.string().required("Required"),
      value: Yup.number().required("Required").positive("Must be positive").integer(),
    }),
    enableReinitialize: true,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { errors, touched, handleBlur,values } = formik;

  const validateFields = () => {
    const {
      vin,
      type,
      make,
      model,
      year,
      sleep,
      slides,
      seatbelts,
      mileage,
      weight,
      length,
      value,
    } = values;
    // const {
    //   vin: vinTouched,
    //   type: typeTouched,
    //   make: makeTouched,
    //   model: modelTouched,
    //   year: yearTouched,
    //   sleep: sleepTouched,
    //   slides: slidesTouched,
    //   seatbelts: seatbeltsTouched,
    //   mileage: mileageTouched,
    //   weight:weightTouched,
    //   length:lengthTouched,
    //   value : valueTouched,
    // } = touched;
    console.log({
      vin,
      type,
      make,
      model,
      year,
      sleep,
      slides,
      seatbelts,
      mileage,
      weight,
      length,
      value
    }
    )
    if (
      vin   &&
      type &&
      make &&
      model &&
      year &&
      sleep  &&
      slides &&
      seatbelts  &&
      mileage &&
      weight &&
      length &&
      value
    ) {
      // 
      setProceedNext(true);
      nextStep();
    } else {
      setProceedNext(false);
    }
  };

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
              value={listObj && listObj.RVInfo && listObj.RVInfo.vin}
              placeholder="Vehcile Identification Number"
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "RVInfo");
              }}
              onBlur={handleBlur}
            />
            {errors.vin && touched.vin && (
              <p className="text-danger">{errors.vin} </p>
            )}
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Type: *</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="type"
              defaultValue={listObj && listObj.RVInfo && listObj.RVInfo.type}
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "RVInfo");
              }}
              onBlur={handleBlur}
            >
              <option value="" selected>
                Select Type
              </option>
              {types.length > 0 &&
                types.map((x) => {
                  return <option value={x.value}>{x.label}</option>;
                })}
              {/*  */}
            </select>
            {errors.type && touched.type && (
              <p className="text-danger">{errors.type} </p>
            )}
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Make: *</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="make"
              defaultValue={listObj && listObj.RVInfo && listObj.RVInfo.make}
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "RVInfo");
              }}
              onBlur={handleBlur}
            >
              <option selected value="">
                Vehcile Make
              </option>
              {makes.length > 0 &&
                makes.map((x) => {
                  return <option value={x.value}>{x.label}</option>;
                })}
            </select>
            {errors.make && touched.make && (
              <p className="text-danger">{errors.make} </p>
            )}
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Model: *</label>
            <input
              type="text"
              name="model"
              placeholder="Model Model"
              defaultValue={listObj && listObj.RVInfo && listObj.RVInfo.model}
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "RVInfo");
              }}
              onBlur={handleBlur}
            />
            {errors.model && touched.model && (
              <p className="text-danger">{errors.model} </p>
            )}
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Year: *</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="year"
              defaultValue={listObj && listObj.RVInfo && listObj.RVInfo.year}
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "RVInfo");
              }}
              onBlur={handleBlur}
            >
              <option selected value="">
                Select Year
              </option>
              {years.length > 0 &&
                years.map((x) => {
                  return <option value={x.value}>{x.label}</option>;
                })}
            </select>
            {errors.year && touched.year && (
              <p className="text-danger">{errors.year} </p>
            )}
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Sleeps: *</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="sleep"
              defaultValue={listObj && listObj.RVInfo && listObj.RVInfo.sleep}
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "RVInfo");
              }}
              onBlur={handleBlur}
            >
              <option selected value="">
                Number of beds
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            {errors.sleep && touched.sleep && (
              <p className="text-danger">{errors.sleep} </p>
            )}
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Slides: *</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="slides"
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "RVInfo");
              }}
              onBlur={handleBlur}
              defaultValue={listObj && listObj.RVInfo && listObj.RVInfo.slides}
            >
              <option selected value="">
                Number of slides
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            {errors.slides && touched.slides && (
              <p className="text-danger">{errors.slides} </p>
            )}
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Seatbelts: *</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="seatbelts"
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "RVInfo");
              }}
              onBlur={handleBlur}
              defaultValue={
                listObj && listObj.RVInfo && listObj.RVInfo.seatbelts
              }
            >
              <option selected value="">
                Number of Seatbelts
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            {errors.seatbelts && touched.seatbelts && (
              <p className="text-danger">{errors.seatbelts} </p>
            )}
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Mileage: *</label>
            <input
              type="number"
              placeholder="Current Mileage"
              min="0"
              name="mileage"
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "RVInfo");
              }}
              onBlur={handleBlur}
              defaultValue={listObj && listObj.RVInfo && listObj.RVInfo.mileage}
            />
            {errors.mileage && touched.mileage && (
              <p className="text-danger">{errors.mileage} </p>
            )}
          </div>

          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Length (ft.): *</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="length"
              onChange={(e) => {
                formik.handleChange(e);
                setProceedNext(true);
                handleChange(e, "RVInfo");
              }}
              onBlur={handleBlur}
              defaultValue={listObj && listObj.RVInfo && listObj.RVInfo.length}
            >
              <option value="1" selected>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            {errors.length && touched.length && (
              <p className="text-danger">{errors.length} </p>
            )}
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Weight (lb.): *</label>
            <input
              type="number"
              placeholder="Gross Vehcile Weight (lb.)"
              min="0"
              name="weight"
              onChange={(e) => {
                setProceedNext(true);
                formik.handleChange(e);
                handleChange(e, "RVInfo");
              }}
              onBlur={handleBlur}
              defaultValue={listObj && listObj.RVInfo && listObj.RVInfo.weight}
            />
            {errors.weight && touched.weight && (
              <p className="text-danger">{errors.weight} </p>
            )}
          </div>
          <div class="col-md-4 mb-3">
            <label class="fieldlabels">Value (USD): *</label>
            <input
              type="number"
              placeholder="Estimated Value (USD)"
              min="0"
              name="value"
              onChange={(e) => {
                setProceedNext(true);
                formik.handleChange(e);
                handleChange(e, "RVInfo");
              }}
              onBlur={handleBlur}
              defaultValue={listObj && listObj.RVInfo && listObj.RVInfo.value}
            />
            {errors.value && touched.value && (
              <p className="text-danger">{errors.value} </p>
            )}
          </div>
        </div>
      </div>
      <input
        type="button"
        name="next"
        class="next action-button"
        value="Next"
        onClick={validateFields}
        style={!proceedNext ? { opacity: 0.5, pointerEvents: "none" } : {}}
      />
    </>
  );
};
