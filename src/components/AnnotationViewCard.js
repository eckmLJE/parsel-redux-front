import React, { Component } from "react";
import { connect } from "react-redux";
import { setHoverHighlight } from "../actions/highlight";
import tags from "../interpreter/tags";
import CommentCard from "./CommentCard";
import { Comment } from "semantic-ui-react";

const card = "home-card annotation-view-card";

class AnnotationViewCard extends Component {
  state = { expanded: false, comments: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  renderMinCard = () => {
    return (
      <div>
        <div className="handle-expand" onClick={this.handleExpandClick}>
          {" + "}
        </div>
        {this.props.annotation.content.slice(0, 20) + "..."}
      </div>
    );
  };

  renderExpandCard = () => {
    return (
      <div className="annotation-view-expanded">
        <div className="annotation-view-top-left">
          <div className="handle-expand" onClick={this.handleExpandClick}>
            {" - "}
          </div>
          {this.getUserAttributes().username}
          {` (${this.getUserAttributes().points})`}
        </div>
        <div className="annotation-view-top-right">
          {this.props.annotation.points}
        </div>
        <div className="annotation-view-body">
          {this.props.annotation.content}
        </div>
        <div className="annotation-view-tags">{this.mapTags()}</div>
        <div
          className="annotation-view-bottom"
          onClick={() => this.setState({ comments: !this.state.comments })}
        >
          Comments
        </div>
      </div>
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

  setClassName = () => {
    return this.props.currentHighlight.includes(this.props.annotation.name)
      ? card + " annotation-view-card-highlight"
      : card;
  };

  render() {
    return (
      <div>
        <div
          className={this.setClassName()}
          onMouseEnter={() =>
            this.props.setHoverHighlight(this.props.annotation.name)
          }
          onMouseLeave={() => this.props.setHoverHighlight("none")}
        >
          {this.state.expanded ? this.renderExpandCard() : this.renderMinCard()}
        </div>
        <Comment.Group style={{marginLeft: 10}}>
          {this.state.expanded && this.state.comments
            ? this.getComments().map(comment => (
                <CommentCard key={comment.id} comment={comment} />
              ))
            : null}
        </Comment.Group>
      </div>
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
