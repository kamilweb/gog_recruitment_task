import { combineReducers, createStore } from "redux";
import { allReducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers(allReducers);

export const store = createStore(rootReducer, composeWithDevTools());
