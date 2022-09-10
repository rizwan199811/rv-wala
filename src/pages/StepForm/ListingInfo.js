import React from "react";
export const ListingInfo = ({
  nextStep,
  prevStep,
  handleChange,
  handleCheck,
}) => {
  let policies = [
    {
      label: "Rental cancellation policy",
      value: "Rental cancellation policy",
    },
    {
      label: "Strict",
      value: "strict",
    },
    {
      label: "Flexible",
      value: "flexible",
    },
  ];
  let listObj = JSON.parse(localStorage.getItem("listObj"));
  return (
    <>
      <div class="form-card">
        <div class="row">
          <div class="col-7">
            <h2 class="fs-title">Listing Details:</h2>
          </div>
          <div class="col-5">
            <h2 class="steps">Step 2 - 7</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mb-3">
            <label class="fieldlabels">Title: *</label>
            <input
              type="text"
              name="title"
              defaultValue={
                listObj && listObj.ListInfo && listObj.ListInfo.title
              }
              onChange={(e) => {
                handleChange(e, "ListInfo");
              }}
              placeholder="Clear, Concise Title of your listing"
            />
          </div>
          <div class="col-md-12 mb-3">
            <label class="fieldlabels">Description: *</label>
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              name="description"
              defaultValue={
                listObj && listObj.ListInfo && listObj.ListInfo.description
              }
              onChange={(e) => {
                handleChange(e, "ListInfo");
              }}
              style={{ height: "100px" }}
            ></textarea>
          </div>

          <div class="col-md-9 mb-3">
            <label class="fieldlabels">
              Address: * (Ex. 92 East Barnard St, West Chester, PA, USA )
            </label>
            <input
              type="text"
              placeholder="Full address of vehicle's location"
              name="address"
              defaultValue={
                listObj && listObj.ListInfo && listObj.ListInfo.address
              }
              onChange={(e) => {
                handleChange(e, "ListInfo");
              }}
            />
          </div>
          <div class="col-md-3 mb-3">
            <label class="fieldlabels">For Rent: *</label>
            <input
              type="checkbox"
              name="for_rent"
              checked={listObj && listObj.ListInfo && listObj.ListInfo.for_rent}
              onChange={(e) => {
                handleCheck(e, "ListInfo");
              }}
            />
          </div>
          <div class="col-md-9 mb-3">
            <label class="fieldlabels">Cancellation Policy : *</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="cancel_policy"
              defaultValue={
                listObj && listObj.ListInfo && listObj.ListInfo.cancel_policy
              }
              onChange={(e) => {
                handleChange(e, "ListInfo");
              }}
            >
              {policies.length > 0 &&
                policies.map((x) => {
                  return <option value={x.value}>{x.label}</option>;
                })}
            </select>
          </div>
          <div class="col-md-3 mb-3">
            <label class="fieldlabels" name="for_sale">
              For Sale: *
            </label>
            <input
              type="checkbox"
              name="for_sale"
              onChange={(e) => {
                handleCheck(e, "ListInfo");
              }}
              
              checked={
                listObj && listObj.ListInfo && listObj.ListInfo.for_sale
              }
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
  );
};
