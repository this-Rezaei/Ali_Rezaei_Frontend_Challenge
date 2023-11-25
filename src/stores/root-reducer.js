import { combineReducers } from "redux";
import tasksReducers from "./reducer";

const rootReducer = combineReducers({
  data: tasksReducers,
});

export default rootReducer;
