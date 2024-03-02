"use client";
import Backgound from "../components/Backgound";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function BodyContent({ children }) {
  return (
    <body className={`relative min-h-screen flex flex-col`}>
      <Backgound />
      <Nav />
      {children}
      <Footer />
    </body>
  );
}
