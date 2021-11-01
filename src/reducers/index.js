import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  useState: userReducer,
});

export default rootReducer;
