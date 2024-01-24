import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
  useAnimation,
} from "framer-motion";
import { Context } from "./Context";
import { useContext, useState, useRef } from "react";
import Link from "next/link";
import { PiQuotesThin } from "react-icons/pi";
import Reveal from "./Reveal";

const HeroSection = () => {
  const [scrollYSection, setScrollYSection] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYSection(latest);
  });

  return (
    <section className="h-screen py-[75px] relative max-w-[350px] md:max-w-2xl lg:max-w-5xl ">
      <div className="h-screen flex items-center overflow-hidden">
        <div className=" p-10 min-w-max font-bold font-primary pl-5 flex flex-col items-start gap-10">
          <h1 className="text-sm md:text-lg text-accent-red font-extrabold tracking-[3px] md:tracking-[10px] drop-shadow-xl">
            SHIP DESIGN ENGINEERING
          </h1>

          <Reveal delay={0.5}>
            <div className="flex flex-col">
              <PiQuotesThin color="#283260" className="w-[50px] h-[50px]" />
              <p className="text-4xl md:text-6xl lg:text-8xl text-primary-blue font-black flex flex-col">
                <span>WHERE VISION</span>
                <span className="text-end">SETS SAIL</span>
              </p>
              <PiQuotesThin
                color="#283260"
                className="w-[50px] h-[50px] self-end"
              />
            </div>
          </Reveal>

          <Reveal delay={0.75}>
            <Link
              href="/services"
              className="px-4 py-2 text-primary-blue uppercase bg-transparent border-2 border-primary-blue hover:bg-primary-blue hover:text-white text-md duration-300"
            >
              explore our services
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
