import { profile } from "../content/profile";

export default function Footer() {
  return (
    <footer className="section section--footer">
      <div className="shell">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <span className="label">
            © {new Date().getFullYear()} {profile.name} · Córdoba, Argentina
          </span>
          <a href="#top" className="navlink">
            back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
