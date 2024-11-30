"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowBigLeft, ArrowBigRight} from "lucide-react"

export default function Slider({ images }) {
    const [imageIndex, setImageIndex] = useState(0);

    const handleNext = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

  const handlePrev = () => {
    setImageIndex((prevIndex) =>
        (prevIndex - 1 + images.length) % images.length);
    };

  return (
    <>
      <div className="flex gap-4">
        <button onClick={handlePrev} className="py-2 px-4"><ArrowBigLeft/></button>

        <Image src={images[imageIndex]} alt={`Image ${imageIndex}`} className="w-[500px] rounded-xl shadow-2xl"/>
        
        <button onClick={handleNext} className="py-2 px-4"><ArrowBigRight/></button>
      </div>
    </>
  );
}
