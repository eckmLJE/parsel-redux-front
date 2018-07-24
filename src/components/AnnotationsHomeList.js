import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAnnotations } from "../actions/annotation";

import AnnotationHomeCard from "./AnnotationHomeCard";

class AnnotationsHomeList extends Component {
  componentDidMount = () => {
    this.props.fetchAnnotations();
  };

  render() {
    return (
      <div className="home-list" >
        <div className="home-header">Top Annotations</div>
        {this.props.annotationLoadingStatus ? (
          <div>Loading Annotations...</div>
        ) : null}
        {this.props.availableAnnotations.length > 0
          ? this.props.availableAnnotations.map(annotation => (
              <AnnotationHomeCard key={annotation.id} annotation={annotation} />
            ))
          : null}
      </div>
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
