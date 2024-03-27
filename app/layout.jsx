import './globals.css';
import Nav from './nav';
import { Suspense } from 'react';
import ReduxProvider from '../store/ReduxProvider'
export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

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
     </ReduxProvider>
    
       
      </body>
     
     
    </html>
  );
}
