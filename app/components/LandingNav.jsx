'use client';

import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
function classNames(...classes) { 
  return classes.filter(Boolean).join(' ');
}

export default function LandingNav() {
  const pathname = usePathname();
  
   const router = useRouter()
  const navigation = [
    { name: 'Solution', href: '#solution' },
    {name:'Resources',href:'https://docs.notifease.site'},
    {name:'Pricing',href:'#pricing'},
   

   
  ];
  return (
    <Disclosure  as="nav" className=" shadow-sm">
      {({ open }) => (
        <>
          <div
        //    style={{
        //         background:"transperent",
        //         borderColor: 'var(--combine-library-grey-600) var(--combine-library-grey-600) var(--color-border)',
        //         WebkitBackdropFilter: 'blur(20px)',
        //         backdropFilter: 'blur(20px)',
        //         backgroundColor: '#1b1b1b',
        //         opacity:"0.9"
        //    }}
        style={ {
            borderBottom: '0.1px solid grey', // Adjust the border style as needed
            borderImageSource: 'linear-gradient(218.01deg, #B07D0F -28.91%, rgba(217, 173, 75, 0.09) 50%)',
            borderImageSlice: '1', // Adjust the border slice as needed
            borderImageRepeat: 'stretch', // Adjust the border repeat as needed
            borderImageWidth: '1', // Adjust the border width as needed
            position:"sticky"
          }}
          className="mx-auto w-full  px-4 sm:px-6 lg:px-8">
            <div className="flex  h-16">
              <div className="flex justify-evenly sm:gap-[8rem] lg:gap-[40rem] w-full">
                
                <div className="flex  flex-shrink-0 items-center">
                    
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-gray-100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="100%"
                      height="100%"
                      rx="16"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                      fill="black"
                    />
                  </svg>
                  <div className='font-bold mx-3  text-white'>
                 NotifiEase
                </div>
                <div className="hidden align-end sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? 'border-slate-500 text-gray-900'
                          : 'border-transparent text-white hover:text-[orange] hover:border-gray-300',
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                      )}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                   
                </div>
                </div>
                <div className='flex  items-center'>
                  <Link href={"/login"}>
                    <Button className='h-[75%] bg-white text-black invisible  md:visible rounded-full none hover:scale-110 transition-transform duration-300'>Get Started</Button>
                  </Link>
                </div>
              </div>
             
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? 'bg-slate-50 border-slate-500 text-slate-700'
                      : 'border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                    'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                  )}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
