import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import { setCurrentStatement } from "../actions/statement";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/user";

import StatementViewCard from "../components/StatementViewCard";
import AnnotationsViewList from "../components/AnnotationsViewList";

class StatementView extends Component {
  componentDidMount = () => {
    this.props.setStatement(this.props.match.params.id);
    this.props.fetchUsers();
  };

  render() {
    return (
      <Container style={{ maxWidth: 700, margin: "auto", marginTop: 50 }}>
        {this.props.currentStatement && this.props.currentComments ? (
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={9}>
                <StatementViewCard />
              </Grid.Column>
              <Grid.Column width={7}>
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
  currentStatement: state.statements.currentStatement,
  currentComments: state.comments.currentComments
});

const mapDispatchToProps = dispatch => ({
  setStatement: statementObj => dispatch(setCurrentStatement(statementObj)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementView);
