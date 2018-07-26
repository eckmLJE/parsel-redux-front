import React from "react";
import { Item } from "semantic-ui-react";

const AnnotationHomeCard = props => {
  return (
    <Item>
      <Item.Content verticalAlign="middle">
        {props.annotation.content}
      </Item.Content>
    </Item>
  );
};

export default AnnotationHomeCard;
