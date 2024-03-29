import React from 'react'
import { useRouter } from 'next/navigation'

const AppListWidget = ({appName,appId,appSecret,userIds,orgId}) => {

    const router=useRouter()

    const appDetails={
        
    }
  return (
    <>
    <div className='flex w-full mt-1 justify-between'>
    <p className='text-black font-bold' >{appName}</p>

    <p>{appId}</p>

    <button
      
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
     Details
</button>

    </div>
    </>
  )
}

export default AppListWidget