import React from "react";
import { connect } from "react-redux";
import { setCurrentStatement } from "../actions/statement";
import { Item, Popup } from "semantic-ui-react";
import colors from "../interpreter/colors";
import { navToStatement } from "../actions/statement";

const generateSpectrumDiv = (color, percent) => (
  <div
    className="spectrum"
    key={color}
    style={{
      backgroundColor: color,
      width: `${percent - 1}%`,
      height: 20,
      margin: 1
    }}
  />
);

const sampleStats = [
  { color: colors.red, percent: 20, count: 10 },
  { color: colors.blue, percent: 30, count: 15 },
  { color: colors.gold, percent: 40, count: 20 },
  { color: colors.green, percent: 10, count: 5 }
];

const StatementCard = props => (
  <Item onClick={() => {
    props.navToStatement(props.statement.id)}}>
    <Item.Content>
      <Item.Header as="a">{props.statement.attributes.title}</Item.Header>
      <Item.Meta>
        {props.politician ? (
          <div>
            {props.politician.attributes.name}
            {` (${props.politician.attributes.party})`}
          </div>
        ) : null}
      </Item.Meta>
      <Item.Description />
      <Item.Extra floated="right" style={{ height: 20, width: "100%" }}>
        {sampleStats.map(stat => (
          <Popup
            trigger={generateSpectrumDiv(stat.color, stat.percent, stat.count)}
            content={`${stat.count} ${stat.color} tags at ${stat.percent}%`}
            basic
            position="bottom center"
          />
        ))}
      </Item.Extra>
    </Item.Content>
  </Item>
);

const mapDispatchToProps = dispatch => ({
  // setStatement: statementObj => dispatch(setCurrentStatement(statementObj)),
  navToStatement: statementId => dispatch(navToStatement(statementId))
});

export default connect(
  null,
  mapDispatchToProps
)(StatementCard);
