const highlights = (
  state = { currentHighlight: "none", currentHighlightPositions: [] },
  action
) => {
  switch (action.type) {
    case "SET_HIGHLIGHT":
      return { ...state, currentHighlight: action.name };
    case "CLEAR_HIGHLIGHT_POSITIONS":
      return {
        ...state,
        currentHighlightPositions: []
      };
    case "ADD_HIGHLIGHT_POSITION":
      return {
        ...state,
        currentHighlightPositions: [
          ...state.currentHighlightPositions,
          action.position
        ]
      };
    default:
      return state;
  }
};

export default highlights;
