import React from "react";
import BulletPoint from "./BulletPoint";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const WelcomeSection = () => {
  return (
    <Reveal>
      <section className="home-section text-2xl flex flex-col justify-center items-start gap-10">
        <Reveal delay={0.2}>
          <h2 className=" font-primary font-extrabold text-primary-blue  uppercase text-2xl md:text-4xl tracking-[12px] ">
            welcome
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-semibold">
            <span className="text-accent-blue ">
              We provide innovative solutions
            </span>
            &nbsp; for the maritime industry. We use the latest technologies and
            best practices to ensure that our projects are safe, efficient, and
            our team deliver high-quality results.
          </p>
        </Reveal>

        <ul className="flex flex-col gap-4 text-xl">
          <Reveal delay={0.4}>
            <li className="flex items-center gap-4">
              <BulletPoint />
              <span className="ml-4">Over 6 years of experience</span>
            </li>
          </Reveal>
          <Reveal delay={0.45}>
            <li className="flex items-center gap-4">
              <BulletPoint />
              <span className="ml-4">
                Delivering design services with commitment to excellence.
              </span>
            </li>
          </Reveal>

          <Reveal delay={0.5}>
            <li className="flex items-center gap-4">
              <BulletPoint />
              <span className="ml-4">
                Design through the latest marine-industry technologies and
                softwares.
              </span>
            </li>
          </Reveal>
        </ul>
      </section>
    </Reveal>
  );
};

export default WelcomeSection;
