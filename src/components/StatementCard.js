import React from "react";
import { connect } from "react-redux";
import { setCurrentStatement } from "../actions/statement";
import { Item } from "semantic-ui-react";

const StatementCard = props => (
  <Item onClick={() => props.setStatement(props.statement)}>
    <Item.Content>
      <Item.Header as="a">{props.statement.attributes.title}</Item.Header>
      <Item.Meta>
        {props.politician ? (
          <div>{props.politician.attributes.name}</div>
        ) : null}
      </Item.Meta>
      <Item.Description />
      <Item.Extra>
        {props.politician ? (
          <div>{props.politician.attributes.party}</div>
        ) : null}
      </Item.Extra>
    </Item.Content>
  </Item>
);

const mapDispatchToProps = dispatch => ({
  setStatement: statementObj => dispatch(setCurrentStatement(statementObj))
});

export default connect(
  null,
  mapDispatchToProps
)(StatementCard);
