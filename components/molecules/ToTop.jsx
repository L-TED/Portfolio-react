"use client";
import { ArrowBigUp } from "lucide-react";
import { animate } from "motion";
import { hover, motion } from "motion/react";

const ToTop = () => {
  return (
    <motion.button
      className="bottom-9 right-6 fixed z-50 p-4 rounded-full bg-neutral-500 cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      whileHover="hover"
    >
      <motion.div
      // variants={{
      //   animate: { y: 0 },
      //   hover: {
      //     y: [0, -5, -5, 0],
      //     transition: {
      //       duration: 0.3,
      //       repeat: infinity,
      //       repeatType: "loop",
      //       ease: "easeOut",
      //     },
      //   },
      // }}
      >
        <ArrowBigUp color="#fff" />
      </motion.div>
    </motion.button>
  );
};

export default ToTop;
