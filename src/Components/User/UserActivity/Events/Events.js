import React from "react";
import "./Events.css";
import Event from "./Event/Event";

function Events({ userEvents }) {
  return (
    <div className={"events"}>
      {userEvents.map((event) => {
        return <Event event={event} />;
      })}
    </div>
  );
}

export default Events;
