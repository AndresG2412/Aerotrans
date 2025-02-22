import Button from "@/app/Components/Botton";
import b_c from "@/app/Images/Contacto/image.png"
import wpp from "@/app/Images/Contacto/wpp.png"
import enviar from "@/app/Images/Contacto/enviar.png"
import Rating from "@/app/Components/Rating";
import ImageUpload from "@/app/Components/Image";

export default function Contacto() {
    return(
        <>
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

            {/* Comentarios */}
            <div className="mt-12">
                <p className="font-bold text-2xl text-center">CALIFICA TU EXPERIENCIA</p>
                <div className="mt-4 border-[3px] border-black rounded-2xl md:w-[45rem] h-auto mx-10 md:mx-auto flex flex-col p-6">
                    <div className="max-w-full flex flex-col justify-center gap-6 md:gap-16 mb-6">
                        <div>
                            <input type="text" placeholder="Nombre completo" className="placeholder-[#444] py-2 px-4 rounded-lg bg-transparent shadow-xl border-2 border-dashed border-[#777] block my-4 w-full"/>
                            <input type="email" placeholder="Correo electronico" className="placeholder-[#444] py-2 px-4 rounded-lg bg-transparent shadow-xl border-2 border-dashed border-[#777] block my-4 w-full"/>
                            <div className="mt-8 flex justify-center">
                                <Rating/>
                            </div>
                        </div>
                        <div className="mx-auto">
                            <ImageUpload/>
                        </div>
                    </div>

                    <textarea id="message" rows="4" className="placeholder-[#444] mx-auto w-full md:w-3/4 resize-none py-2 px-4 rounded-lg bg-transparent shadow-2xl border-2 border-dashed border-[#777]" placeholder="Escribenos tu experiencia"></textarea>
                    <Button titulo={"Enviar"} color={"red"} image={enviar}></Button>
                </div>
            </div>
        </>
    );
}