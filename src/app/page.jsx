import Image from "next/image";

import Bienvenida from './Images/Bienvenida.png'
import servicios from "@/app/Images/Serv-disponibles.png";
import Slider from "./Components/Slider";
import Rating from "./Components/Rating";
import ImageUpload from "./Components/Image";
import Button from "./Components/Botton";

import s1 from "@/app/Images/Slider1/image.png";
import s2 from "@/app/Images/Slider1/image2.png";
import s3 from "@/app/Images/Slider1/image3.png";
import enviar from "@/app/Images/Contacto/enviar.png"


const images = [s1, s2, s3] 


export default function Home() {
	return (
		<>
            {/* Bienvenida */}
            <div className="h-screen flex flex-col items-center justify-center responsible-1000 ">
                <h1 className="font-semibold text-xl md:text-2xl text-center">La calidad total a su servicio</h1>
                <h1 style={{ fontFamily: "'Inknut Antiqua', serif" }} className="font-bold texto-inicial text-5xl md:text-8xl text-center mt-3">AEROTRANS</h1>
            
                <div 
                    className="bg-[#d4d4d4] mt-28 md:mt-16 w-full h-auto block md:flex md:justify-center md:items-center md:gap-x-8 py-5 shadow-2xl"
                    style={{
                        backgroundImage: `url(${Bienvenida.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: '#999'
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

            {/* Sliders */}
            <div>
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

            {/* Comentarios */}
            <div className="mt-24">
                <p className="font-bold text-2xl text-center">CALIFICA TU EXPERIENCIA</p>
                <div className="mt-4 border-[3px] border-black rounded-2xl md:w-[45rem] h-auto mx-10 md:mx-auto flex flex-col p-6">
                    <div className="max-w-full flex flex-col justify-center gap-6 md:gap-16 mb-6">
                        <div>
                            <input type="text" placeholder="Nombre completo" className="placeholder-[#444] py-2 px-4 rounded-lg bg-transparent shadow-xl border-2 border-dashed border-[#777] block my-4 w-full"/>
                            <input type="email" placeholder="Correo electronico" className="placeholder-[#444] py-2 px-4 rounded-lg bg-transparent shadow-xl border-2 border-dashed border-[#777] block my-4 w-full"/>
                            <div className="mt-8 flex justify-center">
                                <Rating/>
                            </div>
                        </div>
                        <div className="mx-auto">
                            <ImageUpload/>
                        </div>
                    </div>

                    <textarea id="message" rows="4" className="placeholder-[#444] mx-auto w-full md:w-3/4 resize-none py-2 px-4 rounded-lg bg-transparent shadow-2xl border-2 border-dashed border-[#777]" placeholder="Escribenos tu experiencia"></textarea>
                    <Button titulo={"Enviar"} color={"red"} image={enviar}></Button>
                </div>
            </div>
        </>
	);
}
