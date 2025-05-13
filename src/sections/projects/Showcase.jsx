import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { projects } from "../constants/index";

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    projectRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div
            className="first-project-wrapper"
            ref={(el) => (projectRefs.current[0] = el)}
          >
            <div
              className="image-wrapper"
              style={{ backgroundColor: projects[0].bgColor }}
            >
              <a href={projects[0].repoLink} target="_blank">
                <img src={projects[0].imgPath} alt={projects[0].name} />
              </a>
            </div>
            <div className="text-content">
              <h2>{projects[0].name}</h2>
              <p className="text-white-50 md:text-xl">
                {projects[0].description}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            {projects.slice(1).map((project, index) => (
              <div
                key={project.name}
                className="project"
                ref={(el) => (projectRefs.current[index + 1] = el)}
              >
                <div
                  className="image-wrapper"
                  style={{ backgroundColor: project.bgColor }}
                >
                  <a href={project.repoLink} target="_blank">
                    <img src={project.imgPath} alt={project.name} />
                  </a>
                </div>
                <h2>{project.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
