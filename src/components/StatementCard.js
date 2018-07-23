import React from "react";

const StatementCard = props => {
  return (
      <div>{props.statement.attributes.title}</div>
  );
};

export default StatementCard;
