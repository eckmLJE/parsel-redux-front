const comments = (
  state = {
    availableComments: [],
    currentComments: [],
    commentLoadingStatus: false
  },
  action
) => {
  switch (action.type) {
    case "START_FETCHING_COMMENTS_REQUEST":
      return { ...state, commentLoadingStatus: true };
    case "ADD_COMMENTS":
      return {
        ...state,
        availableComments: action.comments,
        commentLoadingStatus: false
      };
    case "START_FETCHING_ANNOTATION_COMMENTS_REQUEST":
      return { ...state, commentLoadingStatus: true };
    case "ADD_ANNOTATION_COMMENTS":
      return {
        ...state,
        currentComments: action.comments,
        commentLoadingStatus: false
      };
    default:
      return state;
  }
};

export default comments;
