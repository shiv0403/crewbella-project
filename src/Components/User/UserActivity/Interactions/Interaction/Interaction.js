import React, { useState } from "react";
import "./Interaction.css";
import { format } from "timeago.js";

function Interaction({ user, interaction }) {
  const [active, setActive] = useState(false);

  return (
    <div className={"interaction"}>
      <div className="interaction-header">
        <h3 style={{ fontWeight: "10000", color: "red" }}>
          <i>QUESTION</i>
        </h3>
        <p>{format(interaction.created_at)}</p>
      </div>
      <div className={"interaction-question"}>
        <h3>{interaction.title}</h3>
      </div>

      {active && (
        <div className="interaction-content">
          <img src={user.basic.image_hd} className={"interaction-userImg"} />
          <div className="interaction-answer">
            <p className={"interaction-username"}>{user.basic.fullname}</p>
            <p className={"interaction-answer"}>
              {interaction.answer.description}
            </p>
            <p className={"interaction-createdAt"}>
              {format(interaction.answer.created_at)}
            </p>
          </div>
        </div>
      )}
      <div
        className={"interaction-opener"}
        onClick={() => setActive((prev) => !prev)}
      >
        {active ? (
          <i className="fas fa-chevron-up" style={{ width: "20px" }}></i>
        ) : (
          <i className="fas fa-chevron-down" style={{ width: "20px" }}></i>
        )}
      </div>
    </div>
  );
}

export default Interaction;
