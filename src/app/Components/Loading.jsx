// src/app/Components/Loading.jsx
"use client";

import { useState, useEffect } from "react";

export default function Loading({ 
  fullScreen = true, 
  text = "Cargando...",
  spinnerColor = "text-red-500",
  textColor = "text-gray-600"
}) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${fullScreen ? "fixed inset-0" : "w-full h-full"} flex flex-col items-center justify-center bg-white bg-opacity-80 z-50`}>
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Spinner */}
        <svg 
          className={`animate-spin h-12 w-12 ${spinnerColor}`} 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          ></circle>
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        
        {/* Texto con puntos animados */}
        <p className={`text-lg font-medium ${textColor}`}>
          {text}{dots}
        </p>
      </div>
    </div>
  );
}