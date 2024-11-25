import Bento from "@/app/Components/Bento";

export default function Nosotros() {
    return(
        <>  
            <Bento/>
            <div className="max-w-7xl mx-auto mt-36">
                <div className="flex items-center mb-4">
                    <hr className="flex-grow border-[3px] border-black"/>
                    <p className="text-4xl font-bold tracking-wide mx-4">MISION</p>
                    <hr className="flex-grow w-9/12 border-[3px] border-black"/>
                </div>


                <div className="font-semibold text-xl border-4 border-black p-6 bg-white shadow-2xl">
                    Somos una empresa del sector cooperativo dedicada al servicio del transporte de pasajeros orgullosamente Laboyana; 
                    trabajamos con mística, en equipo y por competencias laborales, para satisfacer las necesidades y expectativas de 
                    nuestros clientes, prestando un servicio con seguridad, calidad, y cumplimiento, para agrado de nuestros asociados 
                    y sociedad en general.
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16">
                <div className="flex items-center mb-4">
                    <hr className="flex-grow w-9/12 border-[3px] border-black"/>
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