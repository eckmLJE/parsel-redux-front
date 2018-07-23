const statements = (
  state = {
    currentStatement: null,
    availableStatements: []
  },
  action
) => {
  switch (action.type) {
    case "SET_STATEMENT":
        return {...state, currentStatement: action.statement}
    default:
      return state;
  }
};

export default statements;
