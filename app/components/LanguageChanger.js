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
    <div className="flex gap-2 text-xs">
      <button
        onClick={() => handleOnClick("en")}
        className={`hover:scale-110 ease-in-out duration-300 hover:text-accent-blue ${
          selectedLanguage === "en" ? "text-accent-blue" : ""
        }`}
      >
        EN
      </button>
      <span className="border-r-2"></span>
      <button
        onClick={() => handleOnClick("nl")}
        className={`hover:scale-110 ease-in-out duration-300 hover:text-accent-blue ${
          selectedLanguage === "nl" ? "text-accent-blue" : ""
        }`}
      >
        NL
      </button>
    </div>
  );
}
