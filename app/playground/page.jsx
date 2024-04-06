'use client';

import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Chart from './chart';
import{ url }from '../constant'
import NotificationModal from '../components/NotificationModal'
import Page from '../campaigns/page';
import { useEffect,useState } from 'react';
import { useAppSelector,useAppDispatch } from '../../store/configureStore';
import { setAppSecret,setAppData } from '../../store';
import { useRouter,useSearchParams } from 'next/navigation';
import Nav from '../nav';
import Image from 'next/image';
import bellIcon from '../../assets/bellIcon.png'
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

// const app = [
//   { name: '/shop', value: 789 },
//   { name: '/product-features', value: 676 },
//   { name: '/about', value: 564 },
//   { name: '/login', value: 234 },
//   { name: '/downloads', value: 191 }
// ];

const userData=[{
  userIdentifier:"3JUtHjPUsPmBtspC483jM9r5zktR8aannky6wPjPwNe6"

},{
  userIdentifier:"3JUtHjPUsPmBtspC483jM9r5zktR8aannky6wPjPwNe6"

},
{
  userIdentifier:"3JUtHjPUsPmBtspC483jM9r5zktR8aannky6wPjPwNe6"

},
]

export default function PlaygroundPage(props) {
  const token=useAppSelector(state=>state.auth.token)
  const dispatch = useAppDispatch()
  const router=useRouter()
  const search =useSearchParams()
  const appId=search.get('appId')

   const [appData,setAppdata]=useState([])
  const website = [
    { name: 'App ID', value: appId },
    { name: 'Created At', value: "29/03/2024"||props.created },
    { name: 'Organisation ID', value: appData.orgId  },
    { name: 'App secret', value: appData.appSecret  },
   
  ];
  
 
  useEffect(
    ()=>{
      const getAppDetails = async ()=>{
        const res= await fetch(
          `${url}/getAppData/${appId}`,{
            method:'GET',
            headers: {
                
                "Authorization": `Bearer ${token}`
              },
            
          }
        )
        const result= await res.json()
        console.log("result----->",result)
        return result
       }
       if(!token){
         router.push('/login')

       }else {
         getAppDetails().then(v=>{
          setAppdata(v)
          dispatch(setAppSecret({appSecret:v.appSecret}))
          dispatch(setAppData({appData:v}))
         })
       }
    },[])

    const data = [
      {
        category: props.appName||"My APP",
        stat: `${appData.userIds?appData?.userIds.length:0}`,
        data: website
      }
    ];
  return (
    <div div className='bg-[#151718] h-full'>
    <div className=' w-full'>
    <Nav/>
    </div>
    <Tabs className='justify-evenly gap-5' aria-label="Tabs with icons" style="underline">
    <Tabs.Item active title="Appboard" icon={HiUserCircle}>
    <main className="px-4  mx-auto max-w-7xl">
    
      <Grid numItemsSm={2} numItemsLg={3} className="
       
      gap-6">
        {data.map((item) => (
          <Card key={item.category}
            className="text-white bg-[#1a1d1e]"
          >
            <Title className="text-white" >{item.category}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2 text-white"
            >
              <Metric className="text-gray-500">{item.stat}</Metric>
              <Text className="text-gray-500">Total Users</Text>
            </Flex>
            <Flex className="mt-6">
              <Text className="text-white" >Details</Text>
            
            </Flex>
           <div className='mt-3'>
            {
              item.data.map((data)=>{
                 return(
                  <>
                  <div key={data.name} className='flex text-white   justify-between'>
                    <p >{data.name}</p>
                    <p className='text-gray-400'>{data.value}</p>
                  </div>
                  </>
                 )
              })
            }
           </div>
          </Card>
        ))}
         {data.map((item) => (
          <Card key={item.category}
            className="text-white  bg-[#1a1d1e]"
          >
            <Title className="text-white text-center" >Send Notification</Title>
            <Image alt='bellIcon' className='rounded-full mx-auto mt-5' height={120} src={bellIcon}/>
            <Flex className="mt-6">
              <div className='mx-auto'>

            <NotificationModal appSecret={appData.appSecret} />
              </div>
            </Flex>
           <div className='mt-3'>
            
           </div>
          </Card>
        ))}
      </Grid>
      
      <div>
      <Card style={{backgroundColor:"#1a1d1e"}} className='mt-10 min-h-[30vh] lg:w-[70%] '>
        <div className='flex gap-4  w-full'>
      <h1 className=' text-white mb-1 font-bold text-2xl'> Users</h1>
       
        </div>

      <hr className='mt-1  '></hr>
      <div className='mt-3  w-full'>
        <div className='flex text-gray-300'>
           
        </div>
        {userData?.map((data,index)=>{
            return(
              <>
              <div className='flex text-xs sm:text-[16px] text-gray-400 justify-between mt-3 px-3'>
               <p>{index+1}</p>
               <p>{data.userIdentifier}</p>
               <p className='text-[green]'>Subscribed</p>
              </div>
              </>
            )
        })}
      </div>
    </Card>
      </div>
    </main>
      </Tabs.Item>
      <Tabs.Item title="Campaign" icon={MdDashboard}>
       <Page />
      </Tabs.Item>
      <Tabs.Item title="Notification" icon={IoIosNotifications}>
      
      </Tabs.Item>
    </Tabs>

    </div>
  );
}
