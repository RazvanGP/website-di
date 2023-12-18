import { Context } from "./Context";
import { useContext, useEffect, useState } from "react";
import data from "../data.json";
import Card from "./Card";
import { motion } from "framer-motion";

const Carousel = ({ handleCardModal }) => {
  const { scrollYValue } = useContext(Context);

  return (
    <>
      <div className="h-[400px] flex justify-between items-center ">
        <motion.div
          className="flex gap-5"
          style={{
            x: `${-(scrollYValue - 0.59) * 200}%`,
            transition: "all 0.5s ease",
          }}
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
      </div>
    </>
  );
};

export default Carousel;
