"use client";
import React from "react";
import BulletPoint from "../components/BulletPoint";
import services from "../utils/services.json";
import Link from "next/link";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <main className="p-10 relative flex-1 flex flex-col justify-center items-center">
      <p className="font-semibold pb-10 font-secondary text-text-grey text-2xl self-start">
        <span className="text-accent-blue ">
          Explore our design services hub.
        </span>
        &nbsp; We focus on precision, innovation, and practical solutions.
      </p>

      {/* <ul className="w-full flex flex-col pl-5 gap-4 text-xl">
        <li className="flex items-center gap-4">
          <BulletPoint />
          <span className="ml-4">Detail Engineering</span>
        </li>

        <li className="flex items-center gap-4">
          <BulletPoint />
          <span className="ml-4">Basic engineering (modelling)</span>
        </li>

        <li className="flex items-center gap-4">
          <BulletPoint />
          <span className="ml-4">Lead detail engineering</span>
        </li>

        <li className="flex items-center gap-4">
          <BulletPoint />
          <span className="ml-4">Consulting services</span>
        </li>

        <li className="flex items-center gap-4">
          <BulletPoint />
          <span className="ml-4">
            Software: Nupas, Cadmatic, Rhino, Autocad
          </span>
        </li>
      </ul> */}

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 xl:gap-28">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="max-w-[300px] hover:scale-105 ease-in-out duration-300 drop-shadow-2xl"
            >
              <Image
                src={service.imgSrc}
                width={300}
                height={75}
                alt="service image"
                className="w-full h-48 object-cover"
              />

              <div className="h-[250px] max-h-[250px] flex flex-col justify-between gap-5 bg-slate-50 bg-opacity-50 backdrop-blur-[2px] p-4 relative -top-12 -right-5 border-r-2 border-b-2 border-red-500">
                <h1 className=" text-primary-blue text-xl font-extrabold">
                  {service.title}
                </h1>
                <p className="text-justify text-slate-700">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.id}`}
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

export default ServicesPage;
