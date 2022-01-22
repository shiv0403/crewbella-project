import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./InputBox.css";

function InputBox(props) {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (userName === "") {
      setError("Please Enter a Username");
      return;
    }

    await axios
      .get(`https://py.crewbella.com/user/api/profile/${userName}`)
      .then((res) => {
        setError("");
        navigate(`/user/${userName}`);
      })
      .catch((err) => {
        if (err.message === "Network Error") {
          setError("Username not registered");
        }
      });
  };

  return (
    <div className="inputBox">
      <div className="inputBox-main">
        <input
          type={"text"}
          placeholder={"Search"}
          className={"inputBox-input"}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className={"inputBox-btn"} onClick={handleSubmit}>
          GET INFO
        </button>
      </div>
      <div className="inputBox-error">
        {error && <p className={"inputBox-error"}>{error}</p>}
      </div>
    </div>
  );
}

export default InputBox;
