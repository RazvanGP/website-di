import { useState, useEffect } from "react";

import Card from "./Card";
import CardModal from "./CardModal";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import feedbacks from "../utils/feedback.json";

import useWindowSize from "./useWindowSize";
import Reveal from "./Reveal";

import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const windowSize = useWindowSize();

  const [selectedCard, setSelectedCard] = useState();
  const [showCardModal, setShowCardModal] = useState(false);
  const [x, setX] = useState(1);

  const { t } = useTranslation();

  const handleCardModal = (value) => {
    setShowCardModal(value);
  };

  //temporary solution
  useEffect(() => {
    showCardModal
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [showCardModal]);

  return (
    <Reveal>
      <section className="home-section flex flex-col justify-center gap-10">
        <Reveal delay={0.2}>
          <p className="font-semibold font-secondary text-2xl text-text-grey ">
            <span className="text-accent-blue">
              {t("testimonials-text-acc")}
            </span>
            {t("testimonials-text")}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={windowSize.width < 780 ? 20 : 50}
            loop={true}
            className="w-full"
            onRealIndexChange={(swiper) => {
              setSelectedCard(swiper.realIndex);
              setX(
                swiper.realIndex === 0
                  ? 10
                  : (swiper.realIndex / (swiper.slides.length - 1)) * 100
              );
            }}
            initialSlide={1}
          >
            {feedbacks.map((card, cardIdx) => {
              return (
                <SwiperSlide
                  className={
                    windowSize.width <= 780 ? "max-w-[80%] " : "max-w-[50%] "
                  }
                  key={cardIdx}
                >
                  <Card
                    key={cardIdx}
                    cardId={card.id}
                    author={card.author}
                    position={card.position}
                    textBody={t(`testimonials-textBody-${cardIdx}`)}
                    imgSrc={card.imgSrc}
                    gender={card.gender}
                    handleCardModal={handleCardModal}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Reveal>

        <Reveal delay={0.4}>
          <motion.p
            className={`w-full h-[5px] bg-gradient-to-r from-[rgba(0,38,50,0)] to-[rgba(0,38,50,0)] via-[rgba(46,132,255,1)] self-center`}
            style={{
              scaleX: `${x}%`,
              transition: "all 0.5s ease",
              animationDelay: "0.3s",
            }}
          ></motion.p>
        </Reveal>

        {showCardModal && (
          <CardModal
            handleCardModal={handleCardModal}
            currentCard={selectedCard}
          />
        )}
      </section>
    </Reveal>
  );
};

export default Testimonials;
