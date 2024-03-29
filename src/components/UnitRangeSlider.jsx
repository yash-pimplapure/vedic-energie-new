import React from 'react';
import styled from 'styled-components';

const UnitRangeSlider = ({ unitRangeValue, handleUnitRange, min, max, text }) => {
    return (
        <div className='pt-3'>
            <span className='text-lightYellow text-md'>{text}</span>
            <fieldset className="flex flex-nowrap items-center max-w-xs space-x-2 py-2">
                <label htmlFor="No of people in your home">
                    <Slider id="slider" type="range"
                        min={min}
                        max={max}
                        defaultValue={unitRangeValue}
                        onChange={handleUnitRange}
                        className="" />
                </label>
            </fieldset>
        </div>
    );
};

export default UnitRangeSlider;

const Slider = styled.input`
-webkit-appearance:none;
width:100%;
height:6px;
border-radius:4px;
background-color:#FEFFCD;
outline:none;
opacity:1;
--webkit-transition:0.2s;
transition:opacity 0.2s;

::-webkit-slider-thumb{
    -webkit-appearance:none;
    appearance:none;
    width:16px;
    height:16px;
    border-radius:50%;
    background:#C1F4C8;
    cursor:pointer;
}

::-moz-range-thumb{
    -webkit-appearance:none;
    appearance:none;
    width:16px;
    height:16px;
    border-radius:50%;
    background:#C1F4C8;
    cursor:pointer;
}
`