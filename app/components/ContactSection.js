import React from "react";
import BulletPoint from "./BulletPoint";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Link from "next/link";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <Reveal>
      <section className="home-section flex flex-col justify-center items-start gap-10 font-secondary text-text-grey text-2xl">
        <h2 className=" font-primary font-extrabold text-primary-blue  uppercase text-2xl md:text-4xl tracking-[12px] ">
          {t("contact-title")}
        </h2>

        <Reveal delay={0.2}>
          <p className="font-semibold">
            {t("contact-text")}
            <span className="text-accent-blue ">{t("contact-text-acc")}</span>
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="text-lg text-primary-blue font-bold">
            <table>
              <tbody>
                <tr>
                  <td className="w-10 ">
                    <PiPhoneCallFill size={25} />
                  </td>
                  <td>+31 6 48 12 47 88</td>
                </tr>

                <tr>
                  <td className="w-10 h-10">
                    <FaWhatsappSquare size={25} />
                  </td>
                  <td>+31 6 48 12 47 88</td>
                </tr>
                <tr>
                  <td>
                    <MdEmail size={25} />
                  </td>
                  <td>contact@shipdesignengineering.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex gap-5">
            <span className="text-lg text-primary-blue font-bold">
              {t("contact-socials")}
            </span>
            <a href="https://www.linkedin.com/">
              <FaLinkedin className="hover:cursor-pointer hover:scale-125 ease-in-out duration-300" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <Link
            href="/contact"
            className="px-4 py-1 text-primary-blue uppercase bg-transparent border-2 border-primary-blue hover:bg-primary-blue hover:text-white text-sm font-bold duration-300"
          >
            {t("contact-btn")}
          </Link>
        </Reveal>
      </section>
    </Reveal>
  );
};

export default ContactSection;
