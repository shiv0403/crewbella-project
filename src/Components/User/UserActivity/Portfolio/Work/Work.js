import React, { useState } from "react";
import "./Work.css";
import { format } from "timeago.js";

function Work({ work }) {
  const [active, setActive] = useState(false);

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
        <div className="work-opener" onClick={() => setActive((prev) => !prev)}>
          {active ? (
            <i className="fas fa-chevron-up" style={{ width: "20px" }}></i>
          ) : (
            <i className="fas fa-chevron-down" style={{ width: "20px" }}></i>
          )}
        </div>
      </div>
      {active && (
        <div className="work-about">
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
      )}
    </div>
  );
}

export default Work;
