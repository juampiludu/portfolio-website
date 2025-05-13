import { useGSAP } from "@gsap/react";
import TitleHeader from "../../components/TitleHeader";
import { techStackList } from "../../utils/constants";
import gsap from "gsap";
import { useContext } from "react";
import TechCard from "../../components/TechCard";
import { DeviceContext } from "../../context/DeviceContext";

export default function TechStack() {
  const isMobile = useContext(DeviceContext);

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

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How Can I Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <div className="tech-grid">
          {techStackList.map((icon) => (
            <TechCard icon={icon} isMobile={isMobile} key={icon.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
