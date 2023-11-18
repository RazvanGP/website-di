"use client";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  return (
    <div className="">
      <motion.section className="min-h-screen snap-center flex items-center">
        <HeroSection />
      </motion.section>
      <section className="min-h-screen snap-center flex items-center">
        <WelcomeSection />
      </section>
      {/* <section className="min-h-screen snap-center bg-green-200 "></section> */}
    </div>
  );
}
