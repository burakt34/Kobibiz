import React from 'react'
import Home from './Home/Home'
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

const page = () => {
  return (
    <div className={inter.className}>
      <Home />
    </div>
  )
}

export default page