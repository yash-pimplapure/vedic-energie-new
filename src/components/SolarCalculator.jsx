import React, { useRef, useState } from 'react';
import statesData from '../../public/states.json'
import { CategoryOfCustomer } from '../constants';

const SolarCalculator = () => {
    const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    const [checkbox2Checked, setCheckbox2Checked] = useState(false);
    const [checkbox3Checked, setCheckbox3Checked] = useState(false);
    const [sqMeterChecked, setSqMeterChecked] = useState(false);
    const [sqFeetChecked, setSqFeetChecked] = useState(false);
    const [totalArea, setTotalArea] = useState(false)
    const [solarPanelCapacity, setSolarPanelCapacity] = useState(false)
    const [budget, setBudget] = useState(false)
    const [solarPanelCapacityRange, setSolarPanelCapacityRange] = useState('')
    const [solarInputValue, setSolarInputValue] = useState('')
    const [budgetRange, setBudgetRange] = useState('')
    const [budgetInputValue, setBudgetInputValue] = useState('')
    const [averageElectricityCostRange, setAverageElectricityCostRange] = useState('')
    const [averageElectricityCostValue, setAverageElectricityCostValue] = useState('')
    const [roofTopAreaPercentageRange, setRoofTopAreaPercentageRange] = useState('')
    const [roofTopAreaPercentageValue, setRoofTopAreaPercentageValue] = useState('')
    const solarPanelSlider = useRef(null)
    const budgetSlider = useRef(null)
    const averageElectricityCostSlider = useRef(null)
    const roofTopAreaPercentageSlider = useRef(null)


    const handleCheckbox1Change = () => {
        if (checkbox1Checked) {
            setCheckbox1Checked(false);
        } else {
            setCheckbox1Checked(true);
            setCheckbox2Checked(false);
            setCheckbox3Checked(false);
        }
    };

    const handleCheckbox2Change = () => {
        if (checkbox2Checked) {
            setCheckbox2Checked(false);
        } else {
            setCheckbox2Checked(true);
            setCheckbox1Checked(false);
            setCheckbox3Checked(false);
        }
    };

    const handleCheckbox3Change = () => {
        if (checkbox3Checked) {
            setCheckbox3Checked(false);
        } else {
            setCheckbox3Checked(true);
            setCheckbox1Checked(false);
            setCheckbox2Checked(false);
        }
    };

    const sqMeterChange = () => {
        if (sqMeterChecked) {
            setSqMeterChecked(false);
        } else {
            setSqMeterChecked(true);
            setSqFeetChecked(false);
        }
    };

    const sqFeetChange = () => {
        if (sqFeetChecked) {
            setSqFeetChecked(false);
        } else {
            setSqFeetChecked(true);
            setSqMeterChecked(false);
        }
    };

    const handleSolarPanelCapacityRange = (e) => {
        setSolarPanelCapacityRange(e.target.value);
        setSolarInputValue(solarPanelSlider.current.value)

    }
    const handleBudgetRange = (e) => {
        setBudgetRange(e.target.value);
        setBudgetInputValue(budgetSlider.current.value)

    }
    const handleAverageElectricityCostRange = (e) => {
        setAverageElectricityCostRange(e.target.value);
        setAverageElectricityCostValue(averageElectricityCostSlider.current.value)
    }
    const handleRoofTopAreaPercentageRange = (e) => {
        setRoofTopAreaPercentageRange(e.target.value);
        setRoofTopAreaPercentageValue(roofTopAreaPercentageSlider.current.value)
    }

    const handleSolarCapacityNumberInput = (e) => {
        setSolarInputValue(e.target.value)
    }

    const handleBudgetNumberInput = (e) => {
        setBudgetInputValue(e.target.value)
    }

    const handleAverageElectricityCostNumberInput = (e) => {
        setAverageElectricityCostValue(e.target.value)
    }
    const handleRoofTopAreaPercentageNumberInput = (e) => {
        setRoofTopAreaPercentageValue(e.target.value)
    }

    const handleStates = (e) => {
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className="bg-blue">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <h3 className="lg:text-5xl md:text-4xl font-semibold tracking-tight text-3xl text-white py-5">Solar Roof Top Calculator</h3>
                <form onSubmit={handleSubmit}>
                    <ol className='list-decimal mb-10 text-white'>
                        <li>
                            <p className='text-white'>Choose one of the following</p>
                            <div>
                                <label className='text-white'>
                                    <input
                                        type="checkbox"
                                        checked={checkbox1Checked}
                                        onChange={handleCheckbox1Change}
                                    />
                                    Total Rooftop Area
                                </label>
                                <br />
                                {checkbox1Checked && (
                                    <div>
                                        <div className='py-4'>
                                            {/* <label> */}
                                            <input type="number" className='text-black' />
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={sqMeterChecked}
                                                    onChange={sqMeterChange}

                                                />
                                                Sq. M.
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={sqFeetChecked}
                                                    onChange={sqFeetChange}
                                                />
                                                Sq. Feet
                                            </label>
                                            <label>
                                                <div className='pt-6 flex  items-center'>
                                                    <input type='number'
                                                        placeholder="% of Roof Top Area available"
                                                        value={roofTopAreaPercentageValue}
                                                        onInput={handleRoofTopAreaPercentageNumberInput}
                                                        className="placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md select text-black" />
                                                    <p className='text-white ml-5'>%</p>
                                                </div>

                                                {/* Slider range people count */}
                                                <input id="slider" type="range"
                                                    onInput={handleRoofTopAreaPercentageRange}
                                                    value={roofTopAreaPercentageValue}
                                                    list="markers"
                                                    min={1}
                                                    max={100}
                                                    step='1'
                                                    ref={roofTopAreaPercentageSlider}
                                                    className="" />
                                                {/* <datalist id="markers">
                                                        <option value="0"></option>
                                                        <option value="25"></option>
                                                        <option value="50"></option>
                                                        <option value="75"></option>
                                                        <option value="100"></option>
                                                    </datalist> */
                                                }

                                            </label>
                                            {/* </label> */}
                                        </div>
                                    </div>
                                )}

                                {/* checkbox 2 */}
                                <p className='text-white'>OR</p>
                                <br />
                                <label className='text-white'>
                                    <input
                                        type="checkbox"
                                        checked={checkbox2Checked}
                                        onChange={handleCheckbox2Change}
                                    />
                                    Solar Panel Capacity
                                </label>
                                <br />
                                {checkbox2Checked && (
                                    <label>
                                        <div className='pt-6 flex  items-center'>
                                            <input type='number'
                                                value={solarInputValue}
                                                onInput={handleSolarCapacityNumberInput}
                                                className="placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md select text-black" />
                                            <p className='text-white ml-5'>kW</p>
                                        </div>

                                        {/* Slider range people count */}
                                        <input id="slider" type="range"
                                            onInput={handleSolarPanelCapacityRange}
                                            value={solarInputValue}
                                            list="markers"
                                            min={1}
                                            max={100}
                                            step='1'
                                            ref={solarPanelSlider}
                                            className="" />
                                        {/* <datalist id="markers">
                                <option value="0"></option>
                                <option value="25"></option>
                                <option value="50"></option>
                                <option value="75"></option>
                                <option value="100"></option>
                            </datalist> */
                                        }

                                    </label>
                                )}

                                {/* checkbox 3 */}
                                <p className='text-white'>OR</p>
                                <br />
                                <label className='text-white'>
                                    <input
                                        type="checkbox"
                                        checked={checkbox3Checked}
                                        onChange={handleCheckbox3Change}
                                    />
                                    Your Budget
                                </label>
                                <br />
                                {checkbox3Checked && (
                                    <label>
                                        <div className='pt-6 flex  items-center'>
                                            <input type='number'
                                                value={budgetInputValue}
                                                onInput={handleBudgetNumberInput}
                                                className='w-50 h-9 flex justify-center items-center text-xl text-rgbaHeader' />
                                            <p className='text-white ml-5'>Rs.</p>
                                        </div>

                                        {/* Slider range people count */}
                                        <input id="slider" type="range"
                                            onInput={handleBudgetRange}
                                            value={budgetInputValue}
                                            list="markers"
                                            min={100000}
                                            max={10000000}
                                            step={50000}
                                            ref={budgetSlider}
                                            className="" />
                                        {/* <datalist id="markers">
                                                <option value="0"></option>
                                                <option value="25"></option>
                                                <option value="50"></option>
                                                <option value="75"></option>
                                                <option value="100"></option>
                                            </datalist> */
                                        }

                                    </label>
                                )}
                            </div>
                        </li>

                        <li className='mb-10'>
                            <h1>Select State</h1>
                            {/*  STATE */}
                            <div className="select mb-10 text-black">
                                <select defaultValue="State" name="state" id="state" onChange={(e) => handleStates(e)}>
                                    <option disabled>State</option>
                                    {
                                        statesData.map((data, idx) => (
                                            <option value={data.state_id} key={idx}>{data.state_name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                        </li>

                        <li className='mb-10'>
                            <h1>Select Customer Category</h1>
                            {/*  Category of Customer */}
                            <div className="select text-black">
                                <select defaultValue="Select Category of Customer" name="category" id="category" >
                                    <option disabled>Select Category of Customer</option>
                                    {
                                        CategoryOfCustomer.map((data, idx) => (
                                            <option value={data.name} key={idx}>{data.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </li>
                        <li>
                            <h1>What is your average Electricity cost?</h1>

                            <label>
                                <div className='pt-6 flex  items-center'>
                                    <input type='number'
                                        value={averageElectricityCostValue}
                                        onInput={handleAverageElectricityCostNumberInput}
                                        className='w-50 h-9 flex justify-center items-center text-xl text-rgbaHeader' />
                                    <p className='text-white ml-5'>kW</p>
                                </div>

                                {/* Slider range people count */}
                                <input id="slider" type="range"
                                    onInput={handleAverageElectricityCostRange}
                                    value={averageElectricityCostValue}
                                    list="markers"
                                    min={4}
                                    max={20}
                                    step='.25'
                                    ref={averageElectricityCostSlider}
                                    className="" />
                                {/* <datalist id="markers">
                                                <option value="0"></option>
                                                <option value="25"></option>
                                                <option value="50"></option>
                                                <option value="75"></option>
                                                <option value="100"></option>
                                            </datalist> */
                                }

                            </label>
                        </li>
                    </ol>
                    <button className='w-[137px] h-[50px] bg-lightYellow rounded-md lg:text-[18px] md:text-sm sm:text-[18px] hover:bg-yellow hover:transition-all'>Calculate</button>
                </form>
            </div>

        </section>
    );
};

export default SolarCalculator;