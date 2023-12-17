import { Context } from "./Context";
import { useContext, useEffect, useState } from "react";
import data from "../data.json";
import Card from "./Card";
import { motion, useScroll, useTransform } from "framer-motion";

const Carousel = ({ handleCardModal }) => {
  const { scrollYValue } = useContext(Context);

  useEffect(() => {
    console.log(scrollYValue);
  }, [scrollYValue]);

  // const x = useTransform(scrollYProgress, [0.5, 1], ["38%", "-150%"]);

  return (
    <div className="h-[400px] overflow-hidden flex justify-between items-center snap-y snap-center snap-mandatory">
      <motion.div
        className={`flex gap-5 `}
        style={{
          x: `${-(scrollYValue - 0.9) * 200}%`,
          transition: "all 0.5s ease",
        }}
      >
        {data.map((card, cardId) => {
          return (
            <Card
              key={cardId}
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
  );
};

export default Carousel;
