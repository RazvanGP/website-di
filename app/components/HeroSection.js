import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const TestHorizontalCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <section className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <div className="h-[450px] min-w-max  font-bold pt-28 font-primary">
            <h1 className="text-3xl text-accent-red font-bold tracking-widest sticky left-0 translate-x-0">
              SHIP DESIGN ENGINEERING
            </h1>
            <p className="text-[10rem] text-primary-blue font-black opacity-10">
              WHERE VISION SETS SAIL
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestHorizontalCarousel;
