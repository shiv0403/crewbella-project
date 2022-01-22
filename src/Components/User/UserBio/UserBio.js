import React, { useState } from "react";
import "./UserBio.css";

function UserBio({ user }) {
  const [active, setActive] = useState(false);

  return (
    <div className={"userBio"}>
      <img src={user.basic.cover} className={"userBio-coverImg"} />
      <ul className={"userBio-socialMedia"}>
        {
          <li>
            <a href={user.basic.facebook} target={"_blank"}>
              <img src={"/facebook.svg"} className={"social-icons"} />
            </a>
          </li>
        }
        {
          <li>
            <a href={user.basic.instagram} target={"_blank"}>
              <img src={"/instagram.svg"} className={"social-icons"} />
            </a>
          </li>
        }
        {
          <li>
            <a href={user.basic.twitter} target={"_blank"}>
              <img src={"/twitter.svg"} className={"social-icons"} />
            </a>
          </li>
        }
        {
          <li>
            <a href={user.basic.linkedin} target={"_blank"}>
              <img src={"/linkedin.svg"} className={"social-icons"} />
            </a>
          </li>
        }
      </ul>
      <img src={user.basic.image_hd} className={"userBio-profileImg"} />
      <div className="userBio-details">
        <p className={"userBio-fullname"}>{user.basic.fullname}</p>
        <p className={"userBio-username"}>@{user.basic.username}</p>
        <p className={"userBio-bio"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
          eligendi?
        </p>
        <div className="userBio-followings">
          <p>
            <span style={{ color: "black", fontWeight: "bold" }}>
              {user.basic.followings}
            </span>{" "}
            followers .{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>
              {user.basic.quick_bookings}
            </span>{" "}
            quickbooks
          </p>
        </div>
        {active && (
          <div className="userBio-dates">
            <p style={{ marginTop: "5px" }}>
              <i
                className="fas fa-birthday-cake"
                style={{ marginRight: 7, color: "gray" }}
              ></i>
              <span style={{ fontSize: "13px" }}>
                Date of Birth : {user.basic.dob}
              </span>
            </p>
            <p style={{ marginTop: "5px" }}>
              <i
                className="fas fa-calendar"
                style={{ marginRight: 7, color: "gray" }}
              ></i>
              <span style={{ fontSize: "13px" }}>
                Joined at : {user.basic.created_at}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserBio;
