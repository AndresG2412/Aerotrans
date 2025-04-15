"use client";

import React, { useEffect, useState } from 'react';
import { db } from '@/libs/db';
import { collection, onSnapshot } from 'firebase/firestore';

export default function page() {
  const [pedidos, setPedidos] = useState([]);

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

  return (
    <div className="min-h-screen pt-24 px-6">
      <h1 className="text-2xl font-bold mb-6">Pedidos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pedidos.map((pedido) => (
          <div key={pedido.id} className="border p-4 rounded-lg shadow bg-white">
            {/* Nombre destacado */}
            <h2 className="text-lg font-bold tracking-wider uppercase text-indigo-600">
              {pedido.nombre}
            </h2>

            {/* Información clave para administración */}
            <ul className="mt-2 mb-4 text-gray-800 text-base  space-y-1">
              <li><strong>Ubicación:</strong> {pedido.ubicacion}</li>
              <li><strong>Destino:</strong> {pedido.destino}</li>
              <li><strong>Teléfono:</strong> {pedido.telefono}</li>
              <li><strong>Equipaje:</strong> {pedido.equipaje}</li>
              <li><strong>ID:</strong> {pedido.id}</li>
            </ul>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Escribe algo..."
                className="border rounded p-2 w-full text-sm"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600">
                Acción
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}