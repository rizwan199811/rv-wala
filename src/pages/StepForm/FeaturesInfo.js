import { useState } from 'react'
import axios from 'axios'
import { baseURL } from '../../config/apiURL'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import toastOptions from '../../config/toast'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const FeaturesInfo = ({
  nextStep,
  prevStep,
  handleCheck,
  handleChange,
}) => {
  let listObj = JSON.parse(localStorage.getItem('listObj'))
  let initialValues = {
    propane_tank: '',
  }
  let FeaturesInfo = listObj
    ? { ...initialValues, ...listObj.Features }
    : initialValues
  let history = useNavigate()
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState({
    propane_tank:
      listObj.Features &&
      listObj.Features.others &&
      parseInt(listObj.Features.others.propane_tank) > 0
        ? true
        : false,
  })
  const handleSubmit = async () => {
    try {
      setLoading(true)
      let features = localStorage.getItem('features')
        ? JSON.parse(localStorage.getItem('features'))
        : []
      let body = localStorage.getItem('listObj')
        ? {
            ...JSON.parse(localStorage.getItem('listObj')),
            featuresArray: features,
          }
        : {}
      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      console.log({ headers })
      const {
        data: { message },
      } = await axios.post(baseURL + '/rv', body, { headers })
      console.log({ message })
      toast.success(message, toastOptions)
      setTimeout(() => {
        setLoading(false)
        history('/rvs-for-rent', { replace: true })
      }, 3000)
    } catch ({
      response: {
        data: { message },
      },
    }) {
      toast.error(message, toastOptions)
    }
  }

  const generateData = (event, identifier, label) => {
    let features =
      (localStorage.getItem('features') &&
        JSON.parse(localStorage.getItem('features'))) ||
      []

    if (event.target.checked) {
      features.push({
        label: label,
        value: event.target.name,
        type: identifier,
      })
    } else {
      let index = features.findIndex((x) => x.label == label)
      console.log({ index })
      if (index !== -1) {
        features.splice(index, 1)
      }
    }
    localStorage.setItem('features', JSON.stringify(features))
  }
  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({
      propane_tank: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer(),
    }),
    enableReinitialize: true,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  const { errors, touched, handleBlur, values } = formik

  return (
    <>
      <ToastContainer />
      <div className="form-card">
        <div className="row">
          <div className="col-7">
            <h2 className="fs-title">Features</h2>
          </div>
          <div className="col-5">
            <h2 className="steps">Step 7 - 8</h2>
          </div>
        </div>

        <div className="row">
          <div>
            <h4>Inside</h4>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="cd"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.cd
              }
              onChange={(e) => {
                handleCheck(e, 'Features.inside')
                generateData(e, 'inside', 'CD')
              }}
            />
            <label className="fieldlabels">CD</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="fm_radio"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.fm_radio
              }
              onChange={(e) => {
                handleCheck(e, 'Features.inside')
                generateData(e, 'inside', 'FM Radio')
              }}
            />
            <label className="fieldlabels"> FM Radio</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="factory_cab_air"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.factory_cab_air
              }
              onChange={(e) => {
                handleCheck(e, 'Features.inside')
                generateData(e, 'inside', 'Factory Cab Air')
              }}
            />
            <label className="fieldlabels">Factory Cab Air</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="rear_living"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.rear_living
              }
              onChange={(e) => {
                handleCheck(e, 'Features.inside')
                generateData(e, 'inside', 'Rear Living')
              }}
            />
            <label className="fieldlabels">Rear Living</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="roof_air"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.roof_air
              }
              onChange={(e) => {
                handleCheck(e, 'Features.inside')
                generateData(e, 'inside', 'Roof Air')
              }}
            />
            <label className="fieldlabels">Roof Air</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="refrigerator"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.refrigerator
              }
              onChange={(e) => {
                handleCheck(e, 'Features.inside')
                generateData(e, 'inside', 'Refrigerator')
              }}
            />
            <label className="fieldlabels">Refrigerator</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="front_living"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.front_living
              }
              onChange={(e) => {
                handleCheck(e, 'Features.inside')
                generateData(e, 'inside', 'Front Living')
              }}
            />
            <label className="fieldlabels">Front Living</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="stove"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.stove
              }
              onChange={(e) => {
                handleCheck(e, 'Features.inside')
                generateData(e, 'inside', 'Stove')
              }}
            />
            <label className="fieldlabels">Stove</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="tv_dvd"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.tv_dvd
              }
              onChange={(e) => {
                generateData(e, 'inside', 'TV/DVD')
                handleCheck(e, 'Features.inside')
              }}
            />
            <label className="fieldlabels">TV/DVD</label>
          </div>

          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="front_kitchen"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.front_kitchen
              }
              onChange={(e) => {
                handleCheck(e, 'Features.inside')
                generateData(e, 'inside', 'Front Kitchen')
              }}
            />
            <label className="fieldlabels">Front Kitchen</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="shower"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.shower
              }
              onChange={(e) => {
                generateData(e, 'inside', 'Shower')
                handleCheck(e, 'Features.inside')
              }}
            />
            <label className="fieldlabels">Shower</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="kitchen_sink"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.kitchen_sink
              }
              onChange={(e) => {
                handleCheck(e, 'Features.inside')
                generateData(e, 'inside', 'Kitchen Sink')
              }}
            />
            <label className="fieldlabels">Kitchen Sink</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="wash_basin"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.wash_basin
              }
              onChange={(e) => {
                generateData(e, 'inside', 'Wash Basin')
                handleCheck(e, 'Features.inside')
              }}
            />
            <label className="fieldlabels">Wash Basin</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="toilet"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.toilet
              }
              onChange={(e) => {
                generateData(e, 'inside', 'Toilet')
                handleCheck(e, 'Features.inside')
              }}
            />
            <label className="fieldlabels">Toilet</label>
          </div>

          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="kitchen_table"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.kitchen_table
              }
              onChange={(e) => {
                handleCheck(e, 'Features.inside')
                generateData(e, 'inside', 'Kitchen Table')
              }}
            />
            <label className="fieldlabels">Kitchen Table</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="gps"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.gps
              }
              onChange={(e) => {
                handleCheck(e, 'Features.inside')
                generateData(e, 'inside', 'GPS Navigation')
              }}
            />
            <label className="fieldlabels">GPS Navigation</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="dinette"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.dinette
              }
              onChange={(e) => {
                generateData(e, 'inside', 'Kitchen Dinette')
                handleCheck(e, 'Features.inside')
              }}
            />
            <label className="fieldlabels">Kitchen Dinette</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="radio"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.radio
              }
              onChange={(e) => {
                generateData(e, 'inside', 'Satellite Radio')
                handleCheck(e, 'Features.inside')
              }}
            />
            <label className="fieldlabels">Satellite Radio</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="tv_satellite"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.tv_satellite
              }
              onChange={(e) => {
                generateData(e, 'inside', 'Satellite TV')
                handleCheck(e, 'Features.inside')
              }}
            />
            <label className="fieldlabels">Satellite TV</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="wifi"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.inside &&
                listObj.Features.inside.wifi
              }
              onChange={(e) => {
                generateData(e, 'inside', 'WiFi')
                handleCheck(e, 'Features.inside')
              }}
            />
            <label className="fieldlabels">WiFi</label>
          </div>
        </div>

        <div className="row mt-3">
          <div>
            <h4>Outside</h4>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="bbq_grill"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.outside &&
                listObj.Features.outside.bbq_grill
              }
              onChange={(e) => {
                generateData(e, 'outside', 'BBQ/Grill')
                handleCheck(e, 'Features.outside')
              }}
            />
            <label className="fieldlabels">BBQ/Grill</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="kitchen"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.outside &&
                listObj.Features.outside.kitchen
              }
              onChange={(e) => {
                generateData(e, 'outside', 'Outside Kitchen')
                handleCheck(e, 'Features.outside')
              }}
            />
            <label className="fieldlabels">Outside Kitchen</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="sink"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.outside &&
                listObj.Features.outside.sink
              }
              onChange={(e) => {
                generateData(e, 'outside', 'Outside Sink')
                handleCheck(e, 'Features.outside')
              }}
            />
            <label className="fieldlabels">Outside Sink</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="tv"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.outside &&
                listObj.Features.outside.tv
              }
              onChange={(e) => {
                generateData(e, 'outside', 'Outside TV')
                handleCheck(e, 'Features.outside')
              }}
            />
            <label className="fieldlabels">Outside TV</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="shower"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.outside &&
                listObj.Features.outside.shower
              }
              onChange={(e) => {
                generateData(e, 'outside', 'Outside Shower')
                handleCheck(e, 'Features.outside')
              }}
            />
            <label className="fieldlabels">Outside Shower</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="balcony"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.outside &&
                listObj.Features.outside.balcony
              }
              onChange={(e) => {
                generateData(e, 'outside', 'Balcony')
                handleCheck(e, 'Features.outside')
              }}
            />
            <label className="fieldlabels">Balcony</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="stereo"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.outside &&
                listObj.Features.outside.stereo
              }
              onChange={(e) => {
                generateData(e, 'outside', 'Outside Stereo')
                handleCheck(e, 'Features.outside')
              }}
            />
            <label className="fieldlabels">Outside Stereo</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="refrigerator_outside"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.outside &&
                listObj.Features.outside.refrigerator_outside
              }
              onChange={(e) => {
                generateData(e, 'outside', 'Outside Refrigerator')
                handleCheck(e, 'Features.outside')
              }}
            />
            <label className="fieldlabels">Outside Refrigerator</label>
          </div>
        </div>

        <div className="row mt-3">
          <div>
            <h4>Others</h4>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="tank"
              checked={checked['propane_tank']}
              onChange={(e) => {
                // generateData(e, 'others', 'Propane Tank')
                setChecked({
                  ...checked,
                  propane_tank: !checked['propane_tank'],
                })
                // handleCheck(e, 'Features.others')
              }}
            />
            <label className="fieldlabels">Propane Tank</label>
          </div>
          {checked['propane_tank'] && (
            <div className="priceing-checkhide-div">
              <label class="fieldlabels pt-3">Price *</label>
              <input
                type="number"
                name="propane_tank"
                placeholder="e.g.$20.00"
                min="0"
                value={
                  listObj &&
                  listObj.Features &&
                  listObj.Features.others &&
                  listObj.Features.others.propane_tank
                }
                onChange={(e) => {
                  formik.handleChange(e)
                  handleChange(e, 'Features.others')
                }}
                onBlur={handleBlur}
              />
              {errors.propane_tank && touched.propane_tank && (
                <p className="text-danger">{errors.propane_tank} </p>
              )}
            </div>
          )}
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="bike_rack"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.others &&
                listObj.Features.others.bike_rack
              }
              onChange={(e) => {
                generateData(e, 'others', 'Bike Rack')
                handleCheck(e, 'Features.others')
              }}
            />
            <label className="fieldlabels">Bike Rack</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="level_system"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.others &&
                listObj.Features.others.level_system
              }
              onChange={(e) => {
                generateData(e, 'others', 'Leveling System')
                handleCheck(e, 'Features.others')
              }}
            />
            <label className="fieldlabels">Leveling System</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="awning"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.others &&
                listObj.Features.others.awning
              }
              onChange={(e) => {
                generateData(e, 'others', 'Awning')
                handleCheck(e, 'Features.others')
              }}
            />
            <label className="fieldlabels">Awning</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="arctic"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.others &&
                listObj.Features.others.arctic
              }
              onChange={(e) => {
                generateData(e, 'others', 'Arctic Package')
                handleCheck(e, 'Features.others')
              }}
            />
            <label className="fieldlabels">Arctic Package</label>
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="checkbox"
              name="trailer"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.others &&
                listObj.Features.others.trailer
              }
              onChange={(e) => {
                generateData(e, 'others', 'Trailer')
                handleCheck(e, 'Features.others')
              }}
            />
            <label className="fieldlabels">Trailer</label>
          </div>
        </div>

        <div className="row mt-3">
          <div>
            <h4>Finalize And List</h4>
          </div>
          <div className="col-md-12 mb-3">
            <input
              type="checkbox"
              name="finalize"
              checked={listObj && listObj.Features && listObj.Features.finalize}
              onChange={(e) => {
                handleCheck(e, 'Features')
              }}
            />
            <label className="fieldlabels">
              Activate Listing{' '}
              <em> (Your listing will not appear until this is checked.)</em>
            </label>
          </div>
          <div className="alert alert-warning" role="alert">
            Please note that in addition to making this listing "Active", you
            must also complete your Host Account profile. This is necessary so
            we may process payments made by the guest to you. Once you "Submit"
            your listing, you will be taken to a success screen, then please
            continue to validate your account info.
          </div>
        </div>
      </div>

      {loading && <i className="fa fa-spinner fa-spin"></i>}
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Submit"
        onClick={handleSubmit}
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
