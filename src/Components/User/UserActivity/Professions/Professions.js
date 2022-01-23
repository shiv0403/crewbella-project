import React from "react";
import "./Professions.css";
import Profession from "./Profession/Profession";

function Professions({ userProfessions }) {
  return (
    <div className={"professions"}>
      {userProfessions.map((profession) => {
        return <Profession profession={profession} />;
      })}
    </div>
  );
}

export default Professions;
