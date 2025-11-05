"use client";
import { ArrowBigUp } from "lucide-react";

const ToTop = () => {
  return (
    <button
      className="bottom-6 right-3 fixed z-50 p-4 rounded-full bg-neutral-500 cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowBigUp color="#fff" />
    </button>
  );
};

export default ToTop;
