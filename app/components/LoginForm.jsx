'use client';
import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { setLogin,setLogout } from '../../store';
import { useRouter } from 'next/navigation';
import { useAppDispatch,useAppSelector } from '../../store/configureStore';
import {ToastContainer, toast} from 'react-toastify'
import { cardStyle } from '../constant';
import NELogo from '../../assets/NELogo.png'
import Image from 'next/image';
const LoginForm = () => { 
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch = useAppDispatch()
    
    const router = useRouter()
    const loginOrganisation = async () =>{
        const formdata= {
            email:email,
            password:password,  
        }
        try {
            const res= await fetch(
              'https://api-7szm3raj4q-uc.a.run.app/loginOrganisation',{
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body:JSON.stringify(formdata)
              }
            )
            
            
            const result= await res.json()
             
            if(result.token)
            {
              dispatch(setLogin({token:result.token}))
              
              router.push('/home')
              toast.success("logged in Successfully")
            }else{
              console.log("result---->",result)
              toast.error(result.general,{
                position:"top-right",
                autoClose:5000
              })
            }
        } catch (error) {
            console.log("error",error)
        }
    }
  return (
    <>
    <section className="bg-black z-0 h-screen ">
    
  <div className={`flex   h-full flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0`}>
  
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image width={72} className="" src={NELogo} alt="logo"/>
          NotifEase
      </a>
      <div
       style={{background:"linear-gradient(180deg,rgba(5,5,5,0)_0%,rgb(5,5,5)_100%)"}}
      className={`w-full z-[9999]  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  `}>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login
              </h1>
              <div className="space-y-4 md:space-y-6" >
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" id="email" className="bg-transparent  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  
                  <button onClick={loginOrganisation} type="submit" className="w-full text-black bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Login</button>
                  
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Dont have an account? <a href="/signUp" className="font-medium text-primary-600 hover:underline ">Create here</a>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default LoginForm