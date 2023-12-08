import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Context } from "./Context";
import { useContext, useState } from "react";
import Link from "next/link";
import { PiQuotesThin } from "react-icons/pi";

const HeroSection = () => {
  const [scrollYSection, setScrollYSection] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYSection(latest);
  });

  return (
    <section className="relative h-[200vh] max-w-[350px] md:max-w-2xl lg:max-w-7xl">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className=" p-10 mt-48 min-w-max font-bold font-primary pl-5 flex flex-col items-start">
          <h1 className="text-sm sm:text-xl text-accent-red font-extrabold tracking-[3px] sm:tracking-[10px] drop-shadow-xl">
            SHIP DESIGN ENGINEERING
          </h1>

          <motion.div
            className="flex flex-col"
            animate={{ x: -scrollYSection }}
            transition={{ type: "spring", damping: 15, stiffness: 50 }}
          >
            <PiQuotesThin size={75} color="#283260" className="opacity-50" />
            <p className="text-9xl text-primary-blue font-black opacity-20">
              WHERE VISION SETS SAIL
            </p>
            <PiQuotesThin
              size={75}
              color="#283260"
              className="place-self-end opacity-50"
            />
          </motion.div>

          <Link
            href="/services"
            className="px-4 py-2 text-primary-blue uppercase bg-transparent border-2 border-primary-blue hover:bg-primary-blue hover:text-white text-md duration-1000"
          >
            explore our services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
