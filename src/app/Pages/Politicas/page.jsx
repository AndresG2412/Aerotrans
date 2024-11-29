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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4b5563 " fill-opacity="1" d="M0,224L80,234.7C160,245,320,267,480,266.7C640,267,800,245,960,234.7C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                    <div className="w-full h-auto bg-gray-600">
                        <p className="text-4xl text-white text-center font-bold tracking-wider uppercase">Para nosotros brindarte el mejor servicio es lo más</p>
                        <p className="text-4xl text-white text-center font-bold pt-8 tracking-wider uppercase">importante, y estas son nuestras políticas mas comunes</p>

                        <div className="w-max flex mt-20 mx-auto ">

                            <div className="text-center mx-8"><Image src={p1} alt="politica_n" className="w-28 mx-auto"/>
                                <p className="font-semibold text-white">Ingerir bebidas</p>
                                <p className="font-semibold text-white">alcoholicas</p>
                            </div>

                            <div className="text-center mx-8"><Image src={p2} alt="politica_n" className="w-28 mx-auto"/>
                                <p className="font-semibold text-white">El uso de celulares</p>
                                <p className="font-semibold text-white">mientras se conduce</p>
                            </div>

                            <div className="text-center mx-8"><Image src={p3} alt="politica_n" className="w-28 mx-auto"/>
                                <p className="font-semibold text-white">Uso obligatorio de</p>
                                <p className="font-semibold text-white">cinturon de seguridad</p>
                            </div>

                            <div className="text-center mx-8"><Image src={p4} alt="politica_n" className="w-28 mx-auto"/>
                                <p className="font-semibold text-white">Descanso de 7 horas</p>
                                <p className="font-semibold text-white">andtes de cada jornada</p>
                            </div>

                            <div className="text-center mx-8"><Image src={p5} alt="politica_n" className="w-28 mx-auto"/>
                                <p className="font-semibold text-white">Traito igualitario</p>
                                <p className="font-semibold text-white">para cualquier persona</p>
                            </div>
                            
                            <div className="text-center mx-8"><Image src={p6} alt="politica_n" className="w-28 mx-auto"/>
                                <p className="font-semibold text-white">Filtros obligatorios</p>
                                <p className="font-semibold text-white">para iniciar jornada</p>
                            </div>
                        </div>
                    </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4b5563 " fill-opacity="1" d="M0,96L120,101.3C240,107,480,117,720,122.7C960,128,1200,128,1320,128L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>            
            </div>

            <div className="w-max mx-auto text-3xl font-bold text-black">
                <p className="my-3 tracking-wide">Políticas de Regulación de Velocidad:</p>
                <p className="my-3 tracking-wide">- Carretera Nacional: 80km/h</p>
                <p className="my-3 tracking-wide">- Carretera municipal: 40km/h</p>
                <p className="my-3 tracking-wide">- Via veredal sin pavimentar: 30km/h</p>
                <p className="my-3 tracking-wide">- Vias de acceso en instalaciones del cliente: 20km/h</p>
                <p className="my-3 tracking-wide">- Locaciones: 10km/h</p>
            </div>

            <div className="text-center text-3xl font-bold text-black mt-24 mb-12">
                <p>Desea conocer las polititas</p>
                <p>mas a profundidad?</p>
            </div>

            <Button titulo={"DESCARGAR"} color={"red"} image={descarga}/>
        </>
    );
}