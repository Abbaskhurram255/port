import * as React from "react";
import Skill from "./Skill";
import Title from "./Title";

const Skills = () => {
  const technicalSkills: string[] = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "SCSS",
    "Git"
  ];

  return (
    <div id="skills" className="skills">
      <Title title={"Skills"} parentComponent="skills" />
      <div className="skills__set-box">
        <Skill title="My skills" skills={technicalSkills} />
      </div>
    </div>
  );
};

export default Skills;
