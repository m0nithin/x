"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex sm:flex-row flex-col-reverse items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          
          <h1 className="Welcome-text text-[13px]">
            X - Everything Tool
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
          World where  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Blockchain{" "}
            </span>
            and Artificial Intelligence 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Merge{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          X Token emerges as the key to unlocking a new level of interaction and analysis in the cryptocurrency landscape. 
        </motion.p>
        <div className="flex gap-3">
        <motion.a
          href="https://t.me/XEverythingtool"
          target="_blank"
          variants={slideInFromLeft(1)}
          className="p-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Join
        </motion.a>
        <motion.a
          href="https://X.com/xeverythingtool"
          variants={slideInFromLeft(1)}
          className="p-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          X
        </motion.a>
        <motion.a
          href="#"
          variants={slideInFromLeft(1)}
          className="p-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Buy
        </motion.a>
        </div>

      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.png"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
