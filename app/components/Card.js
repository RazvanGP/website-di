import { FaQuoteLeft } from "react-icons/fa6";

const Card = ({ author, position, textBody, handleCardModal, cardId }) => {
  return (
    <div className="grabbing min-h-full max-h-[500px] bg-primary-blue flex rounded-xl font-secondary sm:drop-shadow-lg drop-shadow-2xl">
      <div className="p-4 lg:p-10 flex flex-col items-end justify-around relative gap-4">
        <p className="text-silver-grey italic relative line-clamp-3 md:line-clamp-4">
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
        className={`hidden md:block grayscale object-cover md:w-[100px] w-[200px] py-10 lg:mr-10 opacity-20 `}
        src={"/man-illustration.png"}
      ></img>
    </div>
  );
};

export default Card;
