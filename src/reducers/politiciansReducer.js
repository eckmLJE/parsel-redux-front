const politicians = (
  state = {
    availablePoliticians: [],
    politicianLoadingStatus: false
  },
  action
) => {
  switch (action.type) {
    case "START_FETCHING_POLITICIANS_REQUEST":
      return { ...state, politicianLoadingStatus: true };
    case "ADD_POLITICIANS":
      return {
        ...state,
        availablePoliticians: action.politicians,
        politicianLoadingStatus: false
      };
    default:
      return state;
  }
};

export default politicians;
