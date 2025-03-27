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
      setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

  return (
    <>
      <div className="flex justify-center">
        <button onClick={handlePrev} className="py-2 px-6 mx-1"><ArrowBigLeft/></button>
          <Image priority={false} src={images[imageIndex]} alt={`Image ${imageIndex}`} className="md:w-auto md:h-64 rounded-xl shadow-2xl w-3/5"/>
        <button onClick={handleNext} className="py-2 px-6 mx-1"><ArrowBigRight/></button>
      </div>
    </>
  );
}
