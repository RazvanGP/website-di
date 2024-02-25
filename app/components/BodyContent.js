"use client";
import Backgound from "../components/Backgound";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { Context } from "./Context";
import { useContext } from "react";

export default function BodyContent({ children }) {
  const { darkMode } = useContext(Context);

  return (
    <body
      className={`relative min-h-screen flex flex-col ${
        darkMode ? "dark" : ""
      }`}
    >
      <Backgound />
      <Nav />
      {children}
      <Footer />
    </body>
  );
}
