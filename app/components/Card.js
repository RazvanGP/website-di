"use client";
import { FaQuoteLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";

const Card = ({
  author,
  position,
  textBody,
  imgSrc,
  gender,
  handleCardModal,
  cardId,
}) => {
  return (
    <div className="min-w-[320px] min-h-[230px] sm:min-w-[500px] sm:max-h-[250px] bg-primary-blue overflow-hidden flex rounded-xl font-secondary sm:drop-shadow-lg backdrop ">
      <div className="p-4 flex flex-col items-end justify-around relative w-[300px]">
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
          <h3 className=" text-slate-300">{position}</h3>
        </div>
        <FaQuoteLeft
          color="white"
          size={150}
          className="opacity-5 absolute -left-5 -bottom-10"
        />
      </div>
      <img
        className={`hidden sm:block grayscale object-cover w-[200px] + ${
          !imgSrc ? "py-10 opacity-20" : ""
        } `}
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
