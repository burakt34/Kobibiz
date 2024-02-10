"use client"
import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "../globals.css"
import StickyNavbar from '../Components/StickyNavbar/StickyNavbar';


const KobiTesvik = () => {
    return (
        <div className='relative h-[4000px] md:h-full'>


            <div className='absolute w-full top-[-100px] h-full'>
                <StickyNavbar />
            </div>

            <div className='h-[100vh] sticky top-0'
                style={{ background: 'url("../images/image 1687.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='md:flex justify-between text-white px-4 md:px-12 h-[100vh] '>
                    <div className='md:w-[545px] my-auto'>
                        <div className='lg:text-8xl font-semibold'>
                            <h3>Bussines</h3>
                            <h3>Doctor</h3>
                        </div>
                        <p className='text-xs mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <button class="bg-white text-blue-700 rounded-full md:w-1/2 mt-10">
                            <div className='flex justify-between items-center py-2 pr-2 pl-8'>
                                <p className='text-xl'>Tüm Hizmetlerimiz</p>
                                <BsFillArrowRightCircleFill className='w-9 h-10' />

                            </div>
                        </button>
                    </div>

                    <div className='h-[100vh-215px] overflow-y-auto no-scrollbar mt-52 gap-6 hidden md:flex flex-col '>
                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <div className='h-[100vh] sticky top-0'
                style={{ background: 'url("../images/image 1693.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='md:flex justify-between text-white px-4 md:px-12 h-[100vh] '>
                    <div className='md:w-[545px] my-auto'>
                        <div className='lg:text-8xl font-semibold'>
                            <h3>Kobi</h3>
                            <h3>Teşvik</h3>
                        </div>
                        <p className='text-xs mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <button class="bg-white text-blue-700 rounded-full md:w-1/2 mt-10">
                            <div className='flex justify-between items-center py-2 pr-2 pl-8'>
                                <p className='text-xl'>Tüm Hizmetlerimiz</p>
                                <BsFillArrowRightCircleFill className='w-9 h-10' />

                            </div>
                        </button>
                    </div>

                    <div className='h-[100vh-215px] overflow-y-auto no-scrollbar mt-52 gap-6 hidden md:flex flex-col '>
                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>





            <div className='h-[100vh] sticky top-0'
                style={{ background: 'url("../images/image 1681.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='md:flex justify-between text-white px-4 md:px-12 h-[100vh] '>
                    <div className='md:w-[545px] my-auto'>
                        <div className='lg:text-8xl font-semibold'>
                            <h3>Şirket</h3>
                            <h3>Kurun</h3>
                        </div>
                        <p className='text-xs mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <button class="bg-white text-blue-700 rounded-full md:w-1/2 mt-10">
                            <div className='flex justify-between items-center py-2 pr-2 pl-8'>
                                <p className='text-xl'>Tüm Hizmetlerimiz</p>
                                <BsFillArrowRightCircleFill className='w-9 h-10' />

                            </div>
                        </button>
                    </div>

                    <div className='h-[100vh-215px] overflow-y-auto no-scrollbar mt-52 gap-6 hidden md:flex flex-col '>
                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>




            <div className='h-[100vh] sticky top-0'
                style={{ background: 'url("../images/image 1689.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='md:flex justify-between text-white px-4 md:px-12 h-[100vh] '>
                    <div className='md:w-[545px] my-auto'>
                        <div className='lg:text-8xl font-semibold'>
                            <h3>Kobi</h3>
                            <h3>İK</h3>
                        </div>
                        <p className='text-xs mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <button class="bg-white text-blue-700 rounded-full md:w-1/2 mt-10">
                            <div className='flex justify-between items-center py-2 pr-2 pl-8'>
                                <p className='text-xl'>Tüm Hizmetlerimiz</p>
                                <BsFillArrowRightCircleFill className='w-9 h-10' />

                            </div>
                        </button>
                    </div>

                    <div className='h-[100vh-215px] overflow-y-auto no-scrollbar mt-52 gap-6 hidden md:flex flex-col '>
                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>




            <div className='h-[100vh] sticky top-0'
                style={{ background: 'url("../images/image 1688.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='md:flex justify-between text-white px-4 md:px-12 h-[100vh] '>
                    <div className='md:w-[545px] my-auto'>
                        <div className='lg:text-8xl font-semibold'>
                            <h3>Kobi</h3>
                            <h3>YOS</h3>
                        </div>
                        <p className='text-xs mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <button class="bg-white text-blue-700 rounded-full md:w-1/2 mt-10">
                            <div className='flex justify-between items-center py-2 pr-2 pl-8'>
                                <p className='text-xl'>Tüm Hizmetlerimiz</p>
                                <BsFillArrowRightCircleFill className='w-9 h-10' />

                            </div>
                        </button>
                    </div>

                    <div className='h-[100vh-215px] overflow-y-auto no-scrollbar mt-52 gap-6 hidden md:flex flex-col '>
                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className='group md:w-[547px] group:'>
                            <div className='flex justify-between md:w-[547px] px-8 py-10 cardbg'>
                                <img className='text-white w-16' src="../images/Component 81.svg" />
                                <div className='md:w-[383px]'>
                                    <h3 className='text-3xl'>İçerik Konusu</h3>
                                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <div className=' mt-6'>
                                        <div className='hidden group-hover:flex justify-between pl-10'>
                                            <button className='bg-white text-blue-700 rounded-full'>
                                                <p className='p-2'>Detaylı Bilgi Al</p>
                                            </button>

                                            <button className=' bg-white text-blue-700 rounded-full flex py-1 px-2 border hover:border-blue-700'>
                                                <p className='p-2'>Hemen Başla</p>
                                                <BsFillArrowRightCircleFill className='w-9 h-10' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>

    )
}

export default KobiTesvik