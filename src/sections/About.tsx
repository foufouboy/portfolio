import Subtitle from "../components/Subtitle";
import { InView } from "react-intersection-observer";
import profileImg from "../assets/profile.jpeg";
import { skills, presentation } from "../scripts/data";
import { useState } from "react";

// TODO: Animations !

function About() {
  const [animated, setAnimated] = useState(false);

  return (
    <div id="about" className="flex flex-col items-center px-[5%]">
      <Subtitle text="About" classes="" />
      <InView
        triggerOnce={true}
        threshold={0.7}
        onChange={(inView, entry) => {
          if (inView && !animated) {
            setAnimated(true);
          }
        }}
      >
        {({ inView, ref, entry }) => (
          <div
            className="profile-wrapper flex max-w-[1200px] flex-col justify-between transition-[flex-direction] lg:w-full lg:gap-15 xl:flex-row"
            ref={ref}
          >
            <div
              className={`profile relative left-0 flex flex-col items-center transition-all duration-1500 ${!animated && "lg:left-[-400px] lg:opacity-0"}`}
            >
              <div className="profile-picture mb-9 flex h-[9rem] w-[9rem] items-center justify-center rounded-full bg-linear-to-br/srgb from-[#db4141] to-[#0fc2cf] md:h-[11rem] md:w-[11rem] lg:h-[14rem] lg:w-[14rem] xl:h-[15rem] xl:w-[15rem]">
                <img
                  src={profileImg}
                  alt="profile picture"
                  className="h-[95%] w-auto rounded-full"
                />
              </div>
              <p className="whoami mb-9 w-[80vw] sm:w-[500px]">
                {presentation}
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
                          className={`skill flex w-[80px] flex-col items-center justify-center gap-1 rounded-xl transition-opacity delay-1000 duration-1500 ease-in-out sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[170px] ${!animated && "lg:opacity-0"}`}
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
        )}
      </InView>
    </div>
  );
}

export default About;
