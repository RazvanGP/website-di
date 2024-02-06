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
    <motion.main className="flex flex-col justify-center items-center gap-10">
      <HeroSection />
      <WelcomeSection />
      <Testimonials />
      <ContactSection />
    </motion.main>
  );
}
