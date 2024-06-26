import Link from "next/link";
import { useState } from "react";
import { easeInOut, motion, AnimatePresence } from "framer-motion";

import { useTranslation } from "react-i18next";

const MobileNav = (setShowMobileNav) => {
  const navItems = [
    "menu-home",
    "menu-about",
    "menu-services",
    "menu-portfolio",
    "menu-contact",
  ];
  const { t } = useTranslation();

  return (
    // backdrop-brightness-50 backdrop-blur-md
    <div className="fixed top-0 left-0 min-h-screen min-w-full scroll-none flex justify-center items-center backdrop-blur-md bg-slate-950 opacity-90">
      <ul className="min-h-[400px] flex flex-col items-center justify-evenly text-silver-grey text-2xl font-light">
        {navItems?.map((item, index) => (
          <motion.li
            key={index}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: index * 0.05, type: "spring" },
            }}
            whileHover={{
              scale: 1.2,
              transition: { delay: 0.1 },
            }}
            className="hover:text-accent-red z-10"
          >
            <Link
              href={`/${item == "menu-home" ? "/" : item.split("-")[1]}`}
              className="uppercase"
              onClick={() => {
                setShowMobileNav(false);
              }}
            >
              {t(`common:${item}`)}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
