"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      className="font-titling-gothic text-primary-blue font-bold fixed bottom-[30%] py-5 md:py-28 px-10 bg-cyan-700 w-full bg-opacity-20"
      initial={{ y: -1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h1 className="text-xl text-accent-red">SHIP DESIGN ENGINEERING</h1>
      <h2 className="text-right md:text-left text-6xl font-black">
        WHERE VISION SETS SAIL
      </h2>
    </motion.div>
  );
};

export default HeroSection;
