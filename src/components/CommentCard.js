import React, { Component } from "react";
import { connect } from "react-redux";
import { Comment } from "semantic-ui-react";
import moment from "moment";

class CommentCard extends Component {
  getUserAttributes = () => {
    const user = this.props.availableUsers.find(
      user =>
        user.id.toString() ===
        this.props.comment.attributes["user-id"].toString()
    );
    return user.attributes;
  };

  render() {
    return (
      <Comment>
        <Comment.Content>
          <Comment.Author>{this.getUserAttributes().username}</Comment.Author>
          <Comment.Metadata>
            {moment(this.props.comment.attributes.created_at).calendar()}
          </Comment.Metadata>
          <Comment.Text>{this.props.comment.attributes.content}</Comment.Text>
        </Comment.Content>
      </Comment>
    );
  }
}

const mapStateToProps = state => ({
  availableUsers: state.users.availableUsers
});

export default connect(
  mapStateToProps,
  null
)(CommentCard);