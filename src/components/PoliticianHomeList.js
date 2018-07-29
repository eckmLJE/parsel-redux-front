import React, { Component } from 'react';
import PoliticianCard from "./PoliticianCard";
import { connect } from "react-redux";
import { Container, Item } from "semantic-ui-react";

class PoliticianHomeList extends Component {
  render() {
    return (
      <Container style={{ height: "80vh", overflowY: "scroll" }}>
        <Item.Group divided>
          {this.props.politicianLoadingStatus ? (
            <div>Loading Politicians...</div>
          ) : null}
          {this.props.availablePoliticians.length > 0
            ? this.props.availablePoliticians.map(politician => (
                <PoliticianCard key={politician.id} politician={politician} />
              ))
            : null}
        </Item.Group>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  availablePoliticians: state.politicians.availablePoliticians,
  politicianLoadingStatus: state.politicians.politicianLoadingStatus
});

export default connect(
  mapStateToProps,
  null
)(PoliticianHomeList);
