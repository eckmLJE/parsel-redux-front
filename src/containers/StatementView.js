import React from "react";
import { Container, Grid } from "semantic-ui-react";

import StatementViewCard from "../components/StatementViewCard";
import AnnotationsViewList from "../components/AnnotationsViewList";

const StatementView = () => {
  return (
    <Container style={{ maxWidth: 700, margin: "auto", marginTop: 50 }}>
      <Grid divided stackable>
        <Grid.Row>
          <Grid.Column width={10}>
            <StatementViewCard />
          </Grid.Column>
          <Grid.Column width={6}>
            <AnnotationsViewList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default StatementView;
