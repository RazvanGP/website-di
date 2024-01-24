"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import useWindowSize from "./useWindowSize";

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150 && windowSize.width < 780) {
      setIsNavHidden(true);
    } else {
      setIsNavHidden(false);
    }
  });

  const variants = {
    open1: { rotate: 45, y: "10px" },
    open2: { rotate: -45 },
    close: { rotate: 0 },
  };

  const windowSize = useWindowSize();

  //temporary solution
  useEffect(() => {
    showMobileNav
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [showMobileNav]);

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isNavHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 flex justify-between items-center w-full max-w-6xl self-center z-10 font-titling-gothic text-silver-grey text-sm px-10 py-5 backdrop-blur-sm"
    >
      <Link href="/" className="">
        <img src="/logo.png" alt="" width={100} />
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

      {showMobileNav && <MobileNav setShowMobileNav={setShowMobileNav} />}
    </motion.nav>
  );
};

export default Nav;
