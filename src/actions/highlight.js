export const setHoveredHighlight = id => {
  type: "SET_HIGHLIGHT", id;
};

export const setCurrentSelection = selection => {
  type: "SET_SELECTION", selection;
};
