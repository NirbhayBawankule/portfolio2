import React from "react";
import { Icon } from "@iconify/react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {skillsSection.softwareSkills.map((skills, i) => {
          return (
            <li
              key={i}
              className="software-skill-inline"
              name={skills.skillName}
            >
              {"iconifyTag" in skills ? (
                <Icon icon={skills.iconifyTag} width="48" height="48" />
              ) : (
                <i className={skills.fontAwesomeClassname}></i>
              )}
              <p>{skills.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
