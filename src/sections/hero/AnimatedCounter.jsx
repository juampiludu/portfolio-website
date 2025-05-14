import CountUp from "react-countup";
import { counterItems } from "../../utils/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter() {
  const sectionRef = useRef(null);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          onEnter: () => setHasCounted(true),
        },
      }
    );
  }, []);

  return (
    <div id="counter" ref={sectionRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-3-cols">
        {counterItems.map((item) => (
          <div
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
            key={item.label}
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              {hasCounted && (
                <CountUp suffix={item.suffix} end={item.value} duration={6} />
              )}
              {!hasCounted && "0" + item.suffix}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
