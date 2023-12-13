import { FaQuoteLeft } from "react-icons/fa6";

const Card = ({ author, position, textBody, handleCardModal, cardId }) => {
  return (
    <div className="min-w-[320px] min-h-[310px] sm:min-w-[500px] sm:max-h-[250px] lg:min-w-[700px] lg:min-h-[350px] bg-primary-blue overflow-hidden flex rounded-xl font-secondary sm:drop-shadow-lg backdrop justify-evenly lg:justify-between">
      <div className="p-4 lg:p-10 flex flex-col items-end justify-around relative w-[300px] lg:w-[450px]">
        <p className="text-silver-grey italic relative line-clamp-3 sm:line-clamp-4">
          {textBody}
        </p>
        <button
          className="text-xs px-4 py-2 text-white uppercase bg-transparent border-2 border-white hover:bg-accent-blue hover:text-black text-md duration-300 cursor-pointer self-start"
          onClick={() => {
            handleCardModal(true, cardId);
          }}
        >
          Read more
        </button>
        <div className="flex flex-col items-end ">
          <h2 className="text-accent-blue text-lg font-bold">{author}</h2>
          <h3 className=" text-slate-300 text-right">{position}</h3>
        </div>
        <FaQuoteLeft
          color="white"
          size={150}
          className="opacity-5 absolute -left-5 -bottom-10"
        />
      </div>
      <img
        className={`hidden sm:block grayscale object-cover w-[200px] py-10 lg:mr-10 opacity-20 `}
        src={"/man-illustration.png"}
      ></img>
    </div>
  );
};

export default Card;
