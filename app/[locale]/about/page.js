"use client";
import { GiRibbonMedal } from "react-icons/gi";
import BulletPoint from "../../components/BulletPoint";
import Reveal from "../../components/Reveal";
import Lines from "../../components/Lines";

import { useTranslation } from "react-i18next";
const AboutPage = () => {
  const { t } = useTranslation();
  const itemsArr = ["leadership", "MSc", "BSc", "welder"];

  return (
    <main className="p-10 relative flex-1 flex flex-col justify-center items-center max-w-6xl self-center">
      <Lines />

      <Reveal>
        <p className="font-semibold pb-10 font-secondary text-text-grey text-2xl self-start">
          <span className="text-accent-blue ">
            {t("about:about-text-acc-1")}
          </span>
          {t("about:about-text-1")}
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <section>
          <GiRibbonMedal
            color="#283260"
            size={400}
            className="opacity-5 absolute -left-5 -bottom-10 -rotate-12"
          />
          <p className="font-semibold pb-10 font-secondary text-text-grey text-2xl self-start">
            <span className="text-accent-blue ">
              {t("about:about-text-acc-2")}
            </span>
            {t("about:about-text-2")}
          </p>

          <div className="flex flex-col gap-2 pl-4 font-secondary text-text-grey text-xl font-semibold">
            {itemsArr.map((item, index) => {
              return (
                <Reveal delay={0.2 + 0.05 * index} key={index}>
                  <div className="flex">
                    <BulletPoint />
                    <span className="ml-4">
                      {t(`about:about-item-title-${index}`)}
                    </span>
                  </div>

                  <p className="italic text-xl text-gray-500 pl-5 font-light">
                    {t(`about:about-item-date-${index}`)}
                    <br />
                    {t(`about:about-item-institution-${index}`)}
                    <br />
                    {t(`about:about-item-description-${index}`)}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </section>
      </Reveal>
    </main>
  );
};

export default AboutPage;
