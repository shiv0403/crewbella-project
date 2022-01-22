import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      <h1>This is crewbella</h1>
      {error && <h1>{error}</h1>}
      {user && <h1>{user?.basic.fullname}</h1>}
    </div>
  );
}

export default User;
