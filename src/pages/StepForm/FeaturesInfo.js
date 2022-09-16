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
              checked={listObj && listObj.Features && listObj.Features.cd}
              onChange={(e) => {
                handleCheck(e, "Features");
              }}
            />
            <label class="fieldlabels">CD</label>
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
            <label class="fieldlabels"> FM Radio</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="factory_cab_air" 
             checked={listObj && listObj.Features && listObj.Features.factory_cab_air}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}
            />
            <label class="fieldlabels">Factory Cab Air</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="rear_living"
             checked={listObj && listObj.Features && listObj.Features.rear_living}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}
              />
            <label class="fieldlabels">Rear Living</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="roof_air"
             checked={listObj && listObj.Features && listObj.Features.roof_air}
             onChange={(e) => {
               handleCheck(e, "Features");
             }} />
            <label class="fieldlabels">Roof Air</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="refrigerator" 
             checked={listObj && listObj.Features && listObj.Features.refrigerator}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}/>
            <label class="fieldlabels">Refrigerator</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="front_living" 
             checked={listObj && listObj.Features && listObj.Features.front_living}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}/>
            <label class="fieldlabels">Front Living</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="stove"
             checked={listObj && listObj.Features && listObj.Features.stove}
             onChange={(e) => {
               handleCheck(e, "Features");
             }} />
            <label class="fieldlabels">Stove</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="tv_dvd" 
             checked={listObj && listObj.Features && listObj.Features.tv_dvd}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}/>
            <label class="fieldlabels">TV/DVD</label>
          </div>

          <div class="col-md-3 mb-3">
            <input type="checkbox"
             name="" 
             />
            <label class="fieldlabels">Front Kitchen</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox"
             name="" 
             />
            <label class="fieldlabels">Shower</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox"
             name="" 
             />
            <label class="fieldlabels">Kitchen Sink</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox"
             name="" 
             />
            <label class="fieldlabels">Wash Basin</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox"
             name="" 
             />
            <label class="fieldlabels">Toilet</label>
          </div>

          <div class="col-md-3 mb-3">
            <input type="checkbox"
             name="" 
             />
            <label class="fieldlabels">Kitchen Table</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox"
             name="" 
             />
            <label class="fieldlabels">GPS Navigation</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox"
             name="" 
             />
            <label class="fieldlabels">Kitchen Dinette</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox"
             name="" 
             />
            <label class="fieldlabels">Satellite Radio</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox"
             name="" 
             />
            <label class="fieldlabels">Satellite TV</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox"
             name="" 
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
              name="cd"
              checked={listObj && listObj.Features && listObj.Features.cd}
              onChange={(e) => {
                handleCheck(e, "Features");
              }}
            />
            <label class="fieldlabels">BBQ/Grill</label>
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
            <label class="fieldlabels">Outside Kitchen</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="factory_cab_air" 
             checked={listObj && listObj.Features && listObj.Features.factory_cab_air}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}
            />
            <label class="fieldlabels">Outside Sink</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="rear_living"
             checked={listObj && listObj.Features && listObj.Features.rear_living}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}
              />
            <label class="fieldlabels">Outside TV</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="roof_air"
             checked={listObj && listObj.Features && listObj.Features.roof_air}
             onChange={(e) => {
               handleCheck(e, "Features");
             }} />
            <label class="fieldlabels">Outside Shower</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="refrigerator" 
             checked={listObj && listObj.Features && listObj.Features.refrigerator}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}/>
            <label class="fieldlabels">Balcony</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="front_living" 
             checked={listObj && listObj.Features && listObj.Features.front_living}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}/>
            <label class="fieldlabels">Outside Stereo</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="stove"
             checked={listObj && listObj.Features && listObj.Features.stove}
             onChange={(e) => {
               handleCheck(e, "Features");
             }} />
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
              name="cd"
              checked={listObj && listObj.Features && listObj.Features.cd}
              onChange={(e) => {
                handleCheck(e, "Features");
              }}
            />
            <label class="fieldlabels">Propane Tank</label>
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
            <label class="fieldlabels">Bike Rack</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="factory_cab_air" 
             checked={listObj && listObj.Features && listObj.Features.factory_cab_air}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}
            />
            <label class="fieldlabels">Leveling System</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="rear_living"
             checked={listObj && listObj.Features && listObj.Features.rear_living}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}
              />
            <label class="fieldlabels">Awning</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="roof_air"
             checked={listObj && listObj.Features && listObj.Features.roof_air}
             onChange={(e) => {
               handleCheck(e, "Features");
             }} />
            <label class="fieldlabels">Arctic Package</label>
          </div>
          <div class="col-md-3 mb-3">
            <input type="checkbox" name="refrigerator" 
             checked={listObj && listObj.Features && listObj.Features.refrigerator}
             onChange={(e) => {
               handleCheck(e, "Features");
             }}/>
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
              name="cd"
              checked={listObj && listObj.Features && listObj.Features.cd}
              onChange={(e) => {
                handleCheck(e, "Features");
              }}
            />
            <label class="fieldlabels">Activate Listing <em> (Your listing will not appear until this is checked.)</em></label>
          </div>
          <div class="alert alert-warning" role="alert">
          Please note that in addition to making this listing "Active", you must also complete your Host Account profile. This is necessary so we may process payments made by the guest to you. Once you "Submit" your listing, you will be taken to a success screen, then please continue to validate your account info.
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
