import { useGSAP } from "@gsap/react";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons, techStackImgs } from "../constants/index";
import gsap from "gsap";
import { useMemo } from "react";
import TechCard from "../components/TechCard";

export default function TechStack() {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  // TODO: change this before pr
  // const isMobile = useMemo(() => {
  //   return typeof window !== "undefined" && window.mobileCheck?.();
  // }, []);

  const isMobile = true;

  const techStack = isMobile ? techStackImgs : techStackIcons;

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How Can I Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <div className="tech-grid">
          {techStack.map((icon) => (
            <TechCard icon={icon} isMobile={isMobile} key={icon.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
