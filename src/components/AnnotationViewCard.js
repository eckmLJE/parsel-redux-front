import React, { Component } from "react";
import { connect } from "react-redux";

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
      >
        {this.props.annotation.content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentHighlight: state.highlights.currentHighlight
});

// const mapDispatchToProps = dispatch => ({
//   setHoverHighlight: (name) => dispatch(setHoverHighlight(name))
// });

export default connect(
  mapStateToProps,
  null
)(AnnotationViewCard);
