import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Image } from "semantic-ui-react";

class AnnotationRailCard extends Component {
  getHighlightPos = () => {
    const highlight = this.props.currentHighlightPositions.find(
      highlight => highlight.id === this.props.annotation.id
    );
    return highlight.position - this.props.currentBoundingRectY;
  };

  getHighlightUser = () => {
    const annotation = this.props.currentStatement.attributes.annotations.find(
      annotation => annotation.id == this.props.annotation.id
    );
    const userId = annotation.user_id;
    const user = this.props.availableUsers.find(
      user => user.id === userId.toString()
    );
    return user.attributes;
  };

  render() {
    return (
      <Card
        className="anno anno-label"
        style={{ top: `${this.getHighlightPos()}px` }}
      >
        <Card.Content>
          {this.props.availableUsers ? (
            <Image
              src={require(`../assets/avatars/${
                this.getHighlightUser().avatar
              }`)}
            />
          ) : null}
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  currentStatement: state.statements.currentStatement,
  availableAnnotations: state.annotations.availableAnnotations,
  currentHighlightPositions: state.highlights.currentHighlightPositions,
  currentBoundingRectY: state.highlights.currentBoundingRectY
});

export default connect(
  mapStateToProps,
  null
)(AnnotationRailCard);
