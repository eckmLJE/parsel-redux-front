import React, { Component } from "react";
import { Container, Grid, Segment, Label, Rail } from "semantic-ui-react";
import { setCurrentStatement } from "../actions/statement";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/user";

import StatementViewContent from "../components/StatementViewContent";
import AnnotationsViewList from "../components/AnnotationsViewList";

class StatementView extends Component {
  componentDidMount = () => {
    this.props.setStatement(this.props.match.params.id);
    this.props.fetchUsers();
  };

  render() {
    return (
      <Container style={{ maxWidth: 700, margin: "auto" }}>
        {this.props.currentStatement && this.props.currentComments ? (
          <Grid centered stackable columns={2}>
            <Grid.Column width={8}>
              <Segment raised>
                <Rail position="left">
                  <Label
                    color="teal"
                    ribbon
                    size="small"
                    style={{ cursor: "default", top: 25, right: 0 }}
                    image
                  >
                    <img alt="" src={require(`../assets/avatars/man-1.svg`)} />
                    <Label.Detail>John</Label.Detail>
                  </Label>
                </Rail>
                <Rail position="left">
                  <Label
                    color="teal"
                    ribbon
                    size="small"
                    style={{ cursor: "default", top: 100, right: 0 }}
                    image
                  >
                    <img alt="" src={require(`../assets/avatars/man-1.svg`)} />
                    <Label.Detail>John</Label.Detail>
                  </Label>
                </Rail>
                <Rail position="left">
                  <Label
                    color="teal"
                    ribbon
                    size="small"
                    style={{ cursor: "default", top: 200, right: 0 }}
                    image
                  >
                    <img alt="" src={require(`../assets/avatars/man-1.svg`)} />
                    <Label.Detail>John</Label.Detail>
                  </Label>
                </Rail>
                <Container
                  text
                  style={{
                    width: "90%",
                    paddingRight: 60,
                    textAlign: "justify"
                  }}
                >
                  <StatementViewContent />
                </Container>
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <AnnotationsViewList />
            </Grid.Column>
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
