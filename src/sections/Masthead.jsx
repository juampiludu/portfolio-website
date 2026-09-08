import ExternalLink from "../components/ExternalLink";
import { profile, socials, spec } from "../content/profile";

export default function Masthead() {
  return (
    <section id="top" className="shell pt-14 pb-16 sm:pt-20 sm:pb-24">
      <p className="label">{profile.roleLine}</p>

      <h1 className="display mt-4">{profile.name}</h1>

      <p className="lead measure mt-5">{profile.intro}</p>

      <dl className="spec mt-12 max-w-2xl">
        {spec.map((item) => (
          <div key={item.key}>
            <dt>{item.key}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-3">
        <ExternalLink href={`mailto:${profile.email}`}>
          {profile.email}
        </ExternalLink>
        {socials.map((social) => (
          <ExternalLink key={social.name} href={social.url}>
            {social.name}
          </ExternalLink>
        ))}
        <ExternalLink href={profile.resume}>Resume, PDF</ExternalLink>
      </div>
    </section>
  );
}
