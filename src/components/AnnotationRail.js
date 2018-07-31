import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTags } from "../actions/tag";
import { fetchAnnotations } from "../actions/annotation";

import AnnotationRailCard from "./AnnotationRailCard";

class AnnotationRail extends Component {
  componentDidMount = () => {
    this.props.fetchAnnotations();
  };

  getCurrentAnnotations = () => {
    let currentAnnotations = this.props.currentStatement.attributes.annotations;
    return currentAnnotations.sort((a, b) => a.start > b.start);
  };

  render() {
    return (
      <div className="statement-rail">
        {this.props.currentHighlightPositions.length &&
        this.props.availableUsers ? (
          <div>
            {this.getCurrentAnnotations().map(annotation => (
              <AnnotationRailCard key={annotation.id} annotation={annotation} />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availableAnnotations: state.annotations.availableAnnotations,
  currentStatement: state.statements.currentStatement,
  statementLoadingStatus: state.statements.statementLoadingStatus,
  currentHighlightPositions: state.highlights.currentHighlightPositions,
  availableUsers: state.users.availableUsers
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags()),
  fetchAnnotations: () => dispatch(fetchAnnotations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationRail);

// {/* {this.props.currentHighlightPositions.map(highlight => (
//               <StatementViewRail
//                 key={highlight.id}
//                 yPos={highlight.position}
//                 id={highlight.id}
//                 index={this.props.currentHighlightPositions.indexOf(highlight)}
//                 statementId={this.props.match.params.id}
//               />
//             ))} */}
