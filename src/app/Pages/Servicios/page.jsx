import expo1 from "@/app/Images/expo-1.png";
import Image from "next/image";
import Button from "@/app/Components/Botton";
import wpp from "@/app/Images/Contacto/wpp.png"
import rpt from "@/app/Images/Contacto/report.png"

import Slider from "@/app/Components/Slider";
import s1 from "@/app/Images/Slider1/r_bus.png";
import s2 from "@/app/Images/Slider1/image2.png";
import s3 from "@/app/Images/Slider1/image3.png";
const images = [s1, s2, s3] 

export default function Servicios() {
    return(
        <div className="">
            <div className="relative md:flex justify-center items-center gap-20 h-screen pt-[30%] md:pt-0">
                <Image src={expo1} alt="expo-1" className="rounded-xl w-3/4 mx-auto md:mx-0 md:w-1/3"/>
                <div className="md:w-1/3">
                    <p className="font-bold text-blakc tracking-wide text-3xl text-center md:mt-0 mt-6">Servicio de Taxi</p>
                    <Button titulo={"Whatsapp"} color={"green"} image={wpp}></Button>
                    <Button titulo={"Reportar"} color={"red"} image={rpt}></Button>
                </div>

                <p className="text-center absolute uppercase bottom-10 text-3xl tracking-wide font-semibold font-sans border-b-2 border-black rounded-md pb-2 px-4 left-1/2 -translate-x-1/2">
                    Conoce nuestras rutas!
                </p>
            </div>

            <div className="md:flex justify-center items-center mt-20 md:gap-x-10">
                <div className="">
                    <p className="font-bold text-3xl text-black text-center tracking-wider mb-12">RUTA DE BUSETAS</p>
                    <Slider images={images} />
                </div>
                <div className="md:mt-0 mt-10">
                    <p className="font-bold text-3xl text-black text-center tracking-wider mb-12">RUTA DE CAMIONETAS</p>
                    <Slider images={images} />
                </div>
            </div>
        </div>
    );
}