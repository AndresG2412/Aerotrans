import Image from "next/image";
import Button from "@/app/Components/Botton";
import p1 from "@/app/Images/Politicas/image_p1.png";
import p2 from "@/app/Images/Politicas/image_p2.png";
import p3 from "@/app/Images/Politicas/image_p3.png";
import p4 from "@/app/Images/Politicas/image_p4.png";
import p5 from "@/app/Images/Politicas/image_p5.png";
import p6 from "@/app/Images/Politicas/image_p6.png";
import descarga from "@/app/Images/descarga.png"

export default function Politicas() {
    return(
        <>
            <div>
                    <div className="w-full h-auto bg-gray-600 md:mt-52 md:mb-40 py-20">
                        <p className="px-4 text-3xl md:text-4xl text-white text-center font-bold tracking-wider uppercase">Para nosotros brindarte el mejor servicio es lo más</p>
                        <p className="px-8 text-3xl mt-8 md:text-4xl text-white text-center font-bold tracking-wider uppercase">importante, y estas son nuestras políticas mas comunes</p>

                        <div className="w-max grid grid-cols-2 md:flex mt-20 mx-auto">

                            <div className="text-center md:mx-8"><Image src={p1} alt="politica_n" className="mt-2 md:mt-0 w-24 md:w-28 mx-auto"/>
                                <p className="font-semibold text-white">Ingerir bebidas</p>
                                <p className="font-semibold text-white">alcoholicas</p>
                            </div>

                            <div className="text-center md:mx-8"><Image src={p2} alt="politica_n" className="mt-2 md:mt-0 w-24 md:w-28 mx-auto"/>
                                <p className="font-semibold text-white">El uso de celulares</p>
                                <p className="font-semibold text-white">mientras se conduce</p>
                            </div>

                            <div className="text-center md:mx-8"><Image src={p3} alt="politica_n" className="mt-2 md:mt-0 w-24 md:w-28 mx-auto"/>
                                <p className="font-semibold text-white">Uso obligatorio de</p>
                                <p className="font-semibold text-white">cinturon de seguridad</p>
                            </div>

                            <div className="text-center md:mx-8"><Image src={p4} alt="politica_n" className="mt-2 md:mt-0 w-24 md:w-28 mx-auto"/>
                                <p className="font-semibold text-white">Descanso de 7 horas</p>
                                <p className="font-semibold text-white">andtes de cada jornada</p>
                            </div>

                            <div className="text-center md:mx-8"><Image src={p5} alt="politica_n" className="mt-2 md:mt-0 w-24 md:w-28 mx-auto"/>
                                <p className="font-semibold text-white">Traito igualitario</p>
                                <p className="font-semibold text-white">para cualquier persona</p>
                            </div>
                            
                            <div className="text-center mx-8"><Image src={p6} alt="politica_n" className="mt-2 md:mt-0 w-24 md:w-28 mx-auto"/>
                                <p className="font-semibold text-white">Filtros obligatorios</p>
                                <p className="font-semibold text-white">para iniciar jornada</p>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="mx-8 mt-12 md:w-max md:mx-auto text-2xl md:text-3xl font-bold text-black">
                <p className="my-3 tracking-wide">Políticas de Regulación de Velocidad:</p>
                <p className="my-3 tracking-wide">- Carretera Nacional: 80km/h</p>
                <p className="my-3 tracking-wide">- Carretera municipal: 40km/h</p>
                <p className="my-3 tracking-wide">- Via veredal sin pavimentar: 30km/h</p>
                <p className="my-3 tracking-wide">- Vias de acceso en instalaciones del cliente: 20km/h</p>
                <p className="my-3 tracking-wide">- Locaciones: 10km/h</p>
            </div>

            <div className="text-center text-3xl font-bold text-black mt-12 md:mt-24 mb-12">
                <p>Desea conocer las polititas</p>
                <p>mas a profundidad?</p>
            </div>

            <Button titulo={"DESCARGAR"} color={"red"} image={descarga}/>
        </>
    );
}