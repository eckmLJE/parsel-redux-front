import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

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
      <div style={{ maxWidth: 1000, margin: "auto" }}>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <StatementsHomeList />
            </Grid.Column>
            <Grid.Column>
              <AnnotationsHomeList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
