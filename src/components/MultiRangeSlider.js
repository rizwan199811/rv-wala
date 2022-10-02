import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';





export default function MultiRangeSlider({handleChange,value}) {



  return (
    <Box >
       <div className="multirange-wrap">
        <div class="wrapper">
          <div class="values">
            <span id="range1">${value[0]}</span>
            <span> - </span>
            <span id="range2">${value[1]}</span>
          </div>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        min={0}
        max={1000}
        onChange={handleChange}
        // valueLabelDisplay="auto"
        disableSwap
      />
    
      <button className='login-wrapper-btn'>Apply</button>
      </div>
      </div>

    </Box>
  );
}
