import React from 'react'
import { Inter } from 'next/font/google'
import Header from '../Components/Header/Header'
import TopHomeSection from './TopHomeSection'
import KobiTesvik from './KobiTesvik'
import Sss from './Sss'
import ReadLatest from './ReadLatest'
import Makaleler from './Makaleler'
import Hadi from './Hadi'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='min-h-screen'>
        {/* <Header/> */}
        <TopHomeSection />
        <KobiTesvik />
        <Sss/>
        <ReadLatest/>
        <Makaleler/>
        <Hadi/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home