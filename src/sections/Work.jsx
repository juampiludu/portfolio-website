import ExternalLink from "../components/ExternalLink";
import Section from "../components/Section";
import GraphColoringDiagram from "../diagrams/GraphColoringDiagram";
import SwitcherDiagram from "../diagrams/SwitcherDiagram";
import { projects } from "../content/projects";

const DIAGRAMS = {
  switcher: SwitcherDiagram,
  "graph-coloring": GraphColoringDiagram,
};

export default function Work() {
  return (
    <Section id="work" index="02" title="Selected work">
      {projects.map((project, i) => {
        const Diagram = DIAGRAMS[project.diagram];

        return (
          <article key={project.id} className="entry">
            <div className="meta-line">
              <span className="label label--accent">{project.year}</span>
              <span className="label">{project.role}</span>
            </div>

            <h3 className="entry-title mt-3">{project.name}</h3>

            <p className="prose measure mt-3">{project.summary}</p>

            {Diagram && (
              <div className="mt-8">
                <Diagram figure={i + 1} />
              </div>
            )}

            <ul className="bullets measure mt-8">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <ExternalLink href={project.repo}>
                {project.repoLabel}
              </ExternalLink>
            </div>
          </article>
        );
      })}
    </Section>
  );
}
