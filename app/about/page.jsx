"use client";
import { CursorContext } from "@/components/CursorContext";
import StatsItem from "@/components/StatsItem";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext, useState } from "react";
import faqData from "@/components/data/faqData";



const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFaq = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};
  return (
    <>
    <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity: 1, 
      transition:{delay:2} }} 
      className="min-h-screen flex items-center 
      overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32
      xl:pb-0">
        <div className="w-full h-full flex flex-col xl:flex-row items-center
        justify-between">
          {/* Image */}
          <motion.div initial={{opacity: 0, x: -60}} animate={{opacity: 1, x:0,
            transition: {delay: 2, duration: 0.8, ease: "easeInOut"},
          }} className="relative w-[304px] h-[423px] xl:-[384px] xl:h-[534px] mb-8 xl:mx-0">
            <Image 
            src="/assets/about/img2.jpg" 
            fill 
            quality={100} 
            priority 
            alt=""
            className="object-contain"/> 
          </motion.div>
          {/* text */}
          <motion.div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          initial={{ opacity: 0, x: -60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
          }}
          className="flex flex-col items-start xl:max-w-[650px] text-center
          xl:text-left mx-auto xl:mx-0">
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Commited to Your Skin's Health and Beauty
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Tailored Skincare solutions for a healthy complexion, offering
              customized care for radiant skin
            </p>
            {/* items */}
            <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
              <div>
                <StatsItem countNum={13} text="Years On Market"/>
              </div>
              <div>
                <StatsItem countNum={35} countText="K+" text="Happy Clients" />
              </div>
              <div>
                <StatsItem 
                  countNum={97} 
                  countText="%" 
                  text="Natural Ingredients"
                />
              </div>
            </div>
            {/* button */}
            <motion.button
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="btn btn-lg">Contact Us</motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
    {/* Faq Page */ }
          <section className="pb-32 pt-10 bg-accent/80">
            <div className="container mx-auto max-w-2xl">
              <h3 className="text-3xl font-semibold text-center mb-10">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-xl p-4 cursor-pointer bg-white shadow-sm"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-lg">{item.q}</h4>
                      <span className="text-xl">
                        {activeIndex === index ? "-" : "+"}
                      </span>
                    </div>

                    {activeIndex === index && (
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        {item.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
    </>
  )
}

export default About;