import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentStatement, fetchStatements } from "../actions/statement";
import { Item, Container } from "semantic-ui-react";

import StatementCard from "./StatementCard";

class StatementsHomeList extends Component {
  componentDidMount = () => {
    this.props.fetchStatements();
  };

  findPolitician = statement => {
    return this.props.availablePoliticians.find(
      politician =>
        politician.id === statement.attributes["politician-id"].toString()
    );
  };

  render() {
    return (
      <Container style={{ height: "80vh", overflowY: "scroll" }}>
        <Item.Group divided>
          {this.props.statementLoadingStatus ? (
            <div>Loading Statements...</div>
          ) : null}
          {this.props.availableStatements.length > 0
            ? this.props.availableStatements.map(statement => (
                <StatementCard
                  key={statement.id}
                  statement={statement}
                  politician={this.findPolitician(statement)}
                />
              ))
            : null}
        </Item.Group>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  availableStatements: state.statements.availableStatements,
  availablePoliticians: state.politicians.availablePoliticians,
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
