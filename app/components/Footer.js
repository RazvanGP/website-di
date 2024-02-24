"use client";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="font-titling-gothic text-silver-grey text-sm p-10  px-10 md:px-12 lg:px-20 max-w-6xl self-center">
      <span>
        &copy; 2024 Ship Design Engineering | {t("common:footer-text")}
      </span>
    </footer>
  );
};

export default Footer;
