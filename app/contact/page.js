"use client";

import ContactSection from "../components/ContactSection";
import Reveal from "../components/Reveal";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";

const ContactPage = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isValidForm, setIsValidForm] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/sendContactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert("The message was successfully sent!");
      } else {
        alert("Error!");
      }
    } catch (error) {
      console.log(error.message);
    }

    setFormData(initialFormData);
  };

  return (
    <main className="flex-1 relative max-w-6xl self-center flex items-center gap-20">
      <form
        onSubmit={handleSubmit}
        id="contact=form"
        className="text-primary-blue flex flex-col gap-5 justify-center items-start"
      >
        <Reveal>
          <input
            className={
              "border-[1px] border-primary-blue p-2 transition-all duration-500 xl:w-[300px]"
            }
            type="text"
            data-validation="text"
            id="name"
            name="name"
            placeholder="Name *"
            required={true}
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          ></input>
        </Reveal>
        <Reveal delay={0.15}>
          <input
            className="border-[1px] border-primary-blue p-2 transition-all duration-500 xl:w-[300px]"
            type="text"
            data-validation="email"
            id="email"
            name="email"
            placeholder="Email *"
            required={true}
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          ></input>
        </Reveal>
        <Reveal delay={0.2}>
          <input
            className="border-[1px] border-primary-blue p-2 transition-all duration-500 xl:w-[300px]"
            type="text"
            data-validation="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
          ></input>
        </Reveal>
        <Reveal delay={0.25}>
          <textarea
            className="border-[1px] border-primary-blue p-2 transition-all duration-500 resize-none xl:w-[500px]"
            name="message"
            id="message"
            data-validation="text"
            cols="30"
            rows="10"
            placeholder="Message *"
            required={true}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
            }}
          ></textarea>
        </Reveal>
        <Reveal delay={0.3}>
          <button
            href="/services"
            className={
              isValidForm === false
                ? "px-4 py-2 uppercase bg-transparent border-2 text-md duration-300 text-silver-grey border-silver-grey"
                : "px-4 py-2 uppercase bg-transparent border-2 text-md duration-300 text-primary-blue  border-primary-blue hover:bg-primary-blue hover:text-white hover:cursor-pointer"
            }
            type="submit"
          >
            Send message
          </button>
        </Reveal>
      </form>
      {/* Contact informations */}
      <Reveal delay={0.25}>
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
    </main>
  );
};

export default ContactPage;
