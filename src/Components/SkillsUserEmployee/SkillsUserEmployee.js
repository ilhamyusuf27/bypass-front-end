import React from "react";
import { Badge } from "react-bootstrap";

const SkillsUserEmployee = (props) => {
  return (
    <>
      <div>
        {props?.dataSkills?.map((item) => {
          return (
            <span className="skills-badge-home">
              <Badge bg="warning">{item.skill}</Badge>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default SkillsUserEmployee;
