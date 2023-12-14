import data from "../data.json";
import { FaQuoteLeft } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CardModal = ({ handleCardModal, cardId }) => {
  return (
    <div className="fixed top-0 left-0 z-10 min-h-screen min-w-full scroll-none flex justify-center items-center backdrop-blur-md backdrop-brightness-50">
      <div className="w-[80%] lg:w-[50%] bg-primary-blue rounded-xl font-secondary">
        <div className="min-h-[500px] p-5 md:p-10 flex flex-col relative overflow-hidden">
          <button
            className="self-end mb-10"
            onClick={() => {
              handleCardModal(false);
            }}
          >
            <IoMdCloseCircleOutline
              className="opacity-20 hover:opacity-100 hover:scale-110 ease-in duration-200"
              size={30}
              color="#acacac"
            />
          </button>
          <p className="py-3 text-silver-grey italic max-h-[300px] overflow-auto">
            {data[cardId].textBody}
          </p>

          <div className="w-full lg:w-[80%] flex justify-around items-center self-end">
            <div className="flex flex-col items-end pb-5">
              <h2 className="text-accent-blue text-lg font-bold">
                {data[cardId].author}
              </h2>
              <h3 className=" text-slate-300 text-end">
                {data[cardId].position}
              </h3>
            </div>

            <img
              className={`hidden sm:block rounded-tl-3xl rounded-br-3xl grayscale self-end object-cover w-[120px] sm:w-[200px] py-10 opacity-20 `}
              src={"/man-illustration.png"}
            ></img>
          </div>

          <FaQuoteLeft
            color="white"
            size={150}
            className="opacity-5 absolute -left-5 -bottom-10 "
          />
        </div>
      </div>
    </div>
  );
};

export default CardModal;