"use client"
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import { useSelector } from 'react-redux';
import SignupPage from './SignUp/page';

export default async function IndexPage() {
  const token=useSelector((state)=>state.token)
  return (
    <>
    {
      token?<main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Register Your App</Title>
      <Search />
    </main>:<SignupPage/>
    }
    </>
  );
}
