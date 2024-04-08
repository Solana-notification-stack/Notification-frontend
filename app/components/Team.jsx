"use client"
import React from 'react'
import { TeamImage } from './TeamImage'


function Team() {
  return (
    <div className='bg-black  py-8 px-6 flex flex-col '>
<div className='text-[color:var(--Primary,#FFF)] ml-6 [font-family:Sora] text-4xl md:text-5xl font-semibold mb-5 md:w-[70%] leading-[140%] space-y-6'>

        <div>
            Meet the Minds
        </div>
    <div>Creating NotifEase</div>
    </div>
    <div className='flex items-center justify-around flex-wrap gap-6'>
<TeamImage name={"Ronak Gupta"} desc={"Developer"} github={"https://github.com/ronakgupta11"} twitter={"https://x.com/ronakguptark07"}/>
<TeamImage name={"Shivam Shaw"} desc={"Developer"} github={"https://github.com/tryptophan36"} twitter={"https://x.com/tryptophan36"}/>
<TeamImage name={"Shobhit Kumawat"} desc={"Product Management"} twitter={"https://x.com/shobhit_k07"}/>


    </div>

    </div>
  )
}

export default Team