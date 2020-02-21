import { combineReducers } from "redux";
import donutReducer from "./donut/donutReducer";

const rootReducer = combineReducers({
  donut: donutReducer
});

export default rootReducer;
