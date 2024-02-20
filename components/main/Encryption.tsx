"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full" id="token">
      {/* <div className="absolute w-auto h-auto top-6 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          TOKENOMICS
          
        </motion.div>
      </div> */}
      <div className="flex sm:flex-row flex-col gap-3">
            <div className="flex w-[200px] flex-col items-center justify-center translate-y-[-50px] z-[20] h-auto border-double border-gray-50 border-2 p-5">
              <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
                <Image
                  src="/mainIconsdark.png"
                  alt="Lock Main"
                  width={70}
                  height={70}
                  className=" z-10"
                />
                <motion.div
                variants={slideInFromTop}
                className="text-[40px] font-medium text-center text-gray-200"
              >
                Name
              </motion.div>
              </div>

              <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
                <h1 className="Welcome-text text-[32px]">X</h1>
              </div>
            </div>
            <div className="flex w-[200px] flex-col items-center justify-center translate-y-[-50px] z-[20] h-auto border-double border-gray-50 border-2 p-5">
              <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
                <Image
                  src="/mainIconsdark.png"
                  alt="Lock Main"
                  width={70}
                  height={70}
                  className=" z-10"
                />
                <motion.div
                variants={slideInFromTop}
                className="text-[40px] font-medium text-center text-gray-200"
              >
                TAX
              </motion.div>
              </div>

              <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
                <h1 className="Welcome-text text-[32px]">0/0</h1>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center translate-y-[-50px] z-[20] w-[200px] h-auto border-double border-gray-50 border-2 p-5">
              <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
                <Image
                  src="/mainIconsdark.png"
                  alt="Lock Main"
                  width={70}
                  height={70}
                  className=" z-10"
                />
                <motion.div
                variants={slideInFromTop}
                className="text-[40px] font-medium text-center text-gray-200"
              >
                LP
              </motion.div>
              </div>

              <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
              <h1 className="Welcome-text text-[32px]">LOCKED</h1>
              </div>
            </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
