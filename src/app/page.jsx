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
            <h1 className="font-semibold text-xl md:text-2xl text-center mt-36">La calidad total a su servicio</h1>
            <h1 style={{ fontFamily: "'Inknut Antiqua', serif" }} className="font-bold texto-inicial text-5xl md:text-8xl text-center mt-3">AEROTRANS</h1>
		
            <div 
                className="bg-[#d4d4d4] mt-16 w-full h-auto block md:flex md:justify-center md:items-center md:gap-x-8 py-5 shadow-2xl"
                style={{
                    backgroundImage: `url('https://files.alerta.rcnradio.com/alerta_tolima_prod/public/styles/image800x600/public/2020-12/pitalito_aleja_herrera_0_0_0.jpg?LZIM3N7Ktl7.sVz0JQ5kjXwV6hm8mSZt&itok=EZS94Q-8')`,
                    backgroundSize: 'cover', // Asegura que la imagen cubra todo el div
                    backgroundPosition: 'center', // Centra la imagen
                    backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
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

            {/* <div 
                className="mt-16 h-auto w-full md:h-64 md:flex justify-center items-center gap-x-32 bg-[#d4d4d4]" >
                <div className="text-center md:text-left pt-12 md:p-0">
                    <p className="font-semibold text-xl md:text-3xl my-3 md:my-6">Con muchos servicios</p>
                    <p className="font-semibold text-xl md:text-3xl my-3 md:my-6">disponibles para cada</p>
                    <p className="font-semibold text-xl md:text-3xl my-3 md:my-6">necesidad y con seguridad</p>
                </div>
                <div className="pb-12 md:p-0">
                    <Image 
                        src={servicios} 
                        alt="servicios" 
                        className="mt-8 md:mt-0 mx-auto"
                    />
                </div>
            </div> */}
        </>
	);
}
