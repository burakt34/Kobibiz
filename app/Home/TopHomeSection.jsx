import Link from 'next/link'
import React from 'react'
import { Inter } from 'next/font/google'
import Header from '../Components/Header/Header'
import "../globals.css"



const inter = Inter({ subsets: ['latin'] })



const TopHomeSection = () => {
    return (
        <div className='min-h-screen '
            style={{ background: 'url("../../images/Example.png")', backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>
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

                        <button className='bg-inherit hover:bg-blue-700 hover:text-white bg-white text-blue-500 py-4 px-8 rounded-full border border-white text-xl'>
                            <Link href="/">Hemen Başla</Link>
                        </button>
                    </div>
                </div>
            </main>

            <div className=' bg-inherit text-white   p-[150px]'>
                {/* <div className='relative xl:h-[1100px] border-dashed border-sky-500 border-2 rounded-full'>
                    <div>
                        <div className='  flex justify-between md:pr-[333px]'>
                            <div className=''>
                                <img className=' bg-contain  border-navbg' src="../images/Frame 1171277458.svg" />
                            </div>

                            <div className=''>
                                <img className=' bg-contain  border-navbg' src="../images/Frame 1171277458.svg" />
                            </div>
                        </div>

                        <div className='m-auto relative xl:h-[700px] xl:w-[700px] border-dashed border-sky-500 border-2 rounded-full'>

                            <div className='flex justify-between items-center h-full w-full'>
                                <img className=' bg-contain  border-navbg' src="../images/Frame 1171277458.svg" />


                                <div className='flex items-center justify-center'>
                                    <img className=' bg-contain border-[10px] rounded-full border-topbor' src="../images/Blog.png" />
                                    <div className='absolute m-auto playBtn'>
                                        <div className='flex items-center px-3 py-2 gap-4 cursor-pointer'>
                                            <img className='' src="../images/Frame 1171277411.svg" />
                                            <p className='text-[20px]'>Hemen İzle</p>
                                        </div>
                                    </div>
                                </div>


                                <img className=' mt-[150px] bg-contain  border-navbg' src="../images/Frame 1171277458.svg" />



                            </div>





                        </div>

                        <div className='absolute w-full'>
                            <div className='flex justify-between w-full'>
                                <img className=' bg-contain  border-navbg' src="../images/Frame 1171277458.svg" />
                                <img className=' bg-contain  border-navbg' src="../images/Frame 1171277458.svg" />

                            </div>

                        </div>


                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default TopHomeSection