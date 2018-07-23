import React from "react";

const AnnotationHomeCard = props => {
  return (
    <div>{props.annotation.attributes.content}</div>
  );
};

export default AnnotationHomeCard;
