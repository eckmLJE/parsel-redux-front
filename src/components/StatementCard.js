import React, { Component } from "react";
import { connect } from "react-redux";
import { Item, Popup } from "semantic-ui-react";
import colors from "../interpreter/colors";
import { navToStatement } from "../actions/statement";

class StatementCard extends Component {
  tagNames = {
    fact_check: "Fact Check",
    undeniable: "Undeniable",
    inspire: "Inspiring",
    snake: "Snake"
  };

  countTags = () => {
    const tags = {
      fact_check: 0,
      inspire: 0,
      snake: 0,
      undeniable: 0
    };
    this.props.statement.attributes.tags.forEach(tag => {
      tags[tag.tag_type]++;
    });
    return tags;
  };

  totalTags = tags => {
    const values = Object.values(tags);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return values.reduce(reducer);
  };

  makePercentFixed = (num, total) => ((num / total) * 100).toFixed(1);

  makeTagStats = (tags, total) => {
    return [
      {
        tag_type: "fact_check",
        color: colors.red,
        percent: this.makePercentFixed(tags.fact_check, total),
        count: tags.fact_check
      },
      {
        tag_type: "undeniable",
        color: colors.blue,
        percent: this.makePercentFixed(tags.undeniable, total),
        count: tags.undeniable
      },
      {
        tag_type: "inspire",
        color: colors.gold,
        percent: this.makePercentFixed(tags.inspire, total),
        count: tags.inspire
      },
      {
        tag_type: "snake",
        color: colors.green,
        percent: this.makePercentFixed(tags.snake, total),
        count: tags.snake
      }
    ];
  };

  statsGenerator = () => {
    const tags = this.countTags();
    const total = this.totalTags(tags);
    return this.makeTagStats(tags, total);
  };

  generateSpectrumDiv = (color, percent) => (
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

  render() {
    return (
      <Item
        onClick={() => {
          this.props.navToStatement(this.props.statement.id);
        }}
      >
        <Item.Content>
          <Item.Header as="a">
            {this.props.statement.attributes.title}
          </Item.Header>
          <Item.Meta>
            {this.props.politician ? (
              <div>
                {this.props.politician.attributes.name}
                {` (${this.props.politician.attributes.party})`}
              </div>
            ) : null}
          </Item.Meta>
          <Item.Description />
          <Item.Extra floated="right" style={{ height: 20, width: "100%" }}>
            {this.statsGenerator().map(stat => (
              <Popup
                trigger={this.generateSpectrumDiv(
                  stat.color,
                  stat.percent,
                  stat.count
                )}
                content={`${this.tagNames[stat.tag_type]} (${stat.count}) - ${
                  stat.percent
                }%`}
                basic
                inverted
                position="bottom center"
                key={stat.color}
              />
            ))}
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

const mapStateToProps = state => ({
  currentStatement: state.statements.currentStatement
});

const mapDispatchToProps = dispatch => ({
  navToStatement: statementId => dispatch(navToStatement(statementId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementCard);
