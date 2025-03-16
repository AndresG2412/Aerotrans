"use client";

import Button from "@/app/Components/Botton"
import enviar from "@/app/Images/Contacto/enviar.png"
import Swal from 'sweetalert2'

export default function Pedido() {
    // arreglar alerta
    
    const Confirmacion = () => {
        Swal.fire({
            title: "Deseas ahcer el pedido!?",
            text: "Si verificaste los datos ingresados, tu carro llegara pronto, continua!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "No, espera!",
            confirmButtonText: "Si, todo listo!"
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Pedido realizado!",
                text: "Tu pedido ha sido realizado, te daremos la informacion pronto!",
                icon: "success"
              });
            }
        });
    }

    return(
        <>
            <div className="h-screen flex items-center">
                <form action="" className="py-8 w-screen border-2 border-black shadow-2xl md:w-2/4 mx-8 md:mx-auto rounded-lg tracking-wider">
                    <p className="font-bold text-2xl text-center border-b-black border-1">HAZ TU PEDIDO</p>
                    {/* requisitos formulario
                    equipaje Pesado */}

                    <div className="relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto">
                        <input placeholder="" type="text"
                            className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                        >
                            Nombre
                        </label>
                    </div>

                    <div className="relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto">
                        <input placeholder="" type="text"
                            className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                        >
                            Ubicacion
                        </label>
                    </div>

                    <div className="relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto">
                        <input placeholder="" type="text"
                            className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                        >
                            Destino
                        </label>
                    </div>

                    <div className="relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto">
                        <input placeholder="" type="number"
                            className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                        >
                            Telefono
                        </label>
                    </div>

                    <div className="">
                        <p className="hidden md:block text-center pb-4">Llevas equipaje pesado? para una bodega grande?</p>
                        <p className="block md:hidden text-center">Llevas equipaje pesado?</p>
                        <p className="block md:hidden text-center pb-4">Para una bodega grande?</p>
                        <div className="flex justify-center gap-x-10">
                            <label>Si <input type="radio" name="equipaje" value={"yes"}/></label>
                            <label>No <input type="radio" name="equipaje" value={"no"}/></label>
                        </div>
                    </div>

                    <Button titulo={"Enviar"} color={"green"} image={enviar} onClick={Confirmacion}></Button>
                </form>
            </div>
        </>
    )
}