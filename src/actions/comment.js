const commentsUrl = "http://localhost:3000/api/v1/comments";
const statementsUrl = "http://localhost:3000/api/v1/annotations";

export const addComments = comments => ({
  type: "ADD_COMMENTS",
  comments
});

export const fetchComments = () => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_COMMENTS_REQUEST" });
    return fetch(commentsUrl)
      .then(res => res.json())
      .then(json => dispatch({ type: "ADD_COMMENTS", comments: json.data }));
  };
};

export const fetchAnnotationComments = statementId => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_ANNOTATION_COMMENTS_REQUEST" });
    return fetch(statementsUrl + `/statementId`)
      .then(res => res.json())
      .then(json =>
        dispatch({
          type: "ADD_ANNOTATION_COMMENTS",
          comments: json.data.attributes.comments
        })
      );
  };
};
