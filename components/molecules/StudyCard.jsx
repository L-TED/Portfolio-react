"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

const StudyCard = ({ src, title, desc, skills, detail }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    // s
    <div
      className="perspective-1000 w-65 h-100 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "string", stiffness: 100 }}
      >
        {/* 전면 */}

        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute flex flex-col justify-between text-center w-full h-full pt-6 pl-4 pr-4 pb-4 bg-stone-100 gap-2 rounded-xl shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]"
        >
          <div className="flex flex-col items-center gap-3">
            <Image
              src={src}
              alt=""
              width={250}
              height={1}
              className="rounded-lg object-cover"
            />
            <div className="text-lg font-bold">{title}</div>
            <div className="text-xs text-gray-700">{desc}</div>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex text-[10px] pl-1 pr-1 border border-gray-400 rounded-3xl"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        {/* 후면 */}
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute flex flex-col justify-center text-center w-full h-full pt-6 pl-4 pr-4 pb-4 bg-stone-100 gap-4 rounded-xl shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]"
        >
          <div className="text-xl font-bold">{title}</div>
          <div className="text-xs text-gray-600">{detail}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudyCard;
