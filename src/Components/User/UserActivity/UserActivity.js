import React, { useState } from "react";
import "./UserActivity.css";
import Postings from "./Postings/Postings";
import Locations from "./Locations/Locations";
import Portfolio from "./Portfolio/Portfolio";
import Professions from "./Professions/Professions";
import Interactions from "./Interactions/Interactions";
import Events from "./Events/Events";

let activities = [
  "postings",
  "events",
  "locations",
  "portfolio",
  "professions",
  "interactions",
];

function UserActivity({ user }) {
  const [postings, setPostings] = useState(false);
  const [events, setEvents] = useState(false);
  const [locations, setLocations] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [professions, setProfessions] = useState(false);
  const [interactions, setInteractions] = useState(false);

  const handleActivity = (e) => {
    for (let i = 0; i < activities.length; ++i) {
      if (activities[i] === "postings") {
        setPostings(false);
      } else if (activities[i] === "events") {
        setEvents(false);
      } else if (activities[i] === "locations") {
        setLocations(false);
      } else if (activities[i] === "portfolio") {
        setPortfolio(false);
      } else if (activities[i] === "professions") {
        setProfessions(false);
      } else if (activities[i] === "interactions") {
        setInteractions(false);
      }
    }

    for (let i = 0; i < activities.length; ++i) {
      if (activities[i] === e.target.innerHTML.toLowerCase()) {
        if (activities[i] === "postings") {
          setPostings(true);
          break;
        } else if (activities[i] === "events") {
          setEvents(true);
          break;
        } else if (activities[i] === "locations") {
          setLocations(true);
          break;
        } else if (activities[i] === "portfolio") {
          setPortfolio(true);
          break;
        } else if (activities[i] === "professions") {
          setProfessions(true);
          break;
        } else if (activities[i] === "interactions") {
          setInteractions(true);
          break;
        }
      }
    }
  };

  return (
    <div className={"userActivity"}>
      <ul className={"userActivity-header"}>
        <li onClick={handleActivity}>Postings</li>
        <li onClick={handleActivity}>Events</li>
        <li onClick={handleActivity}>Locations</li>
        <li onClick={handleActivity}>Portfolio</li>
        <li onClick={handleActivity}>Professions</li>
        <li onClick={handleActivity}>Interactions</li>
      </ul>

      {postings && <Postings userPostings={user.client_postings} />}
      {events && <Events />}
      {locations && <Locations />}
      {portfolio && <Portfolio />}
      {professions && <Professions />}
      {interactions && <Interactions />}
    </div>
  );
}

export default UserActivity;
