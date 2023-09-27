import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'created by Shannon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className='dark:bg-slate-800 flex flex-col h-screen justify-between'>
        <div>
          <Navbar />
          <MyProfilePic />
          {children}
        </div>
        <Footer />
      </body>
     
    </html>
  )
}
