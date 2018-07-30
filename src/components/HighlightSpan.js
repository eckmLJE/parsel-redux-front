import React, { Component } from "react";
import { setHoverHighlight, addHighlightPosition } from "../actions/highlight";
import { connect } from "react-redux";

let key = 0;

class HighlightSpan extends Component {
  logHighlightPos = node => {
    node
      ? this.props.addHighlightPosition(node.getBoundingClientRect().y)
      : null;
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
  addHighlightPosition: pos => dispatch(addHighlightPosition(pos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HighlightSpan);
