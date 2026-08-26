import ExternalLink from "../../components/ExternalLink";
import Section from "../../components/Section";
import { profile, socials } from "../../content/profile";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact" index="05" title="Contact">
      <p className="lead measure">
        Looking for a backend or full stack role, and happy to talk about
        anything Django, FastAPI or Docker shaped.
      </p>

      <div className="mt-7 flex flex-wrap items-baseline gap-x-6 gap-y-3">
        <ExternalLink href={`mailto:${profile.email}`}>
          {profile.email}
        </ExternalLink>
        {socials.map((social) => (
          <ExternalLink key={social.name} href={social.url}>
            {social.handle}
          </ExternalLink>
        ))}
      </div>

      <div className="mt-14 max-w-xl">
        <h3 className="label">Or write here</h3>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
