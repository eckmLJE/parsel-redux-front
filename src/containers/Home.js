import React, { Component } from 'react';
import { connect } from "react-redux"
import { fetchPoliticians } from "../actions/politician"

import AnnotationsHomeList from "../components/AnnotationsHomeList";
import StatementsHomeList from "../components/StatementsHomeList";

class Home extends Component {

  componentDidMount = () => {
    this.props.fetchPoliticians()
  }

  render() {
    return (
      <div className="home-grid-container">
      <StatementsHomeList />
      <div />
      <AnnotationsHomeList />
    </div>
    );
  }
}

const mapStateToProps = state => ({
  availablePoliticians: state.politicians.availablePoliticians,
  loadingStatus: state.politicians.politicianLoadingStatus
});

const mapDispatchToProps = dispatch => ({
  fetchPoliticians: () => dispatch(fetchPoliticians())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);