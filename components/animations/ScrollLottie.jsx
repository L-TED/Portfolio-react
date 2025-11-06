"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LottieAnim from "./LottieAnim";

gsap.registerPlugin(ScrollTrigger);

const ScrollLottie = () => {
  // Lottie 인스턴스를 저장할 Ref
  const lottieAnimRef = useRef(null);
  // ScrollTrigger의 기준이 될 요소의 Ref
  const triggerRef = useRef(null);

  useEffect(() => {
    // Lottie 인스턴스가 로드된 후에만 실행
    if (!lottieAnimRef.current) return;

    // Next.js에서 Strict Mode의 재실행을 방지하고 컴포넌트 언마운트 시 클린업을 위해 Context 사용
    let ctx = gsap.context(() => {
      const lottieAnim = lottieAnimRef.current;
      const totalFrames = lottieAnim.totalFrames - 1;

      // Lottie 애니메이션의 프레임 진행률을 제어하는 ScrollTrigger 설정
      ScrollTrigger.create({
        trigger: triggerRef.current, // 스크롤 감지 기준 요소
        start: "top top", // 요소의 상단이 뷰포트 상단에 닿을 때 시작
        end: "+=3000", // 스크롤 3000px 동안 애니메이션 진행
        scrub: true, // 스크롤에 맞춰 부드럽게 애니메이션 진행 (스크롤바 속도에 따라)
        pin: true, // 애니메이션 진행 동안 트리거 요소를 고정
        markers: true,
        onUpdate: (self) => {
          // 스크롤 진행률 (0부터 1까지)에 따라 Lottie 프레임 업데이트
          const progress = self.progress;
          const frame = progress * totalFrames;
          lottieAnim.goToAndStop(frame, true); // 특정 프레임으로 이동 및 정지
        },
      });
    }, triggerRef); // triggerRef 요소를 컨텍스트 범위로 지정

    return () => ctx.revert(); // 컴포넌트 언마운트 시 모든 애니메이션 제거
  }, []);

  return (
    <div>
      {/* ScrollTrigger의 기준이 될 컨테이너. 충분한 스크롤 영역을 위해 높이를 지정 */}
      <div
        ref={triggerRef}
        style={{
          height: "300vh",
          position: "relative",
          backgroundColor: "#f8f1f5",
        }}
      >
        <div style={{ position: "fixed", top: 0, height: "100vh" }}>
          <LottieAnim ref={lottieAnimRef} />
        </div>
      </div>
      {/* 애니메이션 이후의 컨텐츠 */}
      <div style={{ height: "100vh", padding: "50px" }}>
        <h2>스크롤이 끝나면 이 컨텐츠가 보입니다.</h2>
      </div>
    </div>
  );
};

export default ScrollLottie;
