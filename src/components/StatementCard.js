import React from "react";

const StatementCard = props => {
  return (
      <div className="statement-home-card" >{props.statement.attributes.title}</div>
  );
};

export default StatementCard;
