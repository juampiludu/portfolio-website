import { navLinks } from "../content/profile";

export default function Header() {
  return (
    <header className="masthead-bar">
      <div className="shell">
        <div className="masthead-bar__inner">
          <a href="#top" className="wordmark">
            juampiludu<span>/</span>portfolio
          </a>

          <nav
            aria-label="Sections"
            className="hidden md:flex items-center gap-6"
          >
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="navlink">
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
