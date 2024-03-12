import { useTranslation } from "react-i18next";

const MessageSentDialog = ({ handleSentModal }) => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 z-10 h-screen w-screen backdrop-brightness-50 backdrop-blur-sm flex flex-col justify-center items-center">
      <div className=" bg-slate-200 rounded-3xl p-8 font-semibold font-secondary flex flex-col items-center">
        <p className="text-accent-blue text-xl">
          {t("contact:contact-dialog-acc")}
        </p>
        <p className="text-text-grey text-xl">
          {t("contact:contact-dialog-text")}
        </p>

        <button
          className="mt-10 px-2 py-2 uppercase bg-transparent border-2 text-md duration-300 text-primary-blue  border-primary-blue hover:bg-primary-blue hover:text-white hover:cursor-pointer self-end"
          onClick={() => {
            handleSentModal(false);
          }}
        >
          {t("contact:contact-dialog-btn")}
        </button>
      </div>
    </div>
  );
};

export default MessageSentDialog;
