import data from "../data.json";
import Card from "./Card";
import { motion, useScroll, useTransform } from "framer-motion";

const Carousel = ({ handleCardModal }) => {
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0.7, 1], ["40%", "-35%"]);

  return (
    <div className="h-[400px] overflow-hidden flex justify-between items-center">
      <motion.div
        className={`flex gap-5 `}
        style={{
          x,
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
