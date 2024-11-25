import Button from "@/app/Components/Botton";
import b_c from "@/app/Images/Contacto/image.png"
import wpp from "@/app/Images/Contacto/wpp.png"
import enviar from "@/app/Images/Contacto/enviar.png"

export default function Contacto() {
    return(
        <div className="relative w-full mt-40 h-[650px] bg-cover flex" style={{ backgroundImage: `url(${b_c.src})` }} >
            <div className="w-1/2 h-[450px] my-auto ml-32 text-center flex flex-col justify-center">
                <p className="font-semibold text-4xl my-2 tracking-wide">Deseas comunicarte?</p>
                <p className="font-semibold text-4xl my-2 tracking-wide">Envianos tu solicitud,</p>
                <p className="font-semibold text-4xl my-2 tracking-wide">Te respondemos pronto!</p>
                <br />
                <Button titulo={"WhatsApp"} color={"green"} image={wpp}></Button>
            </div>
            <div className="w-1/2 h-[450px] my-auto mr-32 flex flex-col justify-center">
                <input type="text" placeholder="Nombre Completo" className="text-2xl mt-4 pt-4 pb-2 px-2 border-black border-b-8 bg-white rounded-lg focus:border-red-600 selection:"/>
                <input type="email" placeholder="Correo Electronico" className="text-2xl mt-4 pt-4 pb-2 px-2 border-black border-b-8 bg-white rounded-lg focus:border-red-600 selection:"/>
                <input placeholder="Describenos tu solicitud" className="text-2xl mt-4 pt-4 pb-2 px-2 border-black border-b-8 bg-white rounded-lg focus:border-red-600 selection:"></input>            
                <Button titulo={"Enviar"} color={"red"} image={enviar}></Button>
                </div>
        </div>
    );
}