"use client";

import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

const portfolioData = [
  { img: "/assets/gallery/img1.webp", title: "Makeup Look 01" },
  { img: "/assets/gallery/img3.webp", title: "Makeup Look 02" },
  { img: "/assets/gallery/img5.webp", title: "Makeup Look 03" },
  { img: "/assets/gallery/img4.webp", title: "Makeup Look 04" },
  { img: "/assets/gallery/img6.webp", title: "Makeup Look 05" },
  { img: "/assets/gallery/img7.webp", title: "Makeup Look 06" },
  { img: "/assets/gallery/img8.webp", title: "Makeup Look 07" },
];

export default function PortfolioSlider({ mouseEnterHandler, mouseLeaveHandler }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1.2}
      centeredSlides={true}
      loop={true}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3.2 }
      }}
      className="py-10"
    >
      {portfolioData.map((item, i) => (
        <SwiperSlide key={i}>
          <motion.div
            whileHover={{ scale: 1.08 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="group rounded-3xl overflow-hidden shadow-lg relative cursor-pointer"
          >
            <Image
              src={item.img}
              width={600}
              height={800}
              alt={item.title}
              className="h-[450px] w-full object-cover group-hover:brightness-110 duration-500"
            />

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 bg-black/40 px-4 py-2 rounded-xl text-white">
              {item.title}
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}