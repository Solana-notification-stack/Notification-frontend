'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../store/configureStore';
import { useRouter } from 'next/navigation';
import { Button, Checkbox, Label, TextInput, FileInput, Card } from 'flowbite-react';
import Link from 'next/link';
import { url } from '../constant';

import Nav from '../nav';

const Page = () => {
  const token = useAppSelector((state) => state.auth.token);
  const [orgDetails, setOrgDetails] = useState({});
  const [jsonFile, setJsonFile] = useState(null);
  const [appName, setAppName] = useState('');
  
  const router = useRouter();
  
  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
    const getOrgData = async () => {
      try {
        const res = await fetch(`${url}/organisationData`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        const result = await res.json();
        return result
        
      } catch (error) {
        console.log(error);
      }
    };
    if (token  ) {
      getOrgData().then(v => setOrgDetails(v));
    }
  }, []);

  const handleCreateApp = async () => {
   try {
    const formData = new FormData();
    formData.append('appName', appName);
    formData.append('jsonFile', jsonFile);

   const result= await fetch('https://api-7szm3raj4q-uc.a.run.app/createApp', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    })
    const res=await result.json()
    console.log(res)
   } catch (error) {
     console.log(error)
   }
  };
  return (
    <>
   
    <div className='bg-[#151718] h-full'>
      
    <Nav/>
       <div className='text-center text-3xl mt-5 text-white'>
         Start by creating an App endpoint
         <p className='text-xs text-gray-400 mt-2'>Quickly create an app endpoint to add users and send notification </p>
       </div>
      <Card style={{backgroundColor:"#1a1d1e"}} className="w-[50%] lg:w-[30%] mt-8 mx-auto p-5">
        <div className="flex max-w-md mt-5  flex-col gap-4">
          <div>
            <div className="mb-2 text-white ">
              <Label color="black" htmlFor="email2" value="App Name" />
            </div>
            <input type="email" onChange={(e)=>{
              
              setAppName(e.target.value)}
            } 
              
              name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
          </div>
          <div>
            <div className="mb-2 text-white">
              <Label color="white" htmlFor="password" value="Organisation Id" />
            </div>
            <TextInput
             className='text-black '
              color="black"
              readOnly
              type="text"
              placeholder={orgDetails?.credentials?.orgId}
              required
            />
          </div>
          <div className=" text-white">
            <Label color="white" htmlFor="file-upload" value="Upload File" />
          </div>
          <FileInput
            onChange={(e)=>{
              console.log(e.target.files[0])
             setJsonFile(e.target.files[0])}
           } 
            color="grey"
            sizing={'lg'}
            id="file-upload"
          />
          <Button onClick={handleCreateApp}>Create App</Button>
        </div>
      </Card>
    </div>
    </>
  );
};

export default Page;
