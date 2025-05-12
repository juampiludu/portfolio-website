export default function Button({
  className,
  text,
  onClick,
  src,
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={src} alt="arrow" />
        </div>
      </div>
    </button>
  );
}
