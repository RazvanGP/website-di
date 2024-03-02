import React, { Fragment } from "react";
import Link from "next/link";

export default function TopBanner({ title, paths }) {
  return (
    <div className="flex flex-col gap-5 relative">
      <h2 className="font-primary font-extrabold text-primary-blue dark:text-silver-grey uppercase text-2xl md:text-4xl tracking-[12px]">
        {title}
      </h2>
      <div className="flex items-center text-sm sm:text-base text-primary-blue dark:text-dark-accent-blue uppercase">
        {paths.map((path, index) => (
          <Fragment key={path + index}>
            <Link
              href={path.link}
              className="text-accent-blue dark:text-dark-accent-blue hover:cursor-pointer hover:text-primary-blue
              dark:hover:text-slate-100"
            >
              {path.text}
            </Link>
            <p className="px-2 dark:text-silver-grey">/</p>
          </Fragment>
        ))}
        <p className="dark:text-silver-grey">{title}</p>
      </div>
    </div>
  );
}
