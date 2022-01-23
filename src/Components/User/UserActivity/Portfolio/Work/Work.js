import React from "react";
import "./Work.css";
import { format } from "timeago.js";

function Work({ work }) {
  const handleOpen = () => {
    const opener = document.querySelectorAll(".work-opener");
    const cont = document.querySelectorAll(".work-content");
    const arrow = document.querySelectorAll(".work-opener i");

    function dropdown(open, content, icon) {
      for (let i = 0; i < open.length; i++) {
        open[i].addEventListener("click", function () {
          content[i].classList.toggle("work-content-active");
          icon[i].classList.toggle("rotate");
          for (let j = 0; j < open.length; j++) {
            if (i !== j) {
              content[j].classList.remove("work-content-active");
              icon[j].classList.remove("rotate");
            }
          }
        });
      }
    }

    dropdown(opener, cont, arrow);
  };

  return (
    <div className={"work"}>
      <img
        src={work.images[0].image}
        alt={"work-image"}
        className={"work-img"}
      />
      <div className="work-title">
        <p>
          <span style={{ fontWeight: "bold" }}>{work.position}</span> at{" "}
          <span style={{ fontWeight: "bold" }}>{work.project_name}</span>
        </p>
        <div className="work-opener" onClick={handleOpen}>
          <i className="fas fa-chevron-down" style={{ width: "20px" }}></i>
        </div>
      </div>
      <div className="work-about work-content">
        <div className="work-dates">
          <div className="work-started">
            <p
              style={{
                color: "gray",
                fontSize: "13px",
                letterSpacing: "1.5px",
                marginBottom: "2px",
              }}
            >
              Started
            </p>
            <p
              style={{
                letterSpacing: "1px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              {work.started_time}
            </p>
          </div>
          <div className="work-ended">
            <p
              style={{
                color: "gray",
                fontSize: "13px",
                letterSpacing: "1.5px",
                marginBottom: "2px",
              }}
            >
              Ended
            </p>
            <p
              style={{
                letterSpacing: "1px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              {work.ended_time}
            </p>
          </div>
        </div>
        <div className="work-desc">
          <p className={"work-description"}>{work.description}</p>
          <p className={"work-createdAt"}>{format(work.created_at)}</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
