"use client";

import React, { useEffect, useState } from 'react';
import { db } from '@/libs/db'; // Asegúrate que este archivo exporta tu db
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
  
        // Ordenar por fecha (del más antiguo al más nuevo)
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
  
        <div className="grid grid-cols-2 gap-x-8">
          {pedidos.map((pedido) => (
            <div key={pedido.id} className="border p-4 rounded-lg shadow mb-6 bg-white">
              <h2 className="text-lg font-semibold text-indigo-600">{pedido.id}</h2>
  
              <ul className="mt-2 mb-4 text-gray-800 text-sm">
                {Object.entries(pedido).map(([key, value]) => {
                  if (key !== "id") {
                    return (
                      <li key={key}>
                        <strong>{key}:</strong> {String(value)}
                      </li>
                    );
                  }
                })}
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