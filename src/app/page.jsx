"use client"

import Image from "next/image";

import Bienvenida from './Images/Bienvenida.png'
import servicios from "@/app/Images/Serv-disponibles.png";
import Slider from "./Components/Slider";

import s1 from "@/app/Images/Slider1/image.png";
import s2 from "@/app/Images/Slider1/image2.png";
import s3 from "@/app/Images/Slider1/image3.png";

import { useState } from "react";

const images = [s1, s2, s3] 


export default function Home() {
    const [tab, setTab] = useState(1);

	return (
		<>
            {/* Bienvenida */}
            <div className="h-screen flex flex-col items-center justify-center responsible-1000 ">
                <h1 className="font-semibold text-xl md:text-2xl text-center">La calidad total a su servicio</h1>
                <h1 style={{ fontFamily: "'Inknut Antiqua', serif" }} className="font-bold texto-inicial text-5xl md:text-8xl text-center mt-3">AEROTRANS</h1>
            
                <div 
                    className="boxShadow mt-28 md:mt-16 w-full h-auto block md:flex md:justify-center md:items-center md:gap-x-8 py-5 shadow-2xl"
                    style={{
                        backgroundImage: `url(${Bienvenida.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <div className="text-center md:text-start font-semibold text-3xl md:text-3xl tracking-wide">
                        <p className="my-1 md:my-4">Con muchos servicios</p>
                        <p className="my-1 md:my-4">Disponibles para cada</p>
                        <p className="my-1 md:my-4">Necesidad y con seguridad</p>
                    </div>
                    <Image 
                        src={servicios} 
                        alt="servicios" 
                        className="mx-auto mt-6 md:mx-0"
                    />
                </div>
            </div>

            {/* Tab info */}
            <div className="text-center my-12">
                <div className="flex justify-center gap-4">
                    <button onClick={() => setTab(1)} className="px-4 py-2 bg-blue-600 hover:transition-all hover:scale-110 shadow-[0px_6px_15px_rgba(0,0,0,0.35)] tracking-wider uppercase text-white font-semibold rounded">Taxis</button>
                    <button onClick={() => setTab(2)} className="px-4 py-2 bg-blue-600 hover:transition-all hover:scale-110 shadow-[0px_6px_15px_rgba(0,0,0,0.35)] tracking-wider uppercase text-white font-semibold rounded">Camionetas</button>
                    <button onClick={() => setTab(3)} className="px-4 py-2 bg-blue-600 hover:transition-all hover:scale-110 shadow-[0px_6px_15px_rgba(0,0,0,0.35)] tracking-wider uppercase text-white font-semibold rounded">Busetas</button>
                </div>
                <div className="mt-6 p-4 border border-gray-600 rounded-md mx-8 md:w-2/3 md:mx-auto">
                    {tab === 1 && <p>Información 1</p>}
                    {tab === 2 && <p>Información 2</p>}
                    {tab === 3 && <p>Información 3</p>}
                </div>
            </div>

            {/* Sliders */}
            <div className="mb-24 mt-12">
                {/* primer slider */}
                <div className="md:flex justify-center items-center md:mt-24 mb-12 md:mb-0">
                    <div className="">
                        <Slider images={images}/>
                    </div>

                    <div className="md:pl-8 mt-6 md:mt-0 text-center md:text-start">
                        <p className="text-2xl md:my-5 font-semibold text-black">Manejando controles</p>
                        <p className="text-2xl md:my-5 font-semibold text-black">de seguridad antes</p>
                        <p className="text-2xl md:my-5 font-semibold text-black">de cada jornada</p>
                    </div>
                </div>

                {/* segundo slider */}
                <div className="md:flex justify-center items-center md:mt-24 mb-12 md:mb-0">
                    <div className="hidden md:block md:pr-8 mt-6 md:mt-0 text-center md:text-start">
                        <p className="text-2xl md:my-5 font-semibold text-black">Antes de cada jornada</p>
                        <p className="text-2xl md:my-5 font-semibold text-black">verificando la seguridad</p>
                        <p className="text-2xl md:my-5 font-semibold text-black">para todos los pasajero</p>
                    </div>

                    <div className="">
                        <Slider images={images}/>
                    </div>

                    <div className="block md:hidden md:pr-8 mt-6 md:mt-0 text-center md:text-start">
                        <p className="text-2xl md:my-5 font-semibold text-black">Antes de cada jornada</p>
                        <p className="text-2xl md:my-5 font-semibold text-black">verificando la seguridad</p>
                        <p className="text-2xl md:my-5 font-semibold text-black">para todos los pasajero</p>
                    </div>

                </div>

                {/* tercer slider */}
                <div className="md:flex justify-center items-center md:mt-24 mb-12 md:mb-12">
                    <div className="">
                        <Slider images={images}/>
                    </div>

                    <div className="md:pl-8 mt-6 md:mt-0 text-center md:text-start">
                        <p className="text-2xl md:my-5 font-semibold text-black">Y asi finalmente</p>
                        <p className="text-2xl md:my-5 font-semibold text-black">poder brindarte</p>
                        <p className="text-2xl md:my-5 font-semibold text-black">la mejor experiencia</p>
                    </div>
                </div>
            </div>
        </>
	);
}
