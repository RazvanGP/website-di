import { Context } from "./Context";
import { useContext, useEffect, useState, useRef } from "react";
import data from "../data.json";
import Card from "./Card";
import { motion } from "framer-motion";

const Carousel = ({ handleCardModal }) => {
  return (
    <motion.div
      className="h-[400px] overflow-x-auto overflow-y-hidden flex items-center gap-5 scroll-smooth snap-x snap-mandatory no-scrollbar"
      style={{
        transition: "all 0.5s ease",
      }}

      // drag="x"
      // dragConstraints={{ left: 0, right: 0 }}
    >
      {data.map((card, cardIdx) => {
        return (
          <Card
            key={cardIdx}
            cardId={card.id}
            author={card.author}
            position={card.position}
            textBody={card.textBody}
            imgSrc={card.imgSrc}
            gender={card.gender}
            handleCardModal={handleCardModal}
          />
        );
      })}
    </motion.div>
  );
};

export default Carousel;
