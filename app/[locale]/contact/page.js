"use client";

import Reveal from "../../components/Reveal";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Lines from "../../components/Lines";
import MessageSentDialog from "../../components/MessageSentDialog";

import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isValidForm, setIsValidForm] = useState(false);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidMessage, setIsValidMessage] = useState(true);
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  const [showSentModal, setShowSentModal] = useState(false);

  const nameRegex = /^[a-zA-Z ]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const { t } = useTranslation();

  const handleNameChange = (e) => {
    const inputValue = e.target.value.trim();
    setIsValidName(inputValue.match(nameRegex) !== null);
    setFormData({ ...formData, name: inputValue });
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value.trim();
    setIsValidEmail(inputValue.match(emailRegex) !== null);
    setFormData({ ...formData, email: inputValue });
  };

  const handleMessageChange = (e) => {
    const inputValue = e.target.value.trim();
    setIsValidMessage(inputValue !== "");
    setFormData({ ...formData, message: e.target.value });
  };

  useEffect(() => {
    if (
      nameTouched &&
      isValidName &&
      emailTouched &&
      isValidEmail &&
      messageTouched &&
      isValidMessage
    ) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [
    isValidName,
    isValidEmail,
    isValidMessage,
    nameTouched,
    emailTouched,
    messageTouched,
  ]);

  //temporary solution
  useEffect(() => {
    showSentModal
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [showSentModal]);

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
        setShowSentModal(true);
      } else {
        alert("Something went wrong, please try again!");
      }
    } catch (error) {
      console.log(error.message);
    }

    setFormData(initialFormData);
    setIsValidForm(false);
  };

  const handleSentModal = (value) => {
    setShowSentModal(value);
  };

  return (
    <>
      <Lines />
      <main className="flex-1 relative max-w-6xl self-center flex items-center gap-20">
        <form
          onSubmit={handleSubmit}
          id="contact=form"
          className="text-primary-blue flex flex-col gap-5 justify-center items-start"
        >
          {/* name input field */}
          <Reveal>
            <input
              className={`outline-none border-[1px] focus:border-2 focus:rounded-md p-2 xl:w-[300px] ${
                nameTouched && !isValidName
                  ? "border-red-500"
                  : "border-primary-blue"
              }`}
              type="text"
              data-validation="text"
              id="name"
              name="name"
              placeholder={`${t("contact:contact-placeholder-name")} *`}
              value={formData.name}
              onChange={handleNameChange}
              onFocus={() => {
                setNameTouched(true);
              }}
            ></input>
            {nameTouched && !isValidName && (
              <p className="text-xs text-accent-red transition-all duration-500 ease-in-out ">
                {t("contact:contact-err-name")}
              </p>
            )}
          </Reveal>

          {/* email input field */}
          <Reveal delay={0.15}>
            <input
              className={`outline-none border-[1px] focus:border-2 focus:rounded-md p-2 xl:w-[300px] ${
                emailTouched && !isValidEmail
                  ? "border-red-500"
                  : "border-primary-blue"
              }`}
              type="text"
              data-validation="email"
              id="email"
              name="email"
              placeholder={`${t("contact:contact-placeholder-email")} *`}
              value={formData.email}
              onChange={handleEmailChange}
              onFocus={() => {
                setEmailTouched(true);
              }}
            ></input>
            {emailTouched && !isValidEmail && (
              <p className="text-xs text-accent-red transition-all duration-500 ease-in-out">
                {t("contact:contact-err-email")}
              </p>
            )}
          </Reveal>

          {/* phone input field -> no validation/no required */}
          <Reveal delay={0.2}>
            <input
              className={`outline-none border-[1px] focus:border-2 focus:rounded-md p-2 xl:w-[300px] border-primary-blue`}
              type="text"
              data-validation="text"
              id="phone"
              name="phone"
              placeholder={`${t("contact:contact-placeholder-phone")}`}
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
            ></input>
          </Reveal>

          {/* message */}
          <Reveal delay={0.25}>
            <textarea
              className={`outline-none border-[1px] focus:border-2 focus:rounded-md  p-2 resize-none xl:w-[500px] ${
                messageTouched && !isValidMessage
                  ? "border-red-500"
                  : "border-primary-blue"
              }`}
              name="message"
              id="message"
              data-validation="text"
              cols="30"
              rows="10"
              placeholder={`${t("contact:contact-placeholder-message")} *`}
              required={true}
              value={formData.message}
              onChange={handleMessageChange}
              onFocus={() => {
                setMessageTouched(true);
              }}
            ></textarea>
          </Reveal>

          {/* button */}
          <Reveal delay={0.3}>
            <button
              disabled={!isValidForm}
              className={`px-4 py-2 uppercase bg-transparent border-2 text-md duration-300 
              ${
                !isValidForm
                  ? "text-silver-grey border-silver-grey"
                  : "text-primary-blue  border-primary-blue hover:bg-primary-blue hover:text-white hover:cursor-pointer"
              }`}
              type="submit"
            >
              {t("contact:contact-btn-send")}
            </button>
          </Reveal>
        </form>
        {/* Contact informations */}
        <Reveal delay={0.25}>
          <div className="hidden md:block text-lg text-primary-blue font-bold backdrop-blur-md p-5">
            <h2 className="font-primary font-extrabold text-accent-blue  uppercase md:text-2xl tracking-[4px] pb-5 ">
              {t("contact:contact-get-in-touch")}
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
                {t("contact:contact-socials")}:{" "}
              </span>
              <a href="https://www.linkedin.com/">
                <FaLinkedin className="hover:cursor-pointer hover:scale-125 ease-in-out duration-300" />
              </a>
            </div>
          </div>
        </Reveal>

        {showSentModal && (
          <MessageSentDialog handleSentModal={handleSentModal} />
        )}
      </main>
    </>
  );
};

export default ContactPage;
