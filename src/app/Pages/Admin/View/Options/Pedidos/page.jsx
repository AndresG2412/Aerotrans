"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/libs/db";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function page() {
  const [pedidos, setPedidos] = useState([]);
  const [placas, setPlacas] = useState({});

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Pedidos"), (snapshot) => {
      const pedidosArray = [];

      snapshot.forEach((doc) => {
        pedidosArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      pedidosArray.sort((a, b) => {
        const fechaA = new Date(a.fecha);
        const fechaB = new Date(b.fecha);
        return fechaA - fechaB;
      });

      setPedidos(pedidosArray);
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e, id) => {
    const value = e.target.value.toUpperCase(); // convierte a mayúsculas
    setPlacas((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAsignarCarro = async (id) => {
    const placa = placas[id];
    const esValida = /^[A-Z]{3}[0-9]{3}$/.test(placa);

    if (!esValida) {
      alert("La placa debe tener 3 letras seguidas de 3 números, sin espacios ni símbolos.");
      return;
    }

    await updateDoc(doc(db, "Pedidos", id), {
      placaVehiculo: placa,
      estado: "respondido",
    });

    setPlacas((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const pedidosEnEspera = pedidos.filter((p) => p.estado === "pendiente");
  const pedidosRespondidos = pedidos.filter((p) => p.estado === "respondido");

  return (
    <div className="min-h-screen py-24 px-6">
      <h1 className="text-2xl font-bold mb-6 uppercase text-center tracking-wider">Pedidos</h1>

      {/* EN ESPERA */}
      <h2 className="text-xl font-semibold text-yellow-600 mb-2">En espera</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pedidosEnEspera.map((pedido) => (
          <div key={pedido.id} className="border p-4 rounded-lg shadow bg-white">
            <h2 className="text-lg font-bold tracking-wider uppercase text-indigo-600">
              {pedido.nombre}
            </h2>
            <ul className="mt-2 mb-4 text-gray-800 text-base space-y-1">
              <li><strong>Ubicación:</strong> {pedido.ubicacion}</li>
              <li><strong>Destino:</strong> {pedido.destino}</li>
              <li><strong>Teléfono:</strong> {pedido.telefono}</li>
              <li><strong>Equipaje:</strong> {pedido.equipaje}</li>
              <li><strong>ID:</strong> {pedido.id}</li>
            </ul>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="ABC123"
                maxLength={6}
                className="border rounded p-2 w-full text-sm uppercase"
                value={placas[pedido.id] || ""}
                onChange={(e) => handleInputChange(e, pedido.id)}
              />
              <button
                onClick={() => handleAsignarCarro(pedido.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600"
              >
                Asignar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* LÍNEA DE SEPARACIÓN */}
      {pedidosRespondidos.length > 0 && (
        <hr className="my-10 border-gray-300" />
      )}

      {/* RESPONDIDOS */}
      {pedidosRespondidos.length > 0 && (
        <>
          <h2 className="text-xl font-semibold text-green-700 mb-2">Respondidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pedidosRespondidos.map((pedido) => (
              <div key={pedido.id} className="border p-4 rounded-lg shadow bg-gray-50">
                <h2 className="text-lg font-bold tracking-wider uppercase text-green-700">
                  {pedido.nombre}
                </h2>
                <ul className="mt-2 text-gray-800 text-base space-y-1">
                  <li><strong>Ubicación:</strong> {pedido.ubicacion}</li>
                  <li><strong>Destino:</strong> {pedido.destino}</li>
                  <li><strong>Teléfono:</strong> {pedido.telefono}</li>
                  <li><strong>Equipaje:</strong> {pedido.equipaje}</li>
                  <li><strong>ID:</strong> {pedido.id}</li>
                  <li><strong>Placa asignada:</strong> {pedido.placaVehiculo}</li>
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
