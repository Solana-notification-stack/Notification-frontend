"use client"
import React from 'react'
import { TeamImage } from './TeamImage'

function Team() {
  return (
    <div className='bg-black py-8 px-6 flex flex-col '>
<div className='text-white text-4xl'>

        <div>
            Meet the Minds
        </div>
    <div>Creating NotifEase</div>
    </div>
    <div className='flex flex-wrap items-center justify-center space-x-11 space-y-10'>
    <TeamImage/>

    </div>

    </div>
  )
}

export default Team