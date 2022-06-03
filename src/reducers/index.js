import { combineReducers } from "redux";
import userReducer from "./userReducer";
import clientsReducer from "./clientsReducer";
import interestReducer from "./interestReducer";
import displayReducer from "./displayReducer";
import validateReducer from "./validateReducer";

export default combineReducers({
  user: userReducer,
  clients: clientsReducer,
  interest: interestReducer,
  display:  displayReducer,
  validate: validateReducer
});
