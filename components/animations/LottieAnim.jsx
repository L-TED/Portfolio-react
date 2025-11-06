import Lottie from "lottie-web";
import animationData from "../../public/char.json";
import { forwardRef, useEffect, useRef } from "react";

const LottieAnim = () => {
  const LottieAnimation = forwardRef((props, ref) => {
    const containerRef = useRef(null);
    const lottieInstanceRef = useRef(null);

    useEffect(() => {
      // 1. Lottie 인스턴스 초기화
      const anim = Lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg", // 'svg', 'canvas', 'html' 중 선택
        loop: false, // GSAP으로 제어할 것이므로 루프는 끕니다.
        autoplay: false, // GSAP으로 제어할 것이므로 자동 재생은 끕니다.
        animationData: animationData,
      });

      // lottie 인스턴스를 ref로 전달
      lottieInstanceRef.current = anim;
      if (ref) {
        if (typeof ref === "function") {
          ref(anim);
        } else {
          ref.current = anim;
        }
      }

      // 2. 클린업 함수
      return () => {
        anim.destroy();
      };
    }, [ref]);

    return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
  });

  LottieAnimation.displayName = "LottieAnim";
}; // forwardRef를 사용하여 부모 컴포넌트에서 lottie 인스턴스에 접근 가능하게 함

export default LottieAnim;
