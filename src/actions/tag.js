export const fetchTags = annotationId => ({
  type: "SET_HIGHLIGHT",
  annotationId
});

export const setCurrentSelection = selection => ({
  type: "SET_SELECTION",
  selection
});
