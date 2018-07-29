import React, { Component } from "react";
import colors from "../interpreter/colors";
import { Item, Popup } from "semantic-ui-react";

class PoliticianCard extends Component {
  tagNames = {
    fact_check: "Fact Check",
    truth: "True",
    inspire: "Inspiring",
    deceptive: "Deceptive"
  };

  countTags = () => {
    const tags = {
      fact_check: 0,
      inspire: 0,
      deceptive: 0,
      truth: 0
    };
    this.props.politician.attributes.tags.forEach(tag => {
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
        tag_type: "truth",
        color: colors.blue,
        percent: this.makePercentFixed(tags.truth, total),
        count: tags.truth
      },
      {
        tag_type: "inspire",
        color: colors.gold,
        percent: this.makePercentFixed(tags.inspire, total),
        count: tags.inspire
      },
      {
        tag_type: "deceptive",
        color: colors.green,
        percent: this.makePercentFixed(tags.deceptive, total),
        count: tags.deceptive
      },
      {
        tag_type: "fact_check",
        color: colors.red,
        percent: this.makePercentFixed(tags.fact_check, total),
        count: tags.fact_check
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
      <Item>
        <Item.Content>
          <Item.Header as="a">
            {this.props.politician.attributes.name}
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

export default PoliticianCard;
