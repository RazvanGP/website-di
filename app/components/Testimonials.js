import { useState, useRef, useEffect, useContext } from "react";
import { Context } from "./Context";
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

  const xScale = useTransform(scrollYProgress, [0.4, 0.8], ["10%", "100%"]);

  return (
    <section
      className="h-screen py-[75px] relative max-w-[350px] md:max-w-2xl lg:max-w-5xl flex flex-col justify-center"
      // ref={targetRef}
    >
      <p className="sm:top-[25%] lg:w-[80%] font-semibold font-secondary text-2xl text-text-grey">
        <span className="text-accent-blue">Dive into the feedback below</span>
        &nbsp; to explore how our solutions in the marine industry have
        empowered us with confidence and expertise.&nbsp;
      </p>
      <div className={`flex flex-col justify-center`}>
        <Carousel handleCardModal={handleCardModal} />
      </div>
      <motion.p
        className={`w-full h-[5px] bg-gradient-to-r from-[rgba(0,38,50,0)] to-[rgba(0,38,50,0)] via-[rgba(46,132,255,1)]`}
        style={{
          scaleX: xScale,
          transition: "all 0.5s ease",
        }}
      ></motion.p>

      {showCardModal && (
        <CardModal handleCardModal={handleCardModal} cardId={selectedCard} />
      )}
    </section>
  );
};

export default Testimonials;
