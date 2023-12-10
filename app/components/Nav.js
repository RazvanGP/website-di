"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const variants = {
    open1: { rotate: 45, y: "10px" },
    open2: { rotate: -45 },
    close: { rotate: 0 },
  };

  return (
    <nav className="fixed top-0 flex justify-between items-center w-full z-10 font-titling-gothic text-silver-grey text-sm px-10 py-5">
      <Link href="/" className="">
        <img src="/logo.png" alt="" width={150} />
      </Link>

      <nav className="hidden md:flex justify-between pr-5 gap-5 ">
        <Link
          href="/"
          className="pr-2 hover:text-accent-blue hover:scale-110 ease-in-out duration-300"
        >
          HOME
        </Link>
        <Link
          href="/about"
          className="pr-2 hover:text-accent-blue hover:scale-110 ease-in-out duration-300"
        >
          ABOUT
        </Link>
        <Link
          href="/services"
          className="pr-2 hover:text-accent-blue hover:scale-110 ease-in-out duration-300"
        >
          SERVICES
        </Link>
        <Link
          href="/portfolio"
          className="pr-2 hover:text-accent-blue hover:scale-110 ease-in-out duration-300"
        >
          PORTFOLIO
        </Link>
        <Link
          href="/contact"
          className=" hover:text-accent-blue hover:scale-110 ease-in-out duration-300"
        >
          CONTACT
        </Link>
      </nav>

      <motion.button
        whileHover={{ scale: 1.2 }}
        className="md:hidden flex flex-col items-end gap-2 z-10 group"
        onClick={() => {
          setShowMobileNav(!showMobileNav);
        }}
      >
        <motion.div
          variants={variants}
          initial={"close"}
          animate={showMobileNav ? "open1" : "close"}
          className={`min-w-[30px] bg-silver-grey min-h-[2px] ${
            showMobileNav
              ? "group-hover:bg-accent-red"
              : "group-hover:bg-accent-blue"
          }`}
        ></motion.div>
        {!showMobileNav && (
          <div
            className={`min-w-[20px] bg-silver-grey min-h-[2px] ${
              showMobileNav
                ? "group-hover:bg-accent-red"
                : "group-hover:bg-accent-blue"
            }`}
          ></div>
        )}
        <motion.div
          variants={variants}
          initial={"close"}
          animate={showMobileNav ? "open2" : "close"}
          className={`min-w-[30px] bg-silver-grey min-h-[2px] ${
            showMobileNav
              ? "group-hover:bg-accent-red"
              : "group-hover:bg-accent-blue"
          }`}
        ></motion.div>
      </motion.button>

      <AnimatePresence>
        {showMobileNav && (
          <motion.div
            initial={{ scale: 0 }} // Initial state
            animate={{ scale: 100, transition: { duration: 0.7 } }}
            exit={{ scale: 0, transition: { duration: 0.7 } }}
            onAnimationComplete={() => setIsAnimationComplete(true)}
            className="min-h-[30px] min-w-[30px] fixed top-20 right-10 rounded-full bg-slate-950 opacity-70 backdrop-blur-md"
          ></motion.div>
        )}
        {isAnimationComplete && showMobileNav && (
          <MobileNav setShowMobileNav={setShowMobileNav} />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
