import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import img1 from "../images/img.jpeg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.webp";

const Gallery = () => {
    const images = [img1, img2, img3];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="py-12 pb-12">
            <section className="container mx-auto px-4">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Galería de fotos</h2>

                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900"></h2>
                </div>

                <div className="relative w-full max-w-4xl mx-auto pt-6 mt-6">
                    {/* Imagen */}
                    <img
                        src={images[currentIndex]}
                        alt={`Foto ${currentIndex + 1}`}
                        className="rounded-lg shadow-lg w-full max-h-[80vh] object-contain mx-auto"
                    />


                    {/* Flecha izquierda */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
                    >
                        <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Flecha derecha */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
                    >
                        <ChevronRightIcon className="w-6 h-6 text-gray-700" />
                    </button>
                </div>

                {/* Miniaturas */}
                <div className="flex justify-center gap-3 mt-6 flex-wrap">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Miniatura ${index + 1}`}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-20 h-14 object-cover rounded-md cursor-pointer border-2 ${index === currentIndex
                                ? "border-blue-600"
                                : "border-transparent"
                                }`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
