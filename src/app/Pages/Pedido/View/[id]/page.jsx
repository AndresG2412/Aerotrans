"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/libs/db";

export default function ViewPedido() {
  const { id } = useParams();
  const router = useRouter();
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    if (!id) return; // para evitar errores si aún no se ha cargado el id
  
    const pedidoGuardado = localStorage.getItem("pedidoId");
  
    if (pedidoGuardado !== id) {
      router.push("/Pages/Pedido");
      return;
    }
  
    const obtenerPedido = async () => {
      const docRef = doc(db, "Pedidos", id);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        setPedido(docSnap.data());
      } else {
        router.push("/Pages/Pedido");
      }
    };
  
    obtenerPedido();
  }, [id, router]); // ✅ agregado id y router
  

  if (!pedido) return <p className="text-center mt-10">Cargando pedido...</p>;

  return (
    <div className="p-6 min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl font-bold mb-4 text-indigo-600">¡Tu vehículo ya viene en camino!</h1>
      <p className="text-lg mb-2">Vehículo asignado con placas:</p>
      <p className="text-4xl font-bold text-green-600 mb-6">{pedido.placaVehiculo}</p>

      <div className="bg-white p-4 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-3">Resumen del Pedido</h2>
        <p><strong>Nombre:</strong> {pedido.nombre}</p>
        <p><strong>Ubicación:</strong> {pedido.ubicacion}</p>
        <p><strong>Destino:</strong> {pedido.destino}</p>
        <p><strong>Teléfono:</strong> {pedido.telefono}</p>
        <p><strong>Equipaje:</strong> {pedido.equipaje}</p>
        <p><strong>Estado:</strong> {pedido.estado}</p>
      </div>

      <button
        onClick={() => {
            localStorage.removeItem("pedidoId");  // Elimina el pedido del localStorage
            router.push("/");  // Redirige a la página principal
        }}
        className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700"
        >
        Volver a la página principal
        </button>
    </div>
  );
}
