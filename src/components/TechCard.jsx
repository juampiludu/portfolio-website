import TechIcon from "./Models/TechLogos/TechIcon";

export default function TechCard({ icon, isMobile }) {
  return (
    <div
      key={icon.name}
      className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
    >
      <div className="tech-card-content">
        <div className="tech-icon-wrapper">
          {isMobile && <img src={icon.imgPath} alt={icon.name} width={150} />}
          {!isMobile && <TechIcon icon={icon} />}
        </div>

        <div className="padding-x w-full">
          <p>{icon.name}</p>
        </div>
      </div>
    </div>
  );
}
