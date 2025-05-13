import { socialImgs } from "../utils/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Built with React & TailwindCSS</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a href={socialImg.url} target="_blank" key={socialImg.name}>
              <div key={index} className="icon">
                <img src={socialImg.imgPath} alt="social icon" />
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Juan Pablo Ludueña
          </p>
        </div>
      </div>
    </footer>
  );
}
