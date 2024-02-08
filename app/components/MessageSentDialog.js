const MessageSentDialog = ({ handleSentModal }) => {
  return (
    <div className="fixed top-0 left-0 z-10 h-screen w-screen backdrop-brightness-50 backdrop-blur-sm flex flex-col justify-center items-center">
      <div className=" bg-slate-50 rounded-3xl p-10 font-semibold font-secondary flex flex-col items-center">
        <p className="text-accent-blue text-2xl">
          Your message has been successfully sent!
        </p>
        <p className="text-text-grey text-2xl">
          Thank you for reaching out. I'll be in touch with you shortly.
        </p>

        <button
          className="mt-10 px-2 py-2 uppercase bg-transparent border-2 text-md duration-300 text-primary-blue  border-primary-blue hover:bg-primary-blue hover:text-white hover:cursor-pointer"
          onClick={() => {
            handleSentModal(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MessageSentDialog;
