"use client";

import { useState } from "react";

export default function Rating() {
  const [rating, setRating] = useState(0); // Estado para el valor actual de la calificación
  const totalCircles = 5; // Número total de círculos

  const handleRating = (index) => {
    setRating(index + 1); // Actualiza la calificación con el índice seleccionado
  };

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: totalCircles }, (_, index) => (
        <div
          key={index}
          className={`w-6 h-6 rounded-full cursor-pointer ${
            index < rating ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={() => handleRating(index)} // Asigna la calificación al hacer clic
        />
      ))}
    </div>
  );
}
