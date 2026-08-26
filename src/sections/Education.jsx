import Section from "../components/Section";
import { certifications, education } from "../content/experience";

export default function Education() {
  return (
    <Section id="education" index="04" title="Education">
      <dl>
        {education.map((entry) => (
          <div key={entry.institution} className="kv">
            <dt className="label">
              {entry.start} – {entry.end}
            </dt>
            <dd>
              <p className="row-title">{entry.institution}</p>
              <p className="mono mt-1">{entry.title}</p>
            </dd>
          </div>
        ))}
      </dl>

      <h3 className="label mt-14">Certification</h3>

      <dl className="mt-5">
        {certifications.map((entry) => (
          <div key={entry.name} className="kv">
            <dt className="label">{entry.date}</dt>
            <dd>
              <p className="row-title">{entry.name}</p>
              <p className="mono mt-1">{entry.issuer}</p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
