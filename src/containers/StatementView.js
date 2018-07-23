import React from "react";
import { connect } from "react-redux";
import { setCurrentStatement } from "../actions/statement";

const statementObj = {
  id: "1",
  type: "statements",
  attributes: {
    "politician-id": 1,
    event: "press release",
    datetime: "2018-06-16",
    content:
      "Today’s press conference in Helsinki was one of the most disgraceful performances by an American president in memory. The damage inflicted by President Trump’s naiveté, egotism, false equivalence, and sympathy for autocrats is difficult to calculate. But it is clear that the summit in Helsinki was a tragic mistake. President Trump proved not only unable, but unwilling to stand up to Putin. He and Putin seemed to be speaking from the same script as the president made a conscious choice to defend a tyrant against the fair questions of a free press, and to grant Putin an uncontested platform to spew propaganda and lies to the world. It is tempting to describe the press conference as a pathetic rout — as an illustration of the perils of under-preparation and inexperience. But these were not the errant tweets of a novice politician. These were the deliberate choices of a president who seems determined to realize his delusions of a warm relationship with Putin’s regime without any regard for the true nature of his rule, his violent disregard for the sovereignty of his neighbors, his complicity in the slaughter of the Syrian people, his violation of international treaties, and his assault on democratic institutions throughout the world. Coming close on the heels of President Trump’s bombastic and erratic conduct towards our closest friends and allies in Brussels and Britain, today’s press conference marks a recent low point in the history of the American Presidency. That the president was attended in Helsinki by a team of competent and patriotic advisors makes his blunders and capitulations all the more painful and inexplicable. No prior president has ever abased himself more abjectly before a tyrant. Not only did President Trump fail to speak the truth about an adversary; but speaking for America to the world, our president failed to defend all that makes us who we are — a republic of free people dedicated to the cause of liberty at home and abroad. American presidents must be the champions of that cause if it is to succeed. Americans are waiting and hoping for President Trump to embrace that sacred responsibility. One can only hope they are not waiting totally in vain.",
    title: "Senator McCain's Response to Trump Putin Press Conference"
  }
};

const StatementView = props => {
  return (
    <div>
      <button onClick={() => props.setStatement(statementObj)}>
        Set Content
      </button>
      {props.currentStatement ? (
        <div>{props.currentStatement.attributes.title}</div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  currentStatement: state.statements.currentStatement
});

const mapDispatchToProps = dispatch => ({
  setStatement: statementObj => dispatch(setCurrentStatement(statementObj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementView);
