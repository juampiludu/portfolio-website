import { useGSAP } from "@gsap/react";
import Button from "../../components/Button";
import HeroExperience from "../../Models/hero/HeroExperience";
import { words } from "../../utils/constants";
import gsap from "gsap";
import AnimatedCounter from "./AnimatedCounter";
import BgImg from "@assets/images/bg.png";
import ArrowDownImg from "@assets/images/arrow-down.svg";

export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  function handleClick(e) {
    e.preventDefault();

    const target = document.getElementById("counter");

    if (target) {
      const offset = window.innerHeight * 0.15;

      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-0">
        <img src={BgImg} alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Transforming
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Juan Pablo Ludueña — a web developer and Computer Science
              student. <br />
              Join me in the journey of my work experience and academic
              projects.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12 cta-wrapper"
              id="button"
              text="See my Work"
              src={ArrowDownImg}
              onClick={handleClick}
            />
          </div>
        </header>
        {/* RIGHT: 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
}
