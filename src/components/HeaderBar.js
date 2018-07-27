import React from "react";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  return (
    <div className="header-bar">
      <div className="logo">PARSEL</div>
      <ul className="nav-bar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/statement">Statement</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderBar;
