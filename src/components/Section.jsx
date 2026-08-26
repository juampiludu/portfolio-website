/**
 * A numbered section, the way a paper numbers them. Rendered in full from the
 * first paint — nothing here waits on a scroll position to become visible.
 */
export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="section">
      <div className="shell">
        <header className="section-head">
          <span className="section-num">{index}</span>
          <h2 className="section-title">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
}
