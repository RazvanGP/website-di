"use client";
import React from "react";
import services from "../../utils/services.json";

import Link from "next/link";
import Image from "next/image";
import Reveal from "../../components/Reveal";
import Lines from "../../components/Lines";
import { useTranslation } from "react-i18next";
const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Lines />
      <main className="p-10 relative flex-1 flex flex-col justify-center items-center max-w-6xl self-center">
        <Reveal>
          <p className="font-semibold pb-10 font-secondary text-text-grey text-2xl self-start">
            <span className="text-accent-blue ">
              {t("services:services-text-acc")}
            </span>
            {t("services:services-text")}
          </p>
        </Reveal>
        <Reveal>
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 xl:gap-x-28 gap-y-[350px]  mb-[250px]">
            {services.map((service, index) => {
              return (
                <Reveal key={index}>
                  <div className="max-w-[300px] flex flex-col drop-shadow-2xl">
                    <div className="relative">
                      <Image
                        src={service.imgSrc}
                        width={300}
                        height={75}
                        alt="service image"
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute min-h-[50px] min-w-[300px] -right-5 bottom-0 backdrop-blur-sm"></div>
                    </div>
                    <div className="relative hover:scale-105 ease-in-out duration-300">
                      {/* borders style */}
                      <div className="absolute min-h-[280px] h-[280px] w-full min-w-full border-l-2 border-t-2 border-accent-blue -top-16 -left-3"></div>
                      <div className="absolute min-h-[280px] h-[280px] w-full min-w-full border-r-2 border-b-2 border-accent-red -right-9 -top-10 "></div>
                      {/* borders style end*/}
                      <div className="absolute max-w-[300px] h-[280px] max-h-[280px] flex flex-col justify-between gap-5 bg-slate-50 bg-opacity-50 p-4 -top-12 -right-8 ">
                        <h1 className=" text-primary-blue text-xl font-extrabold">
                          {t(`services:service-title.item-${index}`)}
                        </h1>
                        <p className="text-justify text-slate-700">
                          {t(`services:service-description.item-${index}`)}
                        </p>
                        <Link
                          href={`/services/${service.id}`}
                          className="max-w-[250px] px-4 py-1 text-primary-blue uppercase border-2 border-primary-blue bg-slate-50 hover:bg-primary-blue hover:text-white text-sm font-bold duration-300 self-end"
                        >
                          {t("services:service-card-btn")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </section>
        </Reveal>
      </main>
    </>
  );
};

export default ServicesPage;
