const highlights = (state = { currentHighlight: "none" }, action) => {
  switch (action.type) {
    case "SET_HIGHLIGHT":
      return { ...state, currentHighlight: action.name };
    default:
      return state;
  }
};

export default highlights;
