"use client";
import Link from "next/link";
import { motion } from "motion/react";

const Ul = () => {
  const hovering = { backgroundColor: "#ddd", scale: 1.05 };
  return (
    <ul className="flex justify-end w-3xl h-full gap-8">
      <Link href="#about">
        <motion.li
          whileHover={hovering}
          className="p-2 h-full flex items-center"
        >
          About
        </motion.li>
      </Link>
      <Link href="#project">
        <motion.li
          whileHover={hovering}
          className="p-2 h-full flex items-center"
        >
          Projects
        </motion.li>
      </Link>
      <Link href="#experience">
        <motion.li
          whileHover={hovering}
          className="p-2 h-full flex items-center"
        >
          Experience
        </motion.li>
      </Link>
      <Link href="#contact">
        <motion.li
          whileHover={hovering}
          className="p-2 h-full flex items-center"
        >
          contact
        </motion.li>
      </Link>
    </ul>
  );
};

export default Ul;
