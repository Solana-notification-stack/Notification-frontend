'use client';

import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Chart from './chart';
import { useEffect } from 'react';
import { useAppSelector } from '../../store/configureStore';
import { useRouter,useSearchParams } from 'next/navigation';


const shop = [
  { name: '/home', value: 453 },
  { name: '/imprint', value: 351 },
  { name: '/shop', value: 271 },
  { name: '/pricing', value: 191 }
];

// const app = [
//   { name: '/shop', value: 789 },
//   { name: '/product-features', value: 676 },
//   { name: '/about', value: 564 },
//   { name: '/login', value: 234 },
//   { name: '/downloads', value: 191 }
// ];



export default function PlaygroundPage(props) {
  const token=useAppSelector(state=>state.auth.token)
  const router=useRouter()
  const search =useSearchParams()
  const appId=search.get('appId')

  const website = [
    { name: 'App ID', value: appId },
    { name: 'Created At', value: "29/03/2024"||props.created },
    { name: 'Organisation ID', value: "ORG-1265"||props.orgId },
   
  ];
  const data = [
    {
      category: props.appName||"My APP",
      stat: '10',
      data: website
    }
  ];
 
  useEffect(
    ()=>{
       if(!token){
         router.push('/login')

       }else{
        
       }
    },[])
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {data.map((item) => (
          <Card key={item.category}>
            <Title>{item.category}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{item.stat}</Metric>
              <Text>Total Users</Text>
            </Flex>
            <Flex className="mt-6">
              <Text>Details</Text>
            
            </Flex>
           <div className='mt-3'>
            {
              item.data.map((data)=>{
                 return(
                  <>
                  <div className='flex text-gray-600  justify-between'>
                    <p>{data.name}</p>
                    <p>{data.value}</p>
                  </div>
                  </>
                 )
              })
            }
           </div>
          </Card>
        ))}
      </Grid>
      <div>

      </div>
    </main>
  );
}
