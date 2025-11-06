"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scale } from "motion";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const boxRef = useRef(null);
  const clickBoxRef = useRef(null);
  const handleClick = () => {
    gsap.to(clickBoxRef.current, {
      x: 550,
      y: 1500,
      rotation: 720,
      duration: 5,
      ease: "elastic.out(1, 0.5)",
    });
  };
  // scroll trigger
  const sectionRef = useRef(null);

  useEffect(() => {
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1500px",
        scrub: true,
        pin: true,
        markers: true, // 개발용
      },
    });

    timeLine
      .to(boxRef.current, {
        x: 1000,
        rotation: 720,
        duration: 5,
        ease: "power1.inOut",
      })
      .to(
        boxRef.current,
        {
          y: 200,
          scale: 1.5,
          duration: 5,
        },
        ">"
      );

    return () => {
      timeLine.kill();
    };
  }, []);

  return (
    <section className="w-full p-10">
      <h1>Test GSAP</h1>
      <div ref={clickBoxRef} className="w-25 h-25 bg-blue-400 m-5">
        The Box
      </div>
      <button onClick={handleClick}>run the anim</button>
      <div ref={sectionRef} className="h-[50vh]">
        <h2>Testing ScrollTrigger</h2>
        <div ref={boxRef} className="w-35 h-35 bg-red-400 m-5">
          The Box2
        </div>
      </div>
    </section>
  );
};
export default Test;
