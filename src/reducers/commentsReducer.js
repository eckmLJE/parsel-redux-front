const comments = (
    state = {
      availableComments: [],
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
      default:
        return state;
    }
  };
  
  export default comments;
  