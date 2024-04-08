
import './globals.css';
import Nav from './nav';
import { Suspense } from 'react';
import { styles } from './constant';
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import dynamic from "next/dynamic";
import { ToastContainer } from 'react-toastify';
export const metadata = {
  title: 'NotifEase',
  description:
    'Mobile Notification Stack For Solana'
};
const ReduxProvider = dynamic(() => import("../store/ReduxProvider"), {
  ssr: false
});
export default function RootLayout({
  children
}) {
  return (
    <html lang="en" className="h-full ">
      <body className="h-full ">
     <ReduxProvider> 
        <ToastContainer position='top-right'/>
        {children}
        <Footer/>
     </ReduxProvider>
  
       
      </body>
     
     
    </html>
  );
}
