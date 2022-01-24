import React from "react";
import "./Portfolio.css";
import Work from "./Work/Work";

function Portfolio({ userPortfolio }) {
  return (
    <div className={"portfolio"}>
      {userPortfolio.length > 0 ? (
        userPortfolio.map((work) => {
          return <Work work={work} />;
        })
      ) : (
        <div className={"portfolio-no"}>
          <h3>No Portfolio</h3>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
