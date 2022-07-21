import React from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <>
      <div style={{ height: "50vh" }}>
        <div className="vertical-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: "auto" }}
            width="150"
            height="150"
            display="block"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 100 100"
          >
            <g transform="translate(26.667 26.667)">
              <path fill="#5e4fa1" d="M-20 -20H20V20H-20z">
                <animateTransform
                  attributeName="transform"
                  begin="-0.3s"
                  dur="1s"
                  keyTimes="0;1"
                  repeatCount="indefinite"
                  type="scale"
                  values="1.1500000000000001;1"
                ></animateTransform>
              </path>
            </g>
            <g transform="translate(73.333 26.667)">
              <path fill="#fbb018" d="M-20 -20H20V20H-20z">
                <animateTransform
                  attributeName="transform"
                  begin="-0.2s"
                  dur="1s"
                  keyTimes="0;1"
                  repeatCount="indefinite"
                  type="scale"
                  values="1.1500000000000001;1"
                ></animateTransform>
              </path>
            </g>
            <g transform="translate(26.667 73.333)">
              <path fill="#fbb018" d="M-20 -20H20V20H-20z">
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="1s"
                  keyTimes="0;1"
                  repeatCount="indefinite"
                  type="scale"
                  values="1.1500000000000001;1"
                ></animateTransform>
              </path>
            </g>
            <g transform="translate(73.333 73.333)">
              <path fill="#5e4fa1" d="M-20 -20H20V20H-20z">
                <animateTransform
                  attributeName="transform"
                  begin="-0.1s"
                  dur="1s"
                  keyTimes="0;1"
                  repeatCount="indefinite"
                  type="scale"
                  values="1.1500000000000001;1"
                ></animateTransform>
              </path>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
