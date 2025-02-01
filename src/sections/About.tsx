import Subtitle from "../components/Subtitle";
import profileImg from "../assets/profile.jpeg";
import { skills } from "../scripts/data";

function About() {
  return (
    <div id="about" className="flex flex-col items-center">
      <Subtitle text="About" />
      <div className="profile flex flex-col items-center">
        <div className="profile-picture to-primary-red mb-9 flex h-[10rem] w-[10rem] items-center justify-center rounded-full bg-linear-to-br from-blue-600 md:h-[11rem] md:w-[11rem] lg:h-[14rem] lg:w-[14rem]">
          <img
            src={profileImg}
            alt="profile picture"
            className="h-[95%] w-auto rounded-full"
          />
        </div>
        <p className="whoami mb-9 w-[80vw] sm:w-[500px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          molestiae animi maxime aspernatur maiores vel cum. Ipsum quae incidunt
          assumenda ad odio, vitae distinctio laudantium dignissimos eligendi
          rerum aspernatur doloribus.
        </p>
      </div>
      <div className="skills flex items-center gap-6 self-center">
        {skills.map((row, index) => {
          return (
            <div className="skill-row flex flex-col gap-6" key={index}>
              {row.map((skill) => {
                return (
                  <div
                    key={skill}
                    className="skill to-primary-red flex h-20 w-26 items-center justify-center rounded-xl bg-linear-to-br from-blue-600"
                  >
                    <p>{skill}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
