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

import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const [scrollYSection, setScrollYSection] = useState(0);
  const { scrollY } = useScroll();

  const { t } = useTranslation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYSection(latest);
  });

  return (
    <Reveal>
      <section className="home-section h-[80vh] flex items-center">
        <div className="flex items-center overflow-hidden">
          <div className="p-10 min-w-max font-bold font-primary pl-5 flex flex-col items-start gap-10">
            <Reveal delay={0.2}>
              <h1 className="text-sm md:text-lg text-accent-red font-extrabold tracking-[3px] md:tracking-[10px] drop-shadow-xl">
                SHIP DESIGN ENGINEERING
              </h1>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="flex flex-col">
                <PiQuotesThin color="#283260" className="w-[50px] h-[50px]" />
                <p className="text-4xl md:text-6xl lg:text-8xl text-primary-blue font-black flex flex-col">
                  <span>{t("hero-motto-1")}</span>
                  <span className="text-end">{t("hero-motto-2")}</span>
                </p>
                <PiQuotesThin
                  color="#283260"
                  className="w-[50px] h-[50px] self-end"
                />
              </div>
            </Reveal>

            <Reveal delay={0.45}>
              <Link
                href="/services"
                className="px-4 py-2 text-base lg:text-xl text-primary-blue uppercase bg-transparent border-2 border-primary-blue hover:bg-primary-blue hover:text-white text-md duration-300"
              >
                {t("hero-btn")}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default HeroSection;
