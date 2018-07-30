import React, { Component } from "react";
import { Grid, Rail, Segment } from "semantic-ui-react";

class TestingView extends Component {
  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <Segment textAlign="center">
            A bunch of Text
            <Rail attached position="left">
              <Segment>Left Rail Content</Segment>
            </Rail>
            <Rail attached position="right">
              <Segment>Right Rail Content</Segment>
            </Rail>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default TestingView;
