import React from 'react'
import "../globals.css"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';






const Hadi = () => {
    return (
        <div className='h-full text-white'
            style={{ background: 'url("../../images/Component\ 94.jpg")', backgroundRepeat: "", backgroundSize: "cover", }} >
            <div className=' min-h-screen py-20 px-12 text-white flex flex-col items-center justify-between'>
                <div className='md:flex items-center justify-between w-full'>
                    <img src="../images/Layer 1.svg" alt="" />
                    <img src="../images/Union.svg" alt="" />
                    <img src="../images/Union (1).svg" alt="" />
                    <img src="../images/Union (1).svg" alt="" />
                    <img src="../images/Union (1).svg" alt="" />
                </div>

                <div className='flex flex-col justify-center items-center '>
                    <h2 className='md:text-8xl'>Hadi Konuşalım</h2>
                    <button className='flex items-center gap-4 hba mt-14'>
                        <div className='!bg-green-600 rounded-full h-12 w-12 flex items-center justify-center'>
                            <FaWhatsapp className='h-8 w-8' />
                        </div>
                        <p className='text-xl'>Konuşmaya Başla</p>
                    </button>
                </div>
            </div>

            <div className='md:px-12 '>
                <hr className='h-[1px] mb-6' />
                <div className='md:flex gap-6 w-full justify-between px-28'>

                    <div className='flex flex-col w-[204px]  justify-between'>
                        <h3 className='text-base'>HİZMETLER</h3>
                        <div className='fhb'>
                            <p className='mb-6'>Şahıs Şirketi Kur</p>
                            <p className='mb-6'>Limited ve Anonim Şirketi Kur</p>
                            <p className='mb-6'>Muhasebe Takibi</p>
                            <p>Kurumsal koçluk</p>
                        </div>
                    </div>


                    <div className='flex flex-col w-[204px]  justify-between'>
                        <h3 className='text-base'>HİZMETLER</h3>
                        <div className='fhb'>
                            <p className='mb-6'>Şahıs Şirketi Kur</p>
                            <p className='mb-6'>Limited ve Anonim Şirketi Kur</p>
                            <p className='mb-6'>Muhasebe Takibi</p>
                            <p>Kurumsal koçluk</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-[204px]  justify-between'>
                        <h3 className='text-base'>HİZMETLER</h3>
                        <div className='fhb'>
                            <p className='mb-6'>Şahıs Şirketi Kur</p>
                            <p className='mb-6'>Limited ve Anonim Şirketi Kur</p>
                            <p className='mb-6'>Muhasebe Takibi</p>
                            <p>Kurumsal koçluk</p>
                        </div>
                    </div>


                    <div className='md:flex flex-col w-[204px]  justify-between'>
                        <h3 className='text-base'>HİZMETLER</h3>
                        <div className='fhb'>
                            <p className='mb-6'>Şahıs Şirketi Kur</p>
                            <p className='mb-6'>Limited ve Anonim Şirketi Kur</p>
                            <p className='mb-6'>Muhasebe Takibi</p>
                            <p>Kurumsal koçluk</p>
                        </div>
                    </div>

                    <div className='pb-10 md:pb-0'>
                        <h3 className='text-base mb-[14px]'>TAKİP ET</h3>
                        <div className='flex gap-2'>
                            <div>
                                <FaInstagram className='w-8 h-8' />
                            </div>
                            <div>
                                <FaSquareFacebook className='w-8 h-8' />
                            </div>
                            <div>
                                <IoLogoTwitter className='w-8 h-8' />
                            </div>
                            <div>
                                <FaYoutube className='w-8 h-8' />
                            </div>
                        </div>
                    </div>

                </div>
                <hr className='h-[1px] mt-6' />
            </div>
            <div className='flex items-center justify-center w-full'>
                <div className='text-white flex gap-10 text-sm font-normal mt-6'>
                    <Link href="/">Gizlilik Politikası</Link>
                    <Link href="/">GelsinSağlık© 2023 Tüm Hakları Saklıdır.</Link>
                    <Link href="/">Kullanım Şartları</Link>
                </div>
            </div>

            <div className='flex items-center justify-center w-full mt-[67px]'>
                <img className='' src="../images/Kobibiz_logo (1).svg" />
            </div>
        </div>
    )
}

export default Hadi