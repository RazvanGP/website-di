"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useState, useEffect, useRef, useContext } from "react";
import { Context } from "./components/Context";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import Testimonials from "./components/Testimonials";
import Reveal from "./components/Reveal";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const { scrollYValue } = useContext(Context);

  return (
    <motion.main className="flex flex-col justify-center items-center gap-10 snap-y snap-mandatory scroll-smooth ">
      <Reveal delay={0.25}>
        <HeroSection />
      </Reveal>
      <Reveal delay={0.25}>
        <WelcomeSection />
      </Reveal>
      <Reveal delay={0.25}>
        <Testimonials />
      </Reveal>
      <Reveal delay={0.25}>
        <ContactSection />
      </Reveal>
    </motion.main>
  );
}
