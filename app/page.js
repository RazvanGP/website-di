"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useState, useEffect, useRef, useContext } from "react";
import { Context } from "./components/Context";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import Testimonials from "./components/Testimonials";
import Reveal from "./components/Reveal";
import ContactSection from "./components/ContactSection";
import Lines from "./components/Lines";

export default function Home() {
  const { scrollYValue } = useContext(Context);

  return (
    <motion.main className="flex flex-col justify-arround items-center gap-48 pb-10">
      <Lines />
      <HeroSection />
      <WelcomeSection />
      <Testimonials />
      <ContactSection />
    </motion.main>
  );
}
