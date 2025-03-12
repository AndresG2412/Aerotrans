"use client"

import React, { useState } from 'react';
import menu from '../Images/Navbar/image.png';
import close from '../Images/Navbar/image copy.png';
import logo from '../Images/Navbar/logo.png'
import logosm from '../Images/Navbar/logosm.png'

import Image from 'next/image';
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-xl w-[100%] fixed top-0 right-0 z-50">
            <ul className="w-[100%] flex justify-end items-center">
                <li className="h-[60px] mr-auto group">
                    <Link className="h-[100%] px-[30px] flex items-center group-hover:scale-110 group-hover:transition-transform group-hover:duration-300" href="/">
                        <Image priority={false} className="h-9 w-auto imagenes" src={logo} alt="Logo"/>
                        <Image priority={false} className="h-9 w-auto hidden show-image" src={logosm} alt="Logo"/>
                    </Link>
                </li>
                <li className="h-[60px] group">
                    <Link className="group-hover:bg-gray-300 group-hover:duration-500 h-[100%] px-[20px] hide-on-small flex items-center color-black text-xl font-bold tracking-wider" href="../Pages/Pedido">
                    <p className='group-hover:scale-110 group-hover:transition-transform group-hover:duration-300'>PEDIR TAXI</p></Link>
                </li>
                <li className="h-[60px] group">
                    <Link className="group-hover:bg-gray-300 group-hover:duration-500 h-[100%] px-[20px] hide-on-small flex items-center color-black text-xl font-bold tracking-wider" href="../Pages/Politicas">
                    <p className='group-hover:scale-110 group-hover:transition-transform group-hover:duration-300'>POLITICAS</p></Link>
                </li>
                <li className="h-[60px] group">
                    <Link className="group-hover:bg-gray-300 group-hover:duration-500 h-[100%] px-[20px] hide-on-small flex items-center color-black text-xl font-bold tracking-wider" href="../Pages/Nosotros">
                    <p className='group-hover:scale-110 group-hover:transition-transform group-hover:duration-300'>NOSOTROS</p></Link>
                </li>
                <li className="h-[60px] group">
                    <Link className="group-hover:bg-gray-300 group-hover:duration-500 h-[100%] px-[20px] hide-on-small flex items-center color-black text-xl font-bold tracking-wider" href="../Pages/Contacto">
                    <p className='group-hover:scale-110 group-hover:transition-transform group-hover:duration-300'>CONTACTO</p></Link>
                </li>
                <li className="h-[60px] group">
                    <Link className="group-hover:bg-gray-300 group-hover:duration-500 h-[100%] px-[20px] hide-on-small flex items-center color-black text-xl font-bold tracking-wider" href="../Pages/Servicios">
                    <p className='group-hover:scale-110 group-hover:transition-transform group-hover:duration-300'>SERVICIOS</p></Link>
                </li>
                <li className="h-[60px] group">
                    <button onClick={toggleMenu} className="h-[100%] px-[30px] hidden show-burger items-center">
                        <Image priority={false} className="w-7 h-auto" src={menu} alt="Menu"/>
                    </button>
                </li>
            </ul>

            {/* Menú desplegable */}
            <ul className={`menu-dropdown backdrop-blur-xs bg-[rgba(255,255,255)] items-start fixed top-0 right-0 h-[100vh] z-50 shadow-xl flex-col justify-start ${isMenuOpen ? 'flex' : 'hidden'}`}>
                <li className="h-[60px] w-[100%]">
                    <button onClick={toggleMenu} className="w-[100%] h-[100%] px-[30px] flex items-center justify-end">
                        <Image priority={false} className="w-7 h-auto" src={close} alt="Close"/>
                    </button>
                </li>
                <li className="h-[60px] w-[100%]">
                    <Link onClick={toggleMenu} className="w-[100%] h-[100%] px-[60px] flex justify-center items-center color-black text-xl font-bold tracking-wider hover:bg-[#f0f0f0] hover:transition-all" href="../Pages/Pedido">PEDIR TAXI</Link>
                </li>
                <li className="h-[60px] w-[100%]">
                    <Link onClick={toggleMenu} className="w-[100%] h-[100%] px-[60px] flex justify-center items-center color-black text-xl font-bold tracking-wider hover:bg-[#f0f0f0] hover:transition-all" href="../Pages/Politicas">POLITICAS</Link>
                </li>
                <li className="h-[60px] w-[100%]">
                    <Link onClick={toggleMenu} className="w-[100%] h-[100%] px-[60px] flex justify-center items-center color-black text-xl font-bold tracking-wider hover:bg-[#f0f0f0] hover:transition-all" href="../Pages/Nosotros">NOSOTROS</Link>
                </li>
                <li className="h-[60px] w-[100%]">
                    <Link onClick={toggleMenu} className="w-[100%] h-[100%] px-[60px] flex justify-center items-center color-black text-xl font-bold tracking-wider hover:bg-[#f0f0f0] hover:transition-all" href="../Pages/Contacto">CONTACTO</Link>
                </li>
                <li className="h-[60px] w-[100%]">
                    <Link onClick={toggleMenu} className="w-[100%] h-[100%] px-[60px] flex justify-center items-center color-black text-xl font-bold tracking-wider hover:bg-[#f0f0f0] hover:transition-all" href="../Pages/Servicios">SERVICIOS</Link>
                </li>
            </ul>
        </nav>
    );
}
