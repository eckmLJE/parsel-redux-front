import React, { Component } from "react";
import { connect } from "react-redux";

class StatementViewCard extends Component {
  render() {
    return (
      <div className="statement-view-content">
        {this.props.currentStatement ? (
          <h2>{this.props.currentStatement.attributes.title}</h2>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentStatement: state.statements.currentStatement
});

export default connect(
  mapStateToProps,
  null
)(StatementViewCard);
