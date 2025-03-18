"use client";

import Image from "next/image";
import img1 from "../Images/footer/laf.png";

import Social from "./Social";

export default function Footer() {
    return (
        <footer
            className="bg-neutral-100 text-center text-neutral-600 dark:bg-[#121825] dark:text-neutral-200 lg:text-left">
            <div
                className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-[#555] lg:justify-between">
                <div className="mr-12 hidden lg:block">
                    <span className="font-semibold tracking-wide">Mantente conectado con nosotros siempre!</span>
                </div>
                <div className="ml-12 hidden lg:block">
                    <a href="../Pages/Admin" className="font-semibold tracking-wide">Entrar como Administrador</a>
                </div>
            </div>

            {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
            <div className="mx-auto my-12 w-3/4 ">
                <div className="md:flex justify-between">
                    <Image priority={false} className="mx-auto md:mx-0" src={img1} alt="Logo"/>

                    <div className="mt-10 md:my-auto">
                        <h6 className="font-bold uppercase text-center text-2xl tracking-widest">
                            Contactos
                        </h6>

                        <div className="flex justify-center">
                            <Social />
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--Copyright section--> */}
            <div className="bg-neutral-200 p-6 text-center dark:bg-[#121825] border-[#555] border-t-2">
                <span>© 2024 Copyright:</span>
                <a
                className="font-semibold text-neutral-600 dark:text-neutral-400"
                href="https://tw-elements.com/"
                > Aerotrans LTDA</a>
            </div>
        </footer>
    );
}
