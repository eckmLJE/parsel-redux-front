import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentStatement, fetchStatements } from "../actions/statement";

import StatementCard from "./StatementCard";

class StatementsHomeList extends Component {
  componentDidMount = () => {
    this.props.fetchStatements();
  };

  render() {
    return (
      <div className="statement-home-list" >
        <h2>Statements</h2>
        {this.props.statementLoadingStatus ? (
          <div>Loading Statements...</div>
        ) : null}
        {this.props.availableStatements.length > 0
          ? this.props.availableStatements.map(statement => (
              <StatementCard key={statement.id} statement={statement} />
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availableStatements: state.statements.availableStatements,
  loadingStatus: state.statements.statementLoadingStatus
});

const mapDispatchToProps = dispatch => ({
  setStatement: statementObj => dispatch(setCurrentStatement(statementObj)),
  fetchStatements: () => dispatch(fetchStatements())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementsHomeList);
