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
                        <input placeholder=""
                            className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                        >
                            Nombre
                        </label>
                    </div>

                    <div className="relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto">
                        <input placeholder=""
                            className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                        >
                            Ubicacion
                        </label>
                    </div>

                    <div className="relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto">
                        <input placeholder=""
                            className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                        >
                            Destino
                        </label>
                    </div>

                    <div className="relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto">
                        <input placeholder=""
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

// "use client";

// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";

// export default function PedidoForm() {
//     const router = useRouter();

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = async (data) => {
//         try {
//             const response = await fetch("/api/pedidos", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(data),
//             });

//             if (response.ok) {
//                 const result = await response.json();
//                 alert("¡Pedido enviado con éxito!");
//                 router.push("/Pages/Pedido/View"); // Redirige a la página "/View"
//             } else {
//                 const error = await response.json();
//                 alert("Hubo un problema al enviar el pedido.");
//             }
//         } catch (error) {
//             alert("Error de conexión con el servidor.");
//         }
//     };

//     return (
//         <form
//             className="mt-40 w-2/3 px-6 rounded-xl py-12 mx-auto formulario"
//             onSubmit={handleSubmit(onSubmit)}
//         >
//             {/* Campo Nombre */}
//             <div className="form__group field">
//                 <input
//                     type="text"
//                     className="form__field"
//                     placeholder="Nombre Completo"
//                     {...register("nombre", {
//                         required: "El nombre es obligatorio",
//                         minLength: {
//                             value: 8,
//                             message: "El nombre debe tener al menos 8 caracteres",
//                         },
//                         maxLength: {
//                             value: 50,
//                             message: "El nombre no puede exceder los 50 caracteres",
//                         },
//                     })}
//                 />
//                 <label htmlFor="nombre" className="form__label">
//                     Nombre Completo
//                 </label>
//                 {errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>}
//             </div>

//             {/* Campo Teléfono */}
//             <div className="form__group field">
//                 <input
//                     type="text"
//                     className="form__field"
//                     placeholder="Teléfono"
//                     {...register("telefono", {
//                         required: "El teléfono es obligatorio",
//                         pattern: {
//                             value: /^[0-9]+$/,
//                             message: "El teléfono solo puede contener números",
//                         },
//                         minLength: {
//                             value: 10,
//                             message: "El teléfono debe tener al menos 10 dígitos",
//                         },
//                         maxLength: {
//                             value: 15,
//                             message: "El teléfono no puede exceder los 15 dígitos",
//                         },
//                     })}
//                 />
//                 <label htmlFor="telefono" className="form__label">
//                     Teléfono
//                 </label>
//                 {errors.telefono && <p className="text-red-500">{errors.telefono.message}</p>}
//             </div>

//             {/* Campo Dirección */}
//             <div className="form__group field">
//                 <input
//                     type="text"
//                     className="form__field"
//                     placeholder="Dirección"
//                     {...register("direccion", {
//                         required: "La dirección es obligatoria",
//                         minLength: {
//                             value: 8,
//                             message: "La dirección debe tener al menos 8 caracteres",
//                         },
//                         maxLength: {
//                             value: 50,
//                             message: "La dirección no puede exceder los 50 caracteres",
//                         },
//                     })}
//                 />
//                 <label htmlFor="direccion" className="form__label">
//                     Dirección
//                 </label>
//                 {errors.direccion && <p className="text-red-500">{errors.direccion.message}</p>}
//             </div>

//             {/* Campo Equipaje */}
//             <div className="form__group field mt-4">
//                 <label htmlFor="equipaje" className="form__label">
//                     Equipaje Pesado
//                 </label>
//                 <div className="form__options mt-4 flex gap-10">
//                     <label>
//                         <input
//                             type="radio"
//                             value="si"
//                             {...register("equipaje", { required: "Debes seleccionar una opción" })}
//                         />{" "}
//                         Sí
//                     </label>
//                     <label>
//                         <input
//                             type="radio"
//                             value="no"
//                             {...register("equipaje", { required: "Debes seleccionar una opción" })}
//                         />{" "}
//                         No
//                     </label>
//                 </div>
//                 {errors.equipaje && <p className="text-red-500">{errors.equipaje.message}</p>}
//             </div>

//             <button type="submit" className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">
//                 Pedir Carro
//             </button>
//         </form>
//     );
// }
