import React, { Component } from "react";
import { connect } from "react-redux";

import { Rail, Label } from "semantic-ui-react";
import semColors from "../interpreter/semColors";

class StatementViewRail extends Component {
  getHighlightUser = () => {
    const annotation = this.props.currentStatement.attributes.annotations.find(
      annotation => annotation.id === this.props.id
    );
    const userId = annotation.user_id;
    const user = this.props.availableUsers.find(
      user => user.id === userId.toString()
    );
    return user.attributes;
  };

  render() {
    console.log(this.props);
    return (
      <Rail position="right" style={{ padding: 0, margin: 0, left: "99%" }}>
        {this.props.currentStatement.id === this.props.statementId ? (
          <Label
            color={semColors[this.props.index]}
            basic
            size="small"
            style={{ cursor: "default", top: this.props.yPos }}
            image
          >
            <img
              alt=""
              src={require(`../assets/avatars/${
                this.getHighlightUser().avatar
              }`)}
            />
            <Label.Detail>{this.getHighlightUser().username}</Label.Detail>
          </Label>
        ) : null}
      </Rail>
    );
  }
}

const mapStateToProps = state => ({
  currentStatement: state.statements.currentStatement,
  availableUsers: state.users.availableUsers
});

export default connect(
  mapStateToProps,
  null
)(StatementViewRail);
