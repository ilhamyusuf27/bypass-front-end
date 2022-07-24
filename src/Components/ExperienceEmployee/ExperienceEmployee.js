import React from "react";
import moment from "moment";
import "./ExperienceEmployee.css";
import logoCompany from "../../Assets/Images/company.png";

const ExperienceEmployee = (props) => {
  console.log("props", props);

  const renderExperience = () => {
    let jsx = props?.data?.map((item) => {
      return (
        <>
          <div className="row">
            <div className="col-2">
              <img
                src={logoCompany}
                alt=""
                className="img-experience-portofolio"
              />
            </div>
            <div className="col-9">
              <h2>{item.job_title}</h2>
              <h5 className="text-muted">{item.company_name}</h5>
              <p className="text-muted">
                {moment(item.start_date).format("MMM YYYY")} -{" "}
                {moment(item.end_date).format("MMM YYYY")}
                <span className="months-span">
                  {moment(item.end_date).diff(
                    moment(item.start_date),
                    "months"
                  )}
                </span>
                Months
              </p>
              <p>{item.description}</p>
            </div>
          </div>
          <hr className="hr-experience" />
        </>
      );
    });
    return jsx;
  };

  return (
    <>
      <div>{renderExperience()}</div>
    </>
  );
};

export default ExperienceEmployee;
