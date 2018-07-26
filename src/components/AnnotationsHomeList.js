import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAnnotations } from "../actions/annotation";
import { Item } from "semantic-ui-react";

import AnnotationHomeCard from "./AnnotationHomeCard";

class AnnotationsHomeList extends Component {
  componentDidMount = () => {
    this.props.fetchAnnotations();
  };

  render() {
    return (
      <Item.Group divided>
        {this.props.annotationLoadingStatus &&
        !(this.props.availableAnnotations.length > 0) ? (
          <div>Loading Annotations...</div>
        ) : (
          this.props.availableAnnotations.map(annotation => (
            <AnnotationHomeCard key={annotation.id} annotation={annotation} />
          ))
        )}
      </Item.Group>
    );
  }
}

const mapStateToProps = state => ({
  availableAnnotations: state.annotations.availableAnnotations,
  loadingStatus: state.annotations.annotationLoadingStatus
});

const mapDispatchToProps = dispatch => ({
  fetchAnnotations: () => dispatch(fetchAnnotations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationsHomeList);
