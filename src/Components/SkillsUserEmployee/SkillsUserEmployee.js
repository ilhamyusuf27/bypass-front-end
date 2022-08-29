import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";
import "./SkillsUserEmployee.css";
import Swal from "sweetalert2";
import CryptoJS from "crypto-js";

const userToken = localStorage.getItem("token");
const localData = localStorage.getItem("data");
const originalLocalData = localData
  ? JSON.parse(
      CryptoJS.AES.decrypt(
        localData,
        process.env.REACT_APP_SECRET_KEY
      ).toString(CryptoJS.enc.Utf8)
    )
  : null;

const userProfile = originalLocalData;

const SkillsUserEmployee = (props) => {
  const location = useLocation();

  const handleDeleteSkill = (id) => {
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

  console.log(userProfile);

  return (
    <>
      <div>
        {props?.dataSkills?.map((item) => {
          return (
            <span className="skills-badge-home">
              <Badge bg="warning">
                {item.skill}{" "}
                {userProfile?.role === "user" ? (
                  <TiDeleteOutline
                    size={15}
                    className="delete-icon-skills"
                    onClick={() => handleDeleteSkill(item.id)}
                  />
                ) : null}
              </Badge>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default SkillsUserEmployee;
