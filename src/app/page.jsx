import Image from "next/image";
import img1 from "@/app/Images/imgpitalito.png";
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
            <div className="h-screen flex flex-col items-center justify-center responsible-1000 ">
                <h1 className="font-semibold text-xl md:text-2xl text-center">La calidad total a su servicio</h1>
                <h1 style={{ fontFamily: "'Inknut Antiqua', serif" }} className="font-bold texto-inicial text-5xl md:text-8xl text-center mt-3">AEROTRANS</h1>
            
                <div 
                    className="bg-[#d4d4d4] mt-24 md:mt-16 w-full h-auto block md:flex md:justify-center md:items-center md:gap-x-8 py-5 shadow-2xl"
                    style={{
                        backgroundImage: `url('https://files.alerta.rcnradio.com/alerta_tolima_prod/public/styles/image800x600/public/2020-12/pitalito_aleja_herrera_0_0_0.jpg?LZIM3N7Ktl7.sVz0JQ5kjXwV6hm8mSZt&itok=EZS94Q-8')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <div className="text-center md:text-start font-semibold text-xl md:text-3xl">
                        <p className="my-2 md:my-4">Con muchos servicios</p>
                        <p className="my-2 md:my-4">disponibles para cada</p>
                        <p className="my-2 md:my-4">necesidad y con seguridad</p>
                    </div>
                    <Image 
                        src={servicios} 
                        alt="servicios" 
                        className="mx-auto mt-6 md:mx-0"
                    />
                </div>
            </div>

            {/* primer slider */}
            <div className="md:flex justify-center items-center md:mt-24 mb-12 md:mb-0">
                <div className="">
                    <Slider images={images}/>
                </div>

                <div className="md:pl-8 mt-6 md:mt-0 text-center md:text-start">
                    <p className="text-3xl my-3 md:my-5 font-semibold text-black">Manejando controles</p>
                    <p className="text-3xl my-3 md:my-5 font-semibold text-black">de seguridad antes</p>
                    <p className="text-3xl my-3 md:my-5 font-semibold text-black">de cada jornada</p>
                </div>
            </div>

            {/* segundo slider */}
            <div className="md:flex justify-center items-center md:mt-24 mb-12 md:mb-0">
                <div className="hidden md:block md:pr-8 mt-6 md:mt-0 text-center md:text-start">
                    <p className="text-3xl my-3 md:my-5 font-semibold text-black">Antes de cada jornada</p>
                    <p className="text-3xl my-3 md:my-5 font-semibold text-black">verificando la seguridad</p>
                    <p className="text-3xl my-3 md:my-5 font-semibold text-black">para todos los pasajero</p>
                </div>

                <div className="">
                    <Slider images={images}/>
                </div>

                <div className="block md:hidden md:pr-8 mt-6 md:mt-0 text-center md:text-start">
                    <p className="text-3xl my-3 md:my-5 font-semibold text-black">Antes de cada jornada</p>
                    <p className="text-3xl my-3 md:my-5 font-semibold text-black">verificando la seguridad</p>
                    <p className="text-3xl my-3 md:my-5 font-semibold text-black">para todos los pasajero</p>
                </div>

            </div>

            {/* tercer slider */}
            <div className="md:flex justify-center items-center md:mt-24 mb-12 md:mb-12">
                <div className="">
                    <Slider images={images}/>
                </div>

                <div className="md:pl-8 mt-6 md:mt-0 text-center md:text-start">
                    <p className="text-3xl my-3 md:my-5 font-semibold text-black">Y asi finalmente</p>
                    <p className="text-3xl my-3 md:my-5 font-semibold text-black">poder brindarte</p>
                    <p className="text-3xl my-3 md:my-5 font-semibold text-black">la mejor experiencia</p>
                </div>
            </div>
        </>
	);
}
