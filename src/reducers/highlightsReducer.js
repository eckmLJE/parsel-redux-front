const highlights = (
  state = { currentHighlight: "none", currentHighlightPositions: [] },
  action
) => {
  switch (action.type) {
    case "SET_HIGHLIGHT":
      return { ...state, currentHighlight: action.name };
    case "ADD_HIGHLIGHT_POSITION":
      return {
        ...state,
        currentHighlightPositions: [
          ...state.currentHighlightPositions,
          { id: action.annotationId, position: action.position }
        ]
      };
    case "REMOVE_HIGHLIGHT_POSITION":
      return {
        ...state,
        currentHighlightPositions: state.currentHighlightPositions.filter(
          highlight => highlight.id !== action.annotationId
        )
      };
    default:
      return state;
  }
};

export default highlights;
