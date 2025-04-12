import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Card({ ruta, imagen, titulo }) {
    return (
        <Link href={ruta}>
            <div className='p-5 rounded-lg bg-[#222] shadow-2xl flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300'>
                                
                <Image 
                    src={imagen}
                    width={100}
                    height={100}
                    alt="Alt_Imagen"
                    className='rounded-md'
                />

                <p className='text-white tracking-wider text-center font-semibold text-2xl'>
                    {titulo}
                </p>
            </div>
        </Link>
    );
}
