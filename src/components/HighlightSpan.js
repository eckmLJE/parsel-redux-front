import React from "react";

let key = 0;

const HighlightSpan = props => {
  return (
    <span
      className={props.highlightClass}
      name={props.name}
      key={++key}
    >
      {props.content}
    </span>
  );
};

export default HighlightSpan;
