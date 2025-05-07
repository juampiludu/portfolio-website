export default function Showcase() {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Project1" />
            </div>
            <div className="text-content">
              <h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus a placeat atque facilis totam nobis tempora
                delectus rerum culpa doloremque?
              </h2>
              <p className="text-white-50 md:text-xl">
                App built with Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Vel, aliquam.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Project2" />
              </div>
              <h2>Lorem, ipsum dolor.</h2>
            </div>

            <div className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="Project3" />
              </div>
              <h2>Lorem, ipsum dolor.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
