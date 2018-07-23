const statements = (
  state = {
    currentStatement: null,
    availableStatements: []
  },
  action
) => {
  switch (action.type) {
    case "SET_STATEMENT":
      return { ...state, currentStatement: action.statement };
    case "ADD_STATEMENTS":
      return { ...state, availableStatements: action.statements };
    default:
      return state;
  }
};

export default statements;
