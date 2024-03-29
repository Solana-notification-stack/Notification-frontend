"use client"
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import { useSelector } from 'react-redux';
import SignupPage from './SignUp/page';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrgDetail from './components/OrgDetail'
import { useAppSelector } from '../store/configureStore';
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
    <>
    {
     <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Your App Details</Title>
      <Search />
      <OrgDetail/>
    </main>
    }
    </>
  );
}
