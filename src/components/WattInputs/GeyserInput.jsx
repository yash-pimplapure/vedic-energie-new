import React from 'react';
import { GeyserWattRanges } from '../../constants';
import styled from 'styled-components';

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
 select::-ms-expand {
    display: none;
 }
 .select {
    border:none;
    border-bottom: 1px solid #FEFFCD;
 }
`
const GeyserInput = ({ geyserSelectedWattage, isCFL, handleWattageSelect }) => {
    return (
        <>
            <Section>
                <select name="watt" id="watt"
                    value={geyserSelectedWattage}
                    disabled={!isCFL}
                    onChange={handleWattageSelect}
                    className='w-16 h-8 bg-lightGreen rounded-md flex justify-center items-center text-xl text-rgbaHeader select'>
                    {
                        GeyserWattRanges.map((range, idx) => (
                            <option value={range.range}>{range.range}</option>
                        ))
                    }
                </select>
            </Section>
        </>
    );
};

export default GeyserInput;