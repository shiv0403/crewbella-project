import React from "react";
import "./Home.css";
import InputBox from "./InputBox/InputBox";

function Home(props) {
  return (
    <div className={"home"}>
      <h1>Enter Crewbella Username</h1>
      <InputBox />
    </div>
  );
}

export default Home;
