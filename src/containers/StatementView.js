import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import { setCurrentStatement } from "../actions/statement";
import { connect } from "react-redux";

import StatementViewCard from "../components/StatementViewCard";
import AnnotationsViewList from "../components/AnnotationsViewList";

class StatementView extends Component {
  componentDidMount = () => {
    console.log("statement view mounted");
    console.log(this.props.availableStatements);
    const statement = this.props.availableStatements.find(
      statement => statement.id === this.props.match.params.id
    );
    console.log(statement);
    this.props.setStatement(statement);
  };

  render() {
    return (
      <Container style={{ maxWidth: 700, margin: "auto", marginTop: 50 }}>
        {this.props.currentStatement ? (
          <Grid divided stackable>
            <Grid.Row>
              <Grid.Column width={10}>
                <StatementViewCard />
              </Grid.Column>
              <Grid.Column width={6}>
                <AnnotationsViewList />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ) : null}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  availableStatements: state.statements.availableStatements,
  currentStatement: state.statements.currentStatement
});

const mapDispatchToProps = dispatch => ({
  setStatement: statementObj => dispatch(setCurrentStatement(statementObj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementView);
