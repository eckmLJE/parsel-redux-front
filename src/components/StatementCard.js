import React from "react";
import { connect } from "react-redux";
import { setCurrentStatement } from "../actions/statement";

const StatementCard = props => {
  return (
    <div
      className="home-card statement-home-card"
      onClick={() => props.setStatement(props.statement)}
    >
      Title: {props.statement.attributes.title}
      {props.politician ? (
        <div>
          <div>Politician: {props.politician.attributes.name}</div>
          <div>Party: {props.politician.attributes.party}</div>
        </div>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setStatement: statementObj => dispatch(setCurrentStatement(statementObj))
});

export default connect(
  null,
  mapDispatchToProps
)(StatementCard);
