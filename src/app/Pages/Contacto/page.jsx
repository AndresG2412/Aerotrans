import Button from "@/app/Components/Botton";
import b_c from "@/app/Images/Contacto/image.png"
import wpp from "@/app/Images/Contacto/wpp.png"
import enviar from "@/app/Images/Contacto/enviar.png"

export default function Contacto() {
    return(
        <div className="h-screen flex items-center">
            <div className="mt-12 w-full md:h-auto md:bg-cover md:flex boxShadow" 
                style={{
                    backgroundImage: `url(${b_c.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
            <div className="md:w-1/2 pt-6 pb-4 md:h-[450px] my-auto md:ml-32 text-center flex flex-col justify-center">
                <p className="font-semibold text-3xl md:text-4xl my-2 tracking-wide">Deseas comunicarte?</p>
                <p className="font-semibold text-3xl md:text-4xl my-2 tracking-wide">Envianos tu solicitud,</p>
                <p className="font-semibold text-3xl md:text-4xl my-2 tracking-wide">Te respondemos pronto!</p>
                <br />
                <Button titulo={"WhatsApp"} color={"green"} image={wpp}></Button>
            </div>
            <div className="pb-6 md:w-1/2 md:h-[450px] my-auto md:mr-32 flex flex-col justify-center w-full px-10">
                <input type="text" placeholder="Nombre Completo" className="text-2xl mt-4 py-2 px-2 border-black border-b-4 bg-white rounded-lg focus:border-red-600"/>
                <input type="email" placeholder="Correo Electronico" className="text-2xl mt-4 py-2 px-2 border-black border-b-4 bg-white rounded-lg focus:border-red-600"/>
                <textarea id="message" rows="4" placeholder="Describenos tu solicitud" className="resize-none text-2xl mt-4 py-2 px-2 border-black border-b-4 bg-white rounded-lg focus:border-red-600"></textarea>            
                    <Button titulo={"Enviar"} color={"red"} image={enviar}></Button>
                </div>
            </div>
        </div>
    );
}