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
    },
  },
};

export default function Home() {
  const { scrollYValue } = useContext(Context);

  return (
    <div className="">
      <section className="min-h-screen bg-red-200 "></section>
      <section className="min-h-screen bg-green-200 "></section>
      <section className="min-h-screen bg-blue-200 "></section>
      <section className="min-h-screen bg-purple-200 "></section>
      {/* <motion.section className="min-h-screen snap-center flex items-center">
        <HeroSection />
      </motion.section>
      <section className="min-h-screen snap-center flex items-center">
        <WelcomeSection />
      </section>
      <section className="min-h-screen snap-center bg-green-200 "></section> */}
    </div>
  );
}
