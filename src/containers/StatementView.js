import React, { Component } from "react";
import { setCurrentStatement } from "../actions/statement";
import { connect } from "react-redux";

import { fetchUsers } from "../actions/user";
import {
  clearHighlightPositions,
  setBoundingRectY
} from "../actions/highlight";

import StatementViewContent from "../components/StatementViewContent";
import AnnotationRail from "../components/AnnotationRail";

class StatementView extends Component {
  state = {};

  componentDidMount = () => {
    this.props.setStatement(this.props.match.params.id);
    this.props.fetchUsers();
  };

  handleRef = node => {
    node ? this.props.setBoundingRectY(node.getBoundingClientRect().y) : 0;
  };

  render() {
    return (
      <div className="statement-view" ref={this.handleRef}>
        {this.props.currentStatement ? <StatementViewContent /> : null}
        {this.props.currentHighlightPositions.length ? (
          <AnnotationRail />
        ) : null}
      </div>
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
  clearHighlightPositions: () => dispatch(clearHighlightPositions()),
  setBoundingRectY: y => dispatch(setBoundingRectY(y))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementView);
