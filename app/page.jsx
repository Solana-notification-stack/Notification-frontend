
import React from 'react'
import Features from './components/Features'
import Pricing from './components/Pricing'
const page = () => {
  return (
<>
<div className="flex flex-col items-center justify-center pt-10 mx-auto md:w-3/5">
          <h1 className="text-6xl font-extrabold text-center">
            <span className="block">Notify The Web</span>
            <span className="block text-blue-600">like never before</span>
          </h1>
          <p className="mt-5 text-center text-gray-600">
            Quickly send notifications all over the world
          </p>
        </div>
        <div className="flex mt-3 items-center justify-center space-x-5">
          <a href='/login' className="px-10 py-3 text-center text-white bg-blue-600 rounded shadow hover:bg-blue-500">
            Get Started
          </a>
          <a className="px-10 py-3 text-center text-blue-600 rounded shadow hover:bg-blue-50">
            Docs
          </a>
        </div>
     <Features/> 
     <Pricing/>
    
</>
  )
}

export default page