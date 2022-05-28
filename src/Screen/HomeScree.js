import React from "react";
import { Link } from "react-router-dom";
import "../Css/HomeScreenCss.css";
function HomeScree() {
  return (
    <div className="container">
      <h1 className="homeHeading"> Home Screen</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          border: "1px solid #8eafe8",
          boxShadow: "2px 2px 2px 2px #8eafe8",
          borderRadius: "25px",
        }}
      >
        <h2 className="link">
          <Link to="/Dashboard">Dashboard</Link>
        </h2>
        <h2 className="link">
          <Link to="/Posts">Posts</Link>
        </h2>
        <h2 className="link">
          <Link to="/Links">Links</Link>
        </h2>
      </div>
    </div>
  );
}

export default HomeScree;
