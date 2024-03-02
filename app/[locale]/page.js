"use client";
import { motion } from "framer-motion";

import HeroSection from "../components/HeroSection";
import WelcomeSection from "../components/WelcomeSection";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Lines from "../components/Lines";

export default function Home() {
  return (
    <motion.main className="flex flex-col justify-arround items-center gap-28 pb-10">
      <Lines />
      <HeroSection />
      <WelcomeSection />
      <Testimonials />
      <ContactSection />
    </motion.main>
  );
}
