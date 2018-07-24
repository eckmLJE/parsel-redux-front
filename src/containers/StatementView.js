import React from "react";

import StatementViewCard from "../components/StatementViewCard";
import AnnotationsViewList from "../components/AnnotationsViewList";

const StatementView = () => {
  return (
    <div className="home-grid-container">
      <StatementViewCard />
      <div />
      <AnnotationsViewList />
    </div>
  );
};

export default StatementView;
