"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Backgound = () => {
  const { scrollYProgress } = useScroll();

  const [opacityBg2, setOpacityBg2] = useState(0);
  const [opacityBg3, setOpacityBg3] = useState(0);
  const [opacityBg4, setOpacityBg4] = useState(0);
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setOpacityBg2(latest < 0.25 ? 0 : latest);
    setOpacityBg3(latest < 0.5 ? 0 : latest);
    setOpacityBg4(latest < 0.75 ? 0 : latest);
    setProgress(latest);
    // console.log(latest);
  });

  return (
    <div className="h-full select-none">
      <div>
        <motion.img
          src="/bg-1.png"
          className="fixed bottom-0 left-0 w-full"
        ></motion.img>

        <motion.img
          src="/bg-2.png"
          className="fixed bottom-0 left-0 w-full"
          initial="hidden"
          animate={{ opacity: opacityBg2 }}
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
      <div className="font-titling-gothic text-accent-blue font-black text-2xl italic  fixed right-10 flex flex-col items-end gap-5 opacity-20">
        <p className=" text-right">
          <span>&quot;Let's build together...&quot;</span>
        </p>
        <p className="">{Math.round(progress * 100) + "%"}</p>
      </div>
    </div>
  );
};

export default Backgound;
