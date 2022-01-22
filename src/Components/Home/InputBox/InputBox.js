import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./InputBox.css";

function InputBox(props) {
  const [userName, setUserName] = useState("");
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      await axios
        .get(`https://py.crewbella.com/user/api/profile/${userName}`)
        .then((res) => {
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="inputBox">
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
  );
}

export default InputBox;
