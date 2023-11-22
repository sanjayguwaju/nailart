import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="w-full float-left text-black">
            <div className="w-full float-left">
                <div className="container mx-auto">
                    <div className="flex items-center">
                        <div className="w-1/2 md:w-1/6 sm:w-1/6">
                            <Link href="/">
                                <p className="navbar-brand">
                                    <Image src="/images/logo.png" alt="logo" width={500} height={300} />
                                </p>
                            </Link>
                        </div>
                        <div className="hidden md:block w-5/6 tex">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link href="#">Home</Link>
                                            <ul className="sub-menu">
                                                <li className='text-black'>
                                                    <Link href="/home1">Home 1</Link>
                                                </li>
                                                <li>
                                                    <Link href="/home2">Home 2</Link>
                                                </li>
                                                <li>
                                                    <Link href="/home3">Home 3</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/contact">Contact Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <div className="search">
                                                <div className="search-box">
                                                    <input type="search" className="search-input" placeholder="Search Here" />
                                                    <Link href="/search">
                                                        search
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/appointment">
                                                <div className="main-btn">
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="block md:hidden w-1/2 sm:w-1/2">
                            <button className="nav-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
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