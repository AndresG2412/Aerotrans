"use client";

import Image from "next/image";
import img1 from "../Images/footer/laf.png";
import fb from "../Images/footer/fb.png";
import twt from "../Images/footer/twt.png";
import inst from "../Images/footer/inst.png";

export default function Footer() {
    return (
        <div className="w-screen h-auto bg-gray-800 flex mt-20">
            <div className="w-10/12 mx-auto flex justify-between items-center py-8">

                <Image src={img1} alt="logo_footer" className="" />

                <div className="flex items-center">
                    <Image src={fb} alt="icon_fb" className="w-[75px] h-[75px] ml-12" />
                    <Image src={twt} alt="icon_twt" className="w-[75px] h-[75px] ml-12" />
                    <Image src={inst} alt="icon_inst" className="w-[75px] h-[75px] ml-12" />
                </div>
            </div>
        </div>
    );
}
