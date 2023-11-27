import React from "react";
import { motion } from "framer-motion";

const BulletPoint = () => {
  return (
    <div className="relative flex items-center justify-center">
      <span className="w-2 h-2 rounded-full bg-accent-blue absolute"></span>
      <motion.span
        className="w-3 h-3 rounded-full bg-accent-blue opacity-60 absolute"
        animate={{ scale: [1, 1.1], opacity: [0.4, 0.6] }}
        transition={{
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
          duration: 1,
        }}
      ></motion.span>
      <motion.span
        className="w-4 h-4 rounded-full bg-accent-blue opacity-40 absolute"
        animate={{ scale: [1, 1.1], opacity: [0.2, 0.4] }}
        transition={{
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
          duration: 1.3,
        }}
      ></motion.span>
      <motion.span
        className="w-5 h-5 rounded-full bg-accent-blue opacity-20 absolute"
        animate={{ scale: [1, 1.1], opacity: [0, 0.2] }}
        transition={{
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
          duration: 1.6,
        }}
      ></motion.span>
    </div>
  );
};

export default BulletPoint;
