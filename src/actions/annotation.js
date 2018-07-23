const annotationsUrl = "http://localhost:3000/api/v1/annotations";

export const addAnnotations = annotations => ({
  type: "ADD_ANNOTATIONS",
  annotations
});

export const fetchAnnotations = () => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_ANNOTATIONS_REQUEST" });
    return fetch(annotationsUrl)
      .then(res => res.json())
      .then(json =>
        dispatch({ type: "ADD_ANNOTATIONS", annotations: json.data })
      );
  };
};
