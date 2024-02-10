"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

const AccordionItem = ({ title, content, open, setOpen }) => {
    const toggleAccordion = () => {
        setOpen(!open);
    };

    return (
        <div className="mb-8">
            <div className={`rounded-xl ${open ? 'bg-white dark:bg-white' : 'bg-gray-100 dark:bg-gray-900 dark:text-gray-400'}`}>
                <button
                    onClick={toggleAccordion}
                    className="flex items-center justify-between w-full p-5 border border-b-0 border-gray-300 dark:border-gray-700"
                >
                    <div>{title}</div>
                    <div>{open ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}</div>
                </button>
                {open && (
                    <div className="p-5 bg-white dark:bg-white">
                        <p className="mb-2">{content}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(index);
    };

    return (
        <div>



            <AccordionItem
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                open={openIndex === 0}
                setOpen={() => handleToggle(0)}
            />
            <AccordionItem
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                open={openIndex === 1}
                setOpen={() => handleToggle(1)}
            />
            <AccordionItem
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                open={openIndex === 2}
                setOpen={() => handleToggle(2)}
            />
            <AccordionItem
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                open={openIndex === 3}
                setOpen={() => handleToggle(3)}
            />
            <AccordionItem
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                open={openIndex === 4}
                setOpen={() => handleToggle(4)}
            />
            <AccordionItem
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                open={openIndex === 5}
                setOpen={() => handleToggle(5)}
            />
        </div>
    );
};

const Sss = () => {
    return (
        <div className="mx-4 md:px-12 min-h-screen py-20">
            <h2 className='text-4xl font-medium mb-10'>Sıkça Sorulan Sorular</h2>
            <div className="px-10 md:px-20">
                <Accordion />

                <Link href="/" className='flex justify-center items-center mt-10 '>
                    <button className='flex justify-center items-center gap-4 border border-blue-600 p-2 rounded-3xl ps-8 '>
                        <p className='text-xl text-blue-950 font-light '>Tüm Sıkça Sorulan Sorular</p>
                        <BsFillArrowRightCircleFill className='w-9 h-10' />
                    </button>
                </Link>
            </div>
            
        </div>
    );
};

export default Sss;
