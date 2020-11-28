import React from "react";

import SkillElement from "./SkillElement";
import elements from "./elements";
import "./Skills.scss";

export default function MySkills() {
  return (
    <div className="skills-container">
      {elements.map((el, index) => (
        <SkillElement key={index} svg={el.svg} level={el.level} />
      ))}
    </div>
  );
}
