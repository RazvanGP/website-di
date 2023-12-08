"use client";
import { FaQuoteLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

const Card = ({ author, position, textBody, imgSrc, gender }) => {
  return (
    <div className="w-[500px] h-[300px] bg-primary-blue overflow-hidden flex rounded-xl z-10 font-secondary ">
      <div className="min-w-[200px] p-10 flex flex-col items-end justify-between relative">
        <p className="text-silver-grey italic relative">
          {textBody}
          <div className="min-w-full min-h-[50px] absolute bottom-0 bg-gradient-to-t from-primary-blue to-transparent "></div>
        </p>
        <div className="flex flex-col items-end ">
          <h2 className="text-accent-blue text-lg font-bold">{author}</h2>
          <h3 className=" text-slate-300">{position}</h3>
        </div>
        <FaQuoteLeft
          color="white"
          size={100}
          className="opacity-5 absolute left-10 bottom-5"
        />
      </div>
      <img
        className={`grayscale + ${!imgSrc ? "bg-[#E6E6E6] py-10" : ""} `}
        width={"200px"}
        height={"200px"}
        src={
          imgSrc
            ? imgSrc
            : gender === "man"
            ? "/man-illustration.png"
            : "/women-illustration.png"
        }
      ></img>
    </div>
  );
};

export default Card;
