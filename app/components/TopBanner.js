import React, { Fragment } from "react";
import Link from "next/link";

export default function TopBanner({ title, paths }) {
  return (
    <div className="flex flex-col gap-5 relative">
      <h2 className="font-primary font-extrabold text-primary-blue uppercase text-2xl md:text-4xl tracking-[12px]">
        {title}
      </h2>
      <div className="flex items-center text-sm sm:text-base text-primary-blue uppercase">
        {paths.map((path, index) => (
          <Fragment key={path + index}>
            <Link
              href={path.link}
              className="text-accent-blue hover:cursor-pointer hover:text-primary-blue"
            >
              {path.text}
            </Link>
            <p className="px-2">/</p>
          </Fragment>
        ))}
        <p>{title}</p>
      </div>
    </div>
  );
}
