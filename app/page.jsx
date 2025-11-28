"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import Image from "next/image";
import ModalVideo from "@/components/ModalVideo";
import PortfolioSlider from "@/components/PortfolioSlider";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2 } }}
        className="min-h-screen flex items-center overflow-x-hidden"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center h-full">
            
            {/* text */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 2, duration: 1, ease: "easeInOut" },
              }}
              className="w-full text-center xl:text-left xl:w-[500px] pt-[60px]"
            >
              <motion.h1
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="h1 mb-6"
              >
                Natural Beauty <br /> Starts Here
              </motion.h1>

              <motion.p
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="lead max-w-xl mx-auto"
              >
                Tailored skincare solutions for a healthy complexion, offering
                customized care for radiant skin
              </motion.p>

              <div>
                <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
                  <motion.button
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    onClick={() => {
                      window.open(
                        "https://wa.me/6287815678168?text=Halo%2C+saya+ingin+booking+appointment",
                        "_blank"
                      );
                    }}
                    className="btn btn-lg"
                  >
                    Book an appointment
                  </motion.button>

                  <motion.div
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                  >
                    <ModalVideo />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* image */}
            <div className="flex-1 pt-40 -mt-[100px]">
              <motion.div
                initial={{ opacity: 0, bottom: "-100%" }}
                animate={{
                  opacity: 1,
                  bottom: 0,
                  transition: { delay: 2, duration: 1.2, ease: "easeInOut" },
                }}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="hidden xl:flex bottom-0 ml-[120px]"
              >
                <Image
                  src={"/assets/home2.png"}
                  width={600}
                  height={500}
                  quality={100}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* === Portfolio Section (kosong dulu) === */}
     <section className="pt-1 pb-20 -mt-[40px]">
      <div className="container mx-auto text-center bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl p-12">
    
    <h2 className="text-4xl font-semibold text-[#7A2E2E] mb-12">
      Portfolio Victory MakeUp
    </h2>

    {/* Slider */}
    <PortfolioSlider 
      mouseEnterHandler={mouseEnterHandler}
      mouseLeaveHandler={mouseLeaveHandler}
    />

    {/* CTA Buttons */}
    <div className="flex flex-col items-center gap-6 mt-12">
      <motion.button
        className="btn btn-lg"
        onClick={() => window.location.href = "/gallery"}
      >
        More Portfolio
      </motion.button>

      <motion.button
        className="btn btn-lg"
        onClick={() =>
          window.open(
            "https://wa.me/6287815678168?text=Halo%2C+saya+ingin+booking+appointment",
            "_blank"
          )
        }
      >
        Make an Appointment Now!
      </motion.button>
    </div>

  </div>
</section>
    </>
  );
};

export default Home;
