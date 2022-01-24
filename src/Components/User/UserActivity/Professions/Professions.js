import React from "react";
import "./Professions.css";
import Profession from "./Profession/Profession";

function Professions({ userProfessions }) {
  return (
    <div className={"professions"}>
      {userProfessions.length > 0 ? (
        userProfessions.map((profession) => {
          return <Profession profession={profession} />;
        })
      ) : (
        <div className={"profession-no"}>
          <h3>No Professions</h3>
        </div>
      )}
    </div>
  );
}

export default Professions;
