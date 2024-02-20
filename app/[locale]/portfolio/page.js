"use client";
import React from "react";
import projects from "../../utils/projects.json";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import Lines from "../../components/Lines";

const PortfolioPage = () => {
  return (
    <>
      <Lines />
      <main className="p-10 relative flex-1 flex flex-col justify-center items-center max-w-6xl self-center">
        <Reveal>
          <p className="font-semibold pb-10 font-secondary text-text-grey text-2xl self-start">
            <span className="text-accent-blue ">
              I proudly showcase past projects
            </span>
            &nbsp;I&apos;ve been closely involved with. Each project highlights
            the depth of my expertise in structural design engineering within
            the shipbuilding industry.
          </p>
        </Reveal>

        <Reveal>
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 xl:gap-x-28 gap-y-[350px]  mb-[250px]">
            {projects.map((project, index) => {
              return (
                <Reveal key={index}>
                  <div className="max-w-[300px]  flex flex-col drop-shadow-2xl">
                    <div className="relative">
                      <Image
                        src={project.imgSrc}
                        width={300}
                        height={75}
                        alt="project image"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute min-h-[50px] min-w-[300px] -right-5 bottom-0 backdrop-blur-sm"></div>
                    </div>

                    <div className="relative hover:scale-105 ease-in-out duration-300">
                      <div className="absolute min-h-[250px] h-250px] w-full min-w-full border-l-2 border-t-2 border-accent-blue -top-16 -left-3"></div>
                      <div className="absolute min-h-[250px] h-[250px] w-full min-w-full border-r-2 border-b-2 border-accent-red -right-9 -top-10 "></div>
                      <div className="absolute max-w-[300px] h-[250px] max-h-[250px] flex flex-col justify-between gap-5 bg-slate-50 bg-opacity-50 p-4 -top-12 -right-8 ">
                        <h1 className=" text-primary-blue text-xl font-extrabold">
                          {project.title}
                        </h1>
                        <p className="text-justify text-slate-700">
                          {project.description}
                        </p>
                        <Link
                          href={project.page}
                          className="max-w-[150px] px-4 py-1 text-primary-blue uppercase border-2 border-primary-blue bg-slate-50 hover:bg-primary-blue hover:text-white text-sm font-bold duration-300 self-end"
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
