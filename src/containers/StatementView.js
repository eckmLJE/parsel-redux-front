import React, { Component } from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import { setCurrentStatement } from "../actions/statement";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/user";
import { clearHighlightPositions } from "../actions/highlight";

import StatementViewContent from "../components/StatementViewContent";
import AnnotationsViewList from "../components/AnnotationsViewList";
import StatementViewRail from "../components/StatementViewRail";

class StatementView extends Component {
  componentDidMount = () => {
    this.props.setStatement(this.props.match.params.id);
    this.props.fetchUsers();
  };

  render() {
    return (
      <Container style={{ margin: "auto", marginTop: 30 }}>
        {this.props.currentStatement ? (
          <Grid centered columns={3}>
            <Grid.Column width={9}>
              <Segment raised>
                {/* <Rail position="right" style={{ padding: 0, margin: 0 }}>
                  <Label
                    color="teal"
                    size="small"
                    style={{ cursor: "default", top: 100 }}
                    image
                  >
                    <img alt="" src={require(`../assets/avatars/man-1.svg`)} />
                    <Label.Detail>Fezzik</Label.Detail>
                  </Label>
                </Rail> */}
                {this.props.currentHighlightPositions.length > 0
                  ? this.props.currentHighlightPositions.map(highlight => (
                      <StatementViewRail
                        key={highlight.id}
                        yPos={highlight.position - 70}
                        id={highlight.id}
                        index={this.props.currentHighlightPositions.indexOf(
                          highlight
                        )}
                      />
                    ))
                  : null}
                <Container
                  text
                  style={{
                    fontSize: "1.3em",
                    width: "90%",
                    textAlign: "justify",
                    lineHeight: "1.5em"
                  }}
                >
                  <StatementViewContent />
                </Container>
              </Segment>
            </Grid.Column>
            <Grid.Column width={1} />
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
  currentStatement: state.statements.currentStatement,
  currentHighlightPositions: state.highlights.currentHighlightPositions
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
