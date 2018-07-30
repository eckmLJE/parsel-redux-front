import React, { Component } from "react";
import { Container, Grid, Segment, Sticky } from "semantic-ui-react";
import { setCurrentStatement } from "../actions/statement";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/user";
import { clearHighlightPositions } from "../actions/highlight";

import StatementViewContent from "../components/StatementViewContent";
import AnnotationsViewList from "../components/AnnotationsViewList";
import StatementViewRail from "../components/StatementViewRail";

class StatementView extends Component {
  state = {};

  handleContextRef = contextRef => this.setState({ contextRef });

  componentDidMount = () => {
    this.props.setStatement(this.props.match.params.id);
    this.props.fetchUsers();
  };

  render() {
    const { contextRef } = this.state;
    return (
      <Container style={{ margin: "auto", marginTop: 30 }}>
        {this.props.currentStatement && !this.props.statementLoadingStatus ? (
          <Grid centered columns={3}>
            <Grid.Column width={8}>
              <Segment raised>
                {this.props.currentHighlightPositions.length > 0
                  ? this.props.currentHighlightPositions.map(highlight => (
                      <StatementViewRail
                        key={highlight.id}
                        yPos={highlight.position - 70}
                        id={highlight.id}
                        index={this.props.currentHighlightPositions.indexOf(
                          highlight
                        )}
                        statementId={this.props.match.params.id}
                      />
                    ))
                  : null}
                <Container
                  text
                  style={{
                    fontSize: "1.3em",
                    width: "500px",
                    textAlign: "justify",
                    lineHeight: "1.5em"
                  }}
                >
                  <StatementViewContent />
                </Container>
              </Segment>
            </Grid.Column>
            <Grid.Column width={2} />
            <Grid.Column width={6}>
              <div ref={contextRef}>
                <Sticky context={contextRef}>
                  <AnnotationsViewList />
                </Sticky>
              </div>
            </Grid.Column>
          </Grid>
        ) : null}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentStatement: state.statements.currentStatement,
  currentHighlightPositions: state.highlights.currentHighlightPositions,
  currentUsers: state.users.availableUsers,
  statementLoadingStatus: state.statements.statementLoadingStatus
});

const mapDispatchToProps = dispatch => ({
  setStatement: statementObj => dispatch(setCurrentStatement(statementObj)),
  fetchUsers: () => dispatch(fetchUsers()),
  clearHighlightPositions: () => dispatch(clearHighlightPositions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementView);
