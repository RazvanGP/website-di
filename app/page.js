"use client";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState, useContext } from "react";
import { Context } from "./components/Context";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";

const homeSectionsVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Home() {
  const { scrollYValue } = useContext(Context);

  return (
    <div>
      <AnimatePresence>
        <HeroSection />
        <section className="min-h-screen bg-red-200"></section>c
      </AnimatePresence>
    </div>
  );
}
