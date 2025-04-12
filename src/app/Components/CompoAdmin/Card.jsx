import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Card({ ruta, imagen, titulo, onClick }) {
    const content = (
        <div
            onClick={onClick || null}
            className="p-5 rounded-lg bg-[#222] shadow-2xl flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
            <Image
                src={imagen}
                width={100}
                height={100}
                alt={`Icono de ${titulo}`}
                className="rounded-md"
            />
            <p className="text-white tracking-wider text-center font-semibold text-2xl">
                {titulo}
            </p>
        </div>
    );

    return onClick ? content : <Link href={ruta}>{content}</Link>;
}
