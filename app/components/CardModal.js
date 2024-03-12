import feedbacks from "../utils/feedback.json";
import { FaQuoteLeft } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import useWindowSize from "./useWindowSize";

import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

const CardModal = ({ handleCardModal, currentCard }) => {
  const windowSize = useWindowSize();
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();

  const swiperPaginationStyles = {
    light: {
      "--swiper-pagination-color": "#2E84FF",
    },
    dark: {
      "--swiper-pagination-color": "#2c7da0",
    },
  };

  const swiperPaginationColor =
    resolvedTheme === "dark"
      ? swiperPaginationStyles.dark
      : swiperPaginationStyles.light;

  return (
    <div className="fixed top-0 left-0 z-10 h-screen w-screen">
      <Swiper
        style={{
          ...swiperPaginationColor,
          "--swiper-pagination-bullet-inactive-color": "#acacac",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        className="w-full h-full backdrop-brightness-50 backdrop-blur"
        slidesPerView={"auto"}
        centeredSlides={true}
        rewind={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={windowSize.width < 780 ? false : true}
        initialSlide={currentCard}
      >
        {feedbacks.map((card, cardIdx) => {
          return (
            <SwiperSlide key={cardIdx}>
              <div className="grabbing w-full h-full md:max-w-[80%] lg:max-w-[60%] xl:max-w-[40%] md:max-h-[80%] md:rounded-xl md:mx-auto md:mt-[10vh] bg-primary-blue dark:bg-[#121D2F] font-secondary">
                <div className="h-full w-full p-5 flex flex-col justify-start md:justify-evenly overflow-hidden relative">
                  {/* close btn */}
                  <button
                    className="self-end"
                    onClick={() => {
                      handleCardModal(false);
                    }}
                  >
                    <IoMdCloseCircleOutline
                      className="opacity-20 hover:opacity-100 hover:scale-110 ease-in-out duration-300"
                      size={50}
                      color="#acacac"
                    />
                  </button>

                  {/* card body */}
                  <div className="max-h-[80%] p-5 flex-1 flex flex-col justify-evenly">
                    <p className=" text-silver-grey italic overflow-auto">
                      {t(`testimonials-textBody-${cardIdx}`)}
                    </p>

                    <div className="w-full  flex justify-end items-center sm:self-end">
                      <div className="flex flex-col items-end pb-5">
                        <h2 className="text-accent-blue dark:text-dark-accent-blue text-lg font-bold">
                          {card.author}
                        </h2>
                        <h3 className=" text-slate-300 dark:text-dark-primary-blue text-end">
                          {card.position}
                        </h3>
                      </div>

                      <img
                        className={`hidden md:block rounded-tl-3xl rounded-br-3xl grayscale self-end object-cover w-[120px] sm:w-[200px] py-10 opacity-20 `}
                        src={"/man-illustration.png"}
                      ></img>
                    </div>
                    {/* quote icon */}
                    <FaQuoteLeft
                      className="opacity-5 absolute -bottom-20 -left-8"
                      color="white"
                      size={300}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardModal;
