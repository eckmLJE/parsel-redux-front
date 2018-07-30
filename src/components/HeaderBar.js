import React from "react";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  return (
    <div className="header-bar">
      <div className="logo">
        <Link to="/">PARSEL</Link>
      </div>
    </div>
  );
};

export default HeaderBar;
