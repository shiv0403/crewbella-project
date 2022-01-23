import React from "react";
import "./Locations.css";
import Location from "./Location/Location";

function Locations({ userLocations }) {
  return (
    <div className={"locations"}>
      {userLocations.map((location) => {
        return <Location location={location} />;
      })}
    </div>
  );
}

export default Locations;
