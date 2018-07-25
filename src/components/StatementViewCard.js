import React, { Component } from "react";
import { connect } from "react-redux";
import HighlightSpan from "./HighlightSpan";
import TextFragment from "./TextFragment";

class StatementViewCard extends Component {
  componentDidMount = () => {};

  processAnnotations = () => {
    let highlights = [];
    let lastEnd = 0;
    let currentAnnotations = this.props.availableAnnotations.filter(
      annotation => annotation.statementId === this.props.currentStatement.id
    );
    currentAnnotations = currentAnnotations.sort((a, b) => a.start > b.start);
    currentAnnotations.forEach(annotation => {
      if (annotation.start > lastEnd) {
        highlights.push(
          this.createHighlight(annotation.id, annotation.start, annotation.end)
        );
        lastEnd = annotation.end;
      } else {
        let lastHighlight = highlights.pop();
        const prevEnd = lastHighlight.end;
        lastHighlight.end = annotation.start;
        highlights.push(lastHighlight);
        highlights.push(
          this.createHighlight(
            `${lastHighlight.name} ${annotation.id}`,
            annotation.start,
            prevEnd
          )
        );

        highlights.push(
          this.createHighlight(annotation.id, prevEnd, annotation.end)
        );
        lastEnd = annotation.end;
      }
    });
    return highlights;
  };

  createHighlight = (id, start, end) => ({
    name: id,
    start: start,
    end: end
  });

  makeStatementArray = () => {
    const statement = this.props.currentStatement.attributes.content;
    const highlights = this.processAnnotations();
    let newStatementArray = [];
    let charCounter = 0;
    highlights.forEach(highlight => {
      newStatementArray.push(
        <TextFragment
          key={newStatementArray.length}
          content={statement.slice(charCounter, highlight.start)}
        />
      );
      newStatementArray.push(
        <HighlightSpan
          content={statement.slice(highlight.start, highlight.end)}
          name={highlight.name}
          key={highlight.name}
        />
      );
      charCounter = highlight.end;
    });
    if (statement.length >= charCounter) {
      newStatementArray.push(
        statement.slice(charCounter, statement.length + 1)
      );
    }
    return newStatementArray;
  };

  render() {
    return (
      <div className="home-card statement-view-content">
        {this.props.currentStatement ? (
          <div>
            <h2>{this.props.currentStatement.attributes.title}</h2>
            <div>{this.makeStatementArray()}</div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentStatement: state.statements.currentStatement,
  availableAnnotations: state.annotations.availableAnnotations
});

export default connect(
  mapStateToProps,
  null
)(StatementViewCard);
