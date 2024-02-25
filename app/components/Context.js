"use client";

import { createContext, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Cookies from "universal-cookie";

const cookie = new Cookies();

export const Context = createContext();

export default function Provider({ children }) {
  const { scrollYProgress } = useScroll();
  const [scrollYValue, setScrollYValue] = useState(0);
  const [darkMode, setDarkMode] = useState();

  useEffect(() => {
    setDarkMode(cookie.get("darkMode") === true ? true : false);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollYValue(latest);
  });

  return (
    <Context.Provider value={{ scrollYValue, darkMode, setDarkMode }}>
      {children}
    </Context.Provider>
  );
}
