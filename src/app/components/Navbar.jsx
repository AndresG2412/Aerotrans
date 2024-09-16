"use client";

import Link from "next/link";
import logo from "@/app/Images/logo.png";
import Image from 'next/image';
import React, { useState } from "react";

export default function Navbar2() {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick)
    }
    return(
        <>
            <nav className="bg-[#D9D9D9] w-[95%] mx-auto my-4 rounded-2xl border-2 border-black">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/" className="font-bold text-2xl"><Image className="h-10 w-52" src={logo} alt="Logo"/></Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-6">
                                <Link href="/" className="font-bold text-xl hover:text-red-600 transition-colors duration-400">PEDIR TAXI</Link>
                                <Link href="/" className="font-bold text-xl hover:text-red-600 transition-colors duration-400">POLITICAS</Link>
                                <Link href="/" className="font-bold text-xl hover:text-red-600 transition-colors duration-400">NOSOTROS</Link>
                                <Link href="/" className="font-bold text-xl hover:text-red-600 transition-colors duration-400">SERVICIOS</Link>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-red-600" onClick={toggleNavbar}>
                                {isClick ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="100" viewBox="0 0 50 50">
                                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="100" viewBox="0 0 50 50">
                                    <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-4 sm:px-3 ">
                            <Link href="/" className="block text-center font-bold text-xl hover:text-red-600 transition-colors duration-400">PEDIR TAXI</Link>
                            <Link href="/" className="block text-center font-bold text-xl hover:text-red-600 transition-colors duration-400">POLITICAS</Link>
                            <Link href="/" className="block text-center font-bold text-xl hover:text-red-600 transition-colors duration-400">NOSOTROS</Link>
                            <Link href="/" className="block text-center font-bold text-xl hover:text-red-600 transition-colors duration-400">SERVICIOS</Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}