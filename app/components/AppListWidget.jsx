import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const AppListWidget = ({appName,appId,appSecret,userIds,orgId}) => {

    const router=useRouter()

    const appDetails={

    }
  return (
    <>
    <div className='flex w-full mt-1 justify-between'>
    <p className=' text-gray-500 font-bold' >{appName||"My APP"}</p>
    <p className=' text-gray-500'>{appId}</p>

    <button
     
    class="bg-white hover:bg-gray-300 text-black btn-sm font-bold py-2 px-4 rounded">
     <Link href={{pathname:'/playground',query:{appId:appId}}}>Details</Link>
    
</button>

    </div>
    </>
  )
}

export default AppListWidget