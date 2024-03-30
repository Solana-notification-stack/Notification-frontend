"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import { useAppSelector } from '../../store/configureStore'
import { useRouter } from 'next/navigation'
import { Button, Checkbox, Label, TextInput,FileInput } from "flowbite-react";
import Link from "next/link";
import{ url} from '../constant'
const Page = () => {
    const token=useAppSelector((state)=>state.auth.token)
    const [orgDetails,setOrgDetails]=useState({})
   
    const router=useRouter()
  useEffect(
    
    ()=>{
       
       if(!token){
         router.push('/login')
       }
    },[]
  )
    useEffect(()=>{
        
     const getOrgData= async ()=>{
        try {
            const res= await fetch(
                `${url}/organisationData`,{
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
    <div className=' p-5'>
    <div className="flex max-w-md mt-5  flex-col gap-4">
      <div>
        <div className="mb-2 text-black ">
          <Label color='black' htmlFor="email2" value="App Name" />
        </div>
        <TextInput color="grey" id="email" type="email" placeholder="Your App" required  />
      </div>
      <div>
        <div className="mb-2 ">
          <Label color='black' htmlFor="password" value="Organisation Id" />
        </div>
        <TextInput color="grey" readOnly  type="text" placeholder={orgDetails?.credentials?.orgId} required />
      </div>
      <div className="">
        <Label color='black' htmlFor="file-upload" value="Upload File" />
      </div>
      <FileInput color="grey"  sizing={"lg"} id="file-upload" />    
      <Button type="submit">Create App</Button>
    </div>
    </div>
    </>
  )
}

export default Page