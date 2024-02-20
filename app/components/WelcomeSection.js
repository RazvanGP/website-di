import React from "react";
import BulletPoint from "./BulletPoint";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <Reveal>
      <section className="home-section text-2xl flex flex-col justify-center items-start gap-10">
        <Reveal delay={0.2}>
          <h2 className=" font-primary font-extrabold text-primary-blue  uppercase text-2xl md:text-4xl tracking-[12px] ">
            {t("welcome-title")}
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-semibold">
            <span className="text-accent-blue ">{t("welcome-text-acc")}</span>
            {t("welcome-text")}
          </p>
        </Reveal>

        <ul className="flex flex-col gap-4 text-xl">
          <Reveal delay={0.4}>
            <li className="flex items-center gap-4">
              <BulletPoint />
              <span className="ml-4">{t("welcome-item-1")}</span>
            </li>
          </Reveal>
          <Reveal delay={0.45}>
            <li className="flex items-center gap-4">
              <BulletPoint />
              <span className="ml-4">{t("welcome-item-2")}</span>
            </li>
          </Reveal>

          <Reveal delay={0.5}>
            <li className="flex items-center gap-4">
              <BulletPoint />
              <span className="ml-4">{t("welcome-item-3")}</span>
            </li>
          </Reveal>
        </ul>
      </section>
    </Reveal>
  );
};

export default WelcomeSection;
