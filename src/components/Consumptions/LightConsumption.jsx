import React from 'react';
import styled from 'styled-components';
import { LightConsTimes } from '../../constants';

const Section = styled.div`
select {
    -webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    appearance:none;
    outline:0;
    box-shadow:none;
    border:0!important;
    color:#FEFFCD;
    background-image: none;
    flex: 1;
    padding: 0 .5em;
    cursor:pointer;
    font-size: 1em;
    font-family: 'Open Sans', sans-serif;
    
 }
 select::before {
    content: "\f13a";
    font-family: FontAwesome;
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 100%;
    text-align: center;
    font-size: 28px;
    line-height: 45px;
    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }
 
 .select {
    border:none;
    border-bottom: 1px solid #FEFFCD;
 }

  
`
const LightConsumption = ({ lightSelectedConsumptionTime, isLightsOn, handleConsumptionTimeSelect }) => {
    return (
        <>
            <Section>
                <select name="watt" id="watt" value={lightSelectedConsumptionTime}
                    disabled={!isLightsOn}
                    onChange={handleConsumptionTimeSelect}
                    className='w-36 h-8 bg-lightGreen rounded-md flex justify-center items-center text-xl text-rgbaHeader select'>

                    {
                        LightConsTimes.map((range, idx) => (
                            <option value={range.range}>{range.name}</option>
                        ))
                    }
                </select>
            </Section>
        </>
    );
};

export default LightConsumption;