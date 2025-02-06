import Subtitle from "../components/Subtitle";
import profileImg from "../assets/profile.jpeg";
import { skills } from "../scripts/data";

// TODO: Animations !

function About() {
  return (
    <div id="about" className="flex flex-col items-center px-[5%]">
      <Subtitle text="About" classes="" />
      <div className="profile-wrapper flex max-w-[1200px] flex-col justify-between transition-[flex-direction] lg:w-full lg:gap-15 xl:flex-row">
        <div className="profile flex flex-col items-center">
          <div className="profile-picture to-primary-red mb-9 flex h-[9rem] w-[9rem] items-center justify-center rounded-full bg-linear-to-br from-blue-600 md:h-[11rem] md:w-[11rem] lg:h-[14rem] lg:w-[14rem] xl:h-[15rem] xl:w-[15rem]">
            <img
              src={profileImg}
              alt="profile picture"
              className="h-[95%] w-auto rounded-full"
            />
          </div>
          <p className="whoami mb-9 w-[80vw] sm:w-[500px]">
            Self-trained fullstack developer, mainly focused on JavaScript, with
            experience on Express and React frameworks. Passionate about
            technology and the impact that IT and the web have on our society,
            I've been self-taught in web development for a few years now; I'm
            now looking for an internship to finally get my first real work
            experience.
          </p>
        </div>
        <div className="skills flex items-center gap-4 self-center">
          {skills.map((row, index) => {
            return (
              <div
                className="skill-row flex flex-col gap-4"
                key={"skill_row_" + index}
              >
                {row.map((skill, index) => {
                  return (
                    <div
                      key={skill + "_" + index}
                      className="skill flex w-[80px] flex-col items-center justify-center gap-1 rounded-xl sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[170px]"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name + " icon"}
                        className="mt-1 h-[36px] sm:h-[46px] md:h-[50px] lg:h-[70px] xl:h-[80px]"
                      />
                      <p className="skills-text font-[500]">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
