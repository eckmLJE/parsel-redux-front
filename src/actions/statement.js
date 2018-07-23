const statementsUrl = "http://localhost:3000/api/v1/statements";

export const setCurrentStatement = statement => ({
  type: "SET_STATEMENT",
  statement
});

export const addStatements = statements => ({
  type: "ADD_STATEMENTS",
  statements
});

export const fetchStatements = statement => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_STATEMENTS_REQUEST" });
    return fetch(statementsUrl)
      .then(res => res.json())
      .then(json =>
        dispatch({ type: "ADD_STATEMENTS", statements: json.data })
      );
  };
};
