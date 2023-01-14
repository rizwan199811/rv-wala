import { useRef, useState,useEffect } from "react";
import { useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { baseURL } from '../../config/apiURL'

export const RVInfo = ({ nextStep, prevStep, handleChange }) => {
 const [types, setTypes] = useState([])
 const [makes, setMakes] = useState([])
 const [years, setYears] = useState([])
 const [slides, setSlides] = useState([])
 const [seatbelts, setSeatbelts] = useState([])
 const [sleeps, setSleeps] = useState([])
 
 
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
  useEffect(() => {
    async function fetchData() {
      let body ={
        "names":["Type","Year","Make","Slide","Seatbelt","Sleep"]
    }
    const {
      data: { data },
    } = await axios.post(baseURL + '/misc/get-seed', body)
    let type =data.find(x=>x.name=="Type");
    console.log({type})
    let make =data.find(x=>x.name=="Make");
    let year =data.find(x=>x.name=="Year");
    let slide =data.find(x=>x.name=="Slide");
    let seatbelt =data.find(x=>x.name=="Seatbelt");
    let sleep =data.find(x=>x.name=="Sleep");
    setTypes(type.value)
    setMakes(make.value)
    setYears(year.value)
    setSlides(slide.value)
    setSeatbelts(seatbelt.value)
    setSleeps(sleep.value)
    }
 
    
    fetchData()
  }, [])
  

  let listObj = JSON.parse(localStorage.getItem("listObj"));
  let RVInfo = listObj ? {...initialValues ,...listObj.RVInfo} : initialValues;  
  const [mileageToggle, setMileage] = useState(['classa','classb','classc'].includes(RVInfo.type.split(' ').join('').toLowerCase()) ? true : false)
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
  const { errors, touched, handleBlur,values,setFieldValue } = formik;
  const handleMileageToggle=({target:{ value }})=>{
   if(['classa','classb','classc'].includes(value.split(' ').join('').toLowerCase())){
    console.log("Mileage toggle called");
    setMileage(true)
   }
   else{
     delete RVInfo['mileage']
     localStorage.setItem("listObj",JSON.stringify({...listObj,RVInfo:{...RVInfo,type:value}}))
    //  localStorage.getItem("listObj")

    console.log('values',{values})   
    setMileage(false)
   }
  }
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
      mileageToggle &&
      weight &&
      length &&
      value 
    ) {
      // 
      setProceedNext(true);
      nextStep();
      return
    } else {
      setProceedNext(false);
    }
    console.log("called",{mileageToggle,mileage})
    if(!mileageToggle && !mileage){
      setProceedNext(true)
      nextStep()
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
            <h2 class="steps">Step 1 - 8</h2>
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
          {<div class="col-md-4 mb-3">
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
                handleMileageToggle(e)

              }}
              onBlur={handleBlur}
            >
              <option value="">
                Select Type
              </option>
              {types.length > 0 &&
                types.map((x) => {
                  return <option value={x.value} selected={x.value==RVInfo.type}>{x.label}</option>;
                })}
              {/*  */}
            </select>
            {errors.type && touched.type && (
              <p className="text-danger">{errors.type} </p>
            )}
          </div>}
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
              <option value="">
                Vehcile Make
              </option>
              {makes.length > 0 &&
                makes.map((x) => {
                  return <option value={x.value} selected={x.value==RVInfo.make}>{x.label}</option>;
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
              <option  value="">
                Select Year
              </option>
              {years.length > 0 &&
                years.map((x) => {
                  return <option value={x.value} selected={x.value==RVInfo.year}>{x.label}</option>;
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
              <option  value="">
                Number of beds
              </option>
              {
              sleeps.length > 0 &&  
                sleeps.map((x) => {
                  return <option value={x.value} selected={x.value==RVInfo.sleep}>{x.label}</option>;
                })}
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
              <option  value="">
               Number of slides
              </option>
              {
              slides.length > 0 &&  
                slides.map((x) => {
                  return <option value={x.value} selected={x.value==RVInfo.slides}>{x.label}</option>;
                })}
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
              <option  value="">
                Number of Seatbelts
              </option>
              {
              seatbelts.length > 0 &&  
                seatbelts.map((x) => {
                  return <option value={x.value} selected={x.value==RVInfo.seatbelts}>{x.label}</option>;
                })}
            </select>
            {errors.seatbelts && touched.seatbelts && (
              <p className="text-danger">{errors.seatbelts} </p>
            )}
          </div>
          {mileageToggle && <div class="col-md-4 mb-3">
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
}
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
               <option value="" selected>
                Select Length
              </option>
              <option value="1">
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
                handleChange(e, "RVInfo",true);
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
