const politiciansUrl = "http://localhost:3000/api/v1/politicians";

export const addPoliticians = politicians => ({
  type: "ADD_POLITICIANS",
  politicians
});

export const fetchPoliticians = politician => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_POLITICIANS_REQUEST" });
    return fetch(politiciansUrl)
      .then(res => res.json())
      .then(json =>
        dispatch({ type: "ADD_POLITICIANS", politicians: json.data })
      );
  };
};
