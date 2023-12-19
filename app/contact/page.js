"use client";

import ContactSection from "../components/ContactSection";
import Reveal from "../components/Reveal";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div className="h-[85vh] w-screen relative lg:max-w-5xl flex justify-evenly items-end md:items-center xl:items-start md:pt-48">
      <form
        id="contact=form"
        className="text-primary-blue flex flex-col gap-5 justify-center items-start "
      >
        <Reveal>
          <input
            className="border-[1px] border-primary-blue p-2 transition-all duration-500"
            type="text"
            data-validation="text"
            id="name"
            name="name"
            placeholder="Name *"
          ></input>
        </Reveal>
        <Reveal delay={0.2}>
          <input
            className="border-[1px] border-primary-blue p-2 transition-all duration-500"
            type="text"
            data-validation="email"
            id="email"
            name="email"
            placeholder="Email *"
          ></input>
        </Reveal>
        <Reveal delay={0.4}>
          <input
            className="border-[1px] border-primary-blue p-2 transition-all duration-500"
            type="text"
            data-validation="text"
            id="phone"
            name="phone"
            placeholder="Phone"
          ></input>
        </Reveal>
        <Reveal delay={0.6}>
          <textarea
            className="border-[1px] border-primary-blue p-2 transition-all duration-500 resize-none"
            name="message"
            id="message"
            data-validation="text"
            cols="30"
            rows="10"
            placeholder="Message *"
          ></textarea>
        </Reveal>
        <Reveal delay={0.8}>
          <div
            href="/services"
            className="px-4 py-2 text-primary-blue uppercase bg-transparent border-2 border-primary-blue hover:bg-primary-blue hover:text-white text-md duration-300 hover:cursor-pointer"
          >
            Send message
          </div>
        </Reveal>
      </form>
      <Reveal delay={1}>
        <div className="hidden md:block text-lg text-primary-blue font-bold">
          <h2 className=" font-primary font-extrabold text-accent-blue  uppercase md:text-2xl tracking-[4px] pb-5">
            get in touch
          </h2>
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

          <div className="flex items-center gap-5">
            <span className="text-lg text-primary-blue font-bold">
              Socials:{" "}
            </span>
            <a href="https://www.linkedin.com/">
              <FaLinkedin className="hover:cursor-pointer hover:scale-125 ease-in-out duration-300" />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default ContactPage;
