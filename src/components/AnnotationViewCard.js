import React, { Component } from "react";
import { connect } from "react-redux";
import { setHoverHighlight } from "../actions/highlight";

const card = "home-card annotation-view-card";

class AnnotationViewCard extends Component {
  render() {
    return (
      <div
        className={
          this.props.currentHighlight.includes(this.props.annotation.id)
            ? card + " annotation-view-card-highlight"
            : card
        }
        onMouseEnter={() => this.props.setHoverHighlight(this.props.annotation.id)}
        onMouseLeave={() => this.props.setHoverHighlight("none")}
      >
        {this.props.annotation.content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentHighlight: state.highlights.currentHighlight
});

const mapDispatchToProps = dispatch => ({
  setHoverHighlight: name => dispatch(setHoverHighlight(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationViewCard);
