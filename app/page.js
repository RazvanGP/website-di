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
    <main className="">
      {/* <div className="flex justify-between items-center ">
        <img src="/logo.png" alt="" width={200} className="p-10" />
        <div className="flex justify-between px-20 w-full">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div> */}

      <div className="h-[200vh] relative overflow-hidden">
        <motion.img
          src="/bg-1.png"
          className="fixed top-0 left-0 bg-cyan-500 h-full w-full"
          animate={{ opacity: 1 - (0.1 * scrollPosition) / 100 }}
        ></motion.img>

        <motion.img
          src="/bg-2.png"
          className="fixed top-0 left-0 bg-red-500 h-full w-full"
          animate={{ opacity: (0.1 * scrollPosition) / 100 }}
        ></motion.img>
      </div>
      <div className="fixed top-0 h-full w-full flex justify-center items-center">
        <h1 className="font-10 font-extrabold text-5xl">MAIN PAGE</h1>
      </div>
    </main>
  );
}
