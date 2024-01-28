import { useState, useEffect } from "react";

import Card from "./Card";
import CardModal from "./CardModal";

import { motion, useScroll, useTransform } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import feedbacks from "../utils/feedback.json";

import useWindowSize from "./useWindowSize";

const Testimonials = () => {
  const windowSize = useWindowSize();

  const [selectedCard, setSelectedCard] = useState();
  const [showCardModal, setShowCardModal] = useState(false);

  const handleCardModal = (value, cardId) => {
    setShowCardModal(value);

    setSelectedCard(cardId);
  };

  //temporary solution
  useEffect(() => {
    showCardModal
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [showCardModal]);

  return (
    <section
      className="h-screen py-[75px] relative max-w-[350px] md:max-w-2xl lg:max-w-5xl flex flex-col justify-center gap-10"
      // ref={targetRef}
    >
      <p className="font-semibold font-secondary text-2xl text-text-grey ">
        <span className="text-accent-blue">Dive into the feedback below</span>
        &nbsp; to explore how our solutions in the marine industry have
        empowered us with confidence and expertise.&nbsp;
      </p>

      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={windowSize.width < 780 ? 20 : 50}
        loop={true}
        className="w-full"
      >
        {feedbacks.map((card, cardIdx) => {
          return (
            <SwiperSlide
              className={
                windowSize.width <= 780 ? "max-w-[80%]" : "max-w-[50%]"
              }
              key={cardIdx}
            >
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
            </SwiperSlide>
          );
        })}
      </Swiper>

      <motion.p
        className={`w-full h-[5px] bg-gradient-to-r from-[rgba(0,38,50,0)] to-[rgba(0,38,50,0)] via-[rgba(46,132,255,1)]`}
      ></motion.p>

      {showCardModal && (
        <CardModal handleCardModal={handleCardModal} cardId={selectedCard} />
      )}
    </section>
  );
};

export default Testimonials;
