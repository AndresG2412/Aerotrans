import Bento from "@/app/Components/Bento";
import '@/app/globals.css'

export default function Nosotros() {
    return(
        <>  
        {/* avanzar ebtno para celular */}
            <Bento/>

            <div className="mx-10 xxl2:mx-auto mt-28 xxl:mt-12">
                <div className="flex items-center mb-4">
                    <hr className="flex-grow border-[3px] border-black"/>
                    <p className="text-4xl font-bold tracking-wide mx-4">MISION</p>
                    <hr className="flex-grow w-6/12 md:w-9/12 border-[3px] border-black"/>
                </div>


                <div className="font-semibold text-xl border-4 border-black p-6 bg-white shadow-2xl">
                    Somos una empresa del sector cooperativo dedicada al servicio del transporte de pasajeros orgullosamente Laboyana; 
                    trabajamos con mística, en equipo y por competencias laborales, para satisfacer las necesidades y expectativas de 
                    nuestros clientes, prestando un servicio con seguridad, calidad, y cumplimiento, para agrado de nuestros asociados 
                    y sociedad en general.
                </div>
            </div>

            <div className="mx-10 xxl2:mx-auto mt-16 mb-24">
                <div className="flex items-center mb-4">
                    <hr className="flex-grow w-6/12 md:w-9/12 border-[3px] border-black"/>
                    <p className="text-4xl font-bold tracking-wide mx-4">VISION</p>
                    <hr className="flex-grow border-[3px] border-black"/>
                </div>


                <div className="font-semibold text-xl border-4 border-black p-6 bg-white shadow-2xl">
                Ser lideres en la región en el sector transporte en las diferentes modalidades que préstamos, aplicando innovación 
                constante, tecnología avanzada, respetuosos 
                con nuestros usuarios y el medio ambiente, mejorando las necesidades de sus grupos de interés; con un talento humano 
                competente, siendo modelos en experiencia y solidez.
                </div>
            </div>
        </>
    );
}