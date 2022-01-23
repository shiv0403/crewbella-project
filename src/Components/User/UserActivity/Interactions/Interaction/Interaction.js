import React from "react";
import "./Interaction.css";
import { format } from "timeago.js";

function Interaction({ user, interaction }) {
  const handleOpen = () => {
    const opener = document.querySelectorAll(".interaction-opener");
    const cont = document.querySelectorAll(".interaction-content");
    const arrow = document.querySelectorAll(".interaction-opener i");

    function dropdown(open, content, icon) {
      for (let i = 0; i < open.length; i++) {
        open[i].addEventListener("click", function () {
          content[i].classList.toggle("interaction-content-active");
          icon[i].classList.toggle("rotate");
          for (let j = 0; j < open.length; j++) {
            if (i !== j) {
              content[j].classList.remove("interaction-content-active");
              icon[j].classList.remove("rotate");
            }
          }
        });
      }
    }

    dropdown(opener, cont, arrow);
  };

  return (
    <div className={"interaction"}>
      <div className="interaction-header">
        <h3 style={{ fontWeight: "bold", color: "red" }}>
          <i>QUESTION</i>
        </h3>
        <p>{format(interaction.created_at)}</p>
      </div>
      <div className={"interaction-question"}>
        <h3>{interaction.title}</h3>
      </div>

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
      <div className={"interaction-opener"} onClick={handleOpen}>
        <i className="fas fa-chevron-down" style={{ width: "20px" }}></i>
      </div>
    </div>
  );
}

export default Interaction;
