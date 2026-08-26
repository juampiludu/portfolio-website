export default function ExternalLink({ href, children, className = "" }) {
  const isMailto = href.startsWith("mailto:");

  return (
    <a
      href={href}
      className={`link ${className}`}
      {...(isMailto ? {} : { target: "_blank", rel: "noreferrer noopener" })}
    >
      <span>{children}</span>
      <span className="link__mark" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
