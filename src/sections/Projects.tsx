import ClassyButton from "../components/ClassyButton";
import Subtitle from "../components/Subtitle";
import { projects } from "../scripts/data";

function Projects() {
  return (
    <div
      id="projects"
      className="flex max-w-[1550px] flex-col items-center self-center"
    >
      <Subtitle text="Projects" classes="" />
      <div className="projects-wrapper">
        {projects.map((project, i) => {
          const odd = i % 2;

          return (
            <div
              className={`project mb-[6rem] flex items-center gap-4 ${odd ? "flex-row-reverse pl-5" : "pr-5"}`}
            >
              <a
                className={`project-image relative flex basis-[60rem] items-center ${odd ? "justify-end pl-5" : "justify-start pr-5"} bg-primary-complementary py-8 opacity-80 shadow-2xl shadow-black transition-transform hover:scale-95`}
                href={project.liveLink}
                target="_blank"
              >
                <img
                  src={project.image}
                  alt="project image"
                  className="w-[90%]"
                />
              </a>
              <div
                className={`project-infos relative text-[#dbd9d9] lg:bg-[unset] ${odd ? "xs:right-[-3.5rem] xs:ml-[-3rem] right-[-5rem] ml-[-5rem]" : "xs:left-[-3.5rem] xs:mr-[-3rem] left-[-5rem] mr-[-5rem]"} flex flex-col gap-3 bg-[rgba(26,26,26,0.5)] p-2 lg:gap-5`}
              >
                <div className="project-title xs:text-[.9rem] text-[.8rem] font-bold sm:text-xl md:text-2xl lg:text-3xl">
                  <h3>{project.title}</h3>
                  <h3>{project.subtitle}</h3>
                </div>
                <p className="project-description">{project.desc}</p>
                <div className="project-links flex flex-col gap-5 tracking-wider">
                  <a href={project.liveLink}>
                    <ClassyButton type="button" classes="text-[.7rem]">
                      LIVE APP
                    </ClassyButton>
                  </a>
                  <a href={project.repoLink}>
                    <ClassyButton type="button" classes="text-[.7rem]">
                      GITHUB REPO.
                    </ClassyButton>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
