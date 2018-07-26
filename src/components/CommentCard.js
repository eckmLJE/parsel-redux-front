import React, { Component } from "react";
import { connect } from "react-redux";

class CommentCard extends Component {
  getUserAttributes = () => {
    const user = this.props.availableUsers.find(
      user => user.id == this.props.comment.attributes["user-id"]
    );
    return user.attributes;
  };

  render() {
    return (
      <div className="home-card annotation-view-card">
        {this.getUserAttributes().username}{" says "}{this.props.comment.attributes.content}
      </div>
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
