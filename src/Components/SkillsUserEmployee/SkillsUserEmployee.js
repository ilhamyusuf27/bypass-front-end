import axios from "axios";
import React from "react";
import { Badge } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";
import "./SkillsUserEmployee.css";
import Swal from "sweetalert2";

const userToken = localStorage.getItem("token");
const userProfile = JSON.parse(localStorage?.getItem("data"));

const SkillsUserEmployee = (props) => {
  const handleDeleteSkill = (id) => {
    console.log(id);
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    axios
      .delete(`${process.env.REACT_APP_URL_API}/skill/delete?id=${id}`, config)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Succseed",
          text: "Skill Deleted",
        }).then((result) => {
          window.location.reload();
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "success",
          title: "Succseed",
          text: err?.response?.data,
        });
      });
  };

  return (
    <>
      <div>
        {props?.dataSkills?.map((item) => {
          return (
            <span className="skills-badge-home">
              <Badge bg="warning">
                {item.skill}{" "}
                {userProfile?.role === "recruiter" ? null : (
                  <TiDeleteOutline
                    size={15}
                    className="delete-icon-skills"
                    onClick={() => handleDeleteSkill(item.id)}
                  />
                )}
              </Badge>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default SkillsUserEmployee;
