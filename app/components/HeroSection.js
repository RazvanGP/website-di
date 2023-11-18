"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className="font-titling-gothic text-primary-blue font-bold py-5 md:py-28 px-10 bg-gradient-to-r from-[rgba(0,110,255,0.1)]  to-opacity-0 w-full md:w-3/4 "
      // initial={{ y: -1000, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h1 className="text-xl text-accent-red">SHIP DESIGN ENGINEERING</h1>

      <h2 className="text-6xl font-black">WHERE VISION SETS SAIL</h2>
    </motion.section>
  );
};

export default HeroSection;
