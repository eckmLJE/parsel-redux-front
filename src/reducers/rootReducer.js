import { combineReducers } from "redux";
import statementsReducer from "./statementsReducer";
import annotationsReducer from "./annotationsReducer";
import highlightsReducer from "./annotationsReducer";

export const rootReducer = combineReducers({
  statements: statementsReducer,
  annotations: annotationsReducer,
  highlights: highlightsReducer
});
