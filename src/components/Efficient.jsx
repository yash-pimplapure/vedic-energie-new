import React from 'react';
import styled from 'styled-components';
import bg from '../assets/ellipse.png'
import saveMoney from '../assets/save-money (3).png'
import saveWorld from '../assets/save-the-world (2).png'
import energyControl from '../assets/energy-control (1).png'
import silo from '../assets/silo (1).png'
const Section = styled.div`
background-image: url(${bg});
background-repeat: no-repeat;
background-position: center center;
background-size: cover;

@media only screen and (max-width:600px){
    .circle{
        margin-left:90px;
    }
}
`
const Efficient = () => {
    return (
        <Section>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id='efficient'>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 style={{ marginBottom: "130px" }} className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none sm:leading-loose tracking-tight text-blue sm:text-4xl md:mx-auto">
                        Efficient Energy <span className='font-normal'>—The Way It Should Be.</span>
                    </h2>

                </div>

                <div className="grid gap-8 gap-y-20 row-gap-10 lg:grid-cols-2">
                    <div className="max-w-md sm:mx-auto sm:text-center rounded-tr-[74px] rounded-bl-[74px] bg-blue border-none p-10">

                        <div className="circle flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white border-2 border-green m-[-79px] sm:mx-auto sm:w-24 sm:h-24">
                            <img className='lg:w-20 md:w-20 w-12' src={saveMoney} alt="" />
                        </div>
                        <h6 className="mb-3 text-xl text-orange leading-5">The deep ocean</h6>
                        <p className="mb-3 text-sm text-white">
                            A flower in my garden, a mystery in my panties. Heart attack never
                            stopped old Big Bear. I didn't even know we were calling him Big
                            Bear. We never had the chance to.
                        </p>

                    </div>

                    <div className="max-w-md sm:mx-auto sm:text-center rounded-tl-[74px] rounded-br-[74px] bg-blue border-none p-10">
                        <div className="circle flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white border-2 border-green m-[-79px] sm:mx-auto sm:w-24 sm:h-24">
                            <img className='lg:w-20 md:w-20 w-12' src={saveWorld} alt="" />
                        </div>
                        <h6 className="mb-3 text-xl text-orange leading-5">The deep ocean</h6>
                        <p className="mb-3 text-sm text-white">
                            A flower in my garden, a mystery in my panties. Heart attack never
                            stopped old Big Bear. I didn't even know we were calling him Big
                            Bear. We never had the chance to.
                        </p>

                    </div>

                    <div className="max-w-md sm:mx-auto sm:text-center rounded-tl-[74px] rounded-br-[74px] bg-blue border-none p-10">

                        <div className="circle flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white border-2 border-green m-[-79px] sm:mx-auto sm:w-24 sm:h-24">
                            <img className='lg:w-20 md:w-20 w-12' src={energyControl} alt="" />
                        </div>
                        <h6 className="mb-3 text-xl text-orange leading-5">The deep ocean</h6>
                        <p className="mb-3 text-sm text-white">
                            A flower in my garden, a mystery in my panties. Heart attack never
                            stopped old Big Bear. I didn't even know we were calling him Big
                            Bear. We never had the chance to.
                        </p>

                    </div>

                    <div className="max-w-md sm:mx-auto sm:text-center rounded-tr-[74px] rounded-bl-[74px] bg-blue border-none p-10">
                        <div className="circle flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white border-2 border-green m-[-79px] sm:mx-auto sm:w-24 sm:h-24">
                            <img className='lg:w-20 md:w-20 w-12' src={silo} alt="" />
                        </div>
                        <h6 className="mb-3 text-xl text-orange leading-5">The deep ocean</h6>
                        <p className="mb-3 text-sm text-white">
                            A flower in my garden, a mystery in my panties. Heart attack never
                            stopped old Big Bear. I didn't even know we were calling him Big
                            Bear. We never had the chance to.
                        </p>
                    </div>
                </div>
            </div>

        </Section>
    );
};

export default Efficient;