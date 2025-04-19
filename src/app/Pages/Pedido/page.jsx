"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { useRouter } from "next/navigation";

import Button from "@/app/Components/Botton";
import { db } from "@/libs/db";
import LoaderPedido from "@/app/Components/LoaderPedido";
import enviar from "@/app/Images/Contacto/enviar.png";

export default function Pedido() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
        Nombre: "",
        Ubicacion: "",
        Destino: "",
        Telefono: "",
        Equipaje: "no",
        Fecha: new Date().toISOString()
        }
    });

    const router = useRouter();
    const [esperandoRespuesta, setEsperandoRespuesta] = useState(false);

    // Lógica para verificar si ya hay un pedido pendiente
    useEffect(() => {
        const pedidoId = localStorage.getItem("pedidoId");
        if (pedidoId) {
        const pedidoRef = doc(db, "Pedidos", pedidoId);
        const unsubscribe = onSnapshot(pedidoRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            if (data.estado === "respondido") {
                localStorage.removeItem("pedidoId");
                router.push(`/Pages/Pedido/View/${pedidoId}`);
            } else {
                setEsperandoRespuesta(true);
            }
            } else {
            localStorage.removeItem("pedidoId"); // si se elimina manualmente en la base
            setEsperandoRespuesta(false);
            }
        });

        return () => unsubscribe();
        }
    }, [router]);

    const onSubmit = async (data) => {
        try {
        const result = await Swal.fire({
            title: "¿Deseas hacer el pedido?",
            text: "Si verificaste los datos ingresados, tu carro llegará pronto, ¡continúa!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "No, espera!",
            confirmButtonText: "Sí, todo listo!"
        });

        if (result.isConfirmed) {
            const id = Date.now().toString(); // ID único
            const pedidoRef = doc(db, "Pedidos", id);

            await setDoc(pedidoRef, {
            id,
            nombre: data.Nombre,
            ubicacion: data.Ubicacion,
            destino: data.Destino,
            telefono: data.Telefono,
            equipaje: data.Equipaje,
            fecha: new Date().toISOString(),
            estado: "pendiente"
            });

            localStorage.setItem("pedidoId", id);
            setEsperandoRespuesta(true);
            reset();

            Swal.fire({
            title: "¡Pedido realizado!",
            text: "Tu pedido ha sido enviado. Espera la confirmación del administrador.",
            icon: "success"
            });
        }
        } catch (error) {
        console.error("Error al guardar el pedido:", error);
        Swal.fire({
            title: "Error",
            text: "Hubo un problema al guardar tu pedido. Por favor intenta nuevamente.",
            icon: "error"
        });
        }
    };

    if (esperandoRespuesta) return <LoaderPedido />;

    return (
        <div className="h-screen flex items-center mt-24">
        <form onSubmit={handleSubmit(onSubmit)} className="py-8 w-screen border-2 border-black shadow-2xl md:w-2/4 mx-8 md:mx-auto rounded-lg tracking-wider">
            <p className="font-bold text-2xl text-center border-b-black border-1">HAZ TU PEDIDO</p>

            {/* Nombre */}
            <div className={`relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto ${errors.Nombre ? "mb-16" : ""}`}>
                <input placeholder="" type="text" autoComplete="off" {...register("Nombre", { required: true, maxLength: 30, minLength: 10})}
                    className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                    Nombre
                </label>
                {errors.Nombre?.type === "required" && <span className='text-red-500'>El nombre es requerido!</span>}
                {errors.Nombre?.type === "maxLength" && <span className='text-red-500'>El nombre no debe ser menor a 30 caracteres!</span>}
                {errors.Nombre?.type === "minLength" && <span className='text-red-500'>El nombre debe ser mayor a 10 caracteres!</span>}
            </div>

            <div className={`relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto ${errors.Ubicacion ? "mb-16" : ""}`}>
                    <input placeholder="" type="text" autoComplete="off" {...register("Ubicacion", { required: true, maxLength: 30, minLength: 10})}
                        className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                        Ubicacion
                    </label>
                    {errors.Ubicacion?.type === "required" && <span className='text-red-500'>La ubicacion donde estas es requerida!</span>}
                    {errors.Ubicacion?.type === "maxLength" && <span className='text-red-500'>La ubicacion no debe ser menor a 30 caracteres!</span>}
                    {errors.Ubicacion?.type === "minLength" && <span className='text-red-500'>La ubicacion debe ser mayor a 10 caracteres!</span>}
                </div>

                <div className={`relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto ${errors.Destino ? "mb-16" : ""}`}>
                    <input placeholder="" type="text" autoComplete="off" {...register("Destino", { required: true, maxLength: 30, minLength: 10})}
                        className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                        Destino
                    </label>
                    {errors.Destino?.type === "required" && <span className='text-red-500'>La ubicacion Destino es requerida!</span>}
                    {errors.Destino?.type === "maxLength" && <span className='text-red-500'>La ubicacion no debe ser menor a 30 caracteres!</span>}
                    {errors.Destino?.type === "minLength" && <span className='text-red-500'>La ubicacion debe ser mayor a 10 caracteres!</span>}
                </div>

                <div className={`relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto ${errors.Telefono ? "mb-16" : ""}`}>
                    <input placeholder="" type="number" {...register("Telefono", { required: true, maxLength: 10, minLength: 10})}
                        className="peer h-full w-full rounded-md border border-gray-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                        Telefono
                    </label>
                    {errors.Telefono?.type === "required" && <span className='text-red-500'>Un número de contacto es requerido!</span>}
                    {errors.Telefono?.type === "maxLength" && <span className='text-red-500'>El numero de telefono debe tener 10 dijitos!</span>}
                    {errors.Telefono?.type === "minLength" && <span className='text-red-500'>El numero de telefono debe tener 10 dijitos!</span>}
                </div>

                <div {...register("Equipaje")}>
                    <p className="hidden md:block text-center pb-4">Llevas equipaje pesado? para una bodega grande?</p>
                    <p className="block md:hidden text-center">Llevas equipaje pesado?</p>
                    <p className="block md:hidden text-center pb-4">Para una bodega grande?</p>
                    <select {...register("Equipaje")} className="block w-auto mx-auto border border-gray-400 rounded-md px-3 py-2">
                        <option value="yes">Sí</option>
                        <option value="no">No</option>
                    </select>
                </div>

            {/* Botón */}
            <div className="flex justify-center mt-6">
            <Button titulo={"Enviar"} color={"green"} image={enviar}></Button>
            </div>
        </form>
        </div>
    );
}
