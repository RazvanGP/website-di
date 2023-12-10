import Card from "./Card";
import data from "../data.json";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import CardModal from "./CardModal";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCard, setSelectedCard] = useState();
  const [showCardModal, setShowCardModal] = useState(false);

  let timeoutId = undefined;

  // useEffect(() => {
  //   timeoutId = setTimeout(() => {
  //     nextSlide();
  //   }, 4000);
  // }, [currentSlide]);

  const previousSlide = () => {
    if (currentSlide === 0) setCurrentSlide(data.length - 1);
    else setCurrentSlide(currentSlide - 1);
    clearTimeout(timeoutId);
  };

  const nextSlide = () => {
    if (currentSlide === data.length - 1) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
    clearTimeout(timeoutId);
  };

  const handleCardModal = (value, cardId) => {
    setShowCardModal(value);
    setSelectedCard(cardId);
  };

  return (
    <div className="min-h-screen max-w-xs md:max-w-2xl lg:max-w-7xl flex flex-col gap-5 justify-center overflow-hidden ">
      <p className="font-semibold font-secondary text-2xl ">
        <span className="text-accent-blue">Dive into the feedback below</span>
        {
          " to explore how our solutions in the marine industry have empowered us with confidence and expertise."
        }
      </p>

      <div className="relative">
        <div
          className={`flex sm:items-center md:gap-6 z-[11]  transition ease-out duration-300 translate-x-[${
            -currentSlide * 100
          }%]`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
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
        </div>
        <div className="pt-5 top-0 left-0 w-full sm:w-full h-full flex justify-between items-center text-accent-blue ">
          <button className="h-full w-[60px]">
            <IoIosArrowBack size={30} onClick={previousSlide} />
          </button>
          <div className="py-4 flex justify-center gap-3 w-full bg-200-red">
            {data.map((card, cardId) => {
              return (
                <div
                  key={"circle" + cardId}
                  className={`w-3 h-3  rounded-full  ${
                    cardId === currentSlide
                      ? "bg-accent-blue scale-110"
                      : "bg-silver-grey opacity-50 "
                  }`}
                ></div>
              );
            })}
          </div>
          <button>
            <IoIosArrowForward size={30} onClick={nextSlide} />
          </button>
        </div>

        {showCardModal && (
          <CardModal handleCardModal={handleCardModal} cardId={selectedCard} />
        )}
      </div>
    </div>
  );
};

export default Testimonials;
