import Link from "next/link";
import { useState } from "react";
import { easeInOut, motion, AnimatePresence } from "framer-motion";

const MobileNav = ({ setShowMobileNav }) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const navItems = ["home", "about", "services", "portfolio", "contact"];

  return (
    // backdrop-brightness-50 backdrop-blur-md
    <div className="fixed top-0 left-0 min-h-screen min-w-full scroll-none flex justify-center items-center backdrop-blur-md">
      <motion.div
        animate={{ scale: 100 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onAnimationComplete={() => {
          setIsAnimationComplete(true);
        }}
        className="min-h-[30px] min-w-[30px] fixed top-20 right-10 rounded-full bg-slate-950 opacity-70 backdrop-blur-md"
      ></motion.div>

      {isAnimationComplete && (
        <ul className="min-h-[400px] flex flex-col items-center justify-evenly text-siver-blue text-2xl font-light">
          {navItems?.map((item, index) => (
            <motion.li
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{
                scale: 1.2,
                transition: { delay: 0.1 },
              }}
              className="hover:text-accent-red z-10"
            >
              <Link
                href={`/${item == "home" ? "/" : item}`}
                className="uppercase"
                onClick={() => {
                  setShowMobileNav(false);
                }}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
