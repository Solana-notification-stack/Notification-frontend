
import './globals.css';
import Nav from './nav';
import { Suspense } from 'react';
import Footer from './components/Footer'
import dynamic from "next/dynamic";
export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};
const ReduxProvider = dynamic(() => import("../store/ReduxProvider"), {
  ssr: false
});
export default function RootLayout({
  children
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
     <ReduxProvider> 
     <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Footer/>
     </ReduxProvider>
  
       
      </body>
     
     
    </html>
  );
}
