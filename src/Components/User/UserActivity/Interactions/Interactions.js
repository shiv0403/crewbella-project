import React from "react";
import "./Interactions.css";
import Interaction from "./Interaction/Interaction";

function Interactions({ user }) {
  return (
    <div className={"interactions"}>
      {user.questions.map((interaction) => {
        return <Interaction user={user} interaction={interaction} />;
      })}
    </div>
  );
}

export default Interactions;
