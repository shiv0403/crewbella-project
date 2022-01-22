import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import User from "./Components/User/User";
import { useState } from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route exact path={"/user/:username"} element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
