"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "@/components/CursorContext";


const gallery = () => {
    const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
    const images = [
        "/assets/gallery/img1.webp",
        "/assets/gallery/img2.webp",
        "/assets/gallery/img3.webp",
        "/assets/gallery/img4.webp",
        "/assets/gallery/img5.webp",
        "/assets/gallery/img6.webp",
        "/assets/gallery/img7.webp",
        "/assets/gallery/img8.webp",
        "/assets/gallery/img9.webp",
    ];
    return (
        <div className="pt-16 xl:pt-32" id="projects">
            <div className="container mx-auto">

                {/* Title */}
                <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="text-center max-w-[540px] mx-auto xl:mb-20 mb-10">
                    <h3 className="h1 mb-6">Discover our project</h3>
                    <p>
                        Providing expert services designer to deliver quality and inovation
                        in every project we undertake.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <div key={index} className="w-full overflow-hidden rounded-xl">
                            <Image
                                src={src}
                                alt={`gallery-${index}`}
                                width={600}
                                height={800}
                                className="object-cover w-full h-full hover:scale-105 transition duration-500"
                            />
                        </div>
                    ))}
                </motion.div>

            </div>

            {/* CTA Section */}
            <div className="mt-20 bg-[#F5EEEA] p-10 rounded-xl shadow-sm">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">

                    {/* Text */}
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-semibold text-[#7A2E2E] mb-3">
                            Ada pertanyaan? Hubungi kami sekarang Juga!
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Bila Anda pertanyaan terkait layanan Makeup Artist yang dibutuhkan,
                            segera hubungi kontak Devy MUA sekarang juga. Kami selalu siap menjawab
                            setiap pertanyaan Anda secepatnya.
                        </p>
                    </div>

                     {/* Button */}
                     <motion.button
                     onMouseEnter={mouseEnterHandler}
                     onMouseLeave={mouseLeaveHandler}
                     className="btn btn-lg">
                         <a 
                        href="https://wa.me/6281234567890"
                        target="blank"
                        rel="noopener noreferrer"
                        >Contact Us Now</a>
                     </motion.button>
                </div>

            </div>
        </div>
    );
};

export default gallery;

