import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPoliticians } from "../actions/politician";
import { fetchUsers } from "../actions/user";
import { fetchComments } from "../actions/comment";

import AnnotationsHomeList from "../components/AnnotationsHomeList";
import StatementsHomeList from "../components/StatementsHomeList";

class Home extends Component {
  componentDidMount = () => {
    this.props.fetchPoliticians();
    this.props.fetchUsers();
    this.props.fetchComments();
  };

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
  fetchPoliticians: () => dispatch(fetchPoliticians()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchComments: () => dispatch(fetchComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
