import React from "react";
import { setHoverHighlight } from "../actions/highlight";
import { connect } from "react-redux";

let key = 0;

const HighlightSpan = props => {
  return (
    <span
      className={
        props.name.includes(props.currentHighlight) ||
        props.currentHighlight.includes(props.name)
          ? "highlight-alt"
          : "highlight"
      }
      name={props.name}
      key={++key}
      onMouseEnter={() => props.setHoverHighlight(props.name)}
      onMouseLeave={() => props.setHoverHighlight("none")}
    >
      {props.content}
    </span>
  );
};

const mapStateToProps = state => ({
  currentHighlight: state.highlights.currentHighlight
});

const mapDispatchToProps = dispatch => ({
  setHoverHighlight: (name) => dispatch(setHoverHighlight(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HighlightSpan);
