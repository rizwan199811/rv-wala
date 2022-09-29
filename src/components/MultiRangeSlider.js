import { useState,useEffect } from 'react'
import classnames from 'classnames'
const MultiRangeSlider = () => {


 useEffect(() => {
  let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    let percent1 = (sliderOne.value / sliderMaxValue) * 100;
    let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
slideOne();
slideTwo();
 }, []);
  return (
    <>
      <div class="wrapper">
        <div class="values">
          <span id="range1">0</span>
          <span> &dash; </span>
          <span id="range2">100</span>
        </div>
        <div class="container">
          <div class="slider-track"></div>
          <input
            type="range"
            min="0"
            max="100"
            value="30"
            id="slider-1"
            // oninput="slideOne()"
          />
          <input
            type="range"
            min="0"
            max="100"
            value="70"
            id="slider-2"
            // oninput="slideTwo()"
          />
        </div>
      </div>
    </>
  )
}

export default MultiRangeSlider
