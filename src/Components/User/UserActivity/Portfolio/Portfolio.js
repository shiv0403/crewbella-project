import React from "react";
import "./Portfolio.css";
import Work from "./Work/Work";

function Portfolio({ userPortfolio }) {
  return (
    <div className={"portfolio"}>
      {userPortfolio.map((work) => {
        return <Work work={work} />;
      })}
    </div>
  );
}

export default Portfolio;
