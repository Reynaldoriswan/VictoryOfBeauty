"use client";
import { useContext } from "react";
import { delay, motion } from "framer-motion";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";



const Treatments = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <motion.section
      initial={{ opacity: 0}}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-hidden pt-4"
    >
      <div className="container mx-auto flex flex-col items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        
        {/* ——————————— TEXT + IMAGE WRAPPER ——————————— */}
        <div className="w-full h-full flex flec-col xl:flex-row items-start gap-16">

          {/* ——————————— TEXT ——————————— */}
          <motion.div
            initial={{opacity: 0, x: -60}}
            animate={{
              opacity: 1,
              x: 0,
              transition: {delay: 2, duration: 0.8, ease: 'easeInOut'},
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto pt-0 "
          >
            
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Make Up Artist  & Rias Pengantin Profesional
            </h2>

            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Victory of Beauty memiliki layanan makeup artist yang siap melayani
              anda membuat penampilan menjadi lebih istimewa.
            </p>

            {/* ——————————— ITEMS ——————————— */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">

              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px]
                  rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Product Branded</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Hanya menggunakan produk makeup yang bermerek (branded)
                </p>
              </div>

              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px]
                  rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Team Profesional</h3>
                </div>
                  <p className="pl-6 text-[15px]">
                    Memiliki team dengan skill makeup profesional
                  </p>
              </div>

              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px]
                  rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Bersih dan Higenis</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Alat make up yang selalu bersih dan higenis menjamin terhindar
                  dari iritasi kulit pada wajah
                </p>
              </div>

              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px]
                  rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Aksesoris lengkap</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Memiliki aksesoris pernikahan yang lengkap
                </p>
              </div>

            </div>

            {/* ——————————— BUTTON ——————————— */}
            <button className="btn mx-auto xl:mx-0 ">Discover More</button>

          </motion.div>

          {/* ——————————— IMAGE ——————————— */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: 'easeInOut' },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="hidden xl:flex w-[384px] h-[534px] relative"
          >
            <Image 
              src="/assets/treatments/img2.jpg" 
              fill 
              quality={100} 
              alt=""
              className="object-contain"
            />
          </motion.div>

        </div>
        {/* ——————————— END OF FLEX WRAPPER ——————————— */}


        {/* ——————————— PRICING SECTION (DITAMBAHKAN) ——————————— */}
        <div className="w-full mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Paket Akad */}
            <div className="border border-[#945f57] rounded-2xl p-8 bg-transparent flex flex-col
            transition-all duration-300 hover:scale-[1.03] hover:bg-[#945f57]/10 hover:shadow-xl cursor-pointer">
              <h3 className="text-2xl font-bold text-[#945f57] mb-4">Paket Akad Nikah</h3>
              <ul className="space-y-2 text-[15px]">
                <li>• Makeup Akad Mempelai Wanita</li>
                <li>• Sepasang Busana Akad Nasional Pengantin</li>
                <li>• Hijabdo/Hairdo</li>
                <li>• Melati Segar Akad</li>
                <li>• Transport (Tangerang)</li>
                <li>• Free Softlens</li>
              </ul>
              <div className="mt-auto pt-6">
                <p className="text-xl font-bold text-[#945f57]">Rp.</p>
                <p className="text-3xl font-extrabold text-[#945f57]">3,000,000,-</p>
              </div>
            </div>

            {/* Paket Resepsi */}
            <div className="border border-[#945f57] rounded-2xl p-8 bg-transparent flex flex-col
            transition-all duration-300 hover:scale-[1.03] hover:bg-[#945f57]/10 hover:shadow-xl cursor-pointer">
              <h3 className="text-2xl font-bold text-[#945f57] mb-4">Paket Resepsi</h3>
              <ul className="space-y-2 text-[15px]">
                <li>• Makeup Resepsi Mempelai Wanita</li>
                <li>• 2 Pasang Busana Nasional Resepsi Pengantin</li>
                <li>• Makeup + Busana 2 Pasang Orang Tua</li>
                <li>• Makeup + Busana 2 Orang Pagar Ayu</li>
                <li>• Melati Segar Akad</li>
                <li>• Hijabdo/Hairdo</li>
                <li>• Transport</li>
                <li>• Free Softlens</li>
              </ul>
              <div className="mt-auto pt-6">
                <p className="text-xl font-bold text-[#945f57]">Rp.</p>
                <p className="text-3xl font-extrabold text-[#945f57]">6,500,000,-</p>
              </div>
            </div>

            {/* Paket Akad & Resepsi */}
            <div className="border border-[#945f57] rounded-2xl p-8 bg-transparent flex flex-col
            transition-all duration-300 hover:scale-[1.03] hover:bg-[#945f57]/10 hover:shadow-xl cursor-pointer">
              <h3 className="text-2xl font-bold text-[#945f57] mb-4">Paket Akad & Resepsi</h3>
              <ul className="space-y-2 text-[15px]">
                <li>• Makeup + Busana Nasional Akad Pengantin</li>
                <li>• Makeup + 2 Pasang Busana Nasional Resepsi</li>
                <li>• Makeup + Busana 2 Pasang Orang Tua</li>
                <li>• Makeup + Busana 2 Pagar Ayu</li>
                <li>• Melati Segar Akad</li>
                <li>• Hijabdo/Hairdo</li>
                <li>• Transport (Tangerang)</li>
                <li>• Free Softlens</li>
              </ul>
              <div className="mt-auto pt-6">
                <p className="text-xl font-bold text-[#945f57]">Rp.</p>
                <p className="text-3xl font-extrabold text-[#945f57]">8,500,000,-</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default Treatments;
