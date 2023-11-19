"use client";
import { motion } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import { Context } from "./Context";
import { IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io";

const Backgound = () => {
  const { scrollYValue } = useContext(Context);

  const [opacityBg2, setOpacityBg2] = useState(0);
  const [opacityBg3, setOpacityBg3] = useState(0);
  const [opacityBg4, setOpacityBg4] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setOpacityBg2(scrollYValue < 0.25 ? 0 : scrollYValue);
    setOpacityBg3(scrollYValue < 0.5 ? 0 : scrollYValue);
    setOpacityBg4(scrollYValue < 0.75 ? 0 : scrollYValue);
    setProgress(scrollYValue);
  }, [scrollYValue]);

  return (
    <div className="select-none">
      <div className="opacity-40">
        <motion.img
          src="/bg-1.png"
          className="fixed bottom-0 left-0 w-full"
        ></motion.img>

        <div className="opacity-50">
          <motion.img
            src="/bg-2.png"
            className="fixed bottom-0 left-0 w-full"
            initial="hidden"
            animate={{ opacity: opacityBg2 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          ></motion.img>

          <motion.img
            src="/bg-3.png"
            className="fixed bottom-0 left-0 w-full"
            initial="hidden"
            animate={{ opacity: opacityBg3 }}
            transition={{ type: "spring", stiffness: 100 }}
          ></motion.img>

          <motion.img
            src="/bg-4.png"
            className="fixed bottom-0 left-0 w-full"
            initial="hidden"
            animate={{ opacity: opacityBg4 }}
            transition={{ type: "spring", stiffness: 100 }}
          ></motion.img>
        </div>
      </div>
      <div className="font-titling-gothic text-primary-blue font-black md:text-2xl italic fixed right-10 flex flex-col items-end opacity-20 pt-[20vh] sm:px-5">
        <p className="">Let&apos;s build together...</p>
        <p className="text-6xl md:text-8xl text-accent-blue">
          {Math.round(progress * 100) + "%"}
        </p>
        {scrollYValue <= 0.95 ? (
          <motion.div
            animate={{ scale: [1, 1.1] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: 1,
            }}
          >
            <IoIosArrowDropdown size={100} color="#2E84FF" />
          </motion.div>
        ) : (
          <IoIosArrowDropleft size={100} color="#2E84FF" />
        )}
      </div>
    </div>
  );
};

export default Backgound;
