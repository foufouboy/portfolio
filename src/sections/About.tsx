import Subtitle from "../components/Subtitle";
import profileImg from "../assets/profile.jpeg";
import { skills } from "../scripts/data";

function About() {
  return (
    <div id="about" className="flex h-screen flex-col px-[10%]">
      <Subtitle text="About" classes="my-14 width-[fit-content] self-center" />
      <div className="profile flex flex-col items-center">
        <div className="profile-picture to-primary-red mb-9 flex h-36 w-36 items-center justify-center rounded-full bg-linear-to-br from-blue-600">
          <img
            src={profileImg}
            alt="profile picture"
            className="w-[93%] rounded-full"
          />
        </div>
        <p className="whoami mb-9">
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
