import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Context } from "./Context";
import { useContext, useState } from "react";
const HeroSection = () => {
  const [scrollYSection, setScrollYSection] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYSection(latest);
  });

  return (
    <section className="relative h-[320vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: -scrollYSection }}
          transition={{ type: "spring", stiffness: 30 }}
        >
          <div className="h-[450px] min-w-max  font-bold pt-28 font-primary pl-10">
            <h1 className="text-3xl text-accent-red font-bold tracking-widest sticky left-0 translate-x-0">
              SHIP DESIGN ENGINEERING
            </h1>
            <p className="text-[10rem] text-primary-blue font-black opacity-10">
              WHERE VISION SETS SAIL
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
