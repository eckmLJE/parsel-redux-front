import React from "react";

const AnnotationHomeCard = props => {
  return (
    <div className="annotation-home-card" >{props.annotation.attributes.content}</div>
  );
};

export default AnnotationHomeCard;
