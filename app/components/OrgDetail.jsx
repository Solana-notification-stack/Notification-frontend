"use client"
import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Card } from "flowbite-react";
import AppListWidget from '../components/AppListWidget'
import { Title } from '@tremor/react'
import Loader from './Loader'
import { cardStyle } from '../constant';
const OrgDetail = () => {
    const [isLoading,setIsLoading]=useState(false)
    const [registeredAppData,setRegisteredAppData]=useState([])
    const token = useSelector(state=>state.auth.token)
    const appDetails= [
      {orgId:'9A764-A1',appName:"App1",appId:"20001A1",appSecret:"sceret",userIds:[]}
    ]
    const [orgDetails,setOrgDetails]=useState({})
    useEffect(()=>{
    
     const getOrgData= async ()=>{
        try {
            setIsLoading(true)
            const res= await fetch(
                'https://api-7szm3raj4q-uc.a.run.app/organisationData',{
                  method:'GET',
                  headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${token}`
                    },
                  
                }
              )
              const result= await res.json()
              setOrgDetails(result)
              setRegisteredAppData(result.registeredAppsData)
              setIsLoading(false)
              // console.log(result.registeredAppsData,"details")  
        } catch (error) {
             console.log(error)
        }
     }
     if(token)
     {
         getOrgData()
     }
    },[])
  return (
    <>
    { !isLoading && 
    <div>
    <Card className={` ${cardStyle} [background:linear-gradient(180deg,rgba(5,5,5,0)_0%,rgb(5,5,5)_100%)] max-w-sm  mt-5`}>
      <h5 className="text-2xl capitalize font-bold tracking-tight text-black dark:text-white">
        {orgDetails?.credentials?.orgName}
      </h5>
      <p className="font-normal mt-2 text-[#cdcdcd] ">
        {orgDetails?.credentials?.email}
      </p>
      <p className="font-normal mt-1 text-[#cdcdcd]">
        {orgDetails?.credentials?.orgId}
      </p>
      <p className="font-normal text-[#cdcdcd]">
       Registered Apps : {orgDetails?.credentials?.registeredAppIds.length}
      </p>
      

    </Card>
    

    <Card style={{}} className={`
    ${cardStyle}
     rounded-md
     mt-10
      min-h-[30vh] lg:w-[70%] `}>
        <div className='flex gap-4  w-full'>
      <h1 className=' text-white mb-1 font-bold text-2xl'> Registered Apps</h1>
       
        </div>

      <hr className='mt-1  '></hr>
      <div className='mt-3  w-full'>
        {
          registeredAppData?.map((detail)=>{
           return(
            <>
            
          {detail &&  <AppListWidget  key={detail?.appId}  {...detail} />}
            </>
           )
          })
        }
      </div>
    </Card>
   
    </div>
    }
    {
      isLoading &&
      <div className='absolute left-[50%] top-[50%]'>
        <Loader/>
      </div>
    }
    </>
  )
}

export default OrgDetail