"use client"
import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react';

const StickyNavbar = () => {
    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        const currentPath = window.location.pathname;
        setActivePage(currentPath);
    }, []);
    return (
        <div className='relative h-full top-0'>
            <nav className="bg-gray-600 bg-opacity-35 text-white py-4 px-6 sticky w-1/2 mx-auto rounded-3xl z-20 top-4">
                <div className="container mx-auto flex justify-between items-center text-base gap-6">

                    <Link href="/">
                        <p className="text-lg font-bold">Bussines Doctor</p>
                    </Link>




                    <Link href="/">
                        <p className={`hover:text-gray-300 ${activePage === '/sayfa1' ? 'font-bold' : ''}`}>Kobi Teşvik</p>
                    </Link>


                    <Link href="/">
                        <p className={`hover:text-gray-300 ${activePage === '/sayfa2' ? 'font-bold' : ''}`}>Şirket Kurun</p>
                    </Link>

                    <Link href="/">
                        <p className={`hover:text-gray-300 ${activePage === '/sayfa3' ? 'font-bold' : ''}`}>Kobi İK</p>
                    </Link>

                    <Link href="/">
                        <p className={`hover:text-gray-300 ${activePage === '/sayfa3' ? 'font-bold' : ''}`}>Kobi YOS</p>
                    </Link>


                </div>

            </nav>
        </div>
    )
}

export default StickyNavbar