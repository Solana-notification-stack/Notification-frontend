import React from 'react';
import Features from './components/Features';
import Pricing from './components/Pricing';
import { gradientStyle1, gradientStyle2, featuresStyle } from './constant';
import LandingNav from './components/LandingNav';

const page = () => {
  return (
    <div className="" style={gradientStyle2}>
      <LandingNav />

      <div className="lg:mx-5  block sm:flex justify-center  " style={gradientStyle1}>
        <div className="flex flex-col lg:w-[70%]  ml-3 lg:ml-9 items-left  justify-center  h-[80vh]   ">
          <h1
            styles={{
              background:
                'radial-gradient(45% 100% at 50% 50%, #fff 30%, hsla(0, 0%, 100%, .35) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent'
            }}
            className="text-[2.5rem] leading-8  sm:text-5xl lg:text-[4.2rem] font-extrabold text-left "
          >
            <span className="block ">The First Ever </span>
            <span className="block  text-white mt-3 md:mt-3">
              Solana mobile {' '}
            </span>
            <span className="block  text-white mt-3 md:mt-3">
            Notification stack
            </span>
            
          </h1>
          <p className="mt-3 text-left text-[#b8b3b3]">
            Quickly send notifications all over the world
          </p>
          <div className="flex  items-center justify-start mt-5 space-x-5">
            <a
              href="/login"
              className="px-10 py-3 text-center font-bold text-black bg-white rounded-full shadow "
            >
              Get Started
            </a>
            <a
              href="https://ronaks-organization.gitbook.io/notifease-docs"
              className="px-10 py-3 text-center text-white rounded shadow"
            >
              Docs
            </a>
          </div>
          </div>
          
        
      </div>
      <div className="">
        <div style={featuresStyle} className="mt-[5rem] lg:mx-5 br-">
          <Features />
        </div>
        <Pricing />
      </div>
    </div>
  );
};

export default page;
