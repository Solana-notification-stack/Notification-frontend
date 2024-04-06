
'use client'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../store/configureStore';
import { Button } from 'flowbite-react';
import Nav from '../nav'
import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import CreateCampaign from '../components/campaigns/CreateCampaignCard'
const Page = () => {
 
  const appData = useAppSelector((state)=>state.auth.appData)
  const [campaignData,setCampaignData]= useState([])
  useEffect(()=>{
    let arrayData=[]
    for (const [key,value] of Object.entries(appData.campaigns)){
      let data={campaignId:key,campaignData:value}
      arrayData.push(data)
    }
    setCampaignData(arrayData)
  },[])
  return (
    <>
   
    <div className="text-center text-3xl  text-white">
          Create a new campaign
          <p className="text-xs text-gray-400 mt-2">
            Quickly create personalized campaigns to target specific users
          </p>
        </div>
        <main className='p-4 md:p-10 mx-auto max-w-7xl'>

    <Grid  numItemsSm={2} numItemsLg={3} className="
      gap-6 ">
    <CreateCampaign />

      </Grid>
 
      <Card style={{backgroundColor:"#1a1d1e"}} className='mt-10 min-h-[30vh] lg:w-[70%] '>
        <div className='flex gap-4  w-full'>
      <h1 className=' text-white mb-1 font-bold text-2xl'> Campaigns</h1>
       
        </div>

      <hr className='mt-1  '></hr>
      <div className='mt-3  w-full'>
        <div className='flex text-gray-300'>
          
        </div>
        {
          campaignData.map((data,index)=>{
            return(
              <>
              <div className='flex  text-xs items-center sm:text-[16px] gap-2 text-gray-400 justify-between mt-3 px-3'>
               <p>{index+1}</p>
               <p className='flex-1 text-left'>{data.campaignId}</p>
               <p className=' flex-1 text-left'>{data.campaignData.name}</p>
               <p className=' flex-1 text-[green]'>Subscribed</p>
               <div className=' flex-2 m'>
               <Button size={"xs"}>Delete</Button>
               </div>
              </div>
              </>
            )
          })
        }
      </div>
    </Card>

        </main>
    </>
  )
}

export default Page