const Annotations = (
  state = { availableAnnotations: [], annotationLoadingStatus: false },
  action
) => {
  switch (action.type) {
    case "START_FETCHING_ANNOTATIONS_REQUEST":
      return { ...state, annotationLoadingStatus: true };
    case "ADD_ANNOTATIONS":
      return {
        ...state,
        availableAnnotations: action.annotations,
        annotationLoadingStatus: false
      };
    default:
      return state;
  }
};

export default Annotations;
