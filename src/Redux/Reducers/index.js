import { combineReducers } from "redux";
import { ProjectReducers } from "./ProjectReducers";

export const reducers = combineReducers({
    allProjects : ProjectReducers
})