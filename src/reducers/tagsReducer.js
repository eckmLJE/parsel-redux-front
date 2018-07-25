const tags = (
  state = {
    availableTags: [],
    tagLoadingStatus: false
  },
  action
) => {
  switch (action.type) {
    case "START_FETCHING_TAGS_REQUEST":
      return { ...state, tagLoadingStatus: true };
    case "ADD_STATEMENTS":
      return {
        ...state,
        availableTags: action.tags,
        tagLoadingStatus: false
      };
    default:
      return state;
  }
};

export default tags;
