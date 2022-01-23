import React from "react";
import "./Profession.css";
import { format } from "timeago.js";

function Profession({ profession }) {
  return (
    <div className={"profession"}>
      <div className="profession-header">
        {profession.for_quickbook ? <h3>QUICKBOOK</h3> : <h3>PROFESSION</h3>}
        <p style={{ color: "gray" }}>{format(profession.created_at)}</p>
      </div>
      <div className="profession-main">
        <img src={"/work.gif"} alt={"work"} className={"profession-img"} />
        {profession.for_quickbook ? (
          <div className={"profession-details"}>
            <p>
              <span style={{ color: "#3f3f3f", fontWeight: "bold" }}>
                Title
              </span>{" "}
              : <span>{profession.title}</span>
            </p>
            <p>
              <span style={{ color: "#3f3f3f", fontWeight: "bold" }}>Rate</span>{" "}
              : <span>{profession.quickbook_details.rate_currency}</span>{" "}
              <span>{profession.quickbook_details.rate_amount}</span> {" / "}
              <span>{profession.quickbook_details.rate_duration}</span>
            </p>
          </div>
        ) : (
          <div>
            <p className={"profession-profession"}>
              Working as a {profession.title} for {profession.experience}{" "}
              year(s)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profession;
