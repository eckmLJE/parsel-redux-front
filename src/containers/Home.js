import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Container } from "semantic-ui-react";

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
      <Container style={{ maxWidth: 700, margin: "auto", marginTop: 50 }}>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={10}>
              <StatementsHomeList />
            </Grid.Column>
            <Grid.Column width={6}>
              <AnnotationsHomeList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
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
