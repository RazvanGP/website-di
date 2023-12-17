import { useState, useRef, useEffect } from "react";
import CardModal from "./CardModal";
import Carousel from "./Carousel";
import { motion, useScroll, useTransform } from "framer-motion";

const Testimonials = () => {
  // const targetRef = useRef();

  const [selectedCard, setSelectedCard] = useState();
  const [showCardModal, setShowCardModal] = useState(false);

  const handleCardModal = (value, cardId) => {
    setShowCardModal(value);
    setSelectedCard(cardId);
  };

  const { scrollYProgress } = useScroll();

  // const xScale = useTransform(scrollYProgress, [0.6, 1], ["10%", "100%"]);

  return (
    <section
      className="relative h-[200vh] max-w-[350px] md:max-w-2xl lg:max-w-5xl"
      // ref={targetRef}
    >
      <p className="sticky top-[15%] sm:top-[25%] lg:w-[80%] font-semibold font-secondary text-2xl">
        <span className="text-accent-blue">Dive into the feedback below</span>
        &nbsp; to explore how our solutions in the marine industry have
        empowered us with confidence and expertise.&nbsp;
      </p>
      <div
        className={`sticky top-1/3 flex flex-col items-center overflow-hidden`}
      >
        <Carousel handleCardModal={handleCardModal} />
        <motion.span
          className={`w-full h-[5px] bg-gradient-to-r from-[rgba(0,38,50,0)] to-[rgba(0,38,50,0)] via-[rgba(46,132,255,1)] `}
          style={{
            // scaleX: xScale,
            transition: "all 0.5s ease",
          }}
        ></motion.span>
      </div>

      {showCardModal && (
        <CardModal handleCardModal={handleCardModal} cardId={selectedCard} />
      )}
    </section>
  );
};

export default Testimonials;
