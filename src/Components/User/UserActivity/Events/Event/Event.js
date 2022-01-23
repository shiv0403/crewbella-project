import React from "react";
import "./Event.css";

function Event({ event }) {
  return (
    <div className={"event"}>
      <img
        src={event.thumbnail}
        alt={"event-thumbnail"}
        className={"event-img"}
      />
      <div className="event-details">
        <p>
          <span style={{ fontWeight: "bold", color: "gray" }}>Theme</span> :{" "}
          <span style={{ fontWeight: "bold" }}>{event.theme}</span>
        </p>
        <p>
          <span style={{ fontWeight: "bold", color: "gray" }}>Unique ID</span> :{" "}
          <span style={{ fontWeight: "bold" }}>{event.sku}</span>
        </p>
      </div>
    </div>
  );
}

export default Event;
