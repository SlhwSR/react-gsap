import React, { HtmlHTMLAttributes, memo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { defaultImages } from "@/constant/images";
const ScrollDown = memo(() => {
  const randomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 16).toString(16);
    }
    return color;
  };
  const main = useRef(null);
  const scrollTween = useRef<any>(null);
  const { contextSafe } = useGSAP(
    () => {
      const panels = gsap.utils.toArray(".panel");
      panels.forEach((panel: any, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top bottom",
          end: "+=200%",
          onToggle: (self) =>
            self.isActive && !scrollTween.current && goToSection(i),
          id: "panel-" + i,
        });
      });
      ScrollTrigger.create({
        start: 0,
        end: "max",
        snap: 1 / (panels.length - 1),
      });
    },
    { scope: main }
  );
  const goToSection = contextSafe((i: any) => {
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: i * window.innerHeight, autoKill: false },
      duration: 1,
      id: "scrollTween",
      //平滑滚动
      ease: "power2.inOut",
      onComplete: () => (scrollTween.current = null),
      overwrite: true,
    });
  });
  return (
    <div className="flex flex-col h-full" ref={main}>
      {defaultImages.map((_, i) => (
        <section
          key={i}
          className="h-[100vh] w-full flex justify-center items-center text-center panel"
          style={{
            backgroundColor: randomColor(),
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // backgroundRepeat: "no-repeat",
            // backgroundAttachment: "fixed", // 添加这一行
            backgroundPosition: "center",
            boxSizing: "border-box",
            backgroundImage: `url(${_.urls?.thumb})`,
          }}
        >
          <h1 className="text-white font-semibold text-3xl">我是第{i + 1}页</h1>
        </section>
      ))}
    </div>
  );
});

export default ScrollDown;
