import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { useState, useEffect, useRef } from "react";

const Reveal = ({ children, delay }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const [isScrollUp, setIsScrollUp] = useState(false);

  //   const isInView = useInView(ref, { once: true });
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) {
      setIsScrollUp(true);
    } else {
      setIsScrollUp(false);
    }
  });

  useEffect(() => {
    isInView ? mainControls.start("visible") : mainControls.start("hidden");
  }, [isInView]);

  return (
    <div ref={ref} className="snap-center">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: isScrollUp ? -75 : 75 },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
