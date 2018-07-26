const commentsUrl = "http://localhost:3000/api/v1/comments";

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
