import React, { Component } from "react";
import AnnotationViewCard from "./AnnotationViewCard";
import { connect } from "react-redux";
import { fetchTags } from "../actions/tag";
import { Card } from "semantic-ui-react";

class AnnotationsViewList extends Component {
  getCurrentAnnotations = () => {
    let currentAnnotations = this.props.availableAnnotations.filter(
      annotation => annotation.statementId === this.props.currentStatement.id
    );
    return currentAnnotations.sort((a, b) => a.start > b.start);
  };

  render() {
    return (
      <Card.Group>
        <h3>Annotations</h3>
        {this.props.currentStatement
          ? this.getCurrentAnnotations().map(annotation => (
              <AnnotationViewCard key={annotation.id} annotation={annotation} />
            ))
          : null}
      </Card.Group>
    );
  }
}

const mapStateToProps = state => ({
  availableAnnotations: state.annotations.availableAnnotations,
  currentStatement: state.statements.currentStatement
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationsViewList);
