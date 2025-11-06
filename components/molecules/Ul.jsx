"use client";
import Link from "next/link";
import { motion } from "motion/react";

const Ul = () => {
  const hovering = {
    color: "#ffffff",
    backgroundColor: "#ADADAD",
    scale: 0.95,
    borderRadius: ".2rem",
    transition: { duration: 0.3, ease: "easeIn" },
  };
  return (
    <ul className="flex justify-end w-3xl h-full gap-0 overflow-hidden">
      <Link href="#about">
        <motion.li
          whileHover={hovering}
          className="p-2 h-full flex w-25 justify-center items-center"
        >
          About
        </motion.li>
      </Link>
      <Link href="#project">
        <motion.li
          whileHover={hovering}
          className="p-2 h-full flex w-25 justify-center items-center"
        >
          Projects
        </motion.li>
      </Link>
      <Link href="#growth">
        <motion.li
          whileHover={hovering}
          className="p-2 h-full flex w-25 justify-center items-center"
        >
          Growth
        </motion.li>
      </Link>
      <Link href="#contact">
        <motion.li
          whileHover={hovering}
          className="p-2 h-full flex w-25 justify-center items-center"
        >
          contact
        </motion.li>
      </Link>
    </ul>
  );
};

export default Ul;
