import React from "react";
import "./Events.css";
import Event from "./Event/Event";

function Events({ userEvents }) {
  return (
    <div className={"events"}>
      {userEvents.length > 0 ? (
        userEvents.map((event) => {
          return <Event event={event} />;
        })
      ) : (
        <div className={"events-no"}>
          <h3>No Events</h3>
        </div>
      )}
    </div>
  );
}

export default Events;
