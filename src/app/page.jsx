import Image from "next/image";
import img1 from "@/app/Images/imgpitalito.png";
import servicios from "@/app/Images/Serv-disponibles.png";
import Slider from "./Components/Slider";

import s1 from "@/app/Images/Slider1/image.png";
import s2 from "@/app/Images/Slider1/image2.png";
import s3 from "@/app/Images/Slider1/image3.png";

const images = [s1, s2, s3] 


export default function Home() {
	return (
		<>
			<h1 className="font-semibold text-2xl text-center mt-36">La calidad total a su servicio</h1>
            <h1 style={{ fontFamily: "'Inknut Antiqua', serif" }} className="font-bold text-8xl text-center mt-6">AEROTRANS</h1>

            <div className="relative w-full mt-24 h-[500px] bg-cover bg-center overflow-hidden" 
                style={{ backgroundImage: `url(${img1.src})` }} >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="mr-10">
                        <p className="font-bold text-3xl my-6">Con muchos servicios</p>
                        <p className="font-bold text-3xl my-6">disponibles para cada</p>
                        <p className="font-bold text-3xl my-6">necesidad y con seguridad</p>
                    </div>
                    <Image 
                        src={servicios} 
                        alt="servicios" 
                        className="ml-10 max-w-full object-contain"
                    />
                </div>
            </div>

            <div className="flex justify-center items-center mt-24">
                <div className="mr-24">
                    <Slider images={images}/>
                </div>

                <div className="tracking-wide text-center ml-24">
                    <p className="text-4xl my-6 font-bold text-black">Manejando controles</p>
                    <p className="text-4xl my-6 font-bold text-black">de seguridad antes</p>
                    <p className="text-4xl my-6 font-bold text-black">de cada jornada</p>
                </div>
            </div>

            <div className="flex justify-center items-center mt-24">
                <div className="tracking-wide text-center mr-24">
                    <p className="text-4xl my-6 font-bold text-black">Antes de cada jornada</p>
                    <p className="text-4xl my-6 font-bold text-black">verificando la seguridad</p>
                    <p className="text-4xl my-6 font-bold text-black">para todos los pasajero</p>
                </div>

                <div className="ml-24">
                    <Slider images={images}/>
                </div>
            </div>

            <div className="flex justify-center items-center mt-24">
                <div className="mr-24">
                    <Slider images={images}/>
                </div>

                <div className="tracking-wide text-center ml-24">
                    <p className="text-4xl my-6 font-bold text-black">Y asi finalmente</p>
                    <p className="text-4xl my-6 font-bold text-black">poder brindarte</p>
                    <p className="text-4xl my-6 font-bold text-black">la mejor experiencia</p>
                </div>
            </div>
		</>
	);
}
