import React from "react";
import { Rail, Label } from "semantic-ui-react";

const StatementViewRail = props => {
  return (
    <Rail position="right" style={{ padding: 0, margin: 0 }}>
      <Label
        color="teal"
        size="small"
        style={{ cursor: "default", top: props.yPos }}
        image
      >
        <img alt="" src={require(`../assets/avatars/man-1.svg`)} />
        <Label.Detail>John</Label.Detail>
      </Label>
    </Rail>
  );
};

export default StatementViewRail;
