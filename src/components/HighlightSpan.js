import React, { Component } from "react";
import {
  setHoverHighlight,
  addHighlightPosition,
  removeHighlightPosition
} from "../actions/highlight";
import { connect } from "react-redux";
import semColors from "../interpreter/semColors";

class HighlightSpan extends Component {
  logHighlightPos = node => {
    if (node === null) {
      this.props.removeHighlightPosition(this.props.id);
    } else {
      this.props.addHighlightPosition(
        node.getBoundingClientRect().y,
        this.props.id
      );
    }
  };

  render() {
    return (
      <span
        ref={this.logHighlightPos}
        style={{
          borderBottom: `solid 5px ${semColors[this.props.index]}`
        }}
        name={this.props.name}
        key={this.props.id}
      >
        {this.props.content}
      </span>
    );
  }
}

const mapStateToProps = state => ({
  currentHighlight: state.highlights.currentHighlight
});

const mapDispatchToProps = dispatch => ({
  setHoverHighlight: name => dispatch(setHoverHighlight(name)),
  addHighlightPosition: (position, annotationId) =>
    dispatch(addHighlightPosition(position, annotationId)),
  removeHighlightPosition: annotationId =>
    dispatch(removeHighlightPosition(annotationId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HighlightSpan);
