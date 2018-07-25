import { combineReducers } from "redux";
import statementsReducer from "./statementsReducer";
import annotationsReducer from "./annotationsReducer";
import highlightsReducer from "./highlightsReducer";
import politiciansReducer from "./politiciansReducer";
import tagsReducer from "./tagsReducer";

export const rootReducer = combineReducers({
  statements: statementsReducer,
  annotations: annotationsReducer,
  highlights: highlightsReducer,
  politicians: politiciansReducer,
  tags: tagsReducer
});
