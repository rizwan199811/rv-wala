import React from 'react'
import axios from 'axios'
import { localURL, stagingURL } from '../../config/apiURL'

export const FeaturesInfo = ({ nextStep, prevStep, handleCheck }) => {
  let listObj = JSON.parse(localStorage.getItem('listObj'))
  const handleSubmit = async () => {
    let body = localStorage.getItem('listObj')
      ? JSON.parse(localStorage.getItem('listObj'))
      : {}
    let headers = {
      Authorization: localStorage.getItem('token'),
    }
    console.log({ headers })
    const { message } = await axios.post(stagingURL + '/rv', body, { headers })
    console.log({ message })
  }

  return (
    <>
      {' '}
      <div class="form-card">
        <div class="row">
          <div class="col-7">
            <h2 class="fs-title">Features</h2>
          </div>
          <div class="col-5">
            <h2 class="steps">Step 7 - 8</h2>
          </div>
        </div>

        <div class="row">
          <div>
            <h4>Inside</h4>
          </div>
          <div class="col-md-3 mb-3">
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
              }}
            />
            <label class="fieldlabels">CD</label>
          </div>
          <div class="col-md-3 mb-3">
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
              }}
            />
            <label class="fieldlabels"> FM Radio</label>
          </div>
          <div class="col-md-3 mb-3">
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
              }}
            />
            <label class="fieldlabels">Factory Cab Air</label>
          </div>
          <div class="col-md-3 mb-3">
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
              }}
            />
            <label class="fieldlabels">Rear Living</label>
          </div>
          <div class="col-md-3 mb-3">
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
              }}
            />
            <label class="fieldlabels">Roof Air</label>
          </div>
          <div class="col-md-3 mb-3">
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
              }}
            />
            <label class="fieldlabels">Refrigerator</label>
          </div>
          <div class="col-md-3 mb-3">
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
              }}
            />
            <label class="fieldlabels">Front Living</label>
          </div>
          <div class="col-md-3 mb-3">
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
              }}
            />
            <label class="fieldlabels">Stove</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.inside')
              }}
            />
            <label class="fieldlabels">TV/DVD</label>
          </div>

          <div class="col-md-3 mb-3">
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
              }}
            />
            <label class="fieldlabels">Front Kitchen</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.inside')
              }}
            />
            <label class="fieldlabels">Shower</label>
          </div>
          <div class="col-md-3 mb-3">
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
              }}
            />
            <label class="fieldlabels">Kitchen Sink</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.inside')
              }}
            />
            <label class="fieldlabels">Wash Basin</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.inside')
              }}
            />
            <label class="fieldlabels">Toilet</label>
          </div>

          <div class="col-md-3 mb-3">
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
              }}
            />
            <label class="fieldlabels">Kitchen Table</label>
          </div>
          <div class="col-md-3 mb-3">
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
              }}
            />
            <label class="fieldlabels">GPS Navigation</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.inside')
              }}
            />
            <label class="fieldlabels">Kitchen Dinette</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.inside')
              }}
            />
            <label class="fieldlabels">Satellite Radio</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.inside')
              }}
            />
            <label class="fieldlabels">Satellite TV</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.inside')
              }}
            />
            <label class="fieldlabels">WiFi</label>
          </div>
        </div>

        <div class="row mt-3">
          <div>
            <h4>Outside</h4>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.outside')
              }}
            />
            <label class="fieldlabels">BBQ/Grill</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.outside')
              }}
            />
            <label class="fieldlabels">Outside Kitchen</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.outside')
              }}
            />
            <label class="fieldlabels">Outside Sink</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.outside')
              }}
            />
            <label class="fieldlabels">Outside TV</label>
          </div>
          <div class="col-md-3 mb-3">
            <input
              type="checkbox"
              name="tshowerv"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.outside &&
                listObj.Features.outside.shower
              }
              onChange={(e) => {
                handleCheck(e, 'Features.outside')
              }}
            />
            <label class="fieldlabels">Outside Shower</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.outside')
              }}
            />
            <label class="fieldlabels">Balcony</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.outside')
              }}
            />
            <label class="fieldlabels">Outside Stereo</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.outside')
              }}
            />
            <label class="fieldlabels">Outside Refrigerator</label>
          </div>
        </div>

        <div class="row mt-3">
          <div>
            <h4>Others</h4>
          </div>
          <div class="col-md-3 mb-3">
            <input
              type="checkbox"
              name="tank"
              checked={
                listObj &&
                listObj.Features &&
                listObj.Features.others &&
                listObj.Features.others.tank
              }
              onChange={(e) => {
                handleCheck(e, 'Features.others')
              }}
            />
            <label class="fieldlabels">Propane Tank</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.others')
              }}
            />
            <label class="fieldlabels">Bike Rack</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.others')
              }}
            />
            <label class="fieldlabels">Leveling System</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.others')
              }}
            />
            <label class="fieldlabels">Awning</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.others')
              }}
            />
            <label class="fieldlabels">Arctic Package</label>
          </div>
          <div class="col-md-3 mb-3">
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
                handleCheck(e, 'Features.others')
              }}
            />
            <label class="fieldlabels">Trailer</label>
          </div>
        </div>

        <div class="row mt-3">
          <div>
            <h4>Finalize And List</h4>
          </div>
          <div class="col-md-12 mb-3">
            <input
              type="checkbox"
              name="finalize"
              checked={listObj && listObj.Features && listObj.Features.finalize}
              onChange={(e) => {
                handleCheck(e, 'Features')
              }}
            />
            <label class="fieldlabels">
              Activate Listing{' '}
              <em> (Your listing will not appear until this is checked.)</em>
            </label>
          </div>
          <div class="alert alert-warning" role="alert">
            Please note that in addition to making this listing "Active", you
            must also complete your Host Account profile. This is necessary so
            we may process payments made by the guest to you. Once you "Submit"
            your listing, you will be taken to a success screen, then please
            continue to validate your account info.
          </div>
        </div>
      </div>
      <input
        type="button"
        name="next"
        class="next action-button"
        value="Submit"
        onClick={handleSubmit}
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
