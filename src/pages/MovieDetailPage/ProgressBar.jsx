import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-15 h-15">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: "butt",
          textSize: "30px",
          pathColor: `rgba(68, 255, 51, ${percentage / 100})`,
          trailColor: "#eee",
          textColor: "#D9D9D9"
        })}
      />
    </div>
  );
};

export default ProgressBar;