import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Container, Header, Divider } from "semantic-ui-react";

import { fetchPoliticians } from "../actions/politician";
import { fetchUsers } from "../actions/user";
import { fetchComments } from "../actions/comment";

// import AnnotationsHomeList from "../components/AnnotationsHomeList";
import StatementsHomeList from "../components/StatementsHomeList";
import PoliticianHomeList from "../components/PoliticianHomeList";

class Home extends Component {
  componentDidMount = () => {
    this.props.fetchPoliticians();
    this.props.fetchUsers();
    this.props.fetchComments();
  };

  render() {
    return (
      <Container style={{ maxWidth: "700px", margin: "auto", marginTop: 20 }}>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={10}>
              <Header as="h2">Featured Statements</Header>
              <Divider />
              <StatementsHomeList />
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as="h2">Featured Politicians</Header>
              <Divider />
              <PoliticianHomeList />
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
