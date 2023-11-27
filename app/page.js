"use client";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { Context } from "./components/Context";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  const { scrollYValue } = useContext(Context);

  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection />
      <WelcomeSection />
    </div>
  );
}
