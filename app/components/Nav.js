"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import useWindowSize from "./useWindowSize";
import LanguageChanger from "./LanguageChanger";

import { useTranslation } from "react-i18next";
import DarkModeToggleBtn from "./DarkModeToggleBtn";

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);

  const { scrollY } = useScroll();

  const { t } = useTranslation();

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

  const navItems = [
    "menu-home",
    "menu-about",
    "menu-services",
    "menu-portfolio",
    "menu-contact",
  ];

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
      className="sticky top-0 flex justify-between items-center w-full max-w-6xl self-center z-10 font-titling-gothic text-primary-blue text-sm px-10 py-5 backdrop-blur-sm"
    >
      <Link href="/" className="">
        <img src="/logo.png" alt="" width={100} />
      </Link>

      <ul className="hidden md:flex justify-between pr-5 gap-5 ">
        {navItems?.map((item, index) => (
          <li
            key={index}
            className="pr-2 hover:text-accent-blue hover:scale-110 ease-in-out duration-300 uppercase"
          >
            <Link
              href={`/${index === 0 ? "/" : item.split("-")[1]}`}
              className="uppercase"
              onClick={() => {
                setShowMobileNav(false);
              }}
            >
              {t(`common:${item}`)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="absolute flex gap-5 right-8 md:right-14 top-20">
        <DarkModeToggleBtn />
        <LanguageChanger />
      </div>
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
