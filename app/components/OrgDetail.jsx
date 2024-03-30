"use client"
import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Card } from "flowbite-react";
import AppListWidget from '../components/AppListWidget'
import { Title } from '@tremor/react'
const OrgDetail = () => {
    const token = useSelector(state=>state.auth.token)
    const appDetails= [
      {orgId:'9A764-A1',appName:"App1",appId:"20001A1",appSecret:"sceret",userIds:[]}
    ]
    const [orgDetails,setOrgDetails]=useState({})
    useEffect(()=>{
        console.log("booted")
     const getOrgData= async ()=>{
        try {
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
              console.log(result,"details")  
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
    <Card  className="max-w-sm  mt-5">
      <h5 className="text-2xl capitalize font-bold tracking-tight text-black dark:text-white">
        {orgDetails?.credentials?.orgName}
      </h5>
      <p className="font-normal mt-2 text-gray-700 dark:text-gray-400">
        {orgDetails?.credentials?.email}
      </p>
      <p className="font-normal mt-1 text-gray-700 dark:text-gray-400">
        {orgDetails?.credentials?.orgId}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       Registered Apps : {orgDetails?.credentials?.registeredAppIds.length}
      </p>
      

    </Card>
    <div>
        <div className='flex gap-4 w-full'>
      <h1 className='mt-5 mb-1 font-bold text-2xl'> Registered Apps</h1>
       
        </div>

      <hr className='mt-1 lg:w-[70%] '></hr>
      <div className='mt-3 lg:w-[70%] w-full'>
        {
          appDetails.map((detail)=>{
           return(
            <AppListWidget  {...detail} />
           )
          })
        }
      </div>
    </div>
    </>
  )
}

export default OrgDetail