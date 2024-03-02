"use client";
import { motion } from "framer-motion";
import { useState, useContext, useEffect, useTransition } from "react";
import { Context } from "./Context";
import { IoIosArrowDropdown, IoIosArrowDropleft } from "react-icons/io";
import { useTranslation } from "react-i18next";
import Image from "next/image";
const Backgound = () => {
  const { t } = useTranslation();
  const { scrollYValue } = useContext(Context);

  const [opacityBg0, setOpacityBg0] = useState(0);
  const [opacityBg1, setOpacityBg1] = useState(0);
  const [opacityBg2, setOpacityBg2] = useState(0);
  const [opacityBg3, setOpacityBg3] = useState(0);
  const [opacityBg4, setOpacityBg4] = useState(0);
  const [opacityBg5, setOpacityBg5] = useState(0);
  const [opacityBg6, setOpacityBg6] = useState(0);
  const [opacityBg7, setOpacityBg7] = useState(0);
  const [opacityBg8, setOpacityBg8] = useState(0);
  const [progress, setProgress] = useState(0);
  const imgsArr = [
    opacityBg0,
    opacityBg1,
    opacityBg2,
    opacityBg3,
    opacityBg4,
    opacityBg5,
    opacityBg6,
    opacityBg7,
    opacityBg8,
  ];

  useEffect(() => {
    setOpacityBg0(0.2 + scrollYValue);
    setOpacityBg1(scrollYValue < 0.1 ? 0 : scrollYValue);
    setOpacityBg2(scrollYValue < 0.2 ? 0 : scrollYValue);
    setOpacityBg3(scrollYValue < 0.3 ? 0 : scrollYValue);
    setOpacityBg4(scrollYValue < 0.4 ? 0 : scrollYValue);
    setOpacityBg5(scrollYValue < 0.5 ? 0 : scrollYValue - 0.5);
    setOpacityBg6(scrollYValue < 0.6 ? 0 : scrollYValue - 0.5);
    setOpacityBg7(scrollYValue < 0.7 ? 0 : scrollYValue - 0.5);
    setOpacityBg8(scrollYValue < 0.8 ? 0 : scrollYValue - 0.5);
    setProgress(scrollYValue);
  }, [scrollYValue]);

  return (
    <div className="select-none">
      <div className="opacity-90">
        {imgsArr.map((img, index) => {
          return (
            <motion.div
              key={`bg${index}`}
              className="fixed -bottom-36 right-0 w-full h-full max-w-6xl"
              initial="hidden"
              animate={{ opacity: img }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 50 }}
            >
              <Image
                src={`/bg-${index}.png`}
                fill={true}
                className="object-contain"
                loading="lazy"
              ></Image>
            </motion.div>
          );
        })}
      </div>
      <div className="font-titling-gothic text-primary-blue font-black md:text-2xl italic fixed right-10 flex flex-col items-end opacity-20 pt-[20vh] sm:px-5">
        <p className="">{t("common:bg-text")}</p>
        <p className="text-6xl md:text-8xl text-accent-blue dark:text-dark-accent-blue">
          {Math.round(progress * 100) + "%"}
        </p>
        {scrollYValue <= 0.95 ? (
          <motion.div
            className="flex flex-col items-end"
            animate={{ scale: [1, 1.1] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: 1,
            }}
          >
            <IoIosArrowDropdown
              size={50}
              className="dark:fill-dark-accent-blue fill-accent-blue"
            />
            <p className="text-xs uppercase dark:text-silver-grey">
              {t("common:bg-scroll")}
            </p>
          </motion.div>
        ) : (
          <IoIosArrowDropleft
            size={50}
            className="dark:fill-dark-accent-blue fill-accent-blue"
          />
        )}
      </div>
    </div>
  );
};

export default Backgound;
