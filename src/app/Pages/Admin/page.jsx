"use client";

import Swal from "sweetalert2"
import { useForm } from "react-hook-form";

export default function Admin() {

    const { register, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            Nombre: "",
            Ubicacion: "",
            Destino: "",
            Telefono: "",
            Equipaje: "no"
        }
    });

    const onSubmit = (data) => {
        Swal.fire({
            title: "INICIO EXITOSO!",
            message: "Acabas de iniciar como administrador!",
            timer: 3000,
            icon: "success",
            draggable: true
        });
    }

    return(
        <div className="h-screen bg-[url('/ImgAdmin/bg-login.png')] bg-cover bg-center">       
            <div className="h-screen flex justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6 md:w-2/4 py-8 rounded-lg border-2 border-black shadow-2xl bg-[#F8F6F0] mx-auto">

                    <p className="text-center font-semibold tracking-wider text-2xl">PANEL ADMINISTRADOR</p>

                    <div className={`relative h-11 mx-6 md:w-3/4 min-w-[200px] md:mx-auto ${errors.Correo_Electronico ? "mb-6" : ""}`}>
                        <input placeholder="" type="email" autoComplete="off" {...register("Correo_Electronico", { required: true})}
                            className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                        >
                            Correo Electronico
                        </label>
                        {errors.Correo_Electronico?.type === "required" && <span className='text-red-500'>El correo es requerido!</span>}
                    </div>

                    <div className={`relative h-11 mx-6 md:w-3/4 min-w-[200px] md:mx-auto ${errors.Contraseña ? "mb-6" : ""}`}>
                        <input placeholder="" type="password" autoComplete="off" {...register("Contraseña", { required: true})}
                            className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                        >
                            Contraseña
                        </label>
                        {errors.Contraseña?.type === "required" && <span className='text-red-500'>El correo es requerido!</span>}
                    </div>

                    <button type="submit" 
                        className="border-[1.5px] group font-semibold hover:duration-300 hover:bg-red-400 tracking-widest border-black w-1/3 mx-auto rounded-lg py-1"
                        ><p className="group-hover:scale-110 group-hover:duration-300 ">INGRESAR</p>
                    </button>

                </form>
            </div>
        </div>
    )
}