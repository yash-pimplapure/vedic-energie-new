import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import LetsGoButton from './LetsGoButton';
import statesData from '../../public/states.json'
import UnitRangeSlider from './UnitRangeSlider';
import PeopleRangeSlider from './PeopleRangeSlider';
import styled from 'styled-components';
import bg from '../assets/bg-energy-meter.png'
import ColoredGauge from './ColoredGauge';
import CalcProvider, { CALC_CONTEXT } from '../context/CalcProvider';

const Calculation = () => {
    const [peopleRangeValue, setPeopleRangeValue] = useState(5)
    const [unitRangeValue, setUnitRangeValue] = useState(100)
    const [result, setResult] = useState(0);

    const [result5000, setResult5000] = useState(0);
    const [peopleRangeValue5000, setPeopleRangeValue5000] = useState(5)
    const [unitRangeValue5000, setUnitRangeValue5000] = useState(100)

    const [statesId, setStatesId] = useState('')
    // const [district, setDistrict] = useState([])
    const [stateName, setStateName] = useState('')
    const [stateData, setStateData] = useState('')
    const [city, setCity] = useState([])
    const [avgConsumptionData, setAvgConsumptionData] = useState([])
    // const [districtId, setDistrictId] = useState('')
    const [cityId, setCityId] = useState('')
    const [conDataId, setConDataId] = useState('')
    // const [selectedItem, setSelectedItem] = useState(null);
    const [selectedEnergyData, setSelectedEnergyData] = useState(null);
    const [showEnergyMeter, setShowEnergyMeter] = useState(false);
    const [rs, setRs] = useState('')
    const [error, setError] = useState('')




    const handlePeopleRange = (e) => {
        setPeopleRangeValue(e.target.value);
        const perCapitaEnergyConsumption = calculateEnergyConsumption(unitRangeValue, e.target.value);
        // console.log(perCapitaEnergyConsumption);

        setPeopleRangeValue5000(e.target.value);
        const perCapitaEnergyConsumption5000 = calculateEnergyConsumption5000(unitRangeValue5000, e.target.value);
        // console.log(perCapitaEnergyConsumption5000);
    }

    const handleUnitRange = (e) => {
        setUnitRangeValue(e.target.value);
        const perCapitaEnergyConsumption = calculateEnergyConsumption(e.target.value, peopleRangeValue);
        // console.log(perCapitaEnergyConsumption);

        setUnitRangeValue5000(e.target.value);
        const perCapitaEnergyConsumption5000 = calculateEnergyConsumption5000(e.target.value, peopleRangeValue5000);
        // console.log(perCapitaEnergyConsumption5000);
    }

    // const handlePeopleRange5000 = (e) => {
    //     setPeopleRangeValue5000(e.target.value);
    //     const perCapitaEnergyConsumption5000 = calculateEnergyConsumption5000(unitRangeValue5000, e.target.value);
    //     console.log(perCapitaEnergyConsumption5000);
    // }

    // const handleUnitRange5000 = (e) => {
    //     setUnitRangeValue5000(e.target.value);
    //     const perCapitaEnergyConsumption5000 = calculateEnergyConsumption5000(e.target.value, peopleRangeValue5000);
    //     console.log(perCapitaEnergyConsumption5000);
    // }

    // To calculate the per User energy consumption
    const calculateEnergyConsumption = (unitConsumed, numberOfPeople) => {
        if (numberOfPeople === 0) {
            setResult(0)
            return
        }
        const energyConsumption = (unitConsumed * 12) / numberOfPeople;
        setResult(energyConsumption);
    }

    const calculateEnergyConsumption5000 = (unitConsumed5000, numberOfPeople5000) => {
        const energyConsumption5000 = (unitConsumed5000 * 12) / numberOfPeople5000;
        if (energyConsumption5000 >= 5000) {
            setResult5000(5000);
        } else {
            setResult5000(energyConsumption5000);
        }
    }

    const fixedResult5000 = result5000.toFixed()


    const handleStates = (e) => {
        const getStateId = e.target.value
        setStateData(e.target.value)
        // const getDistrictData = statesData.find(state => state.state_id === getStateId)?.districts

        const getCityData = statesData.find(state => state.state_id === getStateId)?.cities
        // const getStateData = statesData.find(state => state.state_id === getStateId[0]).state_name
        // setStateName(getStateData)
        // console.log(stateName);
        // setDistrict(getDistrictData)
        setCity(getCityData)
        setStatesId(getStateId)

        const getAvgEnergyData = statesData.find(state => state.state_id === getStateId)?.energyData
        setAvgConsumptionData(getAvgEnergyData[0])
        // console.log(avgConsumptionData);
        setStatesId(getStateId)
        setSelectedEnergyData(null); // set selected energy data to null
    }

    const handleCities = (e) => {
        const cityId = e.target.value
        console.log(cityId);
        setCityId(cityId)
        const selectedEnergyData = avgConsumptionData.find(data => data.data_id === conDataId)
        setSelectedEnergyData(selectedEnergyData)
    }

    const handleAvgConsumptionData = (e) => {
        const conDataId = e.target.value
        console.log(conDataId);
        setConDataId(conDataId)
    }

    const handleGoToEnergyMeter = () => {
        setShowEnergyMeter(true);
    };

    const mappedCity = city.find(item => item.city_id === cityId)?.city_name || city[0]?.city_name;
    // console.log(mappedCity);


    const mappedStateData = avgConsumptionData?.data
    // console.log(mappedStateData);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const getStateData = statesData.find(state => state.state_id === stateData)?.state_name
        setStateName(getStateData)
        // console.log(stateName);

        const step1 = {
            state: getStateData,
            city: mappedCity,
            peopleCount: peopleRangeValue,
            units: unitRangeValue,
            amount: rs,
            userTotal: mappedStateData,
            stateTotal: result
        }

        console.log(getStateData, mappedCity, peopleRangeValue, unitRangeValue, mappedStateData, result);

        const response = await fetch('https://vedic-backend-new-2-raiyan109.vercel.app/api/step1', {
            method: 'POST',
            body: JSON.stringify(step1),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            console.log('New calculation added', json);
        }
    }

    const message =
        result > avgConsumptionData.data
            ? <p className='text-[#FF0000]'>Your consumption crossed the capita consumption</p>
            : <p className='text-green'>Your consumption is OK</p>;
    return (
        <Section>

            <section className="bg-blue relative">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    {/* <div>
                        <h2 className='text-center text-2xl font-bold text-lightBlue'>Energy Calculator</h2>
                    </div> */}
                    <button type="button" className="rounded-full px-4 mr-2 bg-green text-white p-2 leading-none flex items-center lg:hidden md:block">
                        Step 1
                    </button>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <span>
                                    <Link to='#' className='text-lightYellow mr-2' >Residency</Link>
                                   {/* |
                                    <Link to='#' className='text-lightYellow ml-2'>Commercial</Link> */}
                                </span>
                                <h3 className="lg:text-5xl md:text-4xl font-semibold tracking-tight text-3xl text-white py-5">Energy Usage Calculator for Your Home</h3>

                                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-7 py-10'>


                                    {/*  STATE */}
                                    <div className="select">
                                        <select defaultValue="State" name="state" id="state" onChange={(e) => handleStates(e)}>
                                            <option disabled>State</option>
                                            {
                                                statesData.map((data, idx) => (
                                                    <option value={data.state_id} key={idx}>{data.state_name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>



                                    {/* Cities */}
                                    <div className="select">
                                        <select defaultValue='City' name="city" id="city" onChange={(e) => handleCities(e)}>
                                            <option disabled>
                                                City
                                            </option>

                                            {
                                                city?.map((item, idx) => (
                                                    <option value={item.city_id} key={idx}>{item.city_name}</option>
                                                ))
                                            }

                                        </select>
                                    </div>



                                    <div className='grid lg:grid-cols-1 grid-cols-1 lg:gap-x-40 gap-7 py-10'>
                                        <div className='flex justify-start items-center gap-x-12'>
                                            {/* Slider range people count */}
                                            <PeopleRangeSlider min='1' max={20} value={peopleRangeValue} handlePeopleRange={handlePeopleRange}
                                                text='No of People in Your Home'
                                            />

                                            <div className='pt-6'>
                                                <div className='w-20 h-9 bg-lightYellow flex justify-center items-center text-xl text-rgbaHeader'>{peopleRangeValue}</div>
                                            </div>
                                        </div>

                                        <div className='flex justify-start items-center gap-x-12'>
                                            {/* Slider range Units Consumed */}
                                            <UnitRangeSlider min='10' max='1500' value={unitRangeValue} handleUnitRange={handleUnitRange}
                                                text='Units consumed per month'
                                            />

                                            <div className='pt-6'>
                                                <div className='w-20 h-9 bg-lightYellow flex justify-center items-center text-xl text-rgbaHeader'>{unitRangeValue}</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div>Result: {result}</div> */}

                                    {/* Vertical text */}
                                    <div className='lg:block md:hidden hidden'>
                                        <div className="flex justify-center items-center absolute -right-44 top-80">
                                            <h1 className='transform lg:-rotate-90 md:rotate-0 rotate-0  text-[#E58C07] w-[500px] text-[150px] font-bold uppercase vertical'>Step 1</h1>
                                        </div>
                                    </div>

                                </div>
                                {/*  Billed unit per month */}

                                <div className='max-w-md'>
                                    <label
                                        htmlFor="BilledUnitsPerMonth"
                                        className="relative block overflow-hidden border-b-2 border-lightYellow pt-2"
                                    >
                                        <div className='flex justify-center items-center gap-2 text-lightYellow'>
                                            <span>&#x20B9;</span>
                                            <input
                                                style={{ background: 'transparent' }}
                                                type="number"
                                                onChange={(e) => setRs(e.target.value)}
                                                value={rs}
                                                id="BilledUnitsPerMonth"
                                                // placeholder="Billed Units per Month"
                                                className="peer h-8 w-full border-none p-0 placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md"
                                                pattern="^Rs\d+(\.\d{1,2})?$" placeholder="Enter amount in Rs"
                                            />
                                        </div>
                                    </label>
                                </div>

                                <LetsGoButton handleClick={handleGoToEnergyMeter} />
                            </div>
                            {error && <div className='text-xl text-orange'>{error.message}</div>}
                        </form>
                    </div>


                </div>
            </section>

            {
                showEnergyMeter && (
                    <div className='box h-auto p-10'>
                        <div className='flex justify-center items-center py-14'>
                            <h1 className="lg:text-5xl md:text-4xl font-semibold tracking-tight text-3xl text-lightBlue py-5">Energy Meter</h1>
                        </div>

                        <div className='container flex lg:flex-row  flex-col lg:justify-between lg:items-center mx-auto lg:px-14 px-7 lg:space-y-0 md:space-y-12 space-y-0'>
                            <div className='lg:max-w-2xl max-w-lg mx-auto mb-16'>
                                <h2 className='lg:text-2xl md:text-xl text-lg leading-relaxed text-blue lg:text-left text-center'>By comparing the user's energy consumption with the state's per capita energy consumption, the calculator provides a benchmark for the user to evaluate their own energy usage. If the user's consumption is significantly higher than the state's average, it suggests that they might have opportunities for energy-saving improvements.</h2>
                            </div>
                            <div className="">
                                <ColoredGauge value={fixedResult5000} capitaValue={avgConsumptionData} />
                            </div>
                        </div>
                    </div>
                )
            }
        </Section>
    );
};

export default Calculation;

const Section = styled.div`
select {
    -webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    appearance:none;
    outline:0;
    box-shadow:none;
    border:0!important;
    background: #05386B;
    color:#FEFFCD;
    background-image: none;
    flex: 1;
    padding: 0 .5em;
    cursor:pointer;
    font-size: 1em;
    font-family: 'Open Sans', sans-serif;
 }
//  select:focus {
//     box-shadow:  30px 30px 76px #c3c3c3,
//              -30px -30px 76px #FFB951;
//   }
 select::-ms-expand {
    display: none;
 }
 .select {
    width: 100%;
    height: 2em;
    background: transparent;
    border:none;
    border-bottom: 1px solid #FEFFCD;
 }
 .box{
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
    
 }
 .vertical{
  -webkit-text-stroke: 4px white;
 }
`