import React from "react";

const AnnotationHomeCard = props => {
  return (
    <div className="home-card annotation-home-card" >{props.annotation.content}</div>
  );
};

export default AnnotationHomeCard;
