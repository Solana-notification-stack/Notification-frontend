import React from 'react';
import Features from './components/Features';
import Pricing from './components/Pricing';
import { gradientStyle1,gradientStyle2,featuresStyle } from './constant';
import LandingNav from './components/LandingNav';
const page = () => {
  return (
    <div className="" style={gradientStyle2} >
      <LandingNav />
      <div className='lg:mx-5  ' style={gradientStyle1}>
        
        <div className="flex flex-col items-center w-full justify-center md:pt-10 h-[80vh]   ">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center lg:mt-[3rem]">
            <span className="block text-[orange]">Notify The Web</span>
            <span className="block text-white m-5 md:mt-9">like never before</span>
          </h1>
          <p className="mt-5 text-center text-[#b8b3b3]">
            Quickly send notifications all over the world
          </p>
          <div className="flex mt-3 mb-12 items-center justify-center space-x-5">
            <a
              href="/login"
              className="px-10 py-3 text-center font-bold text-black bg-white rounded-full shadow "
            >
              Get Started
            </a>
            <a className="px-10 py-3 text-center text-white rounded shadow hover:bg-blue-50">
              Docs
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <div style={featuresStyle} className='mt-[5rem] lg:mx-5 br-'>

        <Features />
        </div>
        <Pricing />
      </div>
    </div>
  );
};

export default page;
