import React from "react";
import BulletPoint from "./BulletPoint";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const WelcomeSection = () => {
  return (
    <section
      className="
    h-screen py-[75px] relative max-w-[350px] md:max-w-2xl lg:max-w-5xl flex flex-col justify-center items-start gap-10 font-secondary text-text-grey text-2xl"
    >
      <h2 className=" font-primary font-extrabold text-primary-blue  uppercase text-2xl md:text-4xl tracking-[12px] ">
        welcome
      </h2>

      <p className="font-semibold">
        <span className="text-accent-blue ">
          We provide innovative solutions
        </span>
        &nbsp; for the maritime industry. We use the latest technologies and
        best practices to ensure that our projects are safe, efficient, and our
        team deliver high-quality results.
      </p>

      <ul className="flex flex-col gap-4 text-xl">
        <li className="flex items-center gap-4">
          <BulletPoint />
          <span className="ml-4">Over 6 years of experience</span>
        </li>

        <li className="flex items-center gap-4">
          <BulletPoint />
          <span className="ml-4">
            Delivering design services with commitment to excellence.
          </span>
        </li>

        <li className="flex items-center gap-4">
          <BulletPoint />
          <span className="ml-4">
            Design through the latest marine-industry technologies and
            softwares.
          </span>
        </li>
      </ul>
    </section>
  );
};

export default WelcomeSection;
