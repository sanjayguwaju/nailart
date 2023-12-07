"use client"

import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log("hello");
        setIsOpen(!isOpen);
    };
    return (
        <div className="w-full text-black">
            <div className="w-full">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="w-1/2 md:w-1/6 sm:w-1/6">
                            <Link href="/">
                                <div className="navbar-brand">
                                    <Image src="/images/logo.png" alt="logo" width={300} height={100} />
                                </div>
                            </Link>
                        </div>
                        <nav className={`flex-grow md:block ${isOpen ? 'block' : 'hidden'}`}>
                            <div>
                                <ul className="flex items-center justify-center space-x-12 p-4">
                                    <li className="group m-2 relative">
                                        <Link href="/">Home</Link>
                                        <ul className="hidden group-hover:block m-1 absolute left-0 bg-white z-10 transition transform ease-in-out duration-200 scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100 w-64 text-lg">
                                            <li className='text-black m-4 px-1'>
                                                <Link href="/home1">Home 1</Link>
                                            </li>
                                            <li className='text-black m-4 px-1'>
                                                <Link href="/home2">Home 2</Link>
                                            </li>
                                            <li className='text-black m-4 px-1'>
                                                <Link href="/home3">Home 3</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='m-2'>
                                        <Link href="/service">Services</Link>
                                    </li>
                                    <li className='m-2'>
                                        <Link href="/gallery">Gallery</Link>
                                    </li>
                                    <li className='m-2'>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li className='m-2'>
                                        <Link href="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className='m-2'>
                            <Link href="/appointment">
                                <div className="px-5 py-3 bg-black text-white rounded hover:bg-blue-700">
                                    Get an Appointment
                                </div>
                            </Link>
                        </div>
                        <div className="block md:hidden w-1/2 sm:w-1/2">
                            <button className="nav-toggle" type="button" onClick={toggleMenu}>
                                <span className="nav-toggle__text">Toggle Menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;