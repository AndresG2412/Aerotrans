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
        <div className="mt-40">
            <div className="flex justify-center items-center gap-20">
                <Image src={expo1} alt="expo-1" className="rounded-xl w-1/3"/>
                <div className="w-1/3">
                    <p className="font-bold text-blakc tracking-wide text-3xl text-center">Servicio de Taxi</p>
                    <Button titulo={"Whatsapp"} color={"green"} image={wpp}></Button>
                    <Button titulo={"Reportar"} color={"red"} image={rpt}></Button>
                </div>
            </div>

            <div className="mt-40 flex flex-col items-center">
                <p className="font-bold text-3xl text-black text-center tracking-wider mb-12">RUTA DE BUSETAS</p>
                <Slider images={images} />
            </div>
            <div className="mt-40 flex flex-col items-center">
                <p className="font-bold text-3xl text-black text-center tracking-wider mb-12">RUTA DE CAMIONETAS</p>
                <Slider images={images} />
            </div>
        </div>
    );
}