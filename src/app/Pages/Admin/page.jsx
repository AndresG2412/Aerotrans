import Swal from "sweetalert2"

export default function Admin() {
    return(
        <div className="h-screen bg-[url('/ImgAdmin/bg-login.png')] bg-cover bg-center">       
            <div className="h-screen flex justify-center items-center">
                <form action="" className="flex flex-col gap-y-6 md:w-2/4 py-8 rounded-lg border-2 border-black shadow-2xl bg-[#F8F6F0] mx-auto">

                    <p className="text-center font-semibold tracking-wider text-2xl">PANEL ADMINISTRADOR</p>

                    <label className="flex justify-center">
                        <input 
                            type="email" 
                            name="" id="" 
                            placeholder="Correo Electornico"
                            className="w-2/3 pl-4 rounded-lg py-1 border-2 focus:boder-red-500 focus:outline tracking-wider"/>
                    </label>

                    <label className="flex justify-center">
                        <input 
                            type="password" 
                            name="" id="" 
                            placeholder="Contraseña"
                            className="w-2/3 pl-4 rounded-lg py-1 border-2 focus:boder-red-500 focus:outline tracking-wider"/>
                    </label>

                    <button type="submit" 
                        className="border-[1.5px] group font-semibold hover:duration-300 hover:bg-sky-400 tracking-widest border-black w-1/3 mx-auto rounded-lg py-1"
                        ><p className="group-hover:scale-110 group-hover:duration-300 ">INGRESAR</p>
                    </button>

                </form>
            </div>
        </div>
    )
}