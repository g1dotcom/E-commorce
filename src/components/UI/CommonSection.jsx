import React from "react";
import "../../style/commonstyle.css";

const CommonSection = ({ title }) => {
  return (
    <div className="common_section ">
      <h1 className="common_h1">{title}</h1>
    </div>
  );
};

export default CommonSection;
