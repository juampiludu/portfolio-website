import Section from "../components/Section";
import { experience } from "../content/experience";

export default function Experience() {
  return (
    <Section id="experience" index="01" title="Experience">
      {experience.map((job) => (
        <article key={job.company} className="entry">
          <div className="meta-line">
            <span className="label label--accent">
              {job.start} – {job.end}
            </span>
            <span className="label">{job.location}</span>
          </div>

          <h3 className="entry-title mt-3">{job.company}</h3>
          <p className="mono mt-1">{job.title}</p>

          <ul className="bullets measure mt-6">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {job.stack.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </Section>
  );
}
