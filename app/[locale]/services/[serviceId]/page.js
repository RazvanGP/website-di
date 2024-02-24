"use client";
import React from "react";
import services from "../../../utils/services.json";
import BulletPoint from "@/app/components/BulletPoint";
import Reveal from "@/app/components/Reveal";
import Lines from "@/app/components/Lines";
import { useTranslation } from "react-i18next";

const ServiceDetails = ({ params }) => {
  const serviceId = params.serviceId;
  const { t } = useTranslation();

  return (
    <main className="flex-1 self-center relative max-w-[350px] md:max-w-2xl lg:max-w-5xl flex flex-col justify-center items-start gap-10 font-secondary text-text-grey text-2xl">
      <Lines />
      <Reveal>
        <h2 className=" font-primary font-extrabold text-primary-blue  uppercase text-2xl md:text-4xl tracking-[12px] ">
          {t(`services:service-title.item-${serviceId}`)}
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="font-semibold">
          <span className="text-accent-blue ">
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
                  <span className="ml-4">
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
