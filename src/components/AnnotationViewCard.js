import React, { Component } from "react";
import { connect } from "react-redux";
import { setHoverHighlight } from "../actions/highlight";

const card = "home-card annotation-view-card";

class AnnotationViewCard extends Component {
  state = { expanded: false, comments: false };

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  renderMinCard = () => {
    return <div>{this.props.annotation.content.slice(0, 20) + "..."}</div>;
  };

  renderExpandCard = () => {
    return (
      <div className="annotation-view-expanded">
        <div className="annotation-view-top-left">User </div>
        <div className="annotation-view-top-right">Points </div>
        <div className="annotation-view-body">
          {this.props.annotation.content}
        </div>
        <div className="annotation-view-tags">Tags</div>
        <div
          className="annotation-view-bottom"
          onClick={() => this.setState({ comments: !this.state.comments })}
        >
          Comments
        </div>
      </div>
    );
  };

  renderCommentCard = () => {
    return (
      <div className="annotation-view-expanded">
        <div className="annotation-view-top-left">User </div>
        <div className="annotation-view-top-right">Points </div>
        <div className="annotation-view-body">
          {this.props.annotation.content}
        </div>
        <div className="annotation-view-tags">Tags</div>
        <div className="annotation-view-bottom">Comments</div>
      </div>
    );
  };

  render() {
    return (
      <div
        className={
          this.props.currentHighlight.includes(this.props.annotation.id)
            ? card + " annotation-view-card-highlight"
            : card
        }
        onMouseEnter={() =>
          this.props.setHoverHighlight(this.props.annotation.id)
        }
        onMouseLeave={() => this.props.setHoverHighlight("none")}
        onClick={this.handleClick}
      >
        {this.state.expanded && !this.state.comments
          ? this.renderExpandCard()
          : null}
        {this.state.expanded && this.state.comments
          ? this.renderCommentCard()
          : null}
        {!this.state.expanded ? this.renderMinCard() : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentHighlight: state.highlights.currentHighlight
});

const mapDispatchToProps = dispatch => ({
  setHoverHighlight: name => dispatch(setHoverHighlight(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationViewCard);
