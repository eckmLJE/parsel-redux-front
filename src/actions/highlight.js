export const clearHighlightPositions = () => ({
  type: "CLEAR_HIGHLIGHT_POSITIONS"
});

export const addHighlightPosition = position => ({
  type: "ADD_HIGHLIGHT_POSITION",
  position
})

export const setHoverHighlight = name => ({
  type: "SET_HIGHLIGHT",
  name
});

export const setCurrentSelection = selection => ({
  type: "SET_SELECTION",
  selection
});
