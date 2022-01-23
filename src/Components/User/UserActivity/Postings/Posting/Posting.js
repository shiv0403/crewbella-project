import React, { useEffect, useState } from "react";
import "./Posting.css";
import { format } from "timeago.js";

function Posting({ posting }) {
  const [active, setActive] = useState(false);

  return (
    <div className={"posting"}>
      <div
        className={
          "posting-heading " +
          `${
            posting.is_active ? "posting-heading-open" : "posting-heading-close"
          }`
        }
      >
        {posting.is_active ? <h1>OPEN</h1> : <h1>CLOSED</h1>}
      </div>
      <div className="posting-details">
        <div className="posting-detail">
          <h3>Looking For</h3>
          <p>{posting.profession}</p>
        </div>
        <div className="posting-detail">
          <h3>Location</h3>
          <p>{posting.location}</p>
        </div>
        <div className="posting-detail">
          <h3>Experience</h3>
          <p>{posting.experience} Year(s)</p>
        </div>
        <div className="posting-detail">
          <h3>Openings</h3>
          <p>{posting.openings}</p>
        </div>
      </div>
      {active && (
        <div className={"posting-hidden"}>
          <div className="posting-description">{posting.description}</div>
          <div className="posting-further ">
            {posting.job_type && (
              <p className={"posting-furtherRow"}>
                <span className={"posting-further-heading"}>Job Type</span>
                <span className={"posting-further-text"}>
                  {posting.job_type}
                </span>
              </p>
            )}

            {posting.skills && (
              <p className={"posting-furtherRow"}>
                <span className={"posting-further-heading"}>Skills</span>
                <span className={"posting-further-text"}>{posting.skills}</span>
              </p>
            )}

            {posting.time_period && (
              <p className={"posting-furtherRow"}>
                <span className={"posting-further-heading"}>Time Period</span>
                <span className={"posting-further-text"}>
                  {posting.time_period}
                </span>
              </p>
            )}

            {posting.time_start && (
              <p className={"posting-furtherRow"}>
                <span className={"posting-further-heading"}>Time Start</span>
                <span className={"posting-further-text"}>
                  {posting.time_start}
                </span>
              </p>
            )}
          </div>
        </div>
      )}

      <div className="posting-footer">
        <div className="opener" onClick={() => setActive((prev) => !prev)}>
          {active ? (
            <i className={"fas fa-chevron-up"} style={{ width: "20px" }}></i>
          ) : (
            <i className={"fas fa-chevron-down"} style={{ width: "20px" }}></i>
          )}

          <p>{format(posting.created_at)}</p>
        </div>
      </div>
    </div>
  );
}

export default Posting;
