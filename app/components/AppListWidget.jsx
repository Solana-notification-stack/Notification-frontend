import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from 'flowbite-react'
const AppListWidget = ({appName,appId,appSecret,userIds,orgId}) => {

    const router=useRouter()

    const appDetails={

    }
  return (
    <>
    <div className='flex w-full mt-8 justify-between items-center'>
    <p className=' text-[#cdcdcd] font-bold' >{appName||"My APP"}</p>
    <p className=' text-[#cdcdcd]'>{appId}</p>

    <button
    class="[background:linear-gradient(180deg,rgba(144.86,173.46,185.71,0.8)_0%,rgba(32.16,80.74,101.56,0.1)_100%)] text-white  hover:border hover:border-white  btn-sm   px-4 py-[8px] rounded-xl">
     <Link href={{pathname:'/playground',query:{appId:appId}}}>Details</Link>
    
</button>

    </div>
    </>
  )
}

export default AppListWidget