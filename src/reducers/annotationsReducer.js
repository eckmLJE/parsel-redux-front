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
        availableAnnotations: action.annotations.map(annotation =>
          convertAnnotation(annotation)
        ),
        annotationLoadingStatus: false
      };
    default:
      return state;
  }
};

const convertAnnotation = annotation => {
  return {
    id: convertId(annotation.id),
    start: annotation.attributes.start,
    end: annotation.attributes.end,
    content: annotation.attributes.content,
    statementId: annotation.attributes["statement-id"].toString()
  };
};

const convertId = id => {
  let numId = parseInt(id, 10) + 1000;
  return numId.toString();
};

export default Annotations;
