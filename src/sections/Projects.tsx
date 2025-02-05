import Subtitle from "../components/Subtitle";
import { projects } from "../scripts/data";

function Projects() {
  return (
    <div
      id="projects"
      className="flex max-w-[1550px] flex-col items-center self-center px-5"
    >
      <Subtitle text="Projects" />
      <div className="projects-wrapper">
        {projects.map((project, i) => {
          const odd = i % 2;

          return (
            <div className={`project mb-[6rem] flex flex-col gap-4`}>
              <a
                className={`project-image relative flex items-center justify-center bg-indigo-800 p-5 transition-transform hover:scale-95`}
                href={project.liveLink}
                target="_blank"
              >
                <img
                  src={project.image}
                  alt="project image"
                  className="h-[auto]"
                />
              </a>
              <div className={`project-infos relative flex flex-col gap-3`}>
                <div className="project-title text-xl font-bold">
                  <h2>{project.title}</h2>
                  <h2>{project.subtitle}</h2>
                </div>
                <p className="project-description">{project.desc}</p>
                <div className="project-links">
                  <a href={project.liveLink}>LIVE APP</a>
                  <a href={project.repoLink}>GITHUB REPO.</a>
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
