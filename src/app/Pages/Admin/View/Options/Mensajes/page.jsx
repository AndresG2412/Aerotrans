"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import withAuth from '@/app/Components/WithAuth';

function ProtectedPage() {
    const router = useRouter();
  
    const volver = () => {
      router.push("/Pages/Admin/View");
    };
  
    return (
      <div className="h-screen">
        <p className="text-center text-3xl tracking-wider mt-24 font-bold">MUY PRONTO...</p>
        <button
          className="border-[1px] border-black bg-red-500 hover:scale-110 hover:duration-300 fixed bottom-5 right-5 py-2 px-4 uppercase tracking-wide font-semibold text-base"
          onClick={volver}
        >
          Volver
        </button>
      </div>
    );
  }
  
  // 👇 Esta línea es la clave
  export default withAuth(ProtectedPage);
