import React, { Component } from "react";
import {
  setHoverHighlight,
  addHighlightPosition,
  removeHighlightPosition
} from "../actions/highlight";
import { connect } from "react-redux";

let key = 0;

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
        className={
          this.props.name.includes(this.props.currentHighlight) ||
          this.props.currentHighlight.includes(this.props.name)
            ? "highlight-alt"
            : "highlight"
        }
        name={this.props.name}
        key={++key}
        onMouseEnter={() => this.props.setHoverHighlight(this.props.name)}
        onMouseLeave={() => this.props.setHoverHighlight("none")}
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
