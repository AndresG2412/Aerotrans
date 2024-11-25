import Image from "next/image";

export default function Button({titulo, color, image}) {

    const colorClasses = {
        red: 'hover:bg-red-500',
        blue: 'hover:bg-blue-500',
        green: 'hover:bg-green-500',
        yellow: 'hover:bg-yellow-500',
    };

    const hoverClass = colorClasses[color] || 'hover:bg-transparent'; 

    return(
        <>
            <button className={`flex gap-4 items-center justify-center text-2xl font-bold border-4 border-black bg-transparent w-1/3 rounded-2xl py-3 mt-6 mx-auto transition-transform transition-colors duration-300 ease-out transform hover:scale-105 ${hoverClass}`}>
            <Image
                src={image}
                alt="logo_boton"
                className="w-8"
            />
            {titulo}
            </button>
        </>
    );
}