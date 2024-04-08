'use client';

import { usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/configureStore';
import { setLogout } from '../store';
import { useRouter } from 'next/navigation';
import { Button } from 'flowbite-react';
function classNames(...classes) { 
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const pathname = usePathname();
  const token = useSelector((state)=>state.auth.token) 
  const dispatch = useAppDispatch()

   const router = useRouter()
  const navigation = [
    { name: 'Dashboard', href: '/home' },
    {name:'Register App',href:'/registerApp'},
   
    {name:'Docs',href:'https://docs.notifease.site'}
    

   
  ];
  return (
    <Disclosure as="nav"
    style={ {
      borderBottom: '0.1px solid grey', // Adjust the border style as needed
      borderImageSource: 'linear-gradient(218.01deg, #B07D0F -28.91%, rgba(217, 173, 75, 0.09) 50%)',
      borderImageSlice: '1', // Adjust the border slice as needed
      borderImageRepeat: 'stretch', // Adjust the border repeat as needed
      borderImageWidth: '1', // Adjust the border width as needed
      position:"sticky"
    }}
    className="shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex gap-3 flex-shrink-0 items-center">
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
                  <p className='text-[16px] text-white font-bold'>
                    Notif
                    <span className='text-white'>Ease</span>
                  </p>
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? 'border-slate-500 text-white'
                          : 'border-transparent text-white  ',
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                      )}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                   { <Button 
                      size="sm"
                      onClick={()=>{
                          if(token)
                          {
                            dispatch(setLogout())
                          router.push('/')
                          }else
                          {
                            router.push('/login')
                          }
                      }}
                     
                      className={classNames(
                        pathname === '/login'
                          ? 'border-slate-500 text-white'
                          : 'border-transparent text-white ',
                        ' h-[40%] self-center bg-white text-black'
                      )}
                     
                    >
                      {token?"Logout":"Login"}
                    </Button>}
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
              <Disclosure.Button
              as="a"
              onClick={()=>{
                if(token)
                {
                  dispatch(setLogout())
                router.push('/')
                }else
                {
                  router.push('/login')
                }
            }}
                 className={classNames(
                  pathname === '/logout'
                    ? 'bg-slate-50 border-slate-500 text-slate-700'
                    : 'border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                  'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                )}
              >
                Logout
              </Disclosure.Button>
            </div>
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
