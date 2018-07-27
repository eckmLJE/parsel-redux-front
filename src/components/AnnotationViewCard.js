import React, { Component } from "react";
import { connect } from "react-redux";
import { setHoverHighlight } from "../actions/highlight";
import tags from "../interpreter/tags";
import CommentCard from "./CommentCard";
import { Comment, Button, Card, Image, Container } from "semantic-ui-react";
import _ from "lodash";

const avatars = [
  "boy-1.svg",
  "boy.svg",
  "girl-1.svg",
  "girl.svg",
  "man-1.svg",
  "man-2.svg",
  "man-3.svg",
  "man-4.svg",
  "man.svg"
];

class AnnotationViewCard extends Component {
  state = { expanded: false, comments: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  renderMinCard = () => {
    return (
      <Card>
        <Card.Content>
          <Card.Description>
            {this.props.annotation.content.slice(0, 20) + "..."}
            <Button
              size="mini"
              basic
              icon="angle down"
              floated="right"
              onClick={this.handleExpandClick}
            />
          </Card.Description>
        </Card.Content>
      </Card>
    );
  };

  renderExpandCard = () => {
    return (
      <Card>
        <Card.Content>
          <Image
            floated="left"
            size="mini"
            src={require(`../assets/avatars/${_.sample(avatars)}`)}
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
        <Card.Content extra>
          {"Points: "} {this.props.annotation.points}
          <Button
            basic
            floated="right"
            onClick={() => this.setState({ comments: !this.state.comments })}
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
      user => user.id.toString() === this.props.annotation.user
    );
    return user.attributes;
  };

  getComments = () => {
    return this.props.availableComments.filter(
      comment =>
        comment.attributes["annotation-id"].toString() ===
        this.props.annotation.id
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
        {/* <div
          className=""
          onMouseEnter={() =>
            this.props.setHoverHighlight(this.props.annotation.name)
          }
          onMouseLeave={() => this.props.setHoverHighlight("none")}
        > */}
        {this.state.expanded ? this.renderExpandCard() : this.renderMinCard()}
        {/* </div> */}
        <Comment.Group style={{marginBottom: 22}}>
          {this.state.expanded && this.state.comments
            ? this.getComments().map(comment => (
                <CommentCard key={comment.id} comment={comment} />
              ))
            : null}
        </Comment.Group>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentHighlight: state.highlights.currentHighlight,
  availableUsers: state.users.availableUsers,
  availableComments: state.comments.availableComments
});

const mapDispatchToProps = dispatch => ({
  setHoverHighlight: name => dispatch(setHoverHighlight(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationViewCard);
