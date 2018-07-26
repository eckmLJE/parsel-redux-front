import { combineReducers } from "redux";
import statementsReducer from "./statementsReducer";
import annotationsReducer from "./annotationsReducer";
import highlightsReducer from "./highlightsReducer";
import politiciansReducer from "./politiciansReducer";
import tagsReducer from "./tagsReducer";
import usersReducer from "./usersReducer";
import commentsReducer from "./commentsReducer";

export const rootReducer = combineReducers({
  statements: statementsReducer,
  annotations: annotationsReducer,
  highlights: highlightsReducer,
  politicians: politiciansReducer,
  tags: tagsReducer,
  users: usersReducer,
  comments: commentsReducer
});
