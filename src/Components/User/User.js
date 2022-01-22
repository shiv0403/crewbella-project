import React, { useEffect, useState } from "react";
import "./User.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserBio from "./UserBio/UserBio";
import UserActivity from "./UserActivity/UserActivity";

function User(props) {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const { username } = useParams();

  useEffect(() => {
    async function getUser() {
      await axios
        .get(`https://py.crewbella.com/user/api/profile/${username}`)
        .then((res) => {
          setUser(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          if (err.message === "Network Error") {
            setError("User not found!");
          }
        });
    }
    getUser();
  }, [username]);

  return (
    <div className={"user"}>
      {error && <h1>{error}</h1>}
      {user && (
        <div className={"user-main"}>
          {/*user bio*/}
          <UserBio user={user} />
          {/*user activity*/}
          <UserActivity user={user} />
        </div>
      )}
    </div>
  );
}

export default User;
