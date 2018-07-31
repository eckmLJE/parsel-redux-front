import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class AnnotationRailCard extends Component {
  getHighlightPos = () => {
    const highlight = this.props.currentHighlightPositions.find(
      highlight => highlight.id === this.props.annotation.id
    );
    return highlight.position - this.props.currentBoundingRectY;
  };

  render() {
    return (
      <Fragment>
        {this.props.currentHighlightPositions.includes(
          highlight => highlight.id === this.props.annotation.id
        ) ? (
          <div
            className="anno anno-label"
            style={{ top: `${this.getHighlightPos()}px` }}
          />
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentStatement: state.statements.currentStatement,
  availableAnnotations: state.annotations.availableAnnotations,
  currentHighlightPositions: state.highlights.currentHighlightPositions,
  currentBoundingRectY: state.highlights.currentBoundingRectY
});

export default connect(
  mapStateToProps,
  null
)(AnnotationRailCard);
