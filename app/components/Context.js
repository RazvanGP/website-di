"use client";

import { createContext, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export const Context = createContext();

export default function Provider({ children }) {
  const { scrollYProgress } = useScroll();
  const [scrollYValue, setScrollYValue] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollYValue(latest);
  });

  return (
    <Context.Provider value={{ scrollYValue }}>{children}</Context.Provider>
  );
}
