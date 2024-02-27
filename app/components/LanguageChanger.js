"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useState } from "react";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const [selectedLanguage, setSelectedLanguage] = useState(currentLocale);

  const handleOnClick = (newLocale) => {
    setSelectedLanguage(newLocale);

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }
    router.refresh();
  };

  return (
    <div className="flex items-end gap-2 text-[10px]">
      <button
        onClick={() => handleOnClick("en")}
        className={`hover:scale-110 ease-in-out duration-300 text-accent-blue  hover:text-accent-blue dark:hover:text-white ${
          selectedLanguage === "en"
            ? " dark:text-dark-accent-blue text-sm"
            : "text-silver-grey"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => handleOnClick("nl")}
        className={`hover:scale-110 ease-in-out duration-300 text-accent-blue  hover:text-accent-blue dark:hover:text-white ${
          selectedLanguage === "nl"
            ? " dark:text-dark-accent-blue text-sm"
            : "text-silver-grey"
        }`}
      >
        NL
      </button>
    </div>
  );
}
