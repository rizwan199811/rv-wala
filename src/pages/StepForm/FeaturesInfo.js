import React from "react";

export const FeaturesInfo = ({ nextStep, prevStep, handleCheck }) => {
  let listObj = JSON.parse(localStorage.getItem("listObj"));

  return (
    <>
      {" "}
      <div class="form-card">
        <div class="row">
          <div class="col-7">
            <h2 class="fs-title">Features</h2>
          </div>
          <div class="col-5">
            <h2 class="steps">Step 6 - 7</h2>
          </div>
        </div>
        <div class="row">
          <div>
            <h5>Inside</h5>
          </div>
          <div class="col-md-3 mb-3">
            <input
              type="checkbox"
              name="cd"
              checked={listObj && listObj.Features && listObj.Features.cd}
              onChange={(e) => {
                handleCheck(e, "Features");
              }}
            />
            <label class="fieldlabels">CD: *</label>
          </div>
          <div class="col-md-3 mb-3">
            <input
              type="checkbox"
              name="fm_radio"
              checked={listObj && listObj.Features && listObj.Features.fm_radio}
              onChange={(e) => {
                handleCheck(e, "Features");
              }}
            />
            <label class="fieldlabels"> FM Radio: *</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="factory_cab_air" 
             checked={listObj && listObj.Features && listObj.Features.factory_cab_air}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}
            />
            <label class="fieldlabels">Factory Cab Air: *</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="rear_living"
             checked={listObj && listObj.Features && listObj.Features.rear_living}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}
              />
            <label class="fieldlabels">Rear Living: *</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="roof_air"
             checked={listObj && listObj.Features && listObj.Features.roof_air}
             onChange={(e) => {
               handleCheck(e, "Features");
             }} />
            <label class="fieldlabels">Roof Air: *</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="refrigerator" 
             checked={listObj && listObj.Features && listObj.Features.refrigerator}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}/>
            <label class="fieldlabels">Refrigerator: *</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="front_living" 
             checked={listObj && listObj.Features && listObj.Features.front_living}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}/>
            <label class="fieldlabels">Front Living: *</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="stove"
             checked={listObj && listObj.Features && listObj.Features.stove}
             onChange={(e) => {
               handleCheck(e, "Features");
             }} />
            <label class="fieldlabels">Stove: *</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="tv_dvd" 
             checked={listObj && listObj.Features && listObj.Features.tv_dvd}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}/>
            <label class="fieldlabels">TV/DVD: *</label>
          </div>
        </div>
      </div>
      <input
        type="button"
        name="next"
        class="next action-button"
        value="Submit"
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
  );
};
