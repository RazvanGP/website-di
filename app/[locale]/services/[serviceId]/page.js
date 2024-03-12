"use client";
import React from "react";
import services from "../../../utils/services.json";
import BulletPoint from "@/app/components/BulletPoint";
import Reveal from "@/app/components/Reveal";
import Lines from "@/app/components/Lines";
import { useTranslation } from "react-i18next";
import TopBanner from "@/app/components/TopBanner";

const ServiceDetails = ({ params }) => {
  const serviceId = params.serviceId;
  const { t } = useTranslation();

  return (
    <main className="pt-36 relative flex-1 self-center max-w-[350px] md:max-w-2xl lg:max-w-5xl flex flex-col justify-center items-start gap-5 font-secondary text-text-grey dark:text-dark-text-grey text-2xl">
      <Lines />
      <Reveal>
        <TopBanner
          title={t(`services:service-title.item-${serviceId}`)}
          paths={[
            { text: t("common:menu-home"), link: "/" },
            { text: t("common:menu-services"), link: "/services" },
          ]}
        />
      </Reveal>

      <Reveal delay={0.15}>
        <p className="font-semibold dark:text-dark-text-grey">
          <span className="text-accent-blue dark:text-dark-accent-blue">
            {t(`services:service-page.item-${serviceId}.service-details-acc`)}
          </span>
          {t(`services:service-page.item-${serviceId}.service-details`)}
        </p>
      </Reveal>

      <ul className="flex flex-col gap-4 text-xl">
        {services[serviceId].list.map((item, index) => {
          return (
            <Reveal delay={(index + 2) / 10} key={index}>
              <div className="flex flex-col gap-4 pl-4">
                <div className="flex">
                  <BulletPoint />
                  <span className="ml-4 dark:text-dark-accent-blue">
                    {/* {item} */}
                    {t(
                      `services:service-page.item-${serviceId}.list.item-${index}`
                    )}
                  </span>
                </div>

                <ul className="pl-5">
                  {services[serviceId].subList[index].map(
                    (sublistItem, subListIndex) => {
                      return (
                        <li key={subListIndex}>
                          <div className="flex gap-5">
                            -{/* {sublistItem} */}
                            {t(
                              `services:service-page.item-${serviceId}.list.item-${index}_sublist-${subListIndex}`
                            )}
                          </div>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </main>
  );
};

export default ServiceDetails;
