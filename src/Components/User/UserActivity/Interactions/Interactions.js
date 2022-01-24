import React from "react";
import "./Interactions.css";
import Interaction from "./Interaction/Interaction";

function Interactions({ user }) {
  return (
    <div className={"interactions"}>
      {user.questions.length > 0 ? (
        user.questions.map((interaction) => {
          return <Interaction user={user} interaction={interaction} />;
        })
      ) : (
        <div className={"interactions-no"}>
          <h3>No Interactions</h3>
        </div>
      )}
    </div>
  );
}

export default Interactions;
