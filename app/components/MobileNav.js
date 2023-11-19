import Link from "next/link";
import { motion } from "framer-motion";

const MobileNav = ({ setShowMobileNav }) => {
  const navItems = ["home", "about", "services", "portfolio", "contact"];

  return (
    <div className="fixed top-0 left-0 min-h-screen min-w-full backdrop-brightness-50 backdrop-blur-md scroll-none flex justify-center items-center">
      <ul className="min-h-[400px] flex flex-col items-center justify-between text-siver-blue  text-2xl font-bold">
        {navItems?.map((item, index) => (
          <motion.li
            key={index}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href={`/${item == "home" ? "/" : item}`}
              className="hover:text-accent-red hover:scale-125 ease-in-out duration-300 uppercase"
              onClick={() => {
                setShowMobileNav(false);
              }}
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
