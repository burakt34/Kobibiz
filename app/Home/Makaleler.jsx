import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'



const Makaleler = () => {
    return (
        <div className='min-h-screen py-20 px-4 md:px-12 flex flex-col items-center justify-between gap-10'>
            <h2 className='text-4xl font-semibold'>Makaleler</h2>
            <div className='md:flex flex-row justify-between w-full'>
                <div className='mb-7 md:mb-0 flex flex-col w-full md:w-[432px] gap-8 p-6 bg-gray-100 rounded-3xl group  border-white border transition duration-300 ease-in-out hover:border-blue-500 hover:bg-white'>
                    <img className='rounded-3xl' src="../images/visa-highnote.png.jpg" />

                    <div className=''>
                        <div className='flex items-center justify-between mb-4'>
                            <p>Bussines Doctor</p>
                            <p>8dk Okuma süresi</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    </div>

                    <div className='w-full  hidden group-hover:block'>
                        <p className='text-blue-500 underline flex justify-end cursor-pointer'>Detaylı Bilgi</p>
                    </div>

                </div>

                <div className='mb-7 md:mb-0 flex flex-col w-full md:w-[432px] gap-8 p-6 bg-gray-100 rounded-3xl group  border-white border transition duration-300 ease-in-out hover:border-blue-500 hover:bg-white'>
                    <img className='rounded-3xl' src="../images/visa-highnote.png.jpg" />

                    <div className=''>
                        <div className='flex items-center justify-between mb-4'>
                            <p>Bussines Doctor</p>
                            <p>8dk Okuma süresi</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    </div>

                    <div className='w-full  hidden group-hover:block'>
                        <p className='text-blue-500 underline flex justify-end cursor-pointer'>Detaylı Bilgi</p>
                    </div>

                </div>

                <div className='flex flex-col w-full md:w-[432px] gap-8 p-6 bg-gray-100 rounded-3xl group  border-white border transition duration-300 ease-in-out hover:border-blue-500 hover:bg-white'>
                    <img className='rounded-3xl' src="../images/visa-highnote.png.jpg" />

                    <div className=''>
                        <div className='flex items-center justify-between mb-4'>
                            <p>Bussines Doctor</p>
                            <p>8dk Okuma süresi</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    </div>

                    <div className='w-full  hidden group-hover:block'>
                        <p className='text-blue-500 underline flex justify-end cursor-pointer'>Detaylı Bilgi</p>
                    </div>

                </div>
            </div>


            <button className=' bg-white text-[#072C7D] rounded-full flex py-1 px-2 border border-blue-900 h-[64px] w-[242px] items-center justify-between'>
                <p className='pl-4 text-xl'>Tüm Makaleler</p>
                <BsFillArrowRightCircleFill className='w-12 h-12' />
            </button>

        </div>
    )
}

export default Makaleler