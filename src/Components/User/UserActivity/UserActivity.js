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
  const [postings, setPostings] = useState(true);
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
      <div className="sidebar">
        <ul className={"userActivity-header"}>
          <li
            onClick={handleActivity}
            className={postings && "active-activity"}
          >
            Postings
          </li>
          <li onClick={handleActivity} className={events && "active-activity"}>
            Events
          </li>
          <li
            onClick={handleActivity}
            className={locations && "active-activity"}
          >
            Locations
          </li>
          <li
            onClick={handleActivity}
            className={portfolio && "active-activity"}
          >
            Portfolio
          </li>
          <li
            onClick={handleActivity}
            className={professions && "active-activity"}
          >
            Professions
          </li>
          <li
            onClick={handleActivity}
            className={interactions && "active-activity"}
          >
            Interactions
          </li>
        </ul>
      </div>
      <div className="activities">
        {postings && <Postings userPostings={user?.client_postings} />}
        {events && <Events userEvents={user?.events} />}
        {locations && <Locations userLocations={user?.locations} />}
        {portfolio && <Portfolio userPortfolio={user?.portfolio} />}
        {professions && <Professions userProfessions={user?.professions} />}
        {interactions && <Interactions user={user} />}
      </div>
    </div>
  );
}

export default UserActivity;
