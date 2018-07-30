import React, { Component } from "react";
import AnnotationViewCard from "./AnnotationViewCard";
import { connect } from "react-redux";
import { fetchTags } from "../actions/tag";
import { fetchAnnotations } from "../actions/annotation";
import { Card } from "semantic-ui-react";

class AnnotationsViewList extends Component {
  componentDidMount = () => {
    this.props.fetchAnnotations();
  };

  getCurrentAnnotations = () => {
    let currentAnnotations = this.props.currentStatement.attributes.annotations;
    return currentAnnotations.sort((a, b) => a.start > b.start);
  };

  render() {
    return (
      <Card.Group style={{ margin: 5 }}>
        {this.props.currentStatement && this.props.availableUsers
          ? this.getCurrentAnnotations().map(annotation => (
              <AnnotationViewCard
                key={annotation.id}
                annotation={annotation}
                index={this.getCurrentAnnotations().indexOf(annotation)}
              />
            ))
          : null}
      </Card.Group>
    );
  }
}

const mapStateToProps = state => ({
  availableAnnotations: state.annotations.availableAnnotations,
  currentStatement: state.statements.currentStatement,
  statementLoadingStatus: state.statements.statementLoadingStatus,
  availableUsers: state.users.availableUsers
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags()),
  fetchAnnotations: () => dispatch(fetchAnnotations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationsViewList);
