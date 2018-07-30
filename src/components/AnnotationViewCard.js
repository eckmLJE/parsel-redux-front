import React, { Component } from "react";
import { connect } from "react-redux";
import { setHoverHighlight } from "../actions/highlight";
import tags from "../interpreter/tags";
import CommentCard from "./CommentCard";
import {
  Comment,
  Button,
  Card,
  Image,
  Container,
  Popup,
  Divider
} from "semantic-ui-react";
import colors from "../interpreter/colors";
import semColors from "../interpreter/semColors";

class AnnotationViewCard extends Component {
  state = { expanded: false, comments: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded, comments: false });
  };

  tagNames = {
    fact_check: "Fact Check",
    truth: "True",
    inspire: "Inspiring",
    deceptive: "Deceptive"
  };

  getAnnotationTags = () => {
    const annotation = this.props.availableAnnotations.find(
      annotation => annotation.id === this.props.annotation.id.toString()
    );
    return annotation.tags;
  };

  countTags = () => {
    const tags = {
      fact_check: 0,
      inspire: 0,
      deceptive: 0,
      truth: 0
    };
    this.getAnnotationTags().forEach(tag => {
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
        width: `${percent - 2}%`,
        height: 20,
        margin: 1
      }}
    />
  );

  renderMinCard = () => {
    return (
      <Card fluid inverted color={semColors[this.props.index]}>
        <Card.Content>
          <Card.Description>
            <Image
              floated="left"
              size="mini"
              src={require(`../assets/avatars/${
                this.getUserAttributes().avatar
              }`)}
            />
            {this.getUserAttributes().username}
            <Card.Meta>
              {this.props.annotation.content.slice(0, 20) + "..."}
              <Button
                size="mini"
                basic
                icon="angle down"
                floated="right"
                onClick={this.handleExpandClick}
              />
            </Card.Meta>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  };

  renderExpandCard = () => {
    return (
      <Card fluid inverted color={semColors[this.props.index]}>
        <Card.Content>
          <Image
            floated="left"
            size="mini"
            src={require(`../assets/avatars/${
              this.getUserAttributes().avatar
            }`)}
          />
          <Card.Header>
            {this.getUserAttributes().username}
            <Button
              size="mini"
              basic
              icon="angle up"
              floated="right"
              onClick={this.handleExpandClick}
            />
          </Card.Header>

          <Card.Meta>
            {`Reputation: ${this.getUserAttributes().points}`}
          </Card.Meta>

          <Card.Description>{this.props.annotation.content}</Card.Description>
        </Card.Content>

        {this.props.availableAnnotations.length > 0 ? (
          <Card.Content extra>
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
          </Card.Content>
        ) : null}

        <Card.Content extra>
          {"Points: "} {this.props.annotation.points}
          <Button
            basic
            floated="right"
            onClick={() => {
              this.setState({ comments: !this.state.comments });
            }}
          >
            Comments
          </Button>
        </Card.Content>
      </Card>
    );
  };

  mapTags = () => {
    return this.props.annotation.tags.map(tag => (
      <span className="annotation-tag" key={tag}>
        {tags[tag]}{" "}
      </span>
    ));
  };

  getUserAttributes = () => {
    const user = this.props.availableUsers.find(
      user => user.id === this.props.annotation["user_id"].toString()
    );
    return user.attributes;
  };

  getComments = () => {
    return this.props.currentStatement.attributes.comments.filter(
      comment => comment["annotation_id"] === this.props.annotation.id
    );
  };

  // setClassName = () => {
  //   return this.props.currentHighlight.includes(this.props.annotation.name)
  //     ? card + " annotation-view-card-highlight"
  //     : card;
  // };

  render() {
    return (
      <Container>
        {this.state.expanded ? this.renderExpandCard() : this.renderMinCard()}
        <Comment.Group
          size="small"
          style={{ marginBottom: 22, paddingLeft: 20 }}
        >
          {this.state.expanded &&
          this.state.comments &&
          this.props.currentComments
            ? this.getComments().map(comment => (
                <CommentCard key={comment.id} comment={comment} />
              ))
            : null}
          <Divider />
        </Comment.Group>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentHighlight: state.highlights.currentHighlight,
  availableUsers: state.users.availableUsers,
  currentComments: state.comments.currentComments,
  currentStatement: state.statements.currentStatement,
  availableAnnotations: state.annotations.availableAnnotations
});

const mapDispatchToProps = dispatch => ({
  setHoverHighlight: name => dispatch(setHoverHighlight(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationViewCard);
