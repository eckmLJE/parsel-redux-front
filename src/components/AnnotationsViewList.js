import React, { Component } from "react";
import AnnotationViewCard from "./AnnotationViewCard";
import { connect } from "react-redux";

class AnnotationsViewList extends Component {
  getCurrentAnnotations = () => {
    return this.props.availableAnnotations.filter(
      annotation =>
        annotation.attributes["statement-id"].toString() ===
        this.props.currentStatement.id
    );
  };

  render() {
    return (
      <div className="statement-view-annotations">
        <h1>AnnotationsViewList</h1>
        {this.props.currentStatement
          ? this.getCurrentAnnotations().map(annotation => (
              <AnnotationViewCard annotation={annotation} />
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availableAnnotations: state.annotations.availableAnnotations,
  currentStatement: state.statements.currentStatement
});

export default connect(
  mapStateToProps,
  null
)(AnnotationsViewList);
