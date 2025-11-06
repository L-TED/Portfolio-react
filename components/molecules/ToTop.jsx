"use client";
import { ArrowBigUp } from "lucide-react";
import { motion } from "motion/react";

const ToTop = () => {
  return (
    <motion.button
      className="bottom-9 right-6 fixed z-50 p-4 rounded-full bg-neutral-500 cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <motion.div
        animate={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.05, y: 8 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowBigUp color="#fff" />
      </motion.div>
    </motion.button>
  );
};

export default ToTop;
