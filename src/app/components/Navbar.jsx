import logo from "@/app/Images/logo.png";
import Image from 'next/image';
import Link from "next/link";


export default function Navbar(){
    return(
        <>
            <div className="z-50 fixed w-[90%] h-[70px] bg-[#D9D9D9] rounded-3xl flex justify-between items-center">
                <Link href="/">
                    <Image className="h-10 w-80 ml-6" src={logo} alt="Logo"/>
                </Link>
                <div className="flex font-semibold mr-6">
                    <Link href="#" className="link mx-4 text-lg">PEDIR TAXI</Link>
                    <Link href="#" className="link mx-4 text-lg">POLITICAS</Link>
                    <Link href="#" className="link mx-4 text-lg">NOSOTROS</Link>
                    <Link href="#" className="link mx-4 text-lg">CONTACTO</Link>
                    <Link href="#" className="link mx-4 text-lg">RUTAS</Link>
                </div>
            </div>
        </>
    );
}