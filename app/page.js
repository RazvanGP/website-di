"use client";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { Context } from "./components/Context";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  const { scrollYValue } = useContext(Context);

  return (
    <div>
      <HeroSection />
      <section className="min-h-screen bg-red-200"></section>c
    </div>
  );
}
