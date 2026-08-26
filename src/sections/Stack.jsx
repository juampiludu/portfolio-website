import Section from "../components/Section";
import { stack } from "../content/stack";

export default function Stack() {
  return (
    <Section id="stack" index="03" title="Stack">
      <dl>
        {stack.map((group) => (
          <div key={group.group} className="kv">
            <dt className="label">{group.group}</dt>
            <dd className="mono">{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
