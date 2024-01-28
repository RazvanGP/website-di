import { useEffect, useState } from "react";
import feedbacks from "../utils/feedback.json";
import { FaQuoteLeft } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const CardModal = ({ handleCardModal, cardId }) => {
  const [currentCard, setCurrentCard] = useState(cardId);

  // to do: check currentCard, cardId and cardIdx ! ! ! !
  useEffect(() => {
    console.log("currentCard: ", currentCard);
    console.log("cardId: ", cardId);
  }, []);

  return (
    // <div className="fixed top-0 left-0 z-10 min-h-screen min-w-full scroll-none flex flex-col justify-center gap-5 items-center backdrop-blur-md backdrop-brightness-50">
    //   {/* card content */}
    //   <motion.div className="w-[80%] lg:w-[50%] bg-primary-blue rounded-xl font-secondary">
    //     <div className="h-[500px] sm:h-[700px] p-5 md:p-10 flex flex-col justify-between gap-5 relative overflow-hidden">
    //       <button
    //         className="self-end mb-10"
    //         onClick={() => {
    //           handleCardModal(false);
    //         }}
    //       >
    //         <IoMdCloseCircleOutline
    //           className="opacity-20 hover:opacity-100 hover:scale-110 ease-in duration-200"
    //           size={30}
    //           color="#acacac"
    //         />
    //       </button>
    //       <p className="py-3 text-silver-grey italic max-h-[300px] overflow-auto">
    //         {feedbacks[currentCard].textBody}
    //       </p>

    //       <div className="w-full lg:w-[80%] flex justify-end items-center sm:self-end">
    //         <div className="flex flex-col items-end pb-5">
    //           <h2 className="text-accent-blue text-lg font-bold">
    //             {feedbacks[currentCard].author}
    //           </h2>
    //           <h3 className=" text-slate-300 text-end">
    //             {feedbacks[currentCard].position}
    //           </h3>
    //         </div>

    //         <img
    //           className={`hidden sm:block rounded-tl-3xl rounded-br-3xl grayscale self-end object-cover w-[120px] sm:w-[200px] py-10 opacity-20 `}
    //           src={"/man-illustration.png"}
    //         ></img>
    //       </div>

    //       <FaQuoteLeft
    //         color="white"
    //         size={150}
    //         className="opacity-5 absolute -left-5 -bottom-10 "
    //       />
    //     </div>
    //   </motion.div>
    //   {/* buttons */}
    //   <div className=" w-64 h-full flex justify-evenly items-center text-accent-blue ">
    //     <button className="h-full w-[60px]">
    //       <IoIosArrowBack
    //         size={40}
    //         className=" bg-slate-300 bg-opacity-30 hover:bg-opacity-100 hover:scale-125 rounded-full p-1 transition-all duration-500 ease-in-out"
    //         onClick={() => {
    //           currentCard === 0
    //             ? setCurrentCard(5)
    //             : setCurrentCard(currentCard - 1);
    //         }}
    //       />
    //     </button>
    //     <div className="py-4 flex justify-center gap-3 w-full bg-200-red">
    //       {feedbacks.map((card, cardIdx) => {
    //         return (
    //           <div
    //             key={"circle" + (cardId + 1)}
    //             className={`w-2 h-2  rounded-full transition-all duration-500 ease-in-out ${
    //               cardIdx === currentCard
    //                 ? "bg-accent-blue scale-125"
    //                 : "bg-white opacity-50 hover:cursor-pointer hover:scale-150 duration-0"
    //             }`}
    //             onClick={() => {
    //               setCurrentCard(cardIdx);
    //             }}
    //           ></div>
    //         );
    //       })}
    //     </div>
    //     <button>
    //       <IoIosArrowForward
    //         size={40}
    //         onClick={() => {
    //           currentCard === 5
    //             ? setCurrentCard(0)
    //             : setCurrentCard(currentCard + 1);
    //         }}
    //         className=" bg-slate-300 bg-opacity-30 hover:bg-opacity-100 hover:scale-125 rounded-full p-1 transition-all duration-500 ease-in-out"
    //       />
    //     </button>
    //   </div>
    // </div>
    <div className="fixed top-0 left-0 z-10 h-screen w-screen">
      <Swiper
        style={{
          "--swiper-pagination-color": "#2E84FF",
          "--swiper-pagination-bullet-inactive-color": "#acacac",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        className="w-full h-full backdrop-brightness-50 backdrop-blur"
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
      >
        {feedbacks.map((card, cardIdx) => {
          return (
            <SwiperSlide key={cardIdx}>
              <div className="grabbing relative w-[60%] h-[70%] mx-auto mt-[10%] bg-primary-blue rounded-xl font-secondary">
                <div className="p-5 md:p-10 flex flex-col justify-between gap-5 relative overflow-hidden">
                  <button
                    className="self-end mb-10"
                    onClick={() => {
                      handleCardModal(false);
                    }}
                  >
                    <IoMdCloseCircleOutline
                      className="opacity-20 hover:opacity-100 hover:scale-110 ease-in duration-200"
                      size={30}
                      color="#acacac"
                    />
                  </button>
                  <p className="py-3 text-silver-grey italic max-h-[300px] overflow-auto">
                    {feedbacks[cardIdx].textBody}
                  </p>

                  <div className="w-full lg:w-[80%] flex justify-end items-center sm:self-end">
                    <div className="flex flex-col items-end pb-5">
                      <h2 className="text-accent-blue text-lg font-bold">
                        {feedbacks[cardIdx].author}
                      </h2>
                      <h3 className=" text-slate-300 text-end">
                        {feedbacks[cardIdx].position}
                      </h3>
                    </div>

                    <img
                      className={`hidden sm:block rounded-tl-3xl rounded-br-3xl grayscale self-end object-cover w-[120px] sm:w-[200px] py-10 opacity-20 `}
                      src={"/man-illustration.png"}
                    ></img>
                  </div>

                  <FaQuoteLeft
                    color="white"
                    size={150}
                    className="opacity-5 absolute -left-5 -bottom-10 "
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default CardModal;
