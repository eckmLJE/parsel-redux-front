import React, { Component } from "react";
import AnnotationViewCard from "./AnnotationViewCard";
import { connect } from "react-redux";

class AnnotationsViewList extends Component {
  getCurrentAnnotations = () => {
    let currentAnnotations = this.props.availableAnnotations.filter(
      annotation => annotation.statementId === this.props.currentStatement.id
    );
    return currentAnnotations.sort((a, b) => a.start > b.start)
  };

  render() {
    return (
      <div className="statement-view-annotations">
        <h3>Annotations</h3>
        {this.props.currentStatement
          ? this.getCurrentAnnotations().map(annotation => (
              <AnnotationViewCard key={annotation.id} annotation={annotation} />
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
