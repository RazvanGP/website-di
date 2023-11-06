"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.main
      className="homeBackground h-[200vh]"
      initial={{ opacity: 1 }}
      animate={{ opacity: scrollPosition > 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center ">
        <img src="/logo.png" alt="" width={200} className="p-10" />
        <div className="flex justify-between px-20 w-full">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </motion.main>
  );
}
