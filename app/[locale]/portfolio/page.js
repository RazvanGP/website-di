"use client";
import React from "react";
import projects from "../../utils/projects.json";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import Lines from "../../components/Lines";

import { useTranslation } from "react-i18next";

const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Lines />
      <main className="pt-36 p-10 relative flex-1 flex flex-col justify-center items-center max-w-6xl self-center">
        <Reveal>
          <p className="font-semibold pb-10 font-secondary text-text-grey dark:text-dark-text-grey text-2xl self-start">
            <span className="text-accent-blue dark:text-dark-accent-blue">
              {t("projects:projects-title-acc")}
            </span>
            {t("projects:projects-title")}
          </p>
        </Reveal>

        <Reveal>
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 gap-y-[250px] mb-[200px]">
            {projects.map((project, index) => {
              return (
                <Reveal key={index}>
                  <div className="max-w-[320px] flex flex-col drop-shadow-2xl">
                    <div className="relative w-[280px] h-[200px]">
                      <Image
                        src={project.imgSrc}
                        fill
                        sizes="280px"
                        alt="project image"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="relative hover:scale-105 ease-in-out duration-300">
                      {/* borders style */}
                      <div className="absolute min-h-[230px] h-[230px]  w-[280px] min-w-[280px] border-l-2 border-t-2 border-accent-blue  dark:border-sky-800 -top-16 -left-2"></div>
                      <div className="absolute min-h-[230px] h-[230px] w-[280px] min-w-[280px] border-r-2 border-b-2 border-accent-red dark:border-red-800 -right-8 -top-6 "></div>
                      {/* borders style end*/}
                      <div className="absolute w-[280px] min-w-[280px] h-[230px] max-h-[230px] flex flex-col justify-between pb-4 bg-slate-50 dark:bg-dark-text-grey bg-opacity-50 dark:bg-opacity-50 p-2 -top-12 -right-4 backdrop-blur-sm">
                        <h1 className=" text-primary-blue dark:text-silver-grey text-xl font-extrabold">
                          {project.title}
                        </h1>
                        <p className="text-justify text-slate-700 dark:text-silver-grey p-2">
                          {/* {project.description} */}
                          {t(`projects:project-description-${index}`)}
                        </p>
                        <Link
                          href={project.page}
                          className="max-w-[250px] px-4 py-1 text-primary-blue dark:text-dark-accent-blue uppercase border-2 border-primary-blue hover:bg-primary-blue dark:hover:border-silver-grey dark:border-dark-accent-blue hover:text-white text-sm dark:hover:bg-dark-accent-blue dark:hover:text-slate-50 font-bold duration-300 self-end"
                        >
                          find out more
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

export default PortfolioPage;
