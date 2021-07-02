import dealsReducer from "./deals.reducer.js";

import { combineReducers } from "redux";

const store = combineReducers({
  deals: dealsReducer
});

export default store;
