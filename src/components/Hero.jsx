import React from 'react';
import bgHero from '../assets/mesmerizing-shot-crystal-blue-ocean-waves.jpg'
import bgHero1 from '../assets/homepage_image.jpg'
import { CgInfinity } from 'react-icons/cg'
import infinityImg from '../assets/infinity-with-white.png'
import './style.css'

const Hero = () => {

    return (
        <div>
            <div
                className="absolute inset-0  bg-transparent bg-gradient-to-r from-black/75 to-white/35 bg-blend-overlay "
            ></div>
            {/* <div className="absolute inset-0 bg-[#f0f0f0] opacity-90 lg:top-[400px] lg:right-[800px] lg:left-[800px] md:top-96 md:bottom-96 md:right-80 md:left-80 top-[460px] bottom-[430px] right-40 left-32 spray-div"></div> */}
            {/* <div className="egg-shape"></div> */}

            <div className='h-screen flex justify-center items-center bg-cover bg-no-repeat' id='banner' style={{ backgroundImage: `url(${bgHero1})` }} >
                <section className='mb-12'>
                    <div className="container mx-auto flex flex-col items-center px-4  text-center  xl:max-w-3xl">
                        <div className='relative font-semibold'>
                            {/* <CgInfinity className='lg:text-[700px] md:text-[470px] text-[320px] opacity-80' style={imageStyle}
                        /> */}
                            <img src={infinityImg} alt="" />

                            <h1 className='absolute lg:top-20 md:top-16 top-10 lg:right-24 md:right-24 right-0 lg:text-5xl md:text-5xl text-3xl max-w-md font-semibold' style={{ lineHeight: '1.3' }}><span className='text-white'>Responsible</span> Consumption <span className='text-white'>And</span> Production</h1>
                        </div>
                    </div>
                    <div className='max-w-[1200px] absolute lg:left-[300px] md:left-[10px] px-10 lg:pr-24 lg:ml-10'>
                        <p className="lg:text-2xl md:text-lg text-sm text-[#EAEDFF] mt-16 text-center font-semibold">With an aim to change how the world is powered, we work towards developing smarter and greener energy plans. At a time when the environmental risk is increasing, we focus on creating transformational solutions to address the climate crisis and work in alignment with the global initiatives for saving the planet.</p>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default Hero;