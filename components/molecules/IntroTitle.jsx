"use client";
import { SplittingText } from "@/components/ui/shadcn-io/splitting-text";

const IntroTitle = () => {
  return (
    <div className="flex flex-col ">
      <SplittingText
        className={"text-6xl font-extrabold whitespace-pre-wrap leading-23"}
        text={`Creating experiences`}
        type="words"
        motionVariants={{
          initial: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 1 },
          stagger: 0.1,
        }}
      />
      <SplittingText
        className={"text-6xl font-extrabold whitespace-pre-wrap leading-23"}
        text={`through technology.`}
        type="words"
        motionVariants={{
          initial: { opacity: 0, x: 200 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 1.5 },
          stagger: 0.1,
        }}
      />
      <SplittingText
        className={"text-gray-600 mt-20"}
        text={`“Keep your face towards the sunshine and shadows will fall behind you.”`}
        type="chars"
        motionVariants={{
          initial: { opacity: 0, x: 200, y: 50, rotate: 60 },
          animate: { opacity: 1, x: 0, y: 0, rotate: 0 },
          transition: { duration: 0.5, ease: "easeOut" },
          stagger: 0.035,
        }}
      />
    </div>
  );
};

export default IntroTitle;
