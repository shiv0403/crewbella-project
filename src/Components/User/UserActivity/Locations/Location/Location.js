import React from "react";
import "./Location.css";

function Location({ location }) {
  return (
    <div className={"location"}>
      <img
        src={
          "https://www.familytimemalta.com/wp-content/uploads/2018/11/place-icon.png"
        }
        alt={"location"}
        className={"location-img"}
      />
      <p className={"location-heading"}>
        Now available for work in{" "}
        <span style={{ fontWeight: "bold" }}>
          {location.city}, {location.zip_code}, {location.state},{" "}
          {location.country}
        </span>
      </p>
    </div>
  );
}

export default Location;
