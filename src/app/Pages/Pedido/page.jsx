"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { useRouter } from "next/navigation";

import Button from "@/app/Components/Botton";
import { db } from "@/libs/db";
import LoaderPedido from "@/app/Components/LoaderPedido";

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
    <div className="h-screen flex items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="py-8 w-screen border-2 border-black shadow-2xl md:w-2/4 mx-8 md:mx-auto rounded-lg tracking-wider">
        <p className="font-bold text-2xl text-center border-b-black border-1">HAZ TU PEDIDO</p>

        {/* Nombre */}
        <div className={`relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto ${errors.Nombre ? "mb-16" : ""}`}>
          <input
            placeholder=""
            type="text"
            autoComplete="off"
            {...register("Nombre", { required: true, maxLength: 30, minLength: 10 })}
            className="peer h-full w-full rounded-md border border-gray-400 bg-transparent px-3 py-3 text-sm"
          />
          <label className="absolute left-3 top-0 text-xs text-gray-600">Nombre</label>
          {errors.Nombre && <span className='text-red-500 text-xs'>Nombre inválido</span>}
        </div>

        {/* Ubicación */}
        <div className={`relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto ${errors.Ubicacion ? "mb-16" : ""}`}>
          <input
            placeholder=""
            type="text"
            autoComplete="off"
            {...register("Ubicacion", { required: true, maxLength: 30, minLength: 10 })}
            className="peer h-full w-full rounded-md border border-gray-400 bg-transparent px-3 py-3 text-sm"
          />
          <label className="absolute left-3 top-0 text-xs text-gray-600">Ubicación</label>
          {errors.Ubicacion && <span className='text-red-500 text-xs'>Ubicación inválida</span>}
        </div>

        {/* Destino */}
        <div className={`relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto ${errors.Destino ? "mb-16" : ""}`}>
          <input
            placeholder=""
            type="text"
            autoComplete="off"
            {...register("Destino", { required: true, maxLength: 30, minLength: 10 })}
            className="peer h-full w-full rounded-md border border-gray-400 bg-transparent px-3 py-3 text-sm"
          />
          <label className="absolute left-3 top-0 text-xs text-gray-600">Destino</label>
          {errors.Destino && <span className='text-red-500 text-xs'>Destino inválido</span>}
        </div>

        {/* Teléfono */}
        <div className={`relative h-11 mx-6 my-8 md:w-3/4 min-w-[200px] md:mx-auto ${errors.Telefono ? "mb-16" : ""}`}>
          <input
            placeholder=""
            type="tel"
            autoComplete="off"
            {...register("Telefono", { required: true, minLength: 7 })}
            className="peer h-full w-full rounded-md border border-gray-400 bg-transparent px-3 py-3 text-sm"
          />
          <label className="absolute left-3 top-0 text-xs text-gray-600">Teléfono</label>
          {errors.Telefono && <span className='text-red-500 text-xs'>Teléfono inválido</span>}
        </div>

        {/* Equipaje */}
        <div className="mx-6 my-8 md:w-3/4 md:mx-auto">
          <label className="block mb-2 text-sm text-gray-700">¿Lleva equipaje?</label>
          <select {...register("Equipaje")} className="w-full border border-gray-400 rounded-md p-2">
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        {/* Botón */}
        <div className="flex justify-center mt-6">
          <Button text="Enviar Pedido" />
        </div>
      </form>
    </div>
  );
}
