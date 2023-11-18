import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Context } from "./Context";
import { useContext, useState } from "react";
import Link from "next/link";

const HeroSection = () => {
  const [scrollYSection, setScrollYSection] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYSection(latest);
  });

  return (
    <section className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* bg-gradient-to-t from-[rgba(0,110,255,0.001)] via-[rgba(0,110,255,0.1)] to-[rgba(0,110,255,0.001)] */}
        <div className=" p-10 mt-48 min-w-max font-bold font-primary pl-5 flex flex-col items-start">
          <h1 className="text-sm sm:text-xl text-accent-red font-extrabold tracking-[5px] sm:tracking-[10px] drop-shadow-xl">
            SHIP DESIGN ENGINEERING
          </h1>
          <motion.p
            className="text-9xl text-primary-blue font-black opacity-10 "
            animate={{ x: -scrollYSection }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            WHERE VISION SETS SAIL
          </motion.p>
          <Link
            href="/services"
            class="mt-24 px-4 py-2 text-primary-blue uppercase bg-transparent border-2 border-primary-blue hover:bg-primary-blue hover:text-white text-md duration-1000"
          >
            explore our services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
