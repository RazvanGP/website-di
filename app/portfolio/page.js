import React from "react";
import projects from "../utils/projects.json";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  return (
    <main className="p-10 relative flex-1 flex flex-col justify-center items-center ">
      <p className="font-semibold pb-10 font-secondary text-text-grey text-2xl">
        <span className="text-accent-blue ">Explore our diverse portfolio</span>
        &nbsp; that spans across various sectors including yachting, commercial
        shipping, defense, offshore energy, and more.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-28">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="max-w-[300px] hover:scale-105 ease-in-out duration-300"
            >
              <Image
                src={project.imgSrc}
                width={300}
                height={75}
                alt="project image"
                className="w-full h-48 object-cover"
              />
              {/* border style:
              border-r-2 border-b-2 border-[rgb(46,132,255,0.9)] */}
              <div className="h-[200px] max-h-[200px] flex flex-col justify-between gap-5 bg-slate-50 bg-opacity-50 backdrop-blur-[2px] p-4 relative -top-12 -right-5 z-10 border-r-2 border-b-2 border-red-500 ">
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
          );
        })}
      </section>
    </main>
  );
};

export default PortfolioPage;
