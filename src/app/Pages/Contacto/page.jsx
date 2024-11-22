import Image from "next/image";
import b_c from "@/app/Images/Contacto/b_c.png"

export default function Contacto() {
    return(
        <div className="mt-36">
            <Image src={b_c} alt="Rectangulo_1" className="w-full h-[500px]" />
        </div>
    );
}