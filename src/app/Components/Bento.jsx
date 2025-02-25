import Image from "next/image";
import img from "@/app/Images/Bento/image.png"
import img1 from "@/app/Images/Bento/image-2.png"
import img2 from "@/app/Images/Bento/image-3.png"
import img4 from "@/app/Images/Bento/image-4.png"
import img3 from "@/app/Images/Bento/image-1.png"
import img5 from "@/app/Images/Bento/image-5.png"

export default function Bento() {
    return (
        <div className="xxl:grid grid-cols-5 grid-rows-5 mt-36 gap-4 mx-8 md:mx-48 flex flex-col">

            <div className="w-full bg-gray-100 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3  shadow-xl rounded-xl text-center md:flex items-center justify-center">
                <div className="flex justify-center items-center py-4 px-6 md:block md:py-0 md:px-0 gap-x-4">
                    <div className="text-start md:text-center">
                        <p className="font-semibold text-black text-2xl md:text-2xl">servicios</p>
                        <p className="font-semibold text-black text-2xl md:text-2xl">adecuados para</p>
                        <p className="font-semibold text-black text-2xl md:text-2xl">cada persona</p>
                    </div>
                    <div className="flex justify-center items-center gap-x-4 md:gap-x-0 md:pt-6">
                    <Image src={img1} alt="img1" className="w-16 md:w-24 md:mx-2" />
                    <Image src={img2} alt="img2" className="w-11 md:w-16 md:mx-2" />
                    </div>
                </div>
            </div>

            <div className="col-start-1 col-end-2 row-start-3 row-end-5 bg-gray-100 shadow-xl rounded-xl text-center md:flex items-center justify-center">
                <div>
                    <div className="flex md:block items-center justify-center gap-x-6">
                        <div>
                            <p className="font-semibold text-black text-2xl">Contacta</p>
                            <p className="font-semibold text-black text-2xl">con nosotros</p>
                        </div>
                        <Image src={img4} alt="img4" className="my-2 md:mx-auto" />
                    </div>
                    <p className="font-semibold text-black text-2xl">aerotransltda</p>
                    <p className="font-semibold text-black text-2xl">@hotmail.com</p>
                </div>
            </div>

            <div className="hidden py-1 col-start-2 col-end-4 row-start-1 row-end-2 bg-gray-100 shadow-xl rounded-xl md:flex items-center justify-center">
                <div className="mx-4">
                    <p className="font-semibold text-black text-[90px]">47</p>
                </div>
                <div className="mx-4">
                    <p className="font-semibold text-black text-2xl">Taxis</p>
                    <p className="font-semibold text-black text-2xl">disponibles</p>
                    <p className="font-semibold text-black text-2xl">por toda</p>
                    <p className="font-semibold text-black text-2xl">la ciudad</p>
                </div>
            </div>

            <div className="hidden md:block py-1 col-start-4 col-end-5 row-start-1 row-end-2 bg-gray-100 shadow-xl rounded-xl text-center">
                <p className="font-semibold text-black text-2xl">Servicios</p>
                <p className="font-semibold text-black text-2xl">disponibles</p>
                <p className="font-semibold text-black text-6xl">24/7</p>  
            </div>

            <div className="hidden col-start-5 col-end-6 row-start-1 row-end-5 bg-gray-100 shadow-xl rounded-xl text-center md:flex items-center justify-center">
                <div>
                    <div className="my-12">
                        <p className="font-semibold text-black text-2xl">Control de</p>
                        <p className="font-semibold text-black text-2xl">todos los</p>
                        <p className="font-semibold text-black text-2xl">conductores</p> 
                        <Image src={img5} alt="img1" className="mx-auto mt-5" />
                    </div>

                    <div className="my-12">
                        <p className="font-semibold text-black text-2xl">Seguridad</p>
                        <p className="font-semibold text-black text-2xl">en cada</p>
                        <p className="font-semibold text-black text-2xl">servicio</p> 
                        <Image src={img3} alt="img1" className="mx-auto mt-5" />
                    </div>
                </div> 
            </div>

            <div className="hidden md:block py-1 col-start-2 col-end-3 row-start-4 row-end-5 bg-gray-100 shadow-xl rounded-xl">
                <p className="font-semibold text-black text-2xl text-center">Muchos años</p>
                <p className="font-semibold text-black text-2xl text-center">de experiencia</p>
                <div className="flex justify-center items-center">
                    <p className="font-semibold text-black text-6xl mx-2">5</p> 
                    <div className="mx-2">
                        <p className="font-semibold text-black text-2xl">Años</p>
                        <p className="font-semibold text-black text-2xl">Juntos</p>
                    </div>
                </div> 
            </div>

            <div className="hidden py-1 col-start-3 col-end-5 row-start-4 row-end-5 bg-gray-100 shadow-xl rounded-xl md:flex justify-center items-center">
                <div className="mx-4">
                    <p className="font-semibold text-black text-[90px]">21</p>
                </div>
                <div className="mx-4">
                    <p className="font-semibold text-black text-2xl">Transportes</p>
                    <p className="font-semibold text-black text-2xl">publicos de</p>
                    <p className="font-semibold text-black text-2xl">pasajeros</p>
                    <p className="font-semibold text-black text-2xl">a tu servicio!</p>
                </div>
            </div>

            <div className="text-center col-start-2 col-end-5 row-start-2 row-end-4 bg-gray-100 shadow-xl rounded-xl flex justify-center items-center">
                <Image src={img} alt="img1" className="md:mr-20 h-28 md:w-auto" />
                <div>
                    <p className="font-semibold text-black text-2xl md:text-5xl">ANDRES CAMILO</p>
                    <p className="font-semibold text-black text-2xl md:text-5xl pt-2">GAVIRIA BOLAÑOS</p>
                    <p className="font-semibold text-black text-2xl md:text-3xl md:mt-12 w-2/3 md:w-auto mx-auto md:mx-0">Asesoria personalizada</p>
                </div>
            </div>
        </div>
    );
  };
