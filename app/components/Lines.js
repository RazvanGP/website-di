"use client";
import { motion } from "framer-motion";

const Lines = () => {
  return (
    <motion.div
      className="fixed top-0 text-9xl flex justify-center items-center h-full w-full"
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="h-full w-full flex justify-around">
        <div className=" min-h-full w-[1px] bg-gradient-to-b from-[rgba(0,38,50,0)] to-[rgba(0,38,50,0)] via-[rgba(0,38,50,0.2)]"></div>

        <div className="min-h-full w-[1px] bg-gradient-to-b from-[rgba(0,38,50,0)] to-[rgba(0,38,50,0)] via-[rgba(0,38,50,0.2)]"></div>

        <div className="min-h-full w-[1px] bg-gradient-to-b from-[rgba(0,38,50,0)] to-[rgba(0,38,50,0)] via-[rgba(0,38,50,0.2)]"></div>

        <div className="hidden sm:block min-h-full w-[1px] bg-gradient-to-b from-[rgba(0,38,50,0)] to-[rgba(0,38,50,0)] via-[rgba(0,38,50,0.2)]"></div>

        <div className="hidden md:block min-h-full w-[1px] bg-gradient-to-b from-[rgba(0,38,50,0)] to-[rgba(0,38,50,0)] via-[rgba(0,38,50,0.2)]"></div>

        <div className="hidden lg:block min-h-full w-[1px] bg-gradient-to-b from-[rgba(0,38,50,0)] to-[rgba(0,38,50,0)] via-[rgba(0,38,50,0.2)]"></div>
      </div>
    </motion.div>
  );
};

export default Lines;
