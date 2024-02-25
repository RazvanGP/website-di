"use client";

import { createContext, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export const Context = createContext();

export default function Provider({ children }) {
  const { scrollYProgress } = useScroll();
  const [scrollYValue, setScrollYValue] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollYValue(latest);
  });

  return (
    <Context.Provider value={{ scrollYValue, darkMode, setDarkMode }}>
      {children}
    </Context.Provider>
  );
}
