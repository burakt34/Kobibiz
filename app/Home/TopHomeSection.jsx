import Link from 'next/link'
import React from 'react'
import { Inter } from 'next/font/google'
import Header from '../Components/Header/Header'


const inter = Inter({ subsets: ['latin'] })



const TopHomeSection = () => {
    return (
        <div className='min-h-screen '
            style={{ background: 'url("../../images/Component\ 944.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>
            <Header />
            <main className={inter.className}>
                <div className='h-[100vh] text-white md:px-40 pt-20 gap-10 flex flex-col px-4'>
                    <div className='flex flex-col justify-between items-center gap-6'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-6xl xl:text-9xl'>Şirketiniz için</h3>
                            <h4 className='text-6xl xl:text-9xl font-semibold'>Bussines Doctor</h4>
                        </div>
                        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>

                    <div className='flex items-center justify-center gap-4'>
                        <button className='bg-inherit hover:bg-blue-700 text-white py-4 px-8 rounded-full border border-white text-xl '>
                            <Link href="/">Detaylı Bilgi</Link>
                        </button>

                        <button className='bg-inherit hover:bg-blue-700 bg-white text-blue-500 py-4 px-8 rounded-full border border-white text-xl'>
                            <Link href="/">Hemen Başla</Link>
                        </button>
                    </div>
                </div>
            </main>


            <div className='h-[100vh] bg-inherit text-white'>
                <div className='pl-[282px]'>
                    <div className='flex flex-col items-center justify-center w-[129px] h-[120px]'>
                        <div className=''>
                            <img className='w-[60px] h-[60px] bg-contain rounded-full border-[4px] border-navbg' src="../images/mnph.jpg" />
                        </div>
                        <div className='bg-navbg py-3 px-4 rounded-[12px] mt-2'>
                            <p className='text-center text-[14px]'>
                                yeni <br /> şirket kuranlar
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default TopHomeSection