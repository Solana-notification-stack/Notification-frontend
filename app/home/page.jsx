

"use client"
import { Card, Title, Text } from '@tremor/react';
import Search from '../search';
import { useSelector } from 'react-redux';
import Nav from '../nav';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrgDetail from '../components/OrgDetail'
import { useAppSelector } from '../../store/configureStore';
import Loader from '../components/Loader'
export default async function IndexPage() {
  const token=useAppSelector(state=>state.auth.token)
  const router=useRouter()
  useEffect(
    
    ()=>{
       
       if(!token){
         router.push('/login')
       }
    },[]
  )
  return (
    <div 
     className='bg-[#151718] h-screen'
    >
    
       <Nav/>
     <main className="p-4  md:p-10 mx-auto max-w-7xl">
     
      <Title className="text-white">Your App Details</Title>
      <Search />
      <OrgDetail/>
    </main>
    
    </div>
  );
}
